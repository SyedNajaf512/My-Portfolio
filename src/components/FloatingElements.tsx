import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Optimized Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Optimized Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-simple"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-simple animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-simple animation-delay-4000"></div>
      
      {/* Simple Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`geo-${i}`}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
          }}
        >
          <div
            className="w-4 h-4 bg-gradient-to-br from-cyan-400/20 to-blue-400/20"
            style={{
              borderRadius: i % 2 === 0 ? '50%' : '0',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;