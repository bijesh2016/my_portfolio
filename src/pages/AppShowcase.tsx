import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Sparkles, Globe2, Palette } from 'lucide-react';

const featuredPoems = [
  {
    title: 'Echoes of the Hills',
    excerpt: 'The hills remember every footstep, every sunrise, every promise carried by the wind across the valley.'
  },
  {
    title: 'Kathmandu After Rain',
    excerpt: 'Stone streets glimmer like memory, and the city breathes softly under a sky washed clean.'
  },
  {
    title: 'Roads to Nepal',
    excerpt: 'Between the mountains and the rivers, every road becomes a story, and every story becomes a route home.'
  }
];

const portfolioHighlights = [
  'Full-stack MERN applications',
  'Travel, booking, and listing platforms',
  'Payment and reservation workflows',
  'Responsive design with strong UI focus'
];

const AppShowcase = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.08),transparent_22%),radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.07),transparent_20%)]" />
      <Navbar />
      <main className="relative z-10 pt-20">
        <section className="section-shell relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-tech-gradient-subtle opacity-40" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
              <div>
                <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">/app showcase</Badge>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  Poetry, portfolio, and a more personal digital space.
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-8">
                  This page gives your visitors a focused view of your poetry and your work,
                  inspired by a blog-style presentation and built to feel distinct from the main portfolio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-tech-gradient text-primary-foreground hover:scale-105 transition-all duration-300 rounded-full px-6 shadow-glow-primary">
                    View Featured Poems
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6">
                    Open Portfolio
                  </Button>
                </div>
              </div>

              <Card className="glass-panel rounded-3xl shadow-glow-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-3 text-primary">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-semibold">Creative profile</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Portfolio identity</p>
                  <p>Poetry collection</p>
                  <p>Travel writing</p>
                  <p>Personal highlights and links</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="glass-panel rounded-3xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Featured Poetry</h2>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {featuredPoems.map((poem) => (
                      <div key={poem.title} className="rounded-2xl border border-border/60 bg-background/40 p-4 transition-transform duration-300 hover:-translate-y-1">
                      <h3 className="font-semibold mb-2">{poem.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{poem.excerpt}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-panel rounded-3xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Portfolio Focus</h2>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {portfolioHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 px-4 py-3 transition-transform duration-300 hover:-translate-y-1">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-panel rounded-3xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">About This Space</h2>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Use this route as a dedicated creative showcase for your writing,
                    portfolio identity, and future blog-style updates.
                  </p>
                  <p>
                    If you want, this page can also be extended with full poem posts,
                    tags, and a blog layout similar to your Blogger reference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppShowcase;