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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-20"
    >
      {/* Background gradient - lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141c18] via-[#1a2520] to-[#141c18]" />
      
      {/* Grid pattern overlay - slightly more visible */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #2FA084 1px, transparent 1px),
                            linear-gradient(to bottom, #2FA084 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient orbs - lighter opacity */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1F6F5F]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2FA084]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image - using logo.png */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#1F6F5F] to-[#2FA084] p-1">
              <div className="w-full h-full rounded-full bg-[#141c18] flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#6FCF97] rounded-full border-4 border-[#141c18]" />
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

        {/* Tagline - lighter text color */}
        <p className="text-lg md:text-xl text-[#b8c0c5] max-w-2xl mx-auto mb-10">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons - icon only on mobile, text+icon on sm+ */}
        <div className="flex flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group w-12 h-12 sm:w-auto sm:h-auto sm:px-8 sm:py-4 bg-[#1F6F5F] hover:bg-[#2FA084] text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-0 sm:gap-2"
            title="View Projects"
          >
            <span className="hidden sm:inline">View Projects</span>
            <ArrowRight className="w-5 h-5 sm:transition-transform sm:group-hover:translate-x-1" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-auto sm:h-auto sm:px-8 sm:py-4 bg-[#1e2f28] hover:bg-[#243a31] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30 flex items-center justify-center gap-0 sm:gap-2"
            title="GitHub"
          >
            <span className="hidden sm:inline">GitHub</span>
            <GitBranch className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-auto sm:h-auto sm:px-8 sm:py-4 bg-[#1e2f28] hover:bg-[#243a31] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30 flex items-center justify-center gap-0 sm:gap-2"
            title="LinkedIn"
          >
            <span className="hidden sm:inline">LinkedIn</span>
            <Globe className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator - positioned at bottom with more space */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
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
