import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Server, Globe } from 'lucide-react';

export const About = () => {
  const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1X34XsaLfZy5ojRVv4mte-b8JNGWCCp0C';

  const skills = [
    { 
      category: 'Frontend', 
      icon: <Globe className="w-6 h-6" />,
      techs: ['React.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'TailwindCSS', 'Responsive Design']
    },
    { 
      category: 'Backend', 
      icon: <Server className="w-6 h-6" />,
      techs: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'bcrypt']
    },
    { 
      category: 'Database', 
      icon: <Database className="w-6 h-6" />,
      techs: ['MongoDB', 'Mongoose', 'Database Design', 'Data Modeling']
    },
    { 
      category: 'Tools & Others', 
      icon: <Code className="w-6 h-6" />,
      techs: ['Git', 'GitHub', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="about" className="section-shell py-20 bg-secondary/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.08),transparent_25%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
            About section
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-tech-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate IT learner on a journey to master the MERN Stack and build polished digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* About Content */}
          <div className="space-y-6 animate-fade-in-up relative z-10">
            <div className="glass-panel rounded-3xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm an aspiring MERN Stack developer with a passion for creating dynamic, 
                user-friendly web applications. My journey began with curiosity about how 
                websites work, and it has evolved into a deep love for full-stack development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From building authentication systems to complex e-commerce platforms, 
                I enjoy tackling challenges that push me to learn and grow. My goal is to 
                become a skilled full-stack engineer who can bring innovative ideas to life.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">What Drives Me</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Building scalable and efficient web applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Learning new technologies and best practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Solving complex problems with elegant solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Contributing to open source projects
                </li>
              </ul>
            </div>

            <Button asChild className="bg-tech-gradient text-primary-foreground hover:scale-105 transition-all duration-300 rounded-full px-6 shadow-glow-primary">
              <a href={resumeDownloadUrl} download>
                Download Resume
              </a>
            </Button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up relative z-10">
            {skills.map((skill, index) => (
              <Card key={index} className="group border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-lg">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 transition-colors group-hover:bg-primary/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};