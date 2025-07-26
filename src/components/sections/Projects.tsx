import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "fullstack",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "photo-1611224923853-80b023f02d71",
      technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance. Built with Next.js and Tailwind CSS.",
      image: "photo-1467232004584-a241de8bcf5d",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Clean, intuitive interface design.",
      image: "photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "Weather API", "Chart.js", "CSS Grid"],
      category: "frontend",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, and request routing. Built for high-performance applications.",
      image: "photo-1558494949-ef010cbdcc31",
      technologies: ["Node.js", "Express.js", "Redis", "JWT", "Docker"],
      category: "backend",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      image: "photo-1563013544-824ae1b704d3",
      technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
      category: "mobile",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    }
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "mobile", label: "Mobile" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 nebula-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="cosmic-gradient bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work across different technologies and domains
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setFilter(category.key)}
                variant={filter === category.key ? "default" : "outline"}
                className={filter === category.key 
                  ? "cosmic-gradient text-white" 
                  : "border-primary/30 hover:border-primary/60"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`glass-card overflow-hidden hover:glow-effect transition-all duration-500 group animate-slide-up ${
                  project.featured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/${project.image}?w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project actions - show on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="cosmic-gradient text-white">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="cosmic-gradient text-white">Featured</Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View more projects */}
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;