// ...existing code...

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 50 },
        
      ]
    },
    {
      title: "Backend",
      skills: [
  { name: "Node.js", level: 5 },
        { name: "PHP", level: 75 },
        { name: "MySQL", level: 85 },
  { name: "MongoDB", level: 5 }
      ]
    },
    {
      title: "Digital Marketing",
      skills: [
        { name: "SEO", level: 90 },
        { name: "Content Writing", level: 88 },
        { name: "Digital Marketing", level: 85 },
        { name: "Java", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm md:text-base text-white font-medium group-hover/skill:text-blue-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-xs md:text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out animate-skill-glow"
                          style={{ 
                            width: `${skill.level}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;