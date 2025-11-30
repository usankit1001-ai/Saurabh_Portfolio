import React from 'react';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { Award, Zap, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expertise & Skills</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                A comprehensive toolkit built over 9+ years of driving digital transformation.
            </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SKILLS.map((category, index) => (
            <Reveal 
              key={category.title} 
              variant="scale-in" 
              delay={index * 100} 
              className="h-full"
            >
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={200}>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                    <Award className="text-yellow-400" /> Certifications
                </h3>
                <p className="text-slate-300">Continuous learning and professional development.</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                {CERTIFICATIONS.map((cert) => (
                    <span 
                    key={cert.name} 
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all cursor-default"
                    >
                    {cert.name}
                    </span>
                ))}
                </div>
            </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;