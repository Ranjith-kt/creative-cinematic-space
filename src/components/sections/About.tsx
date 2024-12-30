import { Button } from "@/components/ui/button";
import { LinkedinIcon, InstagramIcon, FileText, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const About = () => {
  const images = [
    "/lovable-uploads/ec8fb09c-0617-45a1-b73a-4629b482fec5.png",
    "/lovable-uploads/b9844f9e-328f-415d-b8d9-460fa9aaa190.png",
    "/lovable-uploads/db01784c-f6f3-47b9-bcaa-b1522eeb8474.png",
    "/lovable-uploads/c00af75f-b6e4-403f-abe9-22a81d50be71.png",
    "/lovable-uploads/40c6259d-6e33-4e39-b53a-f3231c701ac0.png",
    "/lovable-uploads/39d83e47-c3f1-4e9e-883f-b6c7a26b91f0.png",
    "/lovable-uploads/2c05776c-e27d-4bb5-a035-fabae2a78750.png"
  ];

  return (
    <div className="container mx-auto px-4 pt-16 md:pt-28">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
        <div className="space-y-4 md:space-y-6">
          <div className="relative overflow-hidden rounded-lg">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          <div className="flex gap-3 justify-center mt-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 md:w-14 md:h-14"
              onClick={() => window.open('https://linkedin.com/your-profile', '_blank')}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 md:w-14 md:h-14"
              onClick={() => window.open('https://instagram.com/your-profile', '_blank')}
            >
              <InstagramIcon className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 md:w-14 md:h-14"
              onClick={() => window.location.href = 'mailto:your-email@example.com'}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="group relative px-6 py-3 text-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground w-full md:w-auto"
              onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
            >
              <FileText className="h-5 w-5 mr-2" />
              <span className="font-bold">Resume</span>
              <span className="font-dancing-script text-sm absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                Download
              </span>
            </Button>
          </div>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-light mb-4">About Me</h2>
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p className="text-sm md:text-base">
              Hello, I'm Ranjith Kizhakkey Thaivalappil, a passionate VFX artist and creative technologist 
              with over 18 years of experience in the film and visual effects industry. My journey has taken 
              me from mastering camera tracking and body tracking to leading teams in layout and animation 
              for some of the most recognized studios in the world.
            </p>
            <p className="text-sm md:text-base">
              I've had the privilege of contributing to blockbuster movies, building tools to streamline 
              workflows, and pushing the boundaries of visual storytelling. Currently, I'm diving deep into 
              cutting-edge technologies like Unreal Engine, FPV drones, and virtual production, blending art 
              and innovation to craft immersive experiences.
            </p>
            <p className="text-sm md:text-base">
              Beyond my career, I'm an explorer at heart. Whether it's sculpting Ganesha statues, 
              experimenting with cinematic FPV shots, or hiking through breathtaking landscapes, I find joy 
              in creativity and adventure. I also strive for a balanced life, focusing on health, family, 
              and personal growth.
            </p>
            <p className="text-sm md:text-base">
              This website is a window into my work, ideas, and aspirations. Feel free to explore my 
              portfolio, connect with me, or simply share a moment of inspiration.
            </p>
          </div>
          <p className="text-base md:text-lg font-light mt-4">
            Currently working and living in Vancouver, Canada.
          </p>
        </div>
      </div>
    </div>
  );
};