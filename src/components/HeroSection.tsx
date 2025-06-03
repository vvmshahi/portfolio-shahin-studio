
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
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #000000 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto w-full text-center animate-fade-in">
        <div className="mb-16">
          <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-8 leading-tight animate-slide-up tracking-tight">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span 
              className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-playfair hover:scale-105 transition-transform duration-500 inline-block cursor-default"
            >
              Shahin
            </span>
          </h1>
          
          <h2 className="font-space text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 mb-12 font-light animate-slide-up tracking-wide" style={{ animationDelay: '0.2s' }}>
            Data Scientist · AI Product Builder · Vibe Coder
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl leading-relaxed font-light animate-slide-up mx-auto" style={{ animationDelay: '0.4s' }}>
            I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
            to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software 
            that works.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-white hover:bg-gray-100 text-black border-0 px-10 py-4 text-lg font-medium transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent px-10 py-4 text-lg font-medium transition-all duration-300 rounded-sm hover:scale-105 hover:-translate-y-1"
            >
              Contact Me
            </Button>

            <Button 
              onClick={downloadResume}
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 px-10 py-4 text-lg font-medium transition-all duration-300 rounded-sm hover:scale-105 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
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
