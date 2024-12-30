import { Header } from "@/components/sections/Header";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("work");

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      {activeSection === "about" ? (
        <About />
      ) : (
        <Gallery category={activeSection} />
      )}
    </div>
  );
};

export default Index;