import { Mail, MapPin, GitBranch, Globe, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#141c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F6F5F] to-[#6FCF97] mx-auto rounded-full mb-4" />
          <p className="text-[#b8c5bf] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? 
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#EEEEEE] mb-8">
              Let&apos;s Connect
            </h3>

            {[
              {
                Icon: Mail,
                label: 'Email',
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                color: 'from-[#1F6F5F] to-[#2FA084]'
              },
              {
                Icon: MapPin,
                label: 'Location',
                value: personalInfo.location,
                href: null,
                color: 'from-[#2FA084] to-[#6FCF97]'
              },
              {
                Icon: GitBranch,
                label: 'GitHub',
                value: 'github.com/ChrisEarlAmar',
                href: personalInfo.github,
                color: 'from-[#16241f] to-[#1a2a24]'
              },
              {
                Icon: Globe,
                label: 'LinkedIn',
                value: 'linkedin.com/in/chris-earl-amar',
                href: personalInfo.linkedin,
                color: 'from-[#1F6F5F] to-[#2FA084]'
              }
            ].map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-[#1e2f28] rounded-xl border border-[#1F6F5F]/20 hover:border-[#2FA084]/40 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#b8c5bf]">{item.label}</p>
                      <p className="font-medium text-[#EEEEEE] group-hover:text-[#6FCF97] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-[#1e2f28] rounded-xl border border-[#1F6F5F]/20">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#b8c5bf]">{item.label}</p>
                      <p className="font-medium text-[#EEEEEE]">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="p-8 bg-gradient-to-br from-[#1F6F5F]/20 to-[#2FA084]/20 rounded-2xl border border-[#1F6F5F]/20">
            <h4 className="text-2xl font-bold text-[#EEEEEE] mb-4">
              Open for Opportunities
            </h4>
            <p className="text-[#b8c5bf] mb-6">
              I&apos;m currently open to new opportunities and collaborations. 
              Whether you have a question, a project proposal, or just want to say hi, 
              I&apos;ll do my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#1F6F5F] hover:bg-[#2FA084] text-white font-medium rounded-xl transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#243a31] hover:bg-[#2a4036] text-[#EEEEEE] font-medium rounded-xl transition-all duration-200 border border-[#1F6F5F]/30"
              >
                <Globe className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>

            <p className="text-sm text-[#b8c5bf] mt-6 text-center">
              Usually responds within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
