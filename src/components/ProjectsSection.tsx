
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ProjectSkeleton } from "@/components/SkeletonLoader";

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const projects = [
    {
      title: "Anomaly Watch",
      description: "AI-powered anomaly detector for time series data with interactive Z-score charts.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "+1"],
      link: "#",
      github: "#"
    },
    {
      title: "DataPulse",
      description: "Upload CSVs and get instant AI-generated charts, summaries, and insights.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Supabase", "+1"],
      link: "#",
      github: "#"
    },
    {
      title: "CorrMatrix",
      description: "Explore feature relationships with smart correlation heatmaps and AI insights.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "+1"],
      link: "#",
      github: "#"
    },
    {
      title: "ClassifyMyData",
      description: "AutoML-style tool that classifies CSV data and explains feature importance.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["React", "XGBoost", "TypeScript", "+1"],
      link: "#",
      github: "#"
    },
    {
      title: "TimeLens",
      description: "AI-powered time series forecasting with trends, confidence bands, and insights.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      tags: ["React", "TimeGPT", "Supabase", "+1"],
      link: "#",
      github: "#"
    },
    {
      title: "SegmentSnap",
      description: "AI-assisted segment analyzer that generates business insights and PDF summaries.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["React", "GPT API", "CSV", "+1"],
      link: "#",
      github: "#"
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-blue to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here's a curated collection of smart tools from my AI Intelligence Suite — 
            crafted with precision and designed to supercharge data workflows.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="hover:scale-[1.03] transition-transform duration-300"
            >
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-2xl group overflow-hidden h-full">
                <div className="relative">
                  <AspectRatio ratio={16/10}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-space text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white hover:scale-110 transition-transform duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white hover:scale-110 transition-transform duration-200"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className={`text-xs px-2 py-1 cursor-pointer hover:scale-105 transition-transform duration-200 ${
                          tag === "React" ? "bg-blue-600/20 text-blue-400 border-blue-600/30" :
                          tag === "TypeScript" ? "bg-blue-700/20 text-blue-300 border-blue-700/30" :
                          tag === "Supabase" ? "bg-green-600/20 text-green-400 border-green-600/30" :
                          tag === "Tailwind" ? "bg-cyan-600/20 text-cyan-400 border-cyan-600/30" :
                          tag === "XGBoost" ? "bg-red-600/20 text-red-400 border-red-600/30" :
                          tag === "TimeGPT" ? "bg-emerald-600/20 text-emerald-400 border-emerald-600/30" :
                          tag === "GPT API" ? "bg-purple-600/20 text-purple-400 border-purple-600/30" :
                          tag === "CSV" ? "bg-yellow-600/20 text-yellow-400 border-yellow-600/30" :
                          "bg-gray-700/20 text-gray-400 border-gray-700/30"
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost"
                    className="text-portfolio-blue hover:text-white hover:bg-portfolio-blue/20 p-0 h-auto font-medium hover:translate-x-2 transition-all duration-200"
                  >
                    View Details →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
