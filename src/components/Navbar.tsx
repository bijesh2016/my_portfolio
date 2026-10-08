import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/70 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl font-bold">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-tech-gradient text-primary-foreground shadow-glow-primary">
              B
            </div>
            <div>
              <div className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">Bijesh Raj Sharma</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 rounded-full border border-primary/20 bg-white/70 px-6 py-3 backdrop-blur-md shadow-md">
            <button 
              onClick={() => scrollTo('home')}
              className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('experience')}
              className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollTo('education')}
              className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollTo('projects')}
              className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollTo('contact')}
            className="bg-tech-gradient hover:scale-105 transition-all duration-300 shadow-glow-primary rounded-full px-6"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};