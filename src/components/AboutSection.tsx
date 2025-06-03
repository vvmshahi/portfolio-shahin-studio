
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-blue to-blue-400 mx-auto" />
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-start mb-16 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative hover:scale-105 transition-transform duration-300">
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
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
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
          </div>
        </div>

        {/* Skills and Experience */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Skills Card */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-portfolio-blue rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-space text-2xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 px-3 py-1 transition-colors cursor-pointer hover:scale-110"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-sunset-start rounded-full flex items-center justify-center mr-3">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-space text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-gray-300 hover:translate-x-2 transition-transform duration-200"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-2 h-2 bg-sunset-start rounded-full mr-4 flex-shrink-0"></div>
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
