'use client';

import { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
  mode: string;
  link?: string;
  certificateId?: string;
  instructor?: string;
  issuer?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Modern Computer Vision with OpenCV 2025',
    provider: 'Udemy',
    date: '06/12/2025',
    mode: 'Online',
    certificateId: '3803c23d-db46-43a5-af43-b5950f280121',
    instructor: 'Muhammad Moin',
    link: '/3803c23d-db46-43a5-af43-b5950f280121.pdf',
  },
  {
    id: 2,
    title: 'SOLIDWORKS 2024 Essential Training',
    provider: 'LinkedIn Learning',
    date: '28/06/2025',
    certificateId: '2df3faf0beed0f1c142cace3f25a682fffb69b391e21aee14ff3da5e94a7f24a',
    instructor: 'Gabriel Corbett',
    mode: 'Online',
    link: '/CertificateOfCompletion_SOLIDWORKS 2024 Essential Training.pdf',
  },
  {
    id: 3,
    title: 'Project Manager Certification',
    provider: 'AGILE ENTERPRISE COACH',
    date: '15/03/2025',
    mode: 'Online',
    certificateId: '1002903',
    issuer: 'VIPESH SINGLA, MBA - Co-founder Agile Enterprise Coach',
    link: '/Md Mahim Khan - Project Manager Certification - Certificate.pdf',
  },
];

const getProviderIcon = (provider: string) => {
  switch (provider.toLowerCase()) {
    case 'linkedin learning':
      return <FaLinkedin className="text-3xl text-blue-600" />;
    case 'udemy':
      return <SiUdemy className="text-3xl text-purple-600" />;
    default:
      return <FaCertificate className="text-3xl text-green-600" />;
  }
};

const getProviderColor = (provider: string) => {
  switch (provider.toLowerCase()) {
    case 'linkedin learning':
      return 'from-[#64ffda] to-cyan-500';
    case 'udemy':
      return 'from-purple-500 to-pink-500';
    default:
      return 'from-[#64ffda] to-blue-500';
  }
};

export default function Certifications() {
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
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-[#0a192f] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#64ffda] rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#64ffda] to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64ffda] to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-[#8892b0] text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group bg-[#112240] rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/20 transition-all duration-500 overflow-hidden border border-[#233554] hover:border-[#64ffda]/50 flex flex-col ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Header with provider icon */}
              <div
                className={`bg-gradient-to-r ${getProviderColor(
                  cert.provider
                )} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 opacity-20 transform translate-x-8 -translate-y-8 scale-150">
                  {getProviderIcon(cert.provider)}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    {getProviderIcon(cert.provider)}
                    <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {cert.mode}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium opacity-90 mt-2">
                    {cert.provider}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors">
                  {cert.title}
                </h4>

                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-center text-[#8892b0] text-sm">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">Completed:</span>
                    <span className="ml-2">{cert.date}</span>
                  </div>

                  {cert.instructor && (
                    <div className="flex items-center text-[#8892b0] text-sm">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="font-medium">Instructor:</span>
                      <span className="ml-2">{cert.instructor}</span>
                    </div>
                  )}

                  {cert.issuer && (
                    <div className="flex items-start text-[#8892b0] text-sm">
                      <svg
                        className="w-4 h-4 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <div>
                        <span className="font-medium">Issued by:</span>
                        <span className="ml-2 block">{cert.issuer}</span>
                      </div>
                    </div>
                  )}

                  {cert.certificateId && (
                    <div className="flex items-center text-[#8892b0] text-sm">
                      <FaCertificate className="w-4 h-4 mr-2" />
                      <span className="font-medium">Certificate ID:</span>
                      <span className="ml-2 font-mono text-xs bg-[#0a192f] text-[#64ffda] px-2 py-1 rounded">
                        {cert.certificateId}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${getProviderColor(
                        cert.provider
                      )} text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </a>
                  )}

                  {!cert.link && (
                    <div className="inline-flex items-center justify-center w-full bg-[#0a192f] text-[#64ffda] border border-[#64ffda]/30 px-4 py-3 rounded-lg font-medium">
                      <FaCertificate className="mr-2" />
                      <span>Certified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
