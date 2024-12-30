import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const themes = {
  purple: {
    primary: "#9b87f5",
    secondary: "#7E69AB",
    background: "from-[#1A1F2C] to-[#403E43]",
    text: "#D3E4FD",
    subtext: "#C8C8C9",
  },
  ocean: {
    primary: "#0EA5E9",
    secondary: "#33C3F0",
    background: "from-[#1A242C] to-[#2C3E50]",
    text: "#E0F2FE",
    subtext: "#CBD5E1",
  },
  sunset: {
    primary: "#F97316",
    secondary: "#FB923C",
    background: "from-[#27151A] to-[#451A1A]",
    text: "#FEF3C7",
    subtext: "#FDE68A",
  },
  neon: {
    primary: "#D946EF",
    secondary: "#F0ABFC",
    background: "from-[#18181B] to-[#27272A]",
    text: "#FAFAFA",
    subtext: "#E4E4E7",
  },
};

export const ThemeSwitcher = () => {
  const applyTheme = (theme: keyof typeof themes) => {
    const root = document.documentElement;
    const colors = themes[theme];
    
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    document.body.className = `bg-gradient-to-b ${colors.background}`;
    
    // Update CSS variables for text colors
    root.style.setProperty('--text-primary', colors.text);
    root.style.setProperty('--text-secondary', colors.subtext);
  };

  // Set default theme on mount
  useEffect(() => {
    applyTheme('purple');
  }, []);

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      {Object.keys(themes).map((theme) => (
        <Button
          key={theme}
          onClick={() => applyTheme(theme as keyof typeof themes)}
          className={`capitalize bg-${themes[theme as keyof typeof themes].primary} hover:opacity-80`}
          variant="outline"
        >
          {theme}
        </Button>
      ))}
    </div>
  );
};