import { Button } from "@/components/ui/button";

export const Hero = () => (
  <div className="relative h-screen">
    {/* Background Video */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Content */}
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