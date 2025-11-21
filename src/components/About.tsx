const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Who We <span className="gradient-text">Are</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Afsona Group is a leading technology company dedicated to transforming businesses through innovative solutions. With years of expertise and a commitment to excellence, we deliver cutting-edge services that drive growth and success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experts combines technical prowess with creative thinking to solve complex challenges and create meaningful impact for our clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in noise-texture"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

export default About;
