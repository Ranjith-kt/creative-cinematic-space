import { Button } from "@/components/ui/button";

const images = [
  "photo-1649972904349-6e44c42644a7",
  "photo-1488590528505-98d2b5aba04b",
  "photo-1518770660439-4636190af475",
  "photo-1461749280684-dccba630e2f6",
  "photo-1486312338219-ce68d2c6f44d",
  "photo-1581091226825-a6a2a5aee158",
  "photo-1485827404703-89b55fcc595e",
  "photo-1526374965328-7f61d4dc18c5",
  "photo-1531297484001-80022131f5a1",
  "photo-1487058792275-0ad4aaf24ca7",
  "photo-1605810230434-7631ac76ec81",
  "photo-1473091534298-04dcbce3278c",
  "photo-1519389950473-47ba0277781c",
  "photo-1460925895917-afdab827c52f",
  "photo-1581090464777-f3220bbe1b8b",
  "photo-1498050108023-c5249f4df085",
  "photo-1434494878577-86c23bcb06b9",
  "photo-1581092795360-fd1ca04f0952",
  "photo-1500673922987-e212871fec22",
  "photo-1504893524553-b855bce32c67"
];

export const Hero = () => (
  <div className="relative min-h-screen">
    {/* Background Video */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1036595824?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=540p"
        className="absolute w-[300%] md:w-[200%] h-[300%] md:h-[200%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{ pointerEvents: 'none' }}
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 mix-blend-overlay"></div>
      <div className="absolute inset-0" style={{
        background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
        backgroundSize: '100% 2px',
        animation: 'scan 1s linear infinite',
      }}></div>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="text-center text-white space-y-4 md:space-y-6 p-4 md:p-8 bg-black/30 backdrop-blur-sm rounded-xl animate-fade-in w-full max-w-lg">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] animate-pulse">
          Ranjith Kizhakkey Thaivalappil
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#D3E4FD] animate-fade-in">
          Creative Technologist, VFX Artist, and Dreamer
        </p>
      </div>
    </div>

    {/* Image Grid */}
    <div className="absolute bottom-0 left-0 right-0 grid grid-cols-5 md:grid-cols-10 gap-1 h-16 md:h-20 overflow-hidden">
      {images.map((img, index) => (
        <div key={index} className="relative h-full overflow-hidden">
          <img
            src={`https://images.unsplash.com/${img}`}
            alt={`Grid image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);