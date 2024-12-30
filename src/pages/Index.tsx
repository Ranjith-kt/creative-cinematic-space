import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#403E43]">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 p-8 bg-black/30 backdrop-blur-sm rounded-xl">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
              Ranjith Kizhakkey Thaivalappil
            </h1>
            <p className="text-xl md:text-2xl text-[#D3E4FD]">
              Creative Technologist, VFX Artist, and Dreamer
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
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

      {/* Portfolio Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-white/5 backdrop-blur-lg border-none">
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="showreels" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/5">
                <TabsTrigger value="showreels">Showreels & Videos</TabsTrigger>
                <TabsTrigger value="cinematography">Cinematography</TabsTrigger>
                <TabsTrigger value="tech">Tech Projects</TabsTrigger>
                <TabsTrigger value="movies">Movies & Scripts</TabsTrigger>
              </TabsList>

              <TabsContent value="showreels" className="mt-4">
                <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Showreels & Videos</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {[1, 2, 3].map((item) => (
                      <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="bg-white/5">
                            <CardContent className="flex aspect-video items-center justify-center p-6">
                              <span className="text-3xl font-semibold text-[#D3E4FD]">Video {item}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </TabsContent>

              <TabsContent value="cinematography" className="mt-4">
                <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Cinematography</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="bg-white/5">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-white/10 rounded-lg mb-2"></div>
                        <h4 className="text-[#D3E4FD] font-semibold">Project Title {item}</h4>
                        <p className="text-sm text-[#C8C8C9]">Brief description of the project</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-4">
                <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Tech Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="bg-white/5">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-[#D3E4FD] mb-2">Tech Project {item}</h4>
                        <p className="text-[#C8C8C9] mb-4">Technical description and achievements</p>
                        <div className="flex gap-2">
                          <Button variant="outline" className="text-[#9b87f5]">View Demo</Button>
                          <Button variant="outline" className="text-[#9b87f5]">Learn More</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="movies" className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Movies</h3>
                    <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Card key={item} className="bg-white/5 mb-4">
                          <CardContent className="p-4">
                            <h4 className="text-[#D3E4FD] font-semibold">Movie Project {item}</h4>
                            <p className="text-sm text-[#C8C8C9]">Role and contribution details</p>
                          </CardContent>
                        </Card>
                      ))}
                    </ScrollArea>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Scripts</h3>
                    <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                      {[1, 2, 3].map((item) => (
                        <Card key={item} className="bg-white/5 mb-4">
                          <CardContent className="p-4">
                            <h4 className="text-[#D3E4FD] font-semibold">Script {item}</h4>
                            <p className="text-sm text-[#C8C8C9]">Script description and status</p>
                          </CardContent>
                        </Card>
                      ))}
                    </ScrollArea>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
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
                    <p className="text-[#D3E4FD]">ranjith.kt@framestore.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;