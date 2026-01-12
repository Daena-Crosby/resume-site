import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element when menu opens
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    menu.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscape);

    return () => {
      menu.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 py-4 shadow-soft backdrop-blur-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight"
        >
          <span className="gradient-text">D</span>aena
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle />
          
          <Button 
            asChild
            className="bg-gradient-primary text-primary-foreground shadow-soft transition-all hover:shadow-elevated"
          >
            <a href="/Resume-Daena-Crosby.pdf" download="Daena-Crosby-Resume.pdf">
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-gradient-primary text-primary-foreground shadow-soft transition-all hover:shadow-elevated"
          >
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="absolute left-0 right-0 top-full z-40 bg-background/95 backdrop-blur-lg shadow-lg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild
              className="mt-2 bg-gradient-primary text-primary-foreground"
            >
              <a href="/Resume-Daena-Crosby.pdf" download="Daena-Crosby-Resume.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </Button>
            <Button 
              asChild
              className="bg-gradient-primary text-primary-foreground"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
