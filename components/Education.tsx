import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Education</h2>
        </Reveal>
        
        <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
                <Reveal key={index} variant="scale-in" delay={index * 100}>
                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                            <p className="text-slate-700">{edu.degree}</p>
                            <p className="text-slate-500 text-sm mt-1">{edu.year}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;