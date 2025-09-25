// ...existing code...
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hotel Management System",
      description: "A complete full-stack hotel booking and management system featuring user registration, login system, hotel booking interface, comprehensive admin dashboard for managing bookings and users, real-time statistics, and interactive forums for guest communication.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/SyedNajaf512/Hotel-management-Project-With-Attach-Database-Sql",
      demo: "#" // Add a valid demo link if available
    },
    {
      title: "MERN Website",
      description: "Currently developing comprehensive full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Building complete applications from scratch with modern development practices and responsive design. Under Development.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio",
      description: "Collection of responsive and visually stunning websites created using modern web technologies. Includes landing pages, business portfolios, and small business sites with engaging UI/UX design and cross-browser compatibility. The one you are looking at is also an example.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML/CSS", "React", "UI/UX Design", "Responsive Design"],
    
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Simple Background Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`project-shape-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div
              className="w-6 h-6 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg"
              style={{
                borderRadius: i % 2 === 0 ? '50%' : '0',
              }}
            ></div>
          </div>
        ))}

        {/* Simple Background Gradients */}
        <div className="absolute top-1/3 left-1/8 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-simple"></div>
        <div className="absolute bottom-1/4 right-1/8 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-simple animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-rainbow-gradient">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
              Explore my diverse portfolio of projects spanning full-stack development, desktop applications, AI integration, and modern web design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/60 rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 relative backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-6">
                      <a
                        href={project.github}
                        className="p-3 md:p-4 bg-gray-900/90 backdrop-blur-sm rounded-xl text-white hover:bg-cyan-600 transition-all duration-300 border border-cyan-400/30"
                      >
                        <Github className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-3 md:p-4 bg-gray-900/90 backdrop-blur-sm rounded-xl text-white hover:bg-purple-600 transition-all duration-300 border border-purple-400/30"
                      >
                        <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8 lg:p-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8 group-hover:text-gray-200 transition-colors leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 md:px-4 py-2 bg-gray-700/80 text-xs md:text-sm rounded-lg text-gray-200 group-hover:bg-cyan-500/30 group-hover:text-cyan-100 transition-all duration-300 border border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4 md:space-x-6">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-base font-medium"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors text-sm md:text-base font-medium"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;