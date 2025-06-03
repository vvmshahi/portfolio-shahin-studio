
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectDetailModalProps {
  project: {
    title: string;
    description: string;
    detailedDescription: string;
    image: string;
    tags: string[];
    link: string;
    github: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, open, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-lg border-gray-800">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-2 -right-2 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-white mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className={`text-xs px-3 py-1 ${
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
            
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={() => window.open(project.github, '_blank')}
                variant="outline"
                className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              
              <Button 
                onClick={() => window.open(project.link, '_blank')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
