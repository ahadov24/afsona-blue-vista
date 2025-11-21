import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Siri-like animated circle */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-pulse" />
          
          {/* Middle ring */}
          <div className="absolute inset-4 rounded-full bg-gradient-primary opacity-50 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Inner core circle */}
          <div className="absolute inset-8 rounded-full bg-gradient-primary shadow-glow animate-float" />
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 shadow-glow animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="section-padding w-full max-w-7xl mx-auto mt-32 md:mt-40">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="gradient-text">Afsona Group</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
            Building tomorrow's solutions with innovative technology and forward-thinking strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-full">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/5 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
