import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built by Engineers, <br/>Designed for Business.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are Krayora. We combine engineering discipline with creative design to build websites that actually work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Who we are</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We are two students based in India with a simple observation: <span className="font-semibold text-slate-900">Most small business websites are disappointing.</span>
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  They are either built on slow, generic templates or cost a fortune from large agencies. We founded Krayora to fill that gap. We bring the technical rigor of our engineering background and apply it to modern web design.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We don't just "make websites." We build digital assets that establish credibility for your business immediately.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal delay={200}>
                <div className="bg-slate-100 rounded-2xl p-4 md:p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <img src="https://res.cloudinary.com/dyadqlvvx/image/upload/v1770291981/Gemini_Generated_Image_jgjx59jgjx59jgjx_xyebih.png" alt="Founder 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md" />
                  <h3 className="font-bold text-lg text-slate-900">Pranav</h3>
                  <p className="text-indigo-600 font-medium text-sm mb-3">Co-Founder & Tech Lead</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-slate-100 rounded-2xl p-4 md:p-6 text-center transform translate-y-8 hover:translate-y-6 transition-transform duration-300">
                  <img src="https://res.cloudinary.com/dyadqlvvx/image/upload/v1770291350/WhatsApp_Image_2026-02-05_at_4.45.25_PM_pnuljw.jpg" alt="Founder 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md" />
                  <h3 className="font-bold text-lg text-slate-900">Soham</h3>
                  <p className="text-indigo-600 font-medium text-sm mb-3">Co-Founder & Design Lead</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Quote className="w-12 h-12 text-indigo-400 mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">
              We might be students, but we take our work more seriously than most "pros". We are building our reputation, one perfect website at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-indigo-700 rounded-xl bg-indigo-800/50">
              <h3 className="font-bold text-xl mb-2">No Outsourcing</h3>
              <p className="text-indigo-200 text-sm">We build everything ourselves. You talk to the people doing the work.</p>
            </div>
            <div className="p-6 border border-indigo-700 rounded-xl bg-indigo-800/50">
              <h3 className="font-bold text-xl mb-2">Transparent Pricing</h3>
              <p className="text-indigo-200 text-sm">No hidden maintenance fees or surprise charges. We value honesty.</p>
            </div>
            <div className="p-6 border border-indigo-700 rounded-xl bg-indigo-800/50">
              <h3 className="font-bold text-xl mb-2">Long-term Support</h3>
              <p className="text-indigo-200 text-sm">We don't disappear after launch. We're here to help your business grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;