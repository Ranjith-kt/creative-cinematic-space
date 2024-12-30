import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const navItems = [
    { label: "Reels", value: "client" },
    { label: "Personal Works", value: "work" },
    { label: "About", value: "about" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-xl font-light tracking-wider hover:opacity-70 transition-opacity">
          RANJITH KIZHAKKEY T
        </Link>
        <nav className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onSectionChange(item.value)}
              className={cn(
                "text-sm tracking-wide hover:opacity-70 transition-opacity uppercase",
                activeSection === item.value && "underline underline-offset-8"
              )}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/blog"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity uppercase"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};