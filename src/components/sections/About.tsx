import { CheckCircle, Zap, Code2, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#141c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F6F5F] to-[#6FCF97] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#EEEEEE]">
              Fullstack Developer with Backend Focus
            </h3>
            
            <p className="text-[#b8c5bf] leading-relaxed">
              I am a <span className="text-[#2FA084] font-medium">Fullstack Web Developer</span> with over 
              <span className="text-[#2FA084] font-medium"> 2 years of professional experience</span> building 
              scalable back-office systems and modern web applications. My expertise lies in developing 
              enterprise-grade solutions that solve real business problems.
            </p>

            <p className="text-[#b8c5bf] leading-relaxed">
              Currently working at <span className="text-[#6FCF97] font-medium">DecoArts Marketing / CitiHardware</span>, 
              I specialize in backend-heavy development, creating robust systems that handle complex business 
              logic, integrate with enterprise ERP solutions, and serve hundreds of users across multiple locations.
            </p>

            <p className="text-[#b8c5bf] leading-relaxed">
              I&apos;m passionate about writing clean, maintainable code and architecting solutions that scale. 
              My approach combines technical excellence with a deep understanding of business requirements, 
              ensuring that every project I deliver creates measurable impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-[#1e2f28]/50 rounded-xl border border-[#1F6F5F]/20">
                <div className="text-3xl font-bold text-[#2FA084] mb-1">2+</div>
                <div className="text-sm text-[#b8c5bf]">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-[#1e2f28]/50 rounded-xl border border-[#1F6F5F]/20">
                <div className="text-3xl font-bold text-[#6FCF97] mb-1">120+</div>
                <div className="text-sm text-[#b8c5bf]">Stores Served</div>
              </div>
              <div className="text-center p-4 bg-[#1e2f28]/50 rounded-xl border border-[#1F6F5F]/20">
                <div className="text-3xl font-bold text-[#6FCF97] mb-1">∞</div>
                <div className="text-sm text-[#b8c5bf]">Problems Solved</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills Preview */}
          <div className="space-y-6">
            <div className="p-6 bg-[#1e2f28] rounded-2xl border border-[#1F6F5F]/20">
              <h4 className="text-lg font-semibold text-[#EEEEEE] mb-6">What I Do Best</h4>
              
              <div className="space-y-4">
                {[
                  {
                    Icon: CheckCircle,
                    title: 'Enterprise System Development',
                    description: 'Building scalable back-office tools integrated with Oracle ERP'
                  },
                  {
                    Icon: Zap,
                    title: 'Real-time Applications',
                    description: 'WebSocket-powered tools for live data synchronization'
                  },
                  {
                    Icon: Code2,
                    title: 'REST API Design',
                    description: 'Clean, documented APIs following industry best practices'
                  },
                  {
                    Icon: Shield,
                    title: 'Access Control & Security',
                    description: 'Role-based systems with enterprise-grade security'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1F6F5F]/10 rounded-xl flex items-center justify-center">
                      <item.Icon className="w-6 h-6 text-[#2FA084]" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[#EEEEEE]">{item.title}</h5>
                      <p className="text-sm text-[#b8c5bf]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
