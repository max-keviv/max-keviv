const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and description */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-display font-bold cosmic-gradient bg-clip-text text-transparent mb-2">
                Max Keviv
              </h3>
              <p className="text-muted-foreground">
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-6 text-center md:text-right">
              <a 
                href="#home" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Max Keviv. All rights reserved. 
              <span className="text-primary"> Made with ❤️ and lots of ☕</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;