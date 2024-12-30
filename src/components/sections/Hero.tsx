import { Button } from "@/components/ui/button";

export const Hero = () => (
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
);