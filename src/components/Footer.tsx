export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50 bg-background/70 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold mb-2 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tech-gradient text-primary-foreground shadow-glow-primary">B</span>
              <span className="font-mono text-foreground">Bijesh Raj Sharma</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Aspiring MERN Stack Developer building premium digital products
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2026 Bijesh Raj Sharma. Built with React & TailwindCSS
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