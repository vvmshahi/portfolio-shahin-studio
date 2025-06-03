
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a sample resume download - you can replace this with actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume file
    link.download = 'Shahin_Resume.pdf';
    link.click();
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 relative"
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #000000 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight animate-slide-up tracking-tight">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span 
              className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-playfair hover:scale-105 transition-transform duration-500 inline-block cursor-default"
            >
              Shahin
            </span>
          </h1>
          
          <h2 className="font-space text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light animate-slide-up tracking-wide" style={{ animationDelay: '0.2s' }}>
            Data Scientist · AI Product Builder · Vibe Coder
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
            to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software 
            that works.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-white hover:bg-gray-100 text-black border-0 px-8 py-3 text-lg font-medium transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent px-8 py-3 text-lg font-medium transition-all duration-300 rounded-sm hover:scale-105 hover:-translate-y-1"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-8 h-8 text-gray-500 cursor-pointer hover:text-blue-400 transition-all duration-300 hover:scale-125" 
            onClick={() => scrollToSection("about")} 
          />
        </div>
      </div>
    </section>
  );
};
