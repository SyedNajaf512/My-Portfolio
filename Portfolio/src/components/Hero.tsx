import React from 'react';
import { ArrowDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 animate-gradient-shift"></div>

      {/* Simple Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Optimized Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple Floating Shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-lg animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}

        {/* Simple Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/6 animate-float-icon"
          style={{ animationDelay: '0s' }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
        </div>

        <div
          className="absolute top-1/3 right-1/5 animate-float-icon"
          style={{ animationDelay: '2s' }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
            <Palette className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div
          className="absolute bottom-1/3 left-1/5 animate-float-icon"
          style={{ animationDelay: '4s' }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-pink-400/30">
            <Zap className="w-8 h-8 text-pink-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up">
              <span className="block text-4xl md:text-6xl lg:text-8xl text-white animate-text-shimmer">
                Hello, I'm
              </span>
              <span className="block text-4xl md:text-6xl lg:text-8xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-rainbow-gradient">
                Syed Najaf Turab
              </span>
            </h1>

            <p className="text-lg md:text-2xl lg:text-3xl text-cyan-300 mb-10 animate-fade-in-up animation-delay-200">
              SNT - Software Engineer & Full-Stack Developer
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed px-4">
              I create innovative web solutions, AI-powered content, and
              comprehensive digital marketing strategies that drive results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
            <button className="group relative px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-400/30 text-sm md:text-base">
              <a
                href="https://github.com/SyedNajaf512"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">View My Work</span>
              </a>
            </button>

            <a href="CV.pdf" download>
              <button className="group relative overflow-hidden px-6 md:px-10 py-3 md:py-5 border border-cyan-400/50 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 text-sm md:text-base">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="w-8 h-8 text-cyan-400 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
