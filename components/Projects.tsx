'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: '2000 DWT Inland Oil Tanker - Detailed Design',
    description: 'Complete vessel design for inland oil transportation with RINA classification. LOA: 74.27m, LWL: 73.5m, Beam: 12m, Draft: 3.5m, Depth: 5m, Speed: 12 knots.',
    achievement: 'RINA Compliant',
    tools: ['AutoCAD', 'Maxsurf', 'RINA Rules'],
    features: [
      'LOA: 74.2683 m, LWL: 73.5 m, Beam: 12 m',
      'Draft: 3.5 m, Depth: 5 m, Speed: 12 Knots',
      'DWT: 2000 for Inland Route Operations',
      'RINA Rule Book compliance for Inland Vessel',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    image: '/student-ship-design.png',
    specifications: {
      'Ship Type': 'Oil Tanker',
      'DWT': '2000',
      'Route': 'Inland',
      'LOA': '74.2683 m',
      'LWL': '73.5 m',
      'Beam': '12 m',
      'Draft': '3.5 m',
      'Depth': '5 m',
      'Speed': '12 Knots',
      'Rule Book': 'RINA for Inland Vessel',
    },
  },
  {
    title: 'Hull Structural Analysis',
    description: 'Performing finite element analysis (FEA) on ship hull structures using ANSYS to validate design integrity under various loading conditions.',
    achievement: 'Proper material for different depth',
    tools: ['ANSYS', 'FEA', 'Structural Mechanics'],
    features: [
      'Finite element modeling of hull structure',
      'Stress and strain analysis under multiple load cases',
      'Validation of structural integrity',
      'Safety factor optimization',
    ],
    gradient: 'from-purple-500 to-pink-500',
    image: '/ansys-analysis.png',
  },
  {
    title: 'Hull Form Optimization',
    description: 'Used Maxsurf for hull form development and optimization, achieving significant reduction in resistance and improved hydrodynamic performance.',
    achievement: '15%+ Resistance Reduction',
    tools: ['Maxsurf', 'Hydrodynamics', 'CFD'],
    features: [
      'Hull form generation and modification',
      'Resistance and propulsion analysis',
      'Parametric design optimization',
      'Performance prediction and validation',
    ],
    gradient: 'from-green-500 to-teal-500',
    image: '/maxsurf-design.png',
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 ${
        isVisible ? 'section-enter-active' : 'section-enter'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-textSecondary text-center mb-16 text-lg">
            Academic projects showcasing engineering excellence and innovation
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-3xl font-bold text-accent">{project.title}</h3>
                    <p className="text-textSecondary text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-accent">ACHIEVEMENT:</span>
                      <span className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-bold`}>
                        {project.achievement}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-accent mb-3">KEY FEATURES</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-textSecondary">
                            <span className="text-accent mr-2 mt-1">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative rounded-xl overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-accent mb-3">TOOLS USED</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary rounded-full text-sm border border-accent"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
