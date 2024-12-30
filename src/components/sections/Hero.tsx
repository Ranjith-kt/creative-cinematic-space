import { Button } from "@/components/ui/button";

export const Hero = () => (
  <div className="relative h-screen">
    {/* Background Video */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1036595824?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=540p"
        className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{ pointerEvents: 'none' }}
      ></iframe>
      {/* TV screen filter effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 mix-blend-overlay"></div>
      <div className="absolute inset-0" style={{
        background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
        backgroundSize: '100% 2px',
        animation: 'scan 1s linear infinite',
      }}></div>
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