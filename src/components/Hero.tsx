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

      {/* Modern gradient circle with noise */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10">
        <div className="relative w-40 h-40 md:w-48 md:h-48 animate-float">
          {/* Outer glow layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-20 blur-3xl animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-accent via-primary to-accent opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Main gradient circle with glassmorphism */}
          <div className="absolute inset-8 rounded-full backdrop-blur-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 border border-white/20 shadow-glow overflow-hidden">
            {/* Noise texture overlay */}
            <div className="absolute inset-0 noise-texture opacity-50" />
            
            {/* Inner gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Animated gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-md animate-spin-slow" />
          </div>

          {/* Inner core glow */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="section-padding w-full max-w-7xl mx-auto mt-40 md:mt-48">
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
            <Button size="lg" variant="outline" className="glass-effect hover:bg-primary/10 rounded-full border-white/30">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
