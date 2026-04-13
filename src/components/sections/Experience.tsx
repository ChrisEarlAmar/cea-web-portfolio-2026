import { CheckCircle, Calendar } from 'lucide-react';
import { experience } from '../../data/portfolio-data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#1a2520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F6F5F] to-[#6FCF97] mx-auto rounded-full" />
        </div>

        {/* Experience Cards - Full Width Layout */}
        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.id}
              className="p-8 bg-[#1e2f28] rounded-2xl border border-[#1F6F5F]/20 hover:border-[#2FA084]/40 transition-all duration-300 group"
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#1F6F5F]/10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src="/citihardware_logo.jpg" 
                      alt="CitiHardware" 
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#EEEEEE] group-hover:text-[#6FCF97] transition-colors">
                      {job.company}
                    </h3>
                    <p className="text-[#2FA084] font-medium text-lg">{job.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1F6F5F]/10 rounded-full">
                  <Calendar className="w-4 h-4 text-[#6FCF97]" />
                  <span className="text-[#6FCF97] text-sm font-medium">
                    {job.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#b8c5bf] mb-6 leading-relaxed max-w-4xl">
                {job.description}
              </p>

              {/* Two Column Layout for Highlights and Tech */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-[#EEEEEE] uppercase tracking-wider mb-4">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {job.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0 mt-0.5" />
                        <span className="text-[#b8c5bf] text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-[#EEEEEE] uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#243a31] text-[#b8c5bf] text-sm rounded-lg border border-[#1F6F5F]/20 hover:border-[#2FA084]/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
