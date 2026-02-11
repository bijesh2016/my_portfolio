import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  image 
}: ProjectCardProps) => {
  return (
    <Card className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="relative h-48 bg-tech-gradient-subtle overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-mono text-primary/30">&lt;/&gt;</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github size={16} />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm"
              className="flex items-center gap-2 bg-tech-gradient hover:scale-105 transition-transform"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};