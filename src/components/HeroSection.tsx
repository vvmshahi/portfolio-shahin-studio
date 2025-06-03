
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
      className="min-h-screen flex items-center justify-start px-8 lg:px-16 pt-20 relative"
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #000000 100%)'
      }}
    >
      <div className="max-w-7xl w-full animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="font-space text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] animate-slide-up tracking-tight">
            <span className="text-white block mb-2">Hello, I'm</span>
            <span 
              className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-space block hover:scale-105 transition-transform duration-500 cursor-default"
            >
              Shahin
            </span>
          </h1>
          
          <h2 className="font-space text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-8 font-medium animate-slide-up tracking-wide" style={{ animationDelay: '0.2s' }}>
            Data Scientist · AI Product Builder · Vibe Coder
          </h2>
          
          <p className="font-space text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-normal animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
            to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software 
            that works.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-white hover:bg-gray-100 text-black border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 font-space"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-300 bg-transparent px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-lg hover:scale-105 hover:-translate-y-1 font-space"
            >
              Contact Me
            </Button>

            <Button 
              onClick={downloadResume}
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 px-8 py-3 text-lg font-medium transition-all duration-300 rounded-lg hover:scale-105 hover:-translate-y-1 font-space"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-8 lg:left-16 animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-400 transition-all duration-300 hover:scale-125" 
            onClick={() => scrollToSection("about")} 
          />
        </div>
      </div>
    </section>
  );
};
