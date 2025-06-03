
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 animate-fade-in">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-background/80 backdrop-blur-lg border-border/50 hover:bg-accent/80 transition-all duration-300 hover:scale-105"
      >
        <div
          className="transition-transform duration-300"
          style={{ transform: theme === "light" ? 'rotate(0deg)' : 'rotate(180deg)' }}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
