import { Header } from "@/components/sections/Header";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { ClientWork } from "@/components/sections/ClientWork";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("work");

  const renderSection = () => {
    switch (activeSection) {
      case "client":
        return <ClientWork />;
      case "about":
        return <About />;
      default:
        return <Gallery category={activeSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderSection()}
    </div>
  );
};

export default Index;