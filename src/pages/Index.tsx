
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shahin",
      "jobTitle": "Data Scientist & AI Product Builder",
      "description": "Data Scientist, AI Product Builder, and Vibe Coder crafting intelligent software solutions",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/shahin",
        "https://linkedin.com/in/shahin"
      ],
      "knowsAbout": ["AI", "Data Science", "Machine Learning", "React", "TypeScript"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen font-ibm text-foreground relative overflow-hidden">
        <ParticlesBackground />
        <div 
          className="relative z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(0, 0, 0, 0.98) 100%)'
          }}
        >
          <ThemeToggle />
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
