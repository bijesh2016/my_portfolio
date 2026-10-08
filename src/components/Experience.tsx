import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance / Self-employed",
      location: "Nepal",
      period: "2023 - Present",
      description: [
        "Building full-stack web applications using MERN stack",
        "Developed multiple projects including e-commerce, booking systems, and social platforms",
        "Working with clients to deliver custom solutions",
        "Continuously learning and improving skills in modern web technologies"
      ]
    },
    {
      title: "Junior Developer",
      company: "Tech Company",
      location: "Nepal",
      period: "2022 - 2023",
      description: [
        "Assisted in developing web applications using React and Node.js",
        "Collaborated with senior developers on various projects",
        "Learned best practices in code quality and project management",
        "Gained experience in team-based development workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="section-shell py-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(263 70% 50% / 0.06),transparent_40%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm text-primary mb-6 shadow-md">
            <Briefcase className="w-4 h-4" />
            Work Experience
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's where I've worked and what I've been doing lately.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group border border-primary/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
