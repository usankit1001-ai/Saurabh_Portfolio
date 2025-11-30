import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Saurabh Chhiller</h2>
            <p className="text-sm mb-4">Product Manager & Senior Business Analyst</p>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all transform hover:scale-105"
            >
              Contact Me <Send size={14} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
                <a href={SOCIAL_LINKS.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href={SOCIAL_LINKS.linkedin} className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>

            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
                Back to Top
                <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                    <ArrowUp size={16} />
                </div>
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Saurabh Chhiller. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;