import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-mesh bg-[length:200%_200%] animate-gradient-shift" />

      {/* Deep Blue Energy Orb */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {/* Outer deep-blue glow layers */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-60 animate-orb-pulse"
            style={{
              background: 'radial-gradient(circle, hsl(220 90% 45% / 0.8), hsl(220 90% 45% / 0.4), transparent 70%)',
              boxShadow: 'var(--orb-glow)'
            }}
          />
          <div 
            className="absolute inset-4 rounded-full blur-2xl opacity-70"
            style={{
              background: 'radial-gradient(circle, hsl(200 100% 60% / 0.6), transparent 60%)',
              animation: 'orb-pulse 4s ease-in-out infinite 0.5s'
            }}
          />
          
          {/* Main orb body with glass effect */}
          <div className="absolute inset-12 rounded-full overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Dark center with radial gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, hsl(220 50% 10%), hsl(220 90% 25%) 40%, hsl(220 90% 45%) 70%, hsl(200 100% 60%))'
              }}
            />
            
            {/* Animated rotating gradient layer */}
            <div 
              className="absolute inset-0 animate-orb-rotate opacity-80"
              style={{
                background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, hsl(200 100% 60% / 0.8) 60deg, transparent 120deg, hsl(220 90% 55% / 0.6) 240deg, transparent 300deg)',
                mixBlendMode: 'screen'
              }}
            />
            
            {/* Inner neon-blue highlight streak */}
            <div 
              className="absolute top-[20%] left-[25%] w-[35%] h-[35%] rounded-full blur-xl opacity-90 animate-orb-pulse"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(200 100% 60% / 0.9), hsl(200 100% 60% / 0.4) 50%, transparent 70%)',
                transform: 'rotate(-35deg)',
                animationDelay: '1s'
              }}
            />
            
            {/* Additional depth layer */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: 'radial-gradient(circle at 35% 35%, hsl(200 100% 70% / 0.4), transparent 50%)',
              }}
            />
            
            {/* Noise texture overlay */}
            <div className="absolute inset-0 noise-texture opacity-30 mix-blend-overlay" />
            
            {/* Glass-like edge highlight */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 25%, hsl(0 0% 100% / 0.3), transparent 40%)',
              }}
            />
          </div>

          {/* Soft shadow beneath */}
          <div 
            className="absolute inset-16 rounded-full blur-2xl opacity-40"
            style={{
              background: 'radial-gradient(circle, hsl(220 90% 20%), transparent 60%)',
              transform: 'translateY(20px)'
            }}
          />
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
