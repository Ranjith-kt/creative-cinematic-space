import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

export const ClientWork = () => {
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const studios = [
    { name: "Framestore", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png" },
    { name: "Method", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png" },
    { name: "MPC", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png" },
    { name: "SonyImageworks", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png" },
    { name: "RSP", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png" }
  ];

  const handlePasswordSubmit = () => {
    if (password === "admin") {
      // Replace this URL with your Vimeo link
      window.open("YOUR_VIMEO_LINK_HERE", "_blank");
      setSelectedStudio(null);
      setPassword("");
    } else {
      toast({
        title: "Incorrect Password",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studios.map((studio) => (
          <div
            key={studio.name}
            onClick={() => setSelectedStudio(studio.name)}
            className="aspect-square bg-white/5 backdrop-blur-sm cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-light tracking-wider">{studio.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedStudio} onOpenChange={() => setSelectedStudio(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-center">Enter Password</DialogTitle>
          <div className="flex flex-col gap-4 items-center justify-center p-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              className="text-center"
            />
            <Button onClick={handlePasswordSubmit}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};