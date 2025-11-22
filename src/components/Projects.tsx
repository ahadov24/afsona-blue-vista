import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern retail solution with advanced analytics",
      category: "Web Development",
      size: "large"
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial management on the go",
      category: "Mobile App",
      size: "medium"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization and insights",
      category: "Data Science",
      size: "medium"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable enterprise cloud solutions",
      category: "DevOps",
      size: "small"
    },
    {
      title: "IoT Monitoring System",
      description: "Connected devices management platform",
      category: "IoT",
      size: "small"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management and telemedicine solution",
      category: "Healthcare",
      size: "large"
    }
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-effect hover:shadow-glow transition-all duration-300 p-6 cursor-pointer group animate-scale-in noise-texture ${getSizeClass(project.size)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary/80 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-sm text-primary/70 group-hover:text-primary transition-colors">
                  <span>View Project</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
