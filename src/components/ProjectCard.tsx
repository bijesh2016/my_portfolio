import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  category,
  githubUrl, 
  liveUrl,
  image 
}: ProjectCardProps) => {
  return (
    <Card className="group relative h-full overflow-hidden border-border/50 bg-card/60 backdrop-blur-md shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative h-56 bg-tech-gradient-subtle overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-mono text-primary/30">&lt;/&gt;</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/95 to-transparent" />
        {category && (
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-background/40 px-3 py-1 text-xs text-foreground/80 backdrop-blur-sm">
            {category}
          </div>
        )}
      </div>

      <CardHeader className="pb-3 space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="h-px w-16 bg-tech-gradient opacity-60 transition-all duration-500 group-hover:w-24" />
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="border border-primary/15 bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2 flex-wrap">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02]"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github size={16} />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm"
              className="flex items-center gap-2 bg-tech-gradient transition-all duration-300 hover:scale-[1.02]"
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