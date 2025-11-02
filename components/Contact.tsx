'use client';

import { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'mahim.naoe@gmail.com',
      link: 'mailto:mahim.naoe@gmail.com',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      value: '@storiesofmahim',
      link: 'https://facebook.com/storiesofmahim',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/mahimkhan/',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 bg-secondary ${
        isVisible ? 'section-enter-active' : 'section-enter'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-textSecondary text-center mb-16 text-lg max-w-2xl mx-auto">
            I&apos;m always interested in collaborating on innovative maritime projects, discussing 
            naval architecture challenges, or connecting with fellow engineering enthusiasts. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-xl hover-glow transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="text-5xl mb-4 animate-float group-hover:scale-110 transition-transform text-accent">
                    <IconComponent className="mx-auto" />
                  </div>
                  <h3 className="text-accent font-bold mb-2">{info.label}</h3>
                  <p className="text-textSecondary text-sm">{info.value}</p>
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="mailto:mahim.naoe@gmail.com"
              className="inline-block px-12 py-4 bg-accent text-primary rounded-lg font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all pulse-glow shimmer"
            >
              Connect With Me
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <p className="text-textSecondary">
              <span className="gradient-text font-bold">Md. Mahim Khan</span>
            </p>
            <p className="text-textSecondary text-sm mt-2">
              Naval Architecture & Offshore Engineering Student
            </p>
            <p className="text-textSecondary text-sm">
              Bangladesh Maritime University
            </p>
            <p className="text-textSecondary text-xs mt-4">
              Built with Next.js & Tailwind CSS • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
