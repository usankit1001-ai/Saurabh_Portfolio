import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-slate-600">
                A track record of delivering measurable impact across regulated industries.
            </p>
            </div>
        </Reveal>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 before:-translate-x-1/2">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 flex items-center justify-center z-10">
                <Briefcase size={14} className="text-white" />
              </div>

              {/* Content Spacer for Desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className="pl-12 md:pl-0 md:w-1/2">
                <Reveal 
                    // Even index (Left side card): slide-in from the right ("slide-right" starts at translateX(10) i.e. right)
                    // Odd index (Right side card): slide-in from the left ("slide-left" starts at translateX(-10) i.e. left)
                    variant={index % 2 === 0 ? "slide-right" : "slide-left"} 
                    className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                >
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <div className="text-blue-600 font-medium mb-1">{job.company}</div>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 mt-2">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                            {job.location && <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>}
                        </div>
                    </div>
                    
                    <p className="text-slate-600 italic mb-4 text-sm border-l-2 border-blue-200 pl-3">
                        {job.description}
                    </p>

                    <ul className="space-y-2">
                        {job.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;