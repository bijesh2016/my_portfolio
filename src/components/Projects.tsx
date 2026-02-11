import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projects = [
    {
      title: "ATM Locator System",
      description: "Real-time search of ATMs with comparison, user reviews, and an admin dashboard. Built using the MERN stack with role-based authentication and location-based services.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Geolocation API", "Admin Dashboard"],
      image: "/projects/atm.png",
      githubUrl: "https://github.com/bijesh2016/atm-locator",
      liveUrl: "#"
    },
    {
      title: "Event Ticketing Platform",
      description: "Complete system for event ticket bookings, organizer dashboards, and payment gateway integration (Khalti, Stripe). Features user and organizer portals with dynamic seat and pricing logic.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "Khalti", "Payment Gateway", "Seat Management"],
      image: "/projects/event-ticketing.png",
      githubUrl: "https://github.com/bijesh2016/event-ticketing",
      liveUrl: "#"
    },
    {
      title: "Tourism Blog Platform (Nepal Edition)",
      description: "A content-based blog platform showcasing top travel destinations of Nepal. Includes admin-managed posts, image galleries, and categorized search features. SEO optimized for better reach.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "SEO Optimization", "Image Upload", "Content Management"],
      image: "/projects/tourism.png",
      githubUrl: "https://github.com/bijesh2016/tourism-blog",
      liveUrl: "#"
    },
    {
      title: "Hotel Reservation System",
      description: "Hotel booking system with features like room availability checking, date filters, user authentication, and booking confirmation. Future-ready for integrations like payment and email notifications.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Date Filtering", "Booking System", "Authentication"],
      image: "/projects/hotel.jpg",
      githubUrl: "https://github.com/bijesh2016/hotel-reservation",
      liveUrl: "#"
    },
    {
      title: "Grocery Store E-Commerce Platform",
      description: "A mini e-commerce application for online grocery shopping with product search, cart, checkout, admin product management, and responsive UI. Complete shopping experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Shopping Cart", "Admin Panel", "Product Management"],
      image: "/projects/grocery.png",
      githubUrl: "https://github.com/bijesh2016/grocery-store",
      liveUrl: "#"
    },
    {
      title: "Authentication System",
      description: "Secure login and registration system with JWT-based authentication, password hashing with bcrypt, and client-side form validation using Yup. Foundation for secure applications.",
      technologies: ["React.js", "Node.js", "JWT", "bcrypt", "Yup Validation", "Security", "Form Handling"],
      image: "/projects/auth.png",
      githubUrl: "https://github.com/bijesh2016/auth-system",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've built while learning and mastering the MERN Stack. 
            Each project represents a step in my journey as a full-stack developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard 
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a 
            href="https://github.com/bijesh2016" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-tech-gradient text-primary-foreground rounded-lg hover:scale-105 transition-transform shadow-glow-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View All On GitHub
          </a>
        </div>
      </div>
    </section>
  );
};