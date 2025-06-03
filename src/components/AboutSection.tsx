
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Zap, Briefcase } from "lucide-react";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = [
    "AI-Native App Development",
    "Data Science · Python · SQL",
    "Machine Learning (XGBoost, AutoML)",
    "AI APIs (OpenAI, TimeGPT, Supabase)",
    "Interactive Dashboards (Power BI, Recharts)",
    "Data Analysis & Visualization",
    "React + TypeScript",
    "Tailwind CSS + shadcn/ui",
    "Agentic AI Systems",
    "End-to-End Data Tooling"
  ];

  const experiences = [
    "Built multiple AI Intelligence Tools",
    "Remote-first · Solopreneur Builder",
    "Vibe Coder with a UX Eye"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-16 h-1 bg-gradient-to-r from-portfolio-blue to-blue-400 mx-auto"
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Profile Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <AspectRatio ratio={1}>
                  <img 
                    src="/lovable-uploads/037f5ea2-e4aa-4c46-a392-2f5fb6fe55c5.png"
                    alt="Shahin - Profile" 
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-portfolio-blue rounded-full flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-space text-2xl font-semibold">Who Am I</h3>
                  </div>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I'm a data scientist, solopreneur, and AI product builder focused on creating smart, 
                      intuitive tools for modern data workflows.
                    </p>
                    <p>
                      I specialize in building AI-native web applications, including Agentic AI systems and 
                      no-code platforms that transform raw data into real insights. My work blends data analysis, 
                      ML automation, and interactive dashboards — all designed for speed, clarity, and usability.
                    </p>
                    <p>
                      From training models to designing tools that analysts use every day, I'm all about turning 
                      complex data into experiences that are fast, visual, and intelligent.
                    </p>
                    <p className="font-semibold text-white">
                      I don't just analyze data — I build tools that analyze, visualize, and explain it for you.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills and Experience */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Skills Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-portfolio-blue rounded-full flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-space text-2xl font-semibold">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 px-3 py-1 transition-colors cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-sunset-start rounded-full flex items-center justify-center mr-3">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-space text-2xl font-semibold">Experience</h3>
                </div>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 bg-sunset-start rounded-full mr-4 flex-shrink-0"></div>
                      <span>{exp}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
