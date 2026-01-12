import { Heart, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">D</span>aena
            </a>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart size={14} className="text-primary" /> in Jamaica
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
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
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Daena Crosby
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
