import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/max-keviv",
      icon: "🐙",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/max-keviv",
      icon: "💼",
      description: "Professional network"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/max_keviv",
      icon: "🐦",
      description: "Follow my journey"
    },
    {
      name: "Email",
      url: "mailto:max@keviv.dev",
      icon: "📧",
      description: "Direct contact"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 nebula-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="cosmic-gradient bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="glass-card p-8 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full cosmic-gradient text-white font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact info and social links */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {/* Contact info */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm always open to discussing new opportunities, creative projects, 
                    or just having a conversation about technology and development.
                  </p>
                  <p>
                    Whether you're looking for a developer for your next project, 
                    want to collaborate on something exciting, or just want to say hi, 
                    I'd love to hear from you!
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <div className="flex items-center gap-3 text-foreground">
                    <span className="text-xl">📍</span>
                    <span>Available for remote work worldwide</span>
                  </div>
                </div>
              </Card>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card 
                    key={social.name}
                    className="glass-card p-6 hover:glow-effect transition-all duration-300 cursor-pointer group"
                    onClick={() => window.open(social.url, '_blank')}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
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

export default Contact;