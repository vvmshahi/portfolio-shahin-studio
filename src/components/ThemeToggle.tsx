
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-6 right-6 z-50 animate-fade-in">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="bg-background/80 backdrop-blur-lg border-border/50 hover:bg-accent/80 transition-all duration-300 hover:scale-105 hover:rotate-12"
      >
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ 
            transform: theme === "light" ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(1.1)',
            opacity: 1
          }}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4 transition-all duration-300" />
          ) : (
            <Sun className="h-4 w-4 transition-all duration-300" />
          )}
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
