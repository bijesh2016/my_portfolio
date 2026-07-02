import { Button } from '@/components/ui/button';
import { TypewriterText } from './TypewriterText';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/bijesh.jpg';

export const Hero = () => {
  const techStack = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack'];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section-shell min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.14),transparent_26%)] opacity-90"></div>
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-glow-pulse delay-1000"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-tech-gradient rounded-full blur-2xl opacity-60 animate-glow-pulse"></div>
              <img 
                src={profileImage}
                alt="MERN Stack Developer"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-[6px] border-white/10 shadow-2xl shadow-black/30"
              />
              <div className="absolute -bottom-3 left-8 rounded-full border border-white/10 bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
                Available for premium work
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
                Full-stack developer from Nepal
              </div>
              <p className="text-primary font-mono text-lg mb-2">Hello, I'm Bijesh Raj Sharma a</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-tech-gradient bg-clip-text text-transparent">
                  MERN Stack
                </span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground mb-6">
                Passionate about building with{' '}
                <TypewriterText texts={techStack} />
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-8">
              Aspiring Full Stack Engineer crafting modern web applications with cutting-edge 
              technologies. From databases to user interfaces, I bring ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-tech-gradient hover:scale-105 transition-all duration-300 shadow-glow-primary rounded-full px-6"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6"
              >
                Get In Touch
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 mb-8">
              <div className="glass-panel rounded-2xl p-4 text-left">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Projects</p>
              </div>
              <div className="glass-panel rounded-2xl p-4 text-left">
                <p className="text-2xl font-bold text-primary">MERN</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Stack</p>
              </div>
              <div className="glass-panel rounded-2xl p-4 text-left">
                <p className="text-2xl font-bold text-primary">UI/UX</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Focus</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://github.com/bijesh2016" 
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bijeshsharma/" 
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:probjs11@gmail.com" 
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};