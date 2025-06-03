
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
    <section id="home" className="min-h-screen flex items-center justify-start px-6 pt-20 relative">
      <div className="max-w-6xl mx-auto w-full animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight animate-slide-up">
            Hello, I'm{" "}
            <br />
            <span className="text-blue-400 font-light relative hover:scale-105 transition-transform duration-300 inline-block">
              Shahin
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 animate-scale-x"></div>
            </span>
          </h1>
          
          <h2 className="font-space text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Data Scientist · AI Product Builder · Vibe Coder
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-ibm font-light animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
            to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software 
            that works.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-white hover:bg-gray-100 text-black border-0 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm hover:scale-105"
            >
              Contact Me
            </Button>

            <Button 
              onClick={downloadResume}
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-400 transition-colors hover:scale-125" 
            onClick={() => scrollToSection("about")} 
          />
        </div>
      </div>
    </section>
  );
};
