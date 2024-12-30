import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Introduction = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="bg-white/5 backdrop-blur-lg border-none transform transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#D3E4FD] animate-fade-in">Hi, I'm Ranjith</h2>
              <p className="text-[#C8C8C9] leading-relaxed animate-fade-in delay-100">
                A passionate VFX artist with over 18 years of experience, currently exploring 
                cutting-edge technologies and creative solutions in film and visual storytelling.
              </p>
              <Button 
                onClick={() => setShowMore(!showMore)}
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white transform transition-all duration-300 hover:scale-105"
              >
                {showMore ? "Show Less" : "Learn More"}
              </Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional headshot"
                className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {showMore && (
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { title: "Experience", content: "Framestore, Method Studios, Sony Pictures Imageworks" },
                { title: "Specialties", content: "VFX, Layout, Camera Tracking, Supervision" },
                { title: "Interests", content: "Short Films, Unreal Engine, FPV Drones, Gaming" }
              ].map((item, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border-none transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-[#D3E4FD] mb-2">{item.title}</h3>
                    <p className="text-[#C8C8C9]">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};