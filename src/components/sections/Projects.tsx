import React, { useEffect, useRef } from "react";
import { ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '../../data/portfolio-data';

type AutoPlayVideoProps = {
  src: string;
  className?: string;
};

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    playVideo();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      loop
      playsInline
    />
  );
};


export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#141c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F6F5F] to-[#6FCF97] mx-auto rounded-full mb-4" />
          <p className="text-[#b8c5bf] max-w-2xl mx-auto">
            Below are some of the featured projects that highlight my expertise 
            and dedication to building scalable, production-ready systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#1e2f28] rounded-2xl border border-[#1F6F5F]/20 hover:border-[#2FA084]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Project Video Preview */}
              <div className="aspect-video bg-[#0a0f0d] border-b border-[#1F6F5F]/10 overflow-hidden">
                <AutoPlayVideo
                  src={project.video}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#EEEEEE] mb-2 group-hover:text-[#6FCF97] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#b8c5bf] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-[#6FCF97]/10 text-[#6FCF97] text-xs rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#243a31] text-[#b8c5bf] text-xs rounded-md border border-[#1F6F5F]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6FCF97] hover:text-[#2FA084] transition-colors group/link"
                  >
                    <GitBranch className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-[#b8c5bf] mb-4">Interested in seeing more of my work?</p>
          <a
            href="https://github.com/ChrisEarlAmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#243a31] hover:bg-[#2a4036] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30"
          >
            <ExternalLink className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
