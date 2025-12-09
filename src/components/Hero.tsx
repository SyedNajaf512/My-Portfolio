import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Palette, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeoutId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Debounce mouse tracking for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background - simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>

      {/* Simple Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Gradient Orbs - only on desktop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 30}px`,
            top: `${mousePosition.y / 30}px`,
            transition: 'transform 0.5s ease-out',
            willChange: 'transform'
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x / 40}px`,
            bottom: `${mousePosition.y / 40}px`,
            transition: 'transform 0.5s ease-out',
            willChange: 'transform'
          }}
        ></div>
      </div>

      {/* Reduced Floating Elements - 4 shapes only */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 glass rounded-lg animate-float"
            style={{
              left: `${20 + i * 25}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          ></div>
        ))}

        {/* Reduced Particles - 8 only */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Simplified Floating Icons - only on desktop */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-1/6 animate-float-icon" style={{ animationDelay: '0s' }}>
          <div className="w-16 h-16 glass-glow rounded-2xl flex items-center justify-center">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
        </div>

        <div className="absolute top-1/3 right-1/5 animate-float-icon" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 glass-glow rounded-2xl flex items-center justify-center">
            <Palette className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/5 animate-float-icon" style={{ animationDelay: '4s' }}>
          <div className="w-16 h-16 glass-glow rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-pink-400" />
          </div>
        </div>

        <div className="absolute top-1/2 right-1/6 animate-float-icon" style={{ animationDelay: '3s' }}>
          <div className="w-16 h-16 glass-glow rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content with enhanced animations */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up">
              <span className="block text-4xl md:text-6xl lg:text-8xl text-white animate-text-shimmer">
                Hello, I'm
              </span>
              <span className="block text-4xl md:text-6xl lg:text-8xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-rainbow-gradient drop-shadow-glow">
                Syed Najaf Turab
              </span>
            </h1>

            <p className="text-lg md:text-2xl lg:text-3xl text-cyan-300 mb-10 animate-fade-in-up animation-delay-200 animate-text-glow">
              SNT - Software Engineer & Full-Stack Developer
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed px-4">
              I create innovative web solutions, AI-powered content, and
              comprehensive digital marketing strategies that drive results.
            </p>
          </div>

          {/* CTA Buttons - simplified */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
            <button className="group px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-400/30 text-sm md:text-base">
              <a
                href="https://github.com/SyedNajaf512"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center space-x-2">
                  <span>View My Work</span>
                  <Code className="w-4 h-4" />
                </span>
              </a>
            </button>

            <a href="CV.pdf" download>
              <button className="group px-6 md:px-10 py-3 md:py-5 glass-strong rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 text-sm md:text-base">
                <span className="flex items-center space-x-2">
                  <span>Download Resume</span>
                  <ArrowDown className="w-4 h-4" />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator with enhanced animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="glass px-4 py-2 rounded-full">
            <ArrowDown className="w-8 h-8 text-cyan-400 animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
