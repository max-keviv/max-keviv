import { Card } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      description: "Leading development of modern web applications using React, Node.js, and cloud technologies."
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      description: "Built scalable web applications and contributed to architectural decisions for client projects."
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Developed responsive and interactive user interfaces with modern JavaScript frameworks."
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "StartupCo",
      description: "Started my professional journey building features and learning best practices in web development."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 nebula-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="cosmic-gradient bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal story */}
            <div className="space-y-6 animate-slide-up">
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey in software development began with a curiosity about how things work behind the scenes. 
                    What started as tinkering with simple websites has evolved into a passion for building sophisticated, 
                    user-centered applications.
                  </p>
                  <p>
                    I specialize in full-stack development, with expertise in modern JavaScript frameworks, 
                    cloud technologies, and creating seamless user experiences. I believe in writing clean, 
                    maintainable code and following best practices.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </Card>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
              </div>
            </div>

            {/* Experience timeline */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Experience Timeline</h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="glass-card p-6 hover:glow-effect transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 cosmic-gradient rounded-full flex items-center justify-center text-white font-bold">
                          {exp.year.slice(-2)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;