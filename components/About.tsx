'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 ${
        isVisible ? 'section-enter-active' : 'section-enter'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-textSecondary text-lg leading-relaxed">
                I&apos;m <span className="text-accent font-semibold">Md. Mahim Khan</span>, a dedicated 4th-year student 
                pursuing B.Sc. in Naval Architecture & Offshore Engineering at Bangladesh Maritime University.
              </p>
              
              <p className="text-textSecondary text-lg leading-relaxed">
                With <span className="text-accent font-semibold">3+ years of academic experience</span>, 
                I&apos;ve developed a strong foundation in ship design, engineering analysis, and computational modeling. 
                My passion lies in combining theoretical knowledge with practical applications to create innovative 
                maritime solutions.
              </p>

              <p className="text-textSecondary text-lg leading-relaxed">
                I specialize in creating detailed ship designs from 2D technical drawings to 3D visualizations, 
                performing complex structural and hydrodynamic analyses, and utilizing programming for engineering 
                automation.
              </p>

              <div className="glass p-6 rounded-lg hover-glow">
                <h3 className="text-xl font-bold text-accent mb-4">Academic Excellence</h3>
                <ul className="space-y-2 text-textSecondary">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    4th Year, 1st Semester Student
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    B.Sc. in Naval Architecture & Offshore Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    Bangladesh Maritime University
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    3+ Years of Engineering Study
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              {/* Profile Image */}
              <div className="mb-8">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  <img 
                    src="/profile.png" 
                    alt="Md. Mahim Khan" 
                    className="relative rounded-2xl w-full h-auto shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="glass p-8 rounded-2xl hover-glow">
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-2xl font-bold mb-2">🎓 Education Focus</h4>
                    <p className="text-textSecondary">
                      Mastering both theoretical knowledge and practical skills in naval architecture, 
                      offshore engineering, and maritime technology.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-2xl font-bold mb-2">🚢 Core Interest</h4>
                    <p className="text-textSecondary">
                      Ship design optimization, structural analysis, hydrodynamics, and innovative 
                      engineering solutions for maritime industry.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-2xl font-bold mb-2">💡 Career Goal</h4>
                    <p className="text-textSecondary">
                      Becoming a skilled naval architect contributing to cutting-edge ship design 
                      and offshore engineering projects worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
