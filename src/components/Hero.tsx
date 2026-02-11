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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-tech-gradient-subtle opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-tech-gradient rounded-full blur-lg opacity-60 animate-glow-pulse"></div>
              <img 
                src={profileImage}
                alt="MERN Stack Developer"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/30 shadow-glow-primary"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <p className="text-primary font-mono text-lg mb-2">Hello, I'm Bijesh Raj Sharma a</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
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

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Aspiring Full Stack Engineer crafting modern web applications with cutting-edge 
              technologies. From databases to user interfaces, I bring ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-tech-gradient hover:scale-105 transition-all shadow-glow-primary"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com/bijesh2016" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bijeshsharma/" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:probjs11@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
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