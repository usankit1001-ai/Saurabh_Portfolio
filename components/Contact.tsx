import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Name is required' : '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'subject':
        return !value.trim() ? 'Subject is required' : '';
      case 'message':
        return !value.trim() ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation if field has been touched or currently has an error
    if (touched[name as keyof typeof touched]) {
      setErrors(prev => ({
        ...prev,
        [name]: validate(name, value)
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validate(name, value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields on submit
    const newErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      subject: validate('subject', formData.subject),
      message: validate('message', formData.message)
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    // If any error exists, stop submission
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setStatus('submitting');
    
    // Simulate API call and store in localStorage
    setTimeout(() => {
        const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        messages.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('contact_messages', JSON.stringify(messages));
        
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
        setErrors({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const getInputClassName = (fieldName: keyof typeof errors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `w-full px-4 py-3 rounded-xl border ${
      hasError 
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'
    } focus:ring-2 outline-none transition-all`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal variant="fade-up">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              I'm always interested in discussing new opportunities, product challenges, and innovative solutions.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Email</h4>
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-white transition-colors">
                            {SOCIAL_LINKS.email}
                        </a>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Phone</h4>
                        <p className="text-slate-400">{SOCIAL_LINKS.phone}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Location</h4>
                        <p className="text-slate-400">San Francisco Bay Area</p>
                    </div>
                </div>
            </div>
          </Reveal>

          <Reveal variant="scale-in" delay={200}>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
                        <p className="text-green-700">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('name')}
                                        placeholder="Your Name"
                                    />
                                    {touched.name && errors.name && (
                                        <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                                            <AlertCircle size={18} />
                                        </div>
                                    )}
                                </div>
                                {touched.name && errors.name && (
                                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('email')}
                                        placeholder="your@email.com"
                                    />
                                    {touched.email && errors.email && (
                                        <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                                            <AlertCircle size={18} />
                                        </div>
                                    )}
                                </div>
                                {touched.email && errors.email && (
                                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getInputClassName('subject')}
                                    placeholder="Project Inquiry"
                                />
                                {touched.subject && errors.subject && (
                                    <div className="absolute right-3 top-3.5 text-red-500 pointer-events-none">
                                        <AlertCircle size={18} />
                                    </div>
                                )}
                            </div>
                            {touched.subject && errors.subject && (
                                <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`${getInputClassName('message')} resize-none`}
                                    placeholder="How can I help you?"
                                ></textarea>
                                {touched.message && errors.message && (
                                    <div className="absolute right-3 top-3 text-red-500 pointer-events-none">
                                        <AlertCircle size={18} />
                                    </div>
                                )}
                            </div>
                            {touched.message && errors.message && (
                                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                            )}
                        </div>

                        <button 
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? 'Sending...' : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;