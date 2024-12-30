import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => (
  <div className="container mx-auto px-4 py-16">
    <Card className="bg-white/5 backdrop-blur-lg border-none">
      <CardContent className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#D3E4FD] mb-6">Let's Connect</h2>
            <p className="text-[#C8C8C9] mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                Email Me
              </Button>
              <Button variant="outline" className="w-full text-[#9b87f5]">
                LinkedIn Profile
              </Button>
              <Button variant="outline" className="w-full text-[#9b87f5]">
                IMDb Profile
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Business Inquiries</h3>
            <Card className="bg-white/10">
              <CardContent className="p-4">
                <p className="text-[#C8C8C9] mb-4">
                  For business collaborations and opportunities:
                </p>
                <p className="text-[#D3E4FD]">me@ranjithk.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);