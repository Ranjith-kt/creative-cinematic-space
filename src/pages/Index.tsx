import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#403E43]">
      <Hero />
      <Introduction />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;