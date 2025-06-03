
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="font-space text-5xl md:text-7xl font-bold mb-6">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-portfolio-blue to-blue-400 bg-clip-text text-transparent">
            Shahin
          </span>
        </h1>
        
        <h2 className="font-space text-xl md:text-2xl text-gray-300 mb-8">
          Data Scientist · AI Product Builder · Vibe Coder
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
          to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software that works.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button 
            onClick={() => scrollToSection("projects")}
            className="bg-black hover:bg-gray-900 text-white border border-gray-700 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-500 mx-auto cursor-pointer" onClick={() => scrollToSection("about")} />
        </div>
      </div>
    </section>
  );
};
