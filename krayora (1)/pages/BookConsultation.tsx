import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, Send } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const BookConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Context & Contact Info */}
          <div className="space-y-12">
            <ScrollReveal>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Let’s talk about your website.</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Tell us about your business and we’ll guide you on the best next step. 
                  Whether you need a brand new site or a redesign, we're here to help.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Contact Directly</h3>
                  <div className="space-y-6">
                    <a href="mailto:hello@krayora.com" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <Mail size={18} />
                      </div>
                      <span className="ml-4 text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">hello@krayora.com</span>
                    </a>
                    
                    <div className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <Phone size={18} />
                      </div>
                      <div className="ml-4 flex flex-col space-y-1">
                        <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">+91 96192 80807</span>
                        <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">+91 70195 13649</span>
                      </div>
                    </div>

                    <a href="https://wa.me/919619280807" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        <MessageCircle size={18} />
                      </div>
                      <span className="ml-4 text-slate-700 font-medium group-hover:text-green-600 transition-colors">Chat on WhatsApp (Quick Reply)</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center z-10 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                    Thanks for reaching out. We'll review your details and get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : null}

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 focus:bg-white placeholder-slate-400"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 focus:bg-white placeholder-slate-400"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 focus:bg-white placeholder-slate-400"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1.5">Business Name <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 focus:bg-white placeholder-slate-400"
                    placeholder="Your company or project name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">How can we help? <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none placeholder-slate-400"
                    placeholder="Tell us a bit about your project or requirements..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    fullWidth 
                    size="lg" 
                    disabled={isSubmitting}
                    className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Request Consultation <Send className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </div>

                <p className="text-center text-xs text-slate-400 mt-4">
                  No sales pressure. We’ll simply understand your needs and suggest what makes sense.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;