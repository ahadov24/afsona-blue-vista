import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Dynamic Island Navigation */}
      <nav
        className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "top-2" : "top-4"
        }`}
      >
        <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-full shadow-glow px-6 py-3 transition-all duration-300 hover:shadow-glow">
          <div className="flex items-center gap-6">
            <div className="text-lg font-bold gradient-text cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Afsona
            </div>
            <div className="w-px h-6 bg-border/50" />
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium px-3 py-1 rounded-full hover:bg-primary/10"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-full"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-full shadow-card px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold gradient-text cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Afsona
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 backdrop-blur-xl bg-card/90 border border-border/50 rounded-3xl shadow-glow p-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-full mt-2"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default Navigation;
