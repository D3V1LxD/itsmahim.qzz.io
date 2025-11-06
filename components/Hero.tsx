'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        (layer as HTMLElement).style.transform = 
          `translate(${xPos * speed}px, ${yPos * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden parallax"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-layer absolute top-20 left-10 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="parallax-layer absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="parallax-layer absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="parallax-layer absolute top-40 right-1/4 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="parallax-layer absolute bottom-40 left-1/4 w-56 h-56 bg-cyan-500 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-fadeIn order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 rounded-full blur-2xl opacity-20"></div>
                <img 
                  src="/image.png" 
                  alt="Md. Mahim Khan" 
                  className="relative rounded-full w-full max-w-md mx-auto shadow-2xl border-4 border-accent/30 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="animate-fadeIn order-1 md:order-2 text-center md:text-left">
              <p className="text-accent text-lg mb-4">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
                Md. Mahim Khan
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-textSecondary mb-6">
                Aspiring Naval Architect
              </h2>
              <p className="text-xl text-textSecondary mb-8">
                4th-year Naval Architecture & Offshore Engineering Student at Bangladesh Maritime University.
                Passionate about ship design, engineering analysis, and innovation.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-accent text-primary rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
