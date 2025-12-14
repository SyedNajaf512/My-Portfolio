import React, { useEffect, useState, useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, semester: 0, clients: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing for speed and user experience',
    },
  ];

  // Animate stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);

          // Animate projects
          let projectCount = 0;
          const projectInterval = setInterval(() => {
            projectCount++;
            setAnimatedStats(prev => ({ ...prev, projects: projectCount }));
            if (projectCount >= 4) clearInterval(projectInterval);
          }, 100);

          // Animate semester
          let semesterCount = 0;
          const semesterInterval = setInterval(() => {
            semesterCount++;
            setAnimatedStats(prev => ({ ...prev, semester: semesterCount }));
            if (semesterCount >= 5) clearInterval(semesterInterval);
          }, 150);

          // Animate clients
          let clientCount = 0;
          const clientInterval = setInterval(() => {
            clientCount++;
            setAnimatedStats(prev => ({ ...prev, clients: clientCount }));
            if (clientCount >= 4) clearInterval(clientInterval);
          }, 120);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsVisible]);

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements with 3D effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 glass rounded-lg animate-float transform-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate Software Engineering student specializing in
              modern web technologies and digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Card with enhanced 3D effects */}
            <div className="relative group animate-slide-in-left">
              <div className="glass-glow p-8 rounded-2xl transition-all duration-500 hover:scale-105 relative transform-3d perspective-1000">
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ transform: 'translateZ(-10px)' }}></div>

                <div className="relative z-10">
                  {/* Avatar with 3D effect */}
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mb-6 mx-auto flex items-center justify-center text-4xl font-bold transition-transform duration-500 hover:scale-110 shadow-xl animate-glow-pulse transform-3d group-hover:rotate-y-6">
                    SNT
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Syed Najaf Turab
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    I am a passionate and creative Software Engineering student
                    currently in my 5th semester at NUML Faisalabad. I
                    specialize in Web Development (HTML, CSS, JavaScript), MERN
                    Full Stack Development, AI Content Writing, Digital
                    Marketing, and SEO. I have hands-on experience with Java
                    desktop applications, PHP & MySQL backend systems, and full
                    project development including design, backend, and
                    deployment.
                  </p>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mt-4">
                    I am certified by IDM Pakistan in Digital Marketing and SEO.
                    I'm committed to delivering high-quality projects with a
                    creative approach, unlimited revisions, and a focus on
                    client satisfaction. Whether it's building websites, writing
                    content, or designing full software systems, I strive to
                    provide professional and reliable services.
                    <br />
                    <br />
                    <strong>Note:</strong> The MERN stack skills are at a beginner level and
                    I am actively working to improve them.
                  </p>

                  {/* Animated Stats */}
                  <div ref={statsRef} className="mt-6 flex justify-center overflow-x-auto">
                    <div className="flex space-x-4">
                      <div className="text-center glass p-4 rounded-xl hover-lift animate-scale-up">
                        <div className="text-2xl font-bold text-blue-400 animate-bounce-in">
                          {animatedStats.projects}+
                        </div>
                        <div className="text-sm text-gray-500">Projects</div>
                      </div>
                      <div className="text-center glass p-4 rounded-xl hover-lift animate-scale-up" style={{ animationDelay: '100ms' }}>
                        <div className="text-xl md:text-2xl font-bold text-purple-400 animate-bounce-in">
                          {animatedStats.semester}th
                        </div>
                        <div className="text-sm text-gray-500">Semester</div>
                      </div>
                      <div className="text-center glass p-4 rounded-xl hover-lift animate-scale-up" style={{ animationDelay: '200ms' }}>
                        <div className="text-2xl font-bold text-pink-400 animate-bounce-in">
                          {animatedStats.clients}+
                        </div>
                        <div className="text-sm text-gray-500">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid with 3D effects */}
            <div className="space-y-6 animate-slide-in-right">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group glass-glow p-6 rounded-xl transition-all duration-500 hover:scale-105 relative transform-3d perspective-1000 animate-scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* 3D Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-5px)' }}></div>

                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-xl animate-glow-pulse transform-3d">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
