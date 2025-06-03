
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-start px-6 pt-20 relative">
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.h1 
            variants={itemVariants}
            className="font-space text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight"
          >
            Hello, I'm{" "}
            <br />
            <motion.span 
              className="text-blue-400 font-light relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Shahin
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="font-space text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
          >
            Data Scientist · AI Product Builder · Vibe Coder
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-ibm font-light"
          >
            I build intelligent tools that supercharge data workflows using AI. From Agentic AI systems 
            to frontend-trained AI models — I'm a solopreneur crafting practical, intelligent software 
            that works.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-white hover:bg-gray-100 text-black border-0 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={downloadResume}
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown 
              className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-400 transition-colors" 
              onClick={() => scrollToSection("about")} 
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
