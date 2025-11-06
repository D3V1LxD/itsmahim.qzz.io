'use client';

import { useEffect, useRef, useState } from 'react';

const blogs = [
  {
    title: 'General Arrangement Plan',
    description: 'A comprehensive guide to understanding ship layout design, crew accommodation planning, and the essential components of a vessel\'s general arrangement. Explore different ship types and their unique layouts.',
    date: 'October 2024',
    readTime: '15 min read',
    tags: ['Ship Design', 'GAP', 'Naval Architecture'],
    link: '/blog/general-arrangement-plan',
  },
  {
    title: 'Understanding Ship Stability: A Naval Architect\'s Perspective',
    description: 'An in-depth exploration of ship stability principles, including metacentric height, righting moments, and stability curves. Learn how these concepts ensure vessel safety.',
    date: 'October 2024',
    readTime: '8 min read',
    tags: ['Ship Design', 'Stability', 'Naval Architecture'],
    link: '#',
  },
  {
    title: 'Introduction to Finite Element Analysis in Marine Structures',
    description: 'A comprehensive guide to applying FEA techniques for analyzing hull structures, understanding stress distribution, and optimizing structural designs using ANSYS.',
    date: 'September 2024',
    readTime: '10 min read',
    tags: ['FEA', 'ANSYS', 'Structural Analysis'],
    link: '#',
  },
  {
    title: 'Hull Form Optimization: Balancing Performance and Efficiency',
    description: 'Exploring modern techniques for optimizing ship hull forms to reduce resistance, improve fuel efficiency, and enhance hydrodynamic performance using computational tools.',
    date: 'August 2024',
    readTime: '7 min read',
    tags: ['Hydrodynamics', 'Optimization', 'CFD'],
    link: '#',
  },
  {
    title: 'The Role of AutoCAD in Modern Ship Design',
    description: 'How AutoCAD has revolutionized naval architecture, from creating technical drawings to 3D modeling. Practical tips and workflows for aspiring naval architects.',
    date: 'July 2024',
    readTime: '6 min read',
    tags: ['AutoCAD', 'Ship Design', 'Software'],
    link: '#',
  },
];

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 ${
        isVisible ? 'section-enter-active' : 'section-enter'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Blog & Articles</span>
          </h2>
          <p className="text-textSecondary text-center mb-16 text-lg">
            Sharing insights, knowledge, and experiences in naval architecture and offshore engineering
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="glass p-6 rounded-2xl hover-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent text-sm font-semibold">{blog.date}</span>
                    <span className="text-textSecondary text-sm">{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-textPrimary hover:text-accent transition-colors">
                    <a href={blog.link}>{blog.title}</a>
                  </h3>
                  
                  <p className="text-textSecondary leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary rounded-full text-xs border border-accent/30 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={blog.link}
                    className="inline-flex items-center text-accent hover:text-textPrimary transition-colors font-semibold"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-textSecondary mb-4">
              More articles coming soon! Stay tuned for insights on naval architecture and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
