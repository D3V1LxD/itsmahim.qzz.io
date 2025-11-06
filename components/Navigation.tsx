'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-accent transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
