import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projectImage = (fileName: string) => `/projects/${fileName}`;

  const projects = [
    {
      category: "Location Tech",
      title: "ATM Locator System",
      description: "Built an ATM finder that shows nearby ATMs with details like fees, reviews, and distance. Added an admin panel to manage the listings. Used the MERN stack with geolocation APIs.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Geolocation API", "Admin Dashboard"],
      image: projectImage('atm.png'),
      githubUrl: "https://github.com/bijesh2016/atm-locator",
      liveUrl: "https://www.nepdial.com"
    },
    {
      category: "Events",
      title: "Event Ticketing Platform",
      description: "A ticket booking system for events. Organizers can create events, users can book seats, and payments go through Khalti or Stripe. Built separate dashboards for organizers and users.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "Khalti", "Payment Gateway", "Seat Management"],
      image: projectImage('event-ticketing.svg'),
      githubUrl: "https://github.com/bijesh2016/event-ticketing",
      liveUrl: "https://event.bijeshrajsharma.com.np"
    },
    {
      category: "Travel Blog",
      title: "Tourism Blog Platform (Nepal Edition)",
      description: "A blog about travel destinations in Nepal. Admins can add posts with images, and visitors can search and browse by category. Added SEO basics to help with visibility.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "SEO Optimization", "Image Upload", "Content Management"],
      image: projectImage('tourism.png'),
      githubUrl: "https://github.com/bijesh2016/tourism-blog",
      liveUrl: "https://tourism.bijeshrajsharma.com.np"
    },
    {
      category: "Hospitality",
      title: "Hotel Reservation System",
      description: "Hotel booking site where users can check room availability, filter by dates, and make reservations. Added authentication for users and booking confirmations. Planning to add payments later.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Date Filtering", "Booking System", "Authentication"],
      image: projectImage('hotel.jpg'),
      githubUrl: "https://github.com/bijesh2016/hotel-reservation",
      liveUrl: "https://hotel.bijeshrajsharma.com.np"
    },
    {
      category: "Ecommerce",
      title: "Grocery Store E-Commerce Platform",
      description: "An online grocery store with product search, cart, and checkout. Added an admin panel to manage products and inventory. Full shopping experience from browse to buy.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Shopping Cart", "Admin Panel", "Product Management"],
      image: projectImage('grocery.png'),
      githubUrl: "https://github.com/bijesh2016/grocery-store",
      liveUrl: "https://shop.bijeshrajsharma.com.np"
    },
    {
      category: "Security",
      title: "Authentication System",
      description: "A secure login/signup system using JWT for authentication and bcrypt for password hashing. Added form validation with Yup. This is what I use as a starting point for most of my apps.",
      technologies: ["React.js", "Node.js", "JWT", "bcrypt", "Yup Validation", "Security", "Form Handling"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/auth-system",
      liveUrl: "https://www.bijeshrajsharma.com.np"
    },
    {
      category: "Reservations",
      title: "Event Management System",
      description: "Event booking platform where users can reserve seats, make payments, and manage their tickets. Organizers can handle multiple events from one dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Seat Booking", "Payments", "Reservations"],
      image: projectImage('event-management.png'),
      githubUrl: "https://github.com/bijesh2016/event-management",
      liveUrl: "https://event.bijeshrajsharma.com.np"
    },
    {
      category: "Discovery",
      title: "Nepdial Listing Platform",
      description: "A listing site for Nepal where you can find businesses, services, hotels, restaurants, and more. Added map integration and search to help people discover local places.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Maps Integration", "Search", "Local Listings"],
      image: projectImage('nepdial-listing.png'),
      githubUrl: "https://github.com/bijesh2016/nepdial",
      liveUrl: "https://www.nepdial.com"
    },
    {
      category: "Mobile App",
      title: "Hidden Nepal Mobile App",
      description: "A mobile app for discovering Nepal's travel spots - both popular and hidden gems. Users can plan itineraries and read guides. Built with React Native.",
      technologies: ["React Native", "Travel Content", "Itinerary Planning", "Mobile UI", "Guides", "Blog Experience"],
      image: projectImage('hidden-nepal-mobile.png'),
      githubUrl: "https://github.com/bijesh2016/hidden-nepal",
      liveUrl: "https://www.hiddennepal.com"
    },
    {
      category: "Travel Planning",
      title: "NepTrek Travel Platform",
      description: "Travel planning site for Nepal where users can book flights, buses, taxis, and build itineraries. Also has travel blogs for destination ideas.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Flights", "Bus Booking", "Itinerary Builder"],
      image: projectImage('neptrek.png'),
      githubUrl: "https://github.com/bijesh2016/neptrek",
      liveUrl: "https://travel.bijeshrajsharma.com.np"
    },
    {
      category: "World Guide",
      title: "Travelia Web App",
      description: "Informational site with travel guides for countries around the world. Covers continents, countries, and major attractions in an organized way.",
      technologies: ["React.js", "Node.js", "Travel Data", "Content Pages", "Destination Guides", "Search", "Responsive UI"],
      image: projectImage('travelia-world-guide.png'),
      githubUrl: "https://github.com/bijesh2016/travelia",
      liveUrl: "https://tourism.bijeshrajsharma.com.np"
    },
    {
      category: "Recovery",
      title: "Lost and Found System",
      description: "Lost and found platform for airports. People can post lost items, claim found ones, and there's some automation to help match items. Speeds up the recovery process.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Claims", "Verification", "Automation"],
      image: projectImage('lost-found-system.png'),
      githubUrl: "https://github.com/bijesh2016/lost-found",
      liveUrl: "https://lostfound.bijeshrajsharma.com.np"
    },
    {
      category: "Healthcare AI",
      title: "AI Medical Prescription Reader",
      description: "Built a tool that reads medical prescriptions using OCR and AI to extract medication info, dosages, and doctor notes. Helps patients understand their prescriptions better and reduces errors.",
      technologies: ["Python", "OCR", "Machine Learning", "OpenCV", "NLP", "Image Processing"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/prescription-reader",
      liveUrl: ""
    },
    {
      category: "Productivity",
      title: "Document Formatter",
      description: "A simple but useful tool for formatting documents - converts between formats, fixes formatting issues, and cleans up text. Built to solve my own document formatting headaches.",
      technologies: ["JavaScript", "Node.js", "File Processing", "Text Manipulation", "CLI Tool"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/document-formatter",
      liveUrl: ""
    },
    {
      category: "Social",
      title: "Vibe - Social Media Chat App",
      description: "A chat-based social platform where users can connect, share vibes, and have real-time conversations. Includes group chats, direct messaging, and a clean, modern UI.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Real-time Chat", "Express.js"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/vibe-chat",
      liveUrl: ""
    },
    {
      category: "Business",
      title: "SME Management System",
      description: "Designed for small and medium enterprises to manage their operations - inventory, sales, employees, and reports. Helps business owners keep track of everything in one place.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Dashboard", "Analytics"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/sme-management",
      liveUrl: ""
    },
    {
      category: "Gaming",
      title: "C++ Game with GameHub",
      description: "My attempt at game development using C++. Built a simple game and integrated it with GameHub for distribution. Challenging but learned a lot about game logic and C++.",
      technologies: ["C++", "GameHub", "Game Development", "SFML", "Game Logic"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/cpp-game",
      liveUrl: ""
    },
    {
      category: "Real Estate",
      title: "Rental Web Platform",
      description: "A rental listing website where landlords can post properties and tenants can search and filter by location, price, and amenities. Includes booking and messaging features.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Search & Filter", "Booking System"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/rental-web",
      liveUrl: ""
    },
    {
      category: "Logistics",
      title: "Truck Logistics Management",
      description: "Built a system to manage truck fleets, routes, and deliveries. Helps logistics companies track shipments, optimize routes, and manage drivers efficiently.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Route Optimization", "Fleet Management"],
      image: projectImage('auth-system.png'),
      githubUrl: "https://github.com/bijesh2016/truck-logistics",
      liveUrl: ""
    },
    {
      category: "Brand",
      title: "My Portfolio",
      description: "This portfolio you're looking at right now. Built it to showcase my work and connect with people. Always improving it as I learn new things.",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design", "Portfolio", "Personal Branding"],
      image: projectImage('bijesh-portfolio.png'),
      githubUrl: "https://github.com/bijesh2016/portfolio",
      liveUrl: "https://www.bijeshrajsharma.com.np"
    }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.12),transparent_40%),linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background)/0.96))]" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-glow-pulse" />
      <div className="container mx-auto px-6">
        <div className="relative text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm mb-6 shadow-glow-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Selected builds and concepts
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some projects I've built over time. Some are live, some are still in progress, but each one taught me something valuable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-fade-in-up motion-safe:transition-transform motion-safe:hover:-translate-y-1 ${index === 0 ? 'xl:col-span-8' : index === 1 ? 'xl:col-span-4' : index % 5 === 0 ? 'xl:col-span-6' : 'xl:col-span-4'}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ProjectCard 
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              category={project.category}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            I've got more projects on GitHub if you want to dig deeper.
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