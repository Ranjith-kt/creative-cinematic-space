import { Button } from "@/components/ui/button";
import { LinkedinIcon, InstagramIcon, FileText } from "lucide-react";

export const About = () => {
  return (
    <div className="container mx-auto px-4 pt-28">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/c3b1aca3-1ba0-4891-a941-dbc56d77a253.png"
              alt="Ranjith Kizhakkey Thaivalappil"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => window.open('https://linkedin.com/your-profile', '_blank')}
            >
              <LinkedinIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => window.open('https://instagram.com/your-profile', '_blank')}
            >
              <InstagramIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
            >
              <FileText className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-light mb-6">About Me</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Hello, I'm Ranjith Kizhakkey Thaivalappil, a passionate VFX artist and creative technologist 
              with over 18 years of experience in the film and visual effects industry. My journey has taken 
              me from mastering camera tracking and body tracking to leading teams in layout and animation 
              for some of the most recognized studios in the world.
            </p>
            <p>
              I've had the privilege of contributing to blockbuster movies, building tools to streamline 
              workflows, and pushing the boundaries of visual storytelling. Currently, I'm diving deep into 
              cutting-edge technologies like Unreal Engine, FPV drones, and virtual production, blending art 
              and innovation to craft immersive experiences.
            </p>
            <p>
              Beyond my career, I'm an explorer at heart. Whether it's sculpting Ganesha statues, 
              experimenting with cinematic FPV shots, or hiking through breathtaking landscapes, I find joy 
              in creativity and adventure. I also strive for a balanced life, focusing on health, family, 
              and personal growth.
            </p>
            <p>
              This website is a window into my work, ideas, and aspirations. Feel free to explore my 
              portfolio, connect with me, or simply share a moment of inspiration.
            </p>
          </div>
          <p className="text-lg font-light mt-6">
            Currently working and living in Vancouver, Canada.
          </p>
        </div>
      </div>
    </div>
  );
};