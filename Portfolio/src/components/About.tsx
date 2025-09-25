import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate Software Engineering student specializing in
              modern web technologies and digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Card */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mb-6 mx-auto flex items-center justify-center text-4xl font-bold transition-transform duration-300 hover:scale-110 shadow-xl">
                    SNT
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
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

                  <div className="mt-6 flex justify-center overflow-x-auto">
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          4+
                        </div>
                        <div className="text-sm text-gray-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-purple-400">
                          5th
                        </div>
                        <div className="text-sm text-gray-500">Semester</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-400">
                          4+
                        </div>
                        <div className="text-sm text-gray-500">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:border-blue-500/50 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
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
