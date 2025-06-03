
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-start px-6 pt-20 relative">
      <div className="max-w-6xl mx-auto w-full animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="font-space text-6xl md:text-8xl font-normal mb-6 leading-tight">
            Hello, I'm{" "}
            <br />
            <span className="text-blue-400 font-normal">
              Shahin
            </span>
          </h1>
          
          <h2 className="font-space text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Data Scientist · AI Product Builder · Vibe Coder
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed font-ibm font-light">
            I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
            to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software 
            that works.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-white hover:bg-gray-100 text-black border-0 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 rounded-sm"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 rounded-sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-500 cursor-pointer" onClick={() => scrollToSection("about")} />
        </div>
      </div>
    </section>
  );
};
