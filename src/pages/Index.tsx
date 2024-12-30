import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          {`RKT`}
          <meshStandardMaterial color="#9b87f5" />
        </Text3D>
      </Center>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    </>
  );
};

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#403E43]">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Canvas className="absolute inset-0">
          <Scene />
        </Canvas>
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
    </div>
  );
};

export default Index;