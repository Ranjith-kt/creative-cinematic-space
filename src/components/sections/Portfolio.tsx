import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export const Portfolio = () => (
  <div className="container mx-auto px-4 py-16">
    <Card className="bg-white/5 backdrop-blur-lg border-none transform transition-all duration-300 hover:scale-[1.01]">
      <CardContent className="p-6 md:p-8">
        <Tabs defaultValue="showreels" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/5 mb-8">
            {["showreels", "cinematography", "tech", "scripts"].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white transition-all duration-300"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="showreels" className="mt-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Showreels & Videos</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((item) => (
                  <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3 p-1">
                    <Card className="bg-white/5 transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <span className="text-3xl font-semibold text-[#D3E4FD]">Video {item}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-[#9b87f5] hover:bg-[#7E69AB]" />
              <CarouselNext className="bg-[#9b87f5] hover:bg-[#7E69AB]" />
            </Carousel>
          </TabsContent>

          <TabsContent value="cinematography" className="mt-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Cinematography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-white/5 transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
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

          <TabsContent value="scripts" className="mt-4">
            <h3 className="text-2xl font-bold text-[#D3E4FD] mb-4">Scripts & Tools</h3>
            <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white/5 mb-4">
                  <CardContent className="p-4">
                    <h4 className="text-[#D3E4FD] font-semibold">Script/Tool {item}</h4>
                    <p className="text-sm text-[#C8C8C9]">Description and features</p>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  </div>
);