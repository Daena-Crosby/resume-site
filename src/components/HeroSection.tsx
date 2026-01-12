import { ArrowDown, Github, Mail, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import daenaProfile from '@/assets/daena-profile.webp';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Decorative geometric elements */}
      <div className="absolute left-10 top-1/4 h-20 w-20 rounded-2xl border-2 border-primary/20 shape-float" />
      <div className="absolute right-16 top-1/3 h-12 w-12 rounded-full bg-secondary/20 shape-float-delayed" />
      <div className="absolute bottom-1/4 left-1/4 h-16 w-16 rotate-45 border-2 border-secondary/20 shape-float" style={{ animationDelay: '-2s' }} />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up opacity-0 [@media(prefers-reduced-motion:reduce)]:opacity-100">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Frontend Developer & Designer
              </span>
            </div>
            
            <h1 className="animate-fade-up opacity-0 animation-delay-100 [@media(prefers-reduced-motion:reduce)]:opacity-100 mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm{' '}
              <span className="gradient-text">Daena Crosby</span>
            </h1>
            
            <p className="animate-fade-up opacity-0 animation-delay-200 [@media(prefers-reduced-motion:reduce)]:opacity-100 mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Web Developer & Designer with a passion for crafting beautiful, responsive interfaces. 
              Currently interning at Intellibus, specializing in frontend development, project management, and database solutions.
            </p>
            
            <div className="animate-fade-up opacity-0 animation-delay-300 [@media(prefers-reduced-motion:reduce)]:opacity-100 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-soft transition-all hover:shadow-elevated"
              >
                <a href="#projects">View My Code</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 transition-all hover:border-primary hover:bg-primary/5"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-soft transition-all hover:shadow-elevated"
              >
                <a href="/Resume-Daena-Crosby.pdf" download="Daena-Crosby-Resume.pdf">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="animate-fade-up opacity-0 animation-delay-400 [@media(prefers-reduced-motion:reduce)]:opacity-100 mt-10 flex items-center gap-6">
              <span className="text-sm font-medium text-muted-foreground">Connect with me</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Daena-Crosby" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:daenacrosby1@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/daena-crosby-1b18ba23a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="animate-scale-in opacity-0 relative [@media(prefers-reduced-motion:reduce)]:opacity-100">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 shape-rotate" />
              <div className="absolute -inset-8 rounded-full border border-secondary/20" />
              
              {/* Main image container */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-elevated sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                <img
                  src={daenaProfile}
                  alt="Daena Crosby - Frontend Developer and Designer"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.parentElement?.querySelector('.image-placeholder');
                    if (placeholder) {
                      (placeholder as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="image-placeholder absolute inset-0 hidden items-center justify-center bg-muted">
                  <span className="text-4xl font-bold text-muted-foreground">DC</span>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 rounded-2xl bg-background px-4 py-2 shadow-card">
                <span className="text-sm font-semibold">
                  <span className="gradient-text">BSc</span> Computer Science
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
