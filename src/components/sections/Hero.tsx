import { ArrowRight, ChevronDown, GitBranch, Globe } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0d] via-[#111915] to-[#0a0f0d]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #2FA084 1px, transparent 1px),
                            linear-gradient(to bottom, #2FA084 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1F6F5F]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2FA084]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#1F6F5F] to-[#2FA084] p-1">
              <div className="w-full h-full rounded-full bg-[#0a0f0d] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a2a24] to-[#16241f] flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-[#6FCF97]">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#6FCF97] rounded-full border-4 border-[#0a0f0d]" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-[#EEEEEE]">{personalInfo.name}</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
          <span className="bg-gradient-to-r from-[#2FA084] to-[#6FCF97] bg-clip-text text-transparent">
            {personalInfo.title}
          </span>
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-10">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group px-8 py-4 bg-[#1F6F5F] hover:bg-[#2FA084] text-white font-medium rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#16241f] hover:bg-[#1a2a24] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30 flex items-center gap-2"
          >
            <GitBranch className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#16241f] hover:bg-[#1a2a24] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30 flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator - positioned below buttons */}
        <div className="flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="flex flex-col items-center text-[#6FCF97] hover:text-[#2FA084] transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
