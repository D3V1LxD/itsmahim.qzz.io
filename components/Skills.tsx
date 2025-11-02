'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    title: 'Ship Design & Modeling',
    description: 'Proficient in creating detailed ship designs, from 2D technical drawings to 3D modeling and visualization.',
    tools: ['AutoCAD', 'SolidWorks', 'Rhinoceros'],
    skills: ['Hull form development', 'Design optimization', 'Technical drawings'],
    icon: '🚢',
  },
  {
    title: 'Engineering Analysis',
    description: 'Strong foundation in structural analysis, hydrodynamics, and stability calculations to create comprehensive engineering solutions.',
    tools: ['ANSYS', 'MATLAB', 'Maxsurf'],
    skills: ['Structural Analysis', 'Stability calculations', 'Hydrodynamic analysis', 'Performance optimization'],
    icon: '⚙️',
  },
  {
    title: 'Programming & Automation',
    description: 'Skilled in using programming languages for engineering calculations and automating processes.',
    tools: ['C++', 'Python', 'MATLAB'],
    skills: ['C++ programming', 'Python development', 'MATLAB analysis', 'Process automation'],
    icon: '💻',
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 bg-secondary ${
        isVisible ? 'section-enter-active' : 'section-enter'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-textSecondary text-center mb-16 text-lg">
            Three core areas where I excel in naval architecture and offshore engineering
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover-glow transition-all duration-300 hover:scale-105 shimmer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-6 animate-float">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-accent">{skill.title}</h3>
                <p className="text-textSecondary mb-6 leading-relaxed">{skill.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-accent mb-3">TOOLS & SOFTWARE</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary rounded-full text-sm border border-accent"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-accent mb-3">KEY SKILLS</h4>
                  <ul className="space-y-2">
                    {skill.skills.map((item, idx) => (
                      <li key={idx} className="flex items-start text-textSecondary">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
