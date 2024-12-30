import { Button } from "@/components/ui/button";
import { LinkedinIcon, InstagramIcon, FileText, Mail } from "lucide-react";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-center">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105">
              <img
                src="/lovable-uploads/fb40fe3f-fa34-441a-833d-b41952f1db3a.png"
                alt="Ranjith Kizhakkey Thaivalappil"
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                onClick={() => window.open('https://linkedin.com/in/ranjithkizhakkey', '_blank')}
              >
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                onClick={() => window.open('https://instagram.com/kizhakkey', '_blank')}
              >
                <InstagramIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                onClick={() => window.location.href = 'mailto:your-email@example.com'}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="group relative px-8 py-6 text-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('/Ranjith_Kizhakkey_Thaivalappil- Resume.pdf', '_blank')}
              >
                <FileText className="h-5 w-5 mr-2" />
                <span>Resume</span>
                <span className="font-dancing-script text-sm absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Download
                </span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hello, I'm Ranjith Kizhakkey Thaivalappil, a passionate VFX artist and creative technologist 
                with over 18 years of experience in the film and visual effects industry. My journey has taken 
                me from mastering camera tracking and body tracking to leading teams in layout and animation 
                for some of the most recognized studios in the world.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I've had the privilege of contributing to blockbuster movies, building tools to streamline 
                workflows, and pushing the boundaries of visual storytelling. Currently, I'm diving deep into 
                cutting-edge technologies like Unreal Engine, FPV drones, and virtual production, blending art 
                and innovation to craft immersive experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond my career, I'm an explorer at heart. Whether it's sculpting Ganesha statues, 
                experimenting with cinematic FPV shots, or hiking through breathtaking landscapes, I find joy 
                in creativity and adventure. I also strive for a balanced life, focusing on health, family, 
                and personal growth.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                This website is a window into my work, ideas, and aspirations. Feel free to explore my 
                portfolio, connect with me, or simply share a moment of inspiration.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-xl font-light italic">
                Currently working and living in Vancouver, Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};