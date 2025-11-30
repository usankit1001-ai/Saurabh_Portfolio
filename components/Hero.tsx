import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_LINK, SOCIAL_LINKS } from '../constants';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-16 overflow-hidden scroll-mt-28">
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal variant="fade-up" delay={100}>
                <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide border border-blue-100 mb-2">
                    Product Manager | Senior BA
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Saurabh Chhiller
                </span>
                </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                I help organizations turn complex business processes into simple, scalable, and user-friendly digital solutions. 
                With 9+ years of experience, I bridge the gap between ambiguity and measurable results.
                </p>
            </Reveal>

            <Reveal variant="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                <a 
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95"
                >
                    Let's Connect <ArrowRight size={20} />
                </a>
                <a 
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95"
                >
                    <Download size={20} /> Download Resume
                </a>
                </div>
            </Reveal>

            <Reveal variant="fade-in" delay={500}>
                <div className="flex items-center gap-6 pt-4 text-slate-400">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors transform hover:scale-110">
                        <Github size={28} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors transform hover:scale-110">
                        <Linkedin size={28} />
                    </a>
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-red-500 transition-colors transform hover:scale-110">
                        <Mail size={28} />
                    </a>
                </div>
            </Reveal>
          </div>

          <Reveal variant="scale-in" delay={400} className="hidden lg:block relative">
            <div className="relative z-10">
                <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 relative group">
                    {/* Placeholder for Profile Image */}
                    <img 
                        src="https://picsum.photos/800/800" 
                        alt="Saurabh Chhiller" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <div className="font-bold text-xl">System Transformation</div>
                        <div className="text-sm opacity-90">Healthcare & SaaS</div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-dots-pattern opacity-20 -z-10"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;