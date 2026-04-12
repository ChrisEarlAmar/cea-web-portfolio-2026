import { Zap, Shield, Users } from 'lucide-react';
import { skills } from '../../data/portfolio-data';

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: string }[];
  colorClass: string;
}

function SkillCategory({ title, skills: categorySkills, colorClass }: SkillCategoryProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-[#6FCF97] bg-[#6FCF97]/10 border-[#6FCF97]/20';
      case 'Intermediate':
        return 'text-[#2FA084] bg-[#2FA084]/10 border-[#2FA084]/20';
      default:
        return 'text-[#9ca3af] bg-[#9ca3af]/10 border-[#9ca3af]/20';
    }
  };

  return (
    <div className="p-6 bg-[#111915] rounded-2xl border border-[#1F6F5F]/20">
      <h3 className={`text-lg font-semibold mb-6 ${colorClass}`}>{title}</h3>
      <div className="space-y-3">
        {categorySkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between p-3 bg-[#0a0f0d] rounded-xl border border-[#1F6F5F]/10 hover:border-[#1F6F5F]/30 transition-colors"
          >
            <span className="font-medium text-[#EEEEEE]">{skill.name}</span>
            <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#111915]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F6F5F] to-[#6FCF97] mx-auto rounded-full mb-4" />
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            My tech stack is focused on building modern, scalable web applications 
            with an emphasis on backend systems and real-time functionality.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory
            title="Frontend"
            skills={skills.frontend}
            colorClass="text-[#2FA084]"
          />
          <SkillCategory
            title="Backend"
            skills={skills.backend}
            colorClass="text-[#6FCF97]"
          />
          <SkillCategory
            title="Database"
            skills={skills.database}
            colorClass="text-[#1F6F5F]"
          />
          <SkillCategory
            title="Tools & Platforms"
            skills={skills.tools}
            colorClass="text-[#6FCF97]"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Zap,
              title: 'Performance Focused',
              description: 'Optimizing applications for speed and efficiency'
            },
            {
              Icon: Shield,
              title: 'Security Conscious',
              description: 'Implementing best practices for data protection'
            },
            {
              Icon: Users,
              title: 'Team Collaboration',
              description: 'Experienced in agile development environments'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#0a0f0d] rounded-2xl border border-[#1F6F5F]/20 text-center hover:border-[#2FA084]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-[#1F6F5F]/10 rounded-xl flex items-center justify-center">
                <item.Icon className="w-6 h-6 text-[#2FA084]" />
              </div>
              <h4 className="font-semibold text-[#EEEEEE] mb-2">{item.title}</h4>
              <p className="text-sm text-[#9ca3af]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
