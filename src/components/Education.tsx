import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "Bachelor in Information Management  ",
      institution: "Nepal Commerce Campus, Minbhawan , Kathmandu",
      location: "Nepal",
      period: "2020 - 2024",
      description: "Focused on software development, algorithms, and web technologies. Built various projects as part of coursework and Internship and various management courses ",
      gpa: "CGPA: 3.70"
    },
    {
      degree: "Higher Secondary Education (+2)",
      institution: "Seabird International College",
      location: "Nepal",
      period: "2018 - 2020",
      description: "Management Stream with accounts, Economics, Computer Science, English, Nepali, and Maths. Developed interest in programming during this time.",
      gpa: "Grade: A+"
    }
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      issuer: "Udemy",
      year: "2023",
      description: "Comprehensive course covering MongoDB, Express.js, React.js, and Node.js with hands-on projects."
    },
    {
      name: "React.js Advanced Concepts",
      issuer: "Coursera",
      year: "2023",
      description: "Advanced React patterns, hooks, state management, and performance optimization techniques."
    },
    {
      name: "Web Development Fundamentals",
      issuer: "freeCodeCamp",
      year: "2022",
      description: "HTML, CSS, JavaScript, and responsive web design fundamentals."
    }
  ];

  return (
    <section id="education" className="section-shell py-20 bg-gradient-to-b from-transparent via-accent/5 to-transparent relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(24 95% 53% / 0.06),transparent_35%)]"></div>
      <div className="absolute -top-20 right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float delay-1000"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm text-primary mb-6 shadow-md">
            <GraduationCap className="w-4 h-4" />
            Education & Certifications
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic background and certifications that helped me grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {/* Education */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary animate-pulse-soft" />
              Academic Background
            </h3>
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="group border border-primary/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-primary font-semibold">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium w-fit hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:scale-105">
                      <Award className="w-4 h-4" />
                      {edu.gpa}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent animate-pulse-soft" />
              Certifications
            </h3>
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group border border-accent/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors group-hover:translate-x-1 transition-transform duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-primary font-semibold">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
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
