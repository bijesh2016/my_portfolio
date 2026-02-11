export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold font-mono mb-2">
              <span className="text-primary">&lt;</span>
              MERN
              <span className="text-accent">Dev</span>
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Aspiring MERN Stack Developer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 MERN Developer. Built with React & TailwindCSS
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Always learning, always growing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};