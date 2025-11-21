import { Code, Smartphone, Cloud, BarChart } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built with cutting-edge technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to power your digital transformation.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Transform data into actionable insights with advanced analytics and visualization.",
  },
];

export default Services;
