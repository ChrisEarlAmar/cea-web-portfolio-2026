import { Code2, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio-data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0f0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F6F5F] to-[#6FCF97] mx-auto rounded-full mb-4" />
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            Below are some of the featured projects that highlight my expertise 
            and dedication to building scalable, production-ready systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#111915] rounded-2xl border border-[#1F6F5F]/20 hover:border-[#2FA084]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#16241f] to-[#111915] flex items-center justify-center border-b border-[#1F6F5F]/10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-[#1F6F5F]/10 rounded-xl flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-[#2FA084]" />
                  </div>
                  <span className="text-xs text-[#9ca3af] uppercase tracking-wider">
                    Project Preview
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#EEEEEE] mb-2 group-hover:text-[#6FCF97] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">
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
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#16241f] text-[#9ca3af] text-xs rounded-md border border-[#1F6F5F]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-[#9ca3af] mb-4">Interested in seeing more of my work?</p>
          <a
            href="https://github.com/ChrisEarlAmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#16241f] hover:bg-[#1a2a24] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30"
          >
            <ExternalLink className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
