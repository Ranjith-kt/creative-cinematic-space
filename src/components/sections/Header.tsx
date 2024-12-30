import { cn } from "@/lib/utils";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const navItems = [
    { label: "Reels", value: "client" },
    { label: "Personal Works", value: "work" },
    { label: "About", value: "about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-xl font-light tracking-wider">RANJITH KIZHAKKEY T</h1>
        <nav className="flex gap-8">
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
        </nav>
      </div>
    </header>
  );
};