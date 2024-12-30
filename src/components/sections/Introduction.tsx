import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Introduction = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="bg-white/5 backdrop-blur-lg border-none">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#D3E4FD]">Hi, I'm Ranjith</h2>
              <p className="text-[#C8C8C9] leading-relaxed">
                A passionate VFX artist with over 18 years of experience, currently exploring 
                cutting-edge technologies and creative solutions in film and visual storytelling.
              </p>
              <Button 
                onClick={() => setShowMore(!showMore)}
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              >
                {showMore ? "Show Less" : "Learn More"}
              </Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional headshot"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          {showMore && (
            <div className="mt-8 grid md:grid-cols-3 gap-6 animate-fade-in">
              <Card className="bg-white/5 backdrop-blur-lg border-none">
                <CardContent className="p-4 text-[#C8C8C9]">
                  <h3 className="text-xl font-bold text-[#D3E4FD] mb-2">Experience</h3>
                  <p>Framestore, Method Studios, Sony Pictures Imageworks</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-lg border-none">
                <CardContent className="p-4 text-[#C8C8C9]">
                  <h3 className="text-xl font-bold text-[#D3E4FD] mb-2">Specialties</h3>
                  <p>VFX, Layout, Camera Tracking, Supervision</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-lg border-none">
                <CardContent className="p-4 text-[#C8C8C9]">
                  <h3 className="text-xl font-bold text-[#D3E4FD] mb-2">Interests</h3>
                  <p>Short Films, Unreal Engine, FPV Drones, Gaming</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};