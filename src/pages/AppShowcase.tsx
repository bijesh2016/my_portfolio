import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import profileImage from '@/assets/bijesh.jpg';
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  ChevronRight,
  Clock3,
  Copy,
  ExternalLink,
  Filter,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Quote,
  Search,
  Share2,
  Sparkles,
  Star,
  BookOpen,
  SunMedium,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Poem = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  lines: string[];
  tags: string[];
  theme: {
    accent: string;
    glow: string;
    surface: string;
    text: string;
  };
};

const poems: Poem[] = [
  {
    id: 'echoes-of-the-hills',
    title: 'Echoes of the Hills',
    category: 'Nature',
    excerpt: 'The hills remember every footstep, every sunrise, every promise carried by the wind across the valley.',
    readTime: '2 min read',
    lines: [
      'The hills keep their old conversations with the wind,',
      'and every ridge remembers a barefoot morning.',
      'Mist rises like a curtain on a quiet stage,',
      'while the sun learns the shape of silence.',
      'I stand where the trail forgets to hurry,',
      'listening for the echo of who I was before the climb.',
    ],
    tags: ['mountains', 'memory', 'silence'],
    theme: {
      accent: '#60a5fa',
      glow: 'rgba(96, 165, 250, 0.25)',
      surface: 'linear-gradient(180deg, rgba(12, 18, 31, 0.96), rgba(18, 27, 46, 0.96))',
      text: '#dbeafe',
    },
  },
  {
    id: 'kathmandu-after-rain',
    title: 'Kathmandu After Rain',
    category: 'City',
    excerpt: 'Stone streets glimmer like memory, and the city breathes softly under a sky washed clean.',
    readTime: '2 min read',
    lines: [
      'The rain has polished the alleys into mirrors,',
      'and temples carry the scent of wet stone.',
      'Traffic becomes a low river of light,',
      'passing old windows where the afternoon still hangs.',
      'Kathmandu does not sparkle; it remembers.',
      'And in that remembering, it becomes enough.',
    ],
    tags: ['kathmandu', 'rain', 'city'],
    theme: {
      accent: '#f472b6',
      glow: 'rgba(244, 114, 182, 0.22)',
      surface: 'linear-gradient(180deg, rgba(25, 13, 30, 0.96), rgba(39, 18, 43, 0.96))',
      text: '#fce7f3',
    },
  },
  {
    id: 'roads-to-nepal',
    title: 'Roads to Nepal',
    category: 'Travel',
    excerpt: 'Between the mountains and the rivers, every road becomes a story, and every story becomes a route home.',
    readTime: '2 min read',
    lines: [
      'The road bends first, then the river follows,',
      'and the bus window fills with another mountain.',
      'Children wave like tiny flags of welcome,',
      'while tea stalls burn gold in the evening mist.',
      'Every direction feels temporary here,',
      'as if the land itself is teaching arrival.',
    ],
    tags: ['travel', 'Nepal', 'journey'],
    theme: {
      accent: '#34d399',
      glow: 'rgba(52, 211, 153, 0.24)',
      surface: 'linear-gradient(180deg, rgba(9, 21, 21, 0.96), rgba(15, 36, 33, 0.96))',
      text: '#d1fae5',
    },
  },
  {
    id: 'paper-lanterns',
    title: 'Paper Lanterns',
    category: 'Love',
    excerpt: 'We were small as lantern flames, bright enough to change the shape of the dark.',
    readTime: '1 min read',
    lines: [
      'We carried our names in paper lanterns,',
      'letting the night decide what would rise.',
      'Your laugh leaned into the open air,',
      'and my hands learned how to keep a promise.',
      'Even now, the dark is softer where you were,',
      'as if love left a window unlocked.',
    ],
    tags: ['love', 'light', 'memory'],
    theme: {
      accent: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.22)',
      surface: 'linear-gradient(180deg, rgba(26, 20, 8, 0.96), rgba(40, 28, 12, 0.96))',
      text: '#fef3c7',
    },
  },
  {
    id: 'monsoon-notes',
    title: 'Monsoon Notes',
    category: 'Season',
    excerpt: 'The monsoon writes its own language on windows, rooftops, and the patient skin of the earth.',
    readTime: '2 min read',
    lines: [
      'Rain arrives without asking,',
      'and the city answers by becoming softer.',
      'Tin roofs drum out old songs,',
      'while the trees stand there, rehearsing green.',
      'Every puddle is a temporary sky,',
      'and every pause is a kind of prayer.',
    ],
    tags: ['rain', 'season', 'earth'],
    theme: {
      accent: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.25)',
      surface: 'linear-gradient(180deg, rgba(8, 18, 28, 0.96), rgba(16, 31, 46, 0.96))',
      text: '#e0f2fe',
    },
  },
  {
    id: 'the-quiet-cafe',
    title: 'The Quiet Cafe',
    category: 'Reflection',
    excerpt: 'In a room of cups and unfinished thoughts, I found the shape of my own voice.',
    readTime: '1 min read',
    lines: [
      'A spoon clicks once, then the silence settles.',
      'Steam lifts from the cup like a second thought.',
      'Outside, the city forgets itself in traffic,',
      'but here, time folds its sleeves and waits.',
      'I leave with a warmer chest,',
      'and a little less urgency to be elsewhere.',
    ],
    tags: ['reflection', 'cafe', 'stillness'],
    theme: {
      accent: '#c084fc',
      glow: 'rgba(192, 132, 252, 0.24)',
      surface: 'linear-gradient(180deg, rgba(16, 12, 27, 0.96), rgba(29, 18, 41, 0.96))',
      text: '#f3e8ff',
    },
  },
  {
    id: 'letters-to-the-future',
    title: 'Letters to the Future',
    category: 'Hope',
    excerpt: 'I write to the person I am becoming, trusting that the page will deliver me there.',
    readTime: '2 min read',
    lines: [
      'Dear tomorrow, I am packing light,',
      'only a few brave questions and a clean notebook.',
      'If I am quieter when you find me,',
      'it is because I have learned to listen.',
      'Keep one window open for me,',
      'and I will arrive with the rest of my courage.',
    ],
    tags: ['hope', 'future', 'letters'],
    theme: {
      accent: '#f87171',
      glow: 'rgba(248, 113, 113, 0.22)',
      surface: 'linear-gradient(180deg, rgba(29, 12, 12, 0.96), rgba(46, 18, 18, 0.96))',
      text: '#fee2e2',
    },
  },
  {
    id: 'morning-at-phewa',
    title: 'Morning at Phewa',
    category: 'Travel',
    excerpt: 'The lake held the mountain the way a memory holds a face: gently, without explanation.',
    readTime: '2 min read',
    lines: [
      'The lake is a quiet mirror that never flatters,',
      'only repeats the mountain with patience.',
      'Boats drift like commas in a sentence of fog,',
      'and the shore learns the color of first light.',
      'I sit still enough to hear the day begin,',
      'and the water answers with another blue.',
    ],
    tags: ['Pokhara', 'lake', 'morning'],
    theme: {
      accent: '#22c55e',
      glow: 'rgba(34, 197, 94, 0.22)',
      surface: 'linear-gradient(180deg, rgba(8, 24, 15, 0.96), rgba(13, 36, 24, 0.96))',
      text: '#dcfce7',
    },
  },
  {
    id: 'rooftop-solitude',
    title: 'Rooftop Solitude',
    category: 'Night',
    excerpt: 'The city is loud below, but the rooftop teaches the moon how to speak softly.',
    readTime: '1 min read',
    lines: [
      'Below me, the streets keep arguing with time.',
      'Above me, the moon is a patient witness.',
      'I lean against the parapet of the night,',
      'counting lights like reasons to stay gentle.',
      'Solitude is not empty here;',
      'it is a room with a better view.',
    ],
    tags: ['night', 'city', 'solitude'],
    theme: {
      accent: '#818cf8',
      glow: 'rgba(129, 140, 248, 0.22)',
      surface: 'linear-gradient(180deg, rgba(12, 13, 28, 0.96), rgba(21, 23, 52, 0.96))',
      text: '#e0e7ff',
    },
  },
  {
    id: 'in-the-temple-courtyard',
    title: 'In the Temple Courtyard',
    category: 'Memory',
    excerpt: 'Prayer bells, pigeons, and dust carried the old afternoon back into my hands.',
    readTime: '2 min read',
    lines: [
      'The courtyard kept its patience like a saint,',
      'collecting footsteps and incense in equal measure.',
      'Pigeons lifted from the stone as if remembering flight,',
      'and the bell answered with a sound older than worry.',
      'I touched the wall and felt a thousand departures,',
      'each one leaving a little light behind.',
    ],
    tags: ['temple', 'memory', 'heritage'],
    theme: {
      accent: '#fb7185',
      glow: 'rgba(251, 113, 133, 0.24)',
      surface: 'linear-gradient(180deg, rgba(28, 13, 18, 0.96), rgba(49, 18, 27, 0.96))',
      text: '#ffe4e6',
    },
  },
  {
    id: 'under-the-same-sky',
    title: 'Under the Same Sky',
    category: 'Connection',
    excerpt: 'Distance looks smaller when the sky is the same over both of us.',
    readTime: '1 min read',
    lines: [
      'We live on opposite sides of a map,',
      'but the clouds do not know where to divide themselves.',
      'Evening arrives in our windows at different hours,',
      'yet the stars keep their appointments.',
      'I keep this small truth like a coin in my pocket:',
      'some things touch us without touching us.',
    ],
    tags: ['distance', 'connection', 'sky'],
    theme: {
      accent: '#67e8f9',
      glow: 'rgba(103, 232, 249, 0.22)',
      surface: 'linear-gradient(180deg, rgba(8, 20, 24, 0.96), rgba(14, 36, 42, 0.96))',
      text: '#cffafe',
    },
  },
  {
    id: 'small-things-that-stay',
    title: 'Small Things That Stay',
    category: 'Memory',
    excerpt: 'The small things keep the shape of the life that held them.',
    readTime: '1 min read',
    lines: [
      'A folded receipt, a chipped mug, a train of keys,',
      'all the minor gods of an ordinary room.',
      'I used to call them clutter,',
      'until I learned how memory hides in plain sight.',
      'What leaves us is often loud;',
      'what stays is what teaches us how to return.',
    ],
    tags: ['memory', 'objects', 'home'],
    theme: {
      accent: '#facc15',
      glow: 'rgba(250, 204, 21, 0.22)',
      surface: 'linear-gradient(180deg, rgba(28, 23, 9, 0.96), rgba(47, 38, 11, 0.96))',
      text: '#fef9c3',
    },
  },
];

const randomQuotes = [
  { quote: 'A poem is a small architecture for surviving the weather of being alive.', source: 'Bijesh Raj Sharma' },
  { quote: 'The best lines are usually borrowed from silence and returned as light.', source: 'Bijesh Raj Sharma' },
  { quote: 'Write until the page begins to recognize your heartbeat.', source: 'Bijesh Raj Sharma' },
  { quote: 'Memory is just a poem that has not finished arriving.', source: 'Bijesh Raj Sharma' },
  { quote: 'Every day carries one hidden stanza if you are willing to look for it.', source: 'Bijesh Raj Sharma' },
  { quote: 'I write to keep the rain, the road, and the room from forgetting me.', source: 'Bijesh Raj Sharma' },
];

const journey = [
  { year: '2019', title: 'First notebook', description: 'Started writing short reflections and image-driven lines in a school notebook.' },
  { year: '2021', title: 'Poems in motion', description: 'Travel notes and city walks became the backbone of longer lyrical pieces.' },
  { year: '2023', title: 'Blog and visibility', description: 'Shared poems online and shaped a personal voice around Nepal, memory, and place.' },
  { year: '2026', title: 'Digital poetry space', description: 'Built a dedicated portfolio route with filters, reading mode, and interactive poem cards.' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/bijesh2016', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bijeshsharma/', icon: Linkedin },
  { label: 'Email', href: 'mailto:probjs11@gmail.com', icon: Mail },
];

const featuredPoemId = 'kathmandu-after-rain';
const favoriteKey = 'bijesh-poetry-favorites';

const AppShowcase = () => {
  const { toast } = useToast();
  const featuredPoem = poems.find((poem) => poem.id === featuredPoemId) ?? poems[0];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [readingMode, setReadingMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') {
      return new Set();
    }

    try {
      const stored = window.localStorage.getItem(favoriteKey);
      return new Set<string>(stored ? (JSON.parse(stored) as string[]) : []);
    } catch {
      return new Set();
    }
  });
  const readerRef = useRef<HTMLDivElement | null>(null);

  const randomQuote = useMemo(
    () => randomQuotes[Math.floor(Math.random() * randomQuotes.length)],
    []
  );

  const categories = useMemo(() => {
    const values = Array.from(new Set(poems.map((poem) => poem.category)));
    return ['All', ...values];
  }, []);

  const filteredPoems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return poems.filter((poem) => {
      const matchesCategory = activeCategory === 'All' || poem.category === activeCategory;
      const searchSource = [poem.title, poem.category, poem.excerpt, poem.tags.join(' '), poem.lines.join(' ')].join(' ').toLowerCase();
      const matchesSearch = query.length === 0 || searchSource.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const recentPoems = useMemo(() => poems.slice(0, 6), []);

  const statsTargets = useMemo(() => {
    const totalWords = poems.reduce((total, poem) => {
      return (
        total +
        poem.lines.join(' ').split(/\s+/).filter(Boolean).length +
        poem.excerpt.split(/\s+/).filter(Boolean).length
      );
    }, 0);

    return {
      poems: poems.length,
      themes: categories.length - 1,
      favorites: favorites.size,
      words: totalWords,
    };
  }, [categories.length, favorites]);

  const [animatedStats, setAnimatedStats] = useState(statsTargets);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const duration = 900;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        poems: Math.round(statsTargets.poems * eased),
        themes: Math.round(statsTargets.themes * eased),
        favorites: Math.round(statsTargets.favorites * eased),
        words: Math.round(statsTargets.words * eased),
      });

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [statsTargets]);

  useEffect(() => {
    window.localStorage.setItem(favoriteKey, JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const poem = poems.find((item) => item.id === hash);
    if (poem) {
      setSelectedPoem(poem);
    }
  }, []);

  useEffect(() => {
    if (selectedPoem) {
      setReadingProgress(0);
      setReadingMode(false);
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${selectedPoem.id}`);
      window.requestAnimationFrame(() => {
        if (readerRef.current) {
          readerRef.current.scrollTop = 0;
        }
      });
      return;
    }

    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }, [selectedPoem]);

  const toggleFavorite = (poemId: string) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(poemId)) {
        next.delete(poemId);
        toast({ title: 'Removed from favorites', description: 'The poem was removed from your saved list.' });
      } else {
        next.add(poemId);
        toast({ title: 'Saved to favorites', description: 'The poem was added to your saved list.' });
      }
      return next;
    });
  };

  const openPoem = (poem: Poem) => {
    setSelectedPoem(poem);
  };

  const closePoem = () => {
    setSelectedPoem(null);
    setReadingProgress(0);
  };

  const copyPoem = async (poem: Poem) => {
    const text = `${poem.title}\n\n${poem.lines.join('\n')}\n\n— Bijesh Raj Sharma`;
    await navigator.clipboard.writeText(text);
    toast({ title: 'Poem copied', description: 'The poem text was copied to your clipboard.' });
  };

  const sharePoem = async (poem: Poem) => {
    const url = `${window.location.origin}${window.location.pathname}#${poem.id}`;
    const shareData = {
      title: poem.title,
      text: poem.excerpt,
      url,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(`${poem.title}\n${poem.excerpt}\n${url}`);
    toast({ title: 'Link copied', description: 'Sharing is not supported here, so the link was copied instead.' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onReaderScroll = () => {
    const container = readerRef.current;
    if (!container) return;

    const maxScroll = container.scrollHeight - container.clientHeight;
    const progress = maxScroll > 0 ? (container.scrollTop / maxScroll) * 100 : 0;
    setReadingProgress(Math.min(100, Math.max(0, progress)));
  };

  const readerTheme = selectedPoem
    ? {
        background: readingMode ? '#f5efe2' : selectedPoem.theme.surface,
        color: readingMode ? '#1c1812' : selectedPoem.theme.text,
        borderColor: readingMode ? 'rgba(120, 95, 53, 0.22)' : 'rgba(255, 255, 255, 0.08)',
      }
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.08),transparent_22%),radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.07),transparent_20%)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-background/55 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tech-gradient text-primary-foreground shadow-glow-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">Bijesh Raj Sharma</div>
              <div className="text-sm font-semibold">Poetry Portfolio</div>
            </div>
          </button>

          <nav className="hidden xl:flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-3 py-2 backdrop-blur-xl">
            {[
              ['Home', 'home'],
              ['Featured', 'featured'],
              ['Poems', 'poems'],
              ['About', 'about-writing'],
              ['Journey', 'journey'],
              ['Recent', 'recent'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-primary/8"
              >
                {label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection('poems')}
            className="rounded-full bg-tech-gradient px-5 shadow-glow-primary hover:scale-[1.02] transition-transform"
          >
            Explore Poems
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="section-shell relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.16),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.12),transparent_24%)]" />
          <div className="absolute top-24 left-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-glow-pulse" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr] items-center">
              <div className="space-y-8 animate-fade-in-up">
                <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary shadow-glow-primary">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Single-page poetry portfolio
                </Badge>

                <div className="space-y-5">
                  <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                    Poetry, memory, and Nepal told through a modern digital reading space.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                    A curated home for Bijesh's poems with premium visuals, filters, favorites, reading mode,
                    and a dedicated full-screen reading experience for every piece.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    onClick={() => openPoem(featuredPoem)}
                    className="rounded-full bg-tech-gradient px-6 shadow-glow-primary hover:scale-[1.02] transition-transform"
                  >
                    Read Featured Poem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('about-writing')}
                    className="rounded-full border-primary/30 px-6 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    About My Writing
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {[
                    { label: 'Poems', value: animatedStats.poems },
                    { label: 'Themes', value: animatedStats.themes },
                    { label: 'Favorites', value: animatedStats.favorites },
                    { label: 'Words', value: animatedStats.words },
                  ].map((item) => (
                    <Card key={item.label} className="glass-panel rounded-3xl p-5">
                      <div className="text-3xl font-bold text-primary">{item.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.label}</div>
                    </Card>
                  ))}
                </div>

                <Card className="glass-panel rounded-[2rem] p-6 lg:p-7">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Quote className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg leading-8 text-foreground/90 md:text-xl">
                        {randomQuote.quote}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">{randomQuote.source}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative animate-scale-in">
                <div className="absolute inset-0 rounded-[2.5rem] bg-tech-gradient blur-3xl opacity-30" />
                <Card className="glass-panel relative overflow-hidden rounded-[2.5rem] p-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.15),transparent_40%)]" />
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary">
                        Featured poem
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock3 className="h-4 w-4" />
                        {featuredPoem.readTime}
                      </div>
                    </div>

                    <div className="mt-8 space-y-5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {featuredPoem.category}
                      </div>
                      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{featuredPoem.title}</h2>
                      <p className="text-lg leading-8 text-muted-foreground">{featuredPoem.excerpt}</p>

                      <div className="space-y-3 rounded-3xl border border-white/10 bg-background/40 p-5 backdrop-blur-sm">
                        {featuredPoem.lines.slice(0, 4).map((line) => (
                          <p key={line} className="text-base leading-8 text-foreground/90">
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {featuredPoem.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <Button
                          onClick={() => openPoem(featuredPoem)}
                          className="rounded-full bg-tech-gradient px-6 shadow-glow-primary hover:scale-[1.02] transition-transform"
                        >
                          Read full poem
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => toggleFavorite(featuredPoem.id)}
                          className="rounded-full border-white/15 px-6 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Heart className="mr-2 h-4 w-4" fill={favorites.has(featuredPoem.id) ? 'currentColor' : 'none'} />
                          {favorites.has(featuredPoem.id) ? 'Saved' : 'Save'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="glass-panel rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/40 px-4 py-3">
                  <Search className="h-4 w-4 text-primary" />
                  <Input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search poems, themes, or lines..."
                    className="border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="h-4 w-4 text-primary" />
                    Filter by category
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {filteredPoems.length} poems shown · {favorites.size} saved
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                {categories.map((category) => {
                  const active = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                        active
                          ? 'border-primary/30 bg-primary text-primary-foreground shadow-glow-primary'
                          : 'border-border/60 bg-background/40 text-muted-foreground hover:border-primary/20 hover:text-primary'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary mb-4">
                  Featured poem
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A poem worth pausing for</h2>
              </div>
              <Button variant="ghost" onClick={() => openPoem(featuredPoem)} className="hidden rounded-full md:inline-flex">
                Open reader
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="glass-panel overflow-hidden rounded-[2rem] border-white/10">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div
                  className="p-8 md:p-10"
                  style={{
                    background: featuredPoem.theme.surface,
                    color: featuredPoem.theme.text,
                  } as CSSProperties}
                >
                  <Badge className="rounded-full bg-white/10 px-4 py-2 text-white/90">
                    {featuredPoem.category}
                  </Badge>
                  <h3 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">{featuredPoem.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">{featuredPoem.excerpt}</p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      onClick={() => openPoem(featuredPoem)}
                      className="rounded-full bg-white text-slate-950 hover:bg-white/90"
                    >
                      Read now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toggleFavorite(featuredPoem.id)}
                      className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-slate-950"
                    >
                      <Bookmark className="mr-2 h-4 w-4" fill={favorites.has(featuredPoem.id) ? 'currentColor' : 'none'} />
                      Favorite
                    </Button>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="grid gap-4">
                    {featuredPoem.lines.map((line, index) => (
                      <div
                        key={line}
                        className="rounded-2xl border border-border/60 bg-background/40 p-4 text-sm leading-8 transition-transform duration-300 hover:-translate-y-1"
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="poems" className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary mb-4">
                  Poem library
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Masonry grid of poems</h2>
              </div>
              <div className="text-sm text-muted-foreground">
                Click any card to open the full reading view.
              </div>
            </div>

            {filteredPoems.length === 0 ? (
              <Card className="glass-panel rounded-[2rem] p-10 text-center text-muted-foreground">
                No poems match your search or filter.
              </Card>
            ) : (
              <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
                {filteredPoems.map((poem) => {
                  const isFavorite = favorites.has(poem.id);
                  const cardStyle: CSSProperties = {
                    background: poem.theme.surface,
                    color: poem.theme.text,
                    boxShadow: `0 24px 70px ${poem.theme.glow}`,
                    borderColor: poem.theme.accent,
                  };

                  return (
                    <Card
                      key={poem.id}
                      className="group mb-6 break-inside-avoid overflow-hidden rounded-[1.75rem] border p-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                      style={cardStyle}
                    >
                      <button onClick={() => openPoem(poem)} className="block w-full text-left">
                        <div className="p-5">
                          <div className="flex items-center justify-between gap-4">
                            <Badge className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                              {poem.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-xs text-white/60">
                              <Clock3 className="h-4 w-4" />
                              {poem.readTime}
                            </div>
                          </div>

                          <div className="mt-5 flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                                {poem.title}
                              </h3>
                              <p className="mt-3 text-sm leading-7 text-white/75">{poem.excerpt}</p>
                            </div>
                            <div
                              className="rounded-2xl border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                              style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                            >
                              {poem.category.slice(0, 3)}
                            </div>
                          </div>

                          <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-black/10 p-4">
                            {poem.lines.slice(0, 3).map((line) => (
                              <p key={line} className="text-sm leading-7 text-white/85">
                                {line}
                              </p>
                            ))}
                          </div>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {poem.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </button>

                      <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                        <button onClick={() => toggleFavorite(poem.id)} className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
                          <Heart className="h-4 w-4" fill={isFavorite ? 'currentColor' : 'none'} />
                          {isFavorite ? 'Saved' : 'Save'}
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyPoem(poem)}
                            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label={`Copy ${poem.title}`}
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => sharePoem(poem)}
                            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label={`Share ${poem.title}`}
                          >
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,hsl(var(--primary)/0.18),hsl(var(--accent)/0.12),hsl(var(--background)))] p-8 md:p-12">
              <div className="max-w-4xl">
                <Badge className="rounded-full bg-white/10 px-4 py-2 text-white/90">Random quote</Badge>
                <div className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  <Quote className="mb-4 h-10 w-10 text-primary" />
                  {randomQuote.quote}
                </div>
                <div className="mt-6 text-sm uppercase tracking-[0.28em] text-muted-foreground">
                  {randomQuote.source}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-writing" className="section-shell py-16 md:py-20 bg-secondary/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.08),transparent_25%)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-10 text-center">
              <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary mb-4">
                About my writing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The voice behind the poems</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] items-center">
              <Card className="glass-panel rounded-[2rem] p-0 overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[360px]">
                    <img src={profileImage} alt="Bijesh Raj Sharma" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute left-5 bottom-5 rounded-full border border-white/10 bg-background/50 px-4 py-2 text-sm backdrop-blur-md">
                      Bijesh Raj Sharma
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-2xl font-semibold">About My Writing</h3>
                    <p className="mt-4 leading-8 text-muted-foreground">
                      My writing moves between Nepal's landscapes, everyday moments, memory, and the small
                      emotional details that usually go unnoticed. I like poems that feel visual, honest, and
                      easy to return to, like a place you have already loved once.
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {['Image-driven lines', 'Travel and place', 'Memory and longing', 'Quiet emotional tone'].map((item) => (
                        <div key={item} className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-muted-foreground">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <Card className="glass-panel rounded-[2rem] p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <SunMedium className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Writing mood</h3>
                  </div>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    I usually write at night, or in the quiet after movement. The best lines often come from
                    ordinary scenes - rain on roads, mountain air, a cup of tea, or a bus window at dusk.
                  </p>
                </Card>

                <Card className="glass-panel rounded-[2rem] p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">What keeps returning</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {['Nepal', 'rain', 'roads', 'memory', 'city light', 'mountains'].map((item) => (
                      <Badge key={item} variant="outline" className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-muted-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mb-10 text-center">
              <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary mb-4">
                Writing journey
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A vertical timeline of the journey</h2>
            </div>

            <div className="mx-auto max-w-4xl space-y-6">
              {journey.map((entry, index) => (
                <div key={entry.year} className="grid gap-4 md:grid-cols-[120px_1fr] items-start">
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:pt-3">
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      {entry.year}
                    </div>
                    {index !== journey.length - 1 && <div className="hidden h-16 w-px bg-border/70 md:block" />}
                  </div>
                  <Card className="glass-panel rounded-[1.75rem] p-6 md:p-7">
                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                    <p className="mt-3 leading-8 text-muted-foreground">{entry.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recent" className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary mb-4">
                  Recent poems
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Horizontal slider</h2>
              </div>
              <div className="text-sm text-muted-foreground">Swipe or scroll to browse recent writing.</div>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
              {recentPoems.map((poem) => (
                <Card key={poem.id} className="glass-panel min-w-[310px] max-w-[310px] snap-start overflow-hidden rounded-[1.75rem] border-white/10">
                  <div
                    className="h-24"
                    style={{
                      background: poem.theme.surface,
                    }}
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <Badge className="rounded-full bg-primary/10 px-3 py-1 text-primary">{poem.category}</Badge>
                      <Clock3 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{poem.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{poem.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <button onClick={() => openPoem(poem)} className="text-sm font-medium text-primary hover:underline">
                        Read poem
                      </button>
                      <button onClick={() => toggleFavorite(poem.id)} className="text-muted-foreground transition-colors hover:text-primary">
                        <Heart className="h-4 w-4" fill={favorites.has(poem.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative border-t border-white/10 bg-background/70 py-12 backdrop-blur-xl">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tech-gradient text-primary-foreground shadow-glow-primary">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">Bijesh Raj Sharma</div>
                    <div className="text-lg font-semibold">Poetry portfolio</div>
                  </div>
                </div>

                <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                  A single-page poetry portfolio built to present writing, reading, and discovery in a modern,
                  premium format with favorites, sharing, and a dedicated reader.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6 md:p-8">
                <h3 className="text-2xl font-semibold">Quick links</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Home', 'home'],
                    ['Featured', 'featured'],
                    ['Poems', 'poems'],
                    ['About', 'about-writing'],
                    ['Journey', 'journey'],
                    ['Recent', 'recent'],
                  ].map(([label, id]) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span>{label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <Dialog open={Boolean(selectedPoem)} onOpenChange={(open) => !open && closePoem()}>
        {selectedPoem && readerTheme && (
          <DialogContent
            className={`h-[92vh] max-w-6xl overflow-hidden border-0 p-0 ${readingMode ? 'bg-[#f5efe2] text-[#1c1812]' : 'bg-[#090b14] text-[#f8fafc]'}`}
            style={{
              background: readerTheme.background,
              color: readerTheme.color,
              borderColor: readerTheme.borderColor,
            }}
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-white/10">
                <div
                  className="h-full rounded-r-full bg-tech-gradient transition-[width] duration-150"
                  style={{ width: `${readingProgress}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">Full reading page</div>
                  <h3 className="mt-2 text-2xl font-semibold">{selectedPoem.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => setReadingMode((current) => !current)} className={`rounded-full ${readingMode ? 'border-slate-300 bg-white text-slate-900' : 'border-white/10 bg-white/5 text-inherit hover:bg-white/10'}`}>
                    <SunMedium className="mr-2 h-4 w-4" />
                    {readingMode ? 'Exit reading mode' : 'Reading mode'}
                  </Button>
                  <Button variant="outline" onClick={() => copyPoem(selectedPoem)} className={`rounded-full ${readingMode ? 'border-slate-300 bg-white text-slate-900' : 'border-white/10 bg-white/5 text-inherit hover:bg-white/10'}`}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button variant="outline" onClick={() => sharePoem(selectedPoem)} className={`rounded-full ${readingMode ? 'border-slate-300 bg-white text-slate-900' : 'border-white/10 bg-white/5 text-inherit hover:bg-white/10'}`}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              <div ref={readerRef} onScroll={onReaderScroll} className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8">
                <DialogHeader className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className={`rounded-full px-4 py-2 ${readingMode ? 'bg-black/5 text-[#1c1812]' : 'bg-white/10 text-white/80'}`}>
                      {selectedPoem.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock3 className="h-4 w-4" />
                      {selectedPoem.readTime}
                    </div>
                    <button onClick={() => toggleFavorite(selectedPoem.id)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${favorites.has(selectedPoem.id) ? (readingMode ? 'border-slate-300 bg-white text-slate-900' : 'border-white/20 bg-white/10 text-white') : (readingMode ? 'border-slate-300 bg-transparent text-[#1c1812]' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10')}`}>
                      <Heart className="h-4 w-4" fill={favorites.has(selectedPoem.id) ? 'currentColor' : 'none'} />
                      {favorites.has(selectedPoem.id) ? 'Saved' : 'Save'}
                    </button>
                  </div>
                  <DialogTitle className={`text-4xl font-bold tracking-tight md:text-6xl ${readingMode ? 'text-[#1c1812]' : 'text-white'}`}>
                    {selectedPoem.title}
                  </DialogTitle>
                  <DialogDescription className={`max-w-3xl text-lg leading-8 ${readingMode ? 'text-[#5b4f40]' : 'text-white/70'}`}>
                    {selectedPoem.excerpt}
                  </DialogDescription>
                </DialogHeader>

                <div className={`mt-10 grid gap-6 lg:grid-cols-[1fr_320px] ${readingMode ? 'text-[#1c1812]' : 'text-white'}`}>
                  <article className={`rounded-[2rem] border p-6 md:p-8 ${readingMode ? 'border-[#d8c8aa] bg-white/70' : 'border-white/10 bg-white/5 backdrop-blur-xl'}`}>
                    <div className="space-y-5 text-lg leading-9 md:text-xl md:leading-10">
                      {selectedPoem.lines.map((line) => (
                        <p key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </article>

                  <aside className={`space-y-4 rounded-[2rem] border p-6 md:p-8 ${readingMode ? 'border-[#d8c8aa] bg-white/70' : 'border-white/10 bg-white/5 backdrop-blur-xl'}`}>
                    <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">Poem notes</div>
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <div className="text-sm text-muted-foreground">Reading progress</div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                          <div className="h-full rounded-full bg-tech-gradient" style={{ width: `${readingProgress}%` }} />
                        </div>
                        <div className="mt-2 text-sm font-medium">{Math.round(readingProgress)}%</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <div className="text-sm text-muted-foreground">Tags</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedPoem.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-current">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <div className="text-sm text-muted-foreground">Actions</div>
                        <div className="mt-3 flex flex-col gap-3">
                          <Button onClick={() => copyPoem(selectedPoem)} className="rounded-full bg-tech-gradient shadow-glow-primary">
                            <Copy className="mr-2 h-4 w-4" />
                            Copy poem
                          </Button>
                          <Button variant="outline" onClick={() => sharePoem(selectedPoem)} className={`${readingMode ? 'border-[#d8c8aa] text-[#1c1812]' : 'border-white/10 bg-white/5 text-inherit hover:bg-white/10'} rounded-full`}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Share poem
                          </Button>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default AppShowcase;