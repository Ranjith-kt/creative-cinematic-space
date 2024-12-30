import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

export const ClientWork = () => {
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const studios = [
    { name: "Framestore", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png", video: "https://vimeo.com/1036595824" },
    { name: "Method", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png", video: "https://vimeo.com/77424642/786c90f51e" },
    { name: "MPC", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png", video: "https://vimeo.com/209550508/7e6353bd68" },
    { name: "SonyImageworks", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png", video: "https://vimeo.com/496740824/dc14caa71c" },
    { name: "RSP", logo: "/lovable-uploads/45aa46ba-1db2-4a58-b203-759465743d1c.png", video: "https://vimeo.com/kizhakkey/cinematography" }
  ];

  const handlePasswordSubmit = () => {
    const studio = studios.find(s => s.name === selectedStudio);
    if (password === "admin" && studio) {
      const videoUrl = studio.video;
      // Open video in the same dialog instead of new window
      setShowVideo(true);
      setCurrentVideo(videoUrl);
    } else {
      toast({
        title: "Incorrect Password",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleCloseVideo = () => {
    setShowVideo(false);
    setCurrentVideo("");
    setSelectedStudio(null);
    setPassword("");
  };

  return (
    <div className="container mx-auto px-4 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studios.map((studio) => (
          <div
            key={studio.name}
            onClick={() => {
              setSelectedStudio(studio.name);
              setShowVideo(false);
              setPassword("");
            }}
            className="aspect-square bg-white/5 backdrop-blur-sm cursor-pointer group relative overflow-hidden hover:bg-white/10 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-light tracking-wider">{studio.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedStudio && !showVideo} onOpenChange={() => {
        setSelectedStudio(null);
        setPassword("");
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-center">Enter Password</DialogTitle>
          <DialogDescription className="text-center">
            Please enter the password to view the reel
          </DialogDescription>
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

      <Dialog open={showVideo} onOpenChange={handleCloseVideo}>
        <DialogContent className="sm:max-w-[90vw] h-[90vh]">
          <div className="w-full h-full">
            <iframe
              src={`${currentVideo}?autoplay=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};