import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

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
  image,
}: ProjectCardProps) => {
  return (
    <Card className="group relative h-full overflow-hidden border-border/50 bg-card/60 backdrop-blur-md shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary/30">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-tech-gradient-subtle">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-6xl font-mono text-primary/30">&lt;/&gt;</div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />

        {category && (
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-background/40 px-3 py-1 text-xs backdrop-blur-sm">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <div className="h-px w-16 bg-tech-gradient transition-all duration-500 group-hover:w-24" />
      </CardHeader>

      <CardContent className="relative z-10 space-y-5">
        <p className="text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="border border-primary/15 bg-primary/10 text-primary hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {liveUrl && (
            <Button
              asChild
              size="sm"
              className="bg-tech-gradient"
            >
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};