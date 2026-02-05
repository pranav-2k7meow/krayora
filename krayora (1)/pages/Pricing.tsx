import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Honest Pricing.</h1>
            <p className="text-lg text-slate-600">
              We deliver high-end agency quality at a price point that makes sense for growing businesses.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
          
          {/* TIER 1: Starter Presence */}
          <ScrollReveal delay={0} className="h-full">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
               <h3 className="text-slate-900 font-bold text-xl mb-2">Starter Presence</h3>
               <p className="text-slate-500 text-sm mb-6">An entry-level option for very small businesses or first-time websites.</p>
               <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-slate-900">₹5,000</span>
                  <span className="text-slate-500 ml-1 text-sm">/ starting from</span>
               </div>
               
               <ul className="space-y-4 mb-8 flex-grow">
                 {[
                   "1-page custom website",
                   "Mobile-first responsive design",
                   "WhatsApp integration",
                   "Contact section",
                   "Basic SEO setup",
                   "10–14 day delivery"
                 ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                 ))}
               </ul>
               <Button variant="outline" fullWidth onClick={() => navigate('/book-consultation')}>
                  Get Started
               </Button>
            </div>
          </ScrollReveal>

          {/* TIER 2: Business Standard (Most Popular) */}
          <ScrollReveal delay={100} className="h-full">
            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-600 shadow-xl relative transform md:-translate-y-4 h-full flex flex-col z-10">
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                Most Popular
               </div>
               <h3 className="text-slate-900 font-bold text-xl mb-2">Business Standard</h3>
               <p className="text-slate-500 text-sm mb-6">The standard for businesses looking to grow and look professional.</p>
               <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-900">₹15,000</span>
                  <span className="text-slate-500 ml-1 text-sm">/ starting from</span>
               </div>
               
               <ul className="space-y-4 mb-8 flex-grow">
                 {[
                   "Everything in Starter",
                   "5-page website structure",
                   "Fully custom layout (no templates)",
                   "Google Maps integration",
                   "Advanced contact forms",
                   "Basic conversion optimization",
                   "~2 week delivery"
                 ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-slate-900 text-sm font-medium">{feature}</span>
                    </li>
                 ))}
               </ul>
               <Button variant="primary" fullWidth onClick={() => navigate('/book-consultation')}>
                  Choose Standard
               </Button>
            </div>
          </ScrollReveal>

          {/* TIER 3: Premium Presence */}
          <ScrollReveal delay={200} className="h-full">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
               <h3 className="text-slate-900 font-bold text-xl mb-2">Premium Presence</h3>
               <p className="text-slate-500 text-sm mb-6">A high-polish option for brands that need to make a strong impression.</p>
               <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-slate-900">₹35,000</span>
                  <span className="text-slate-500 ml-1 text-sm">/ starting from</span>
               </div>
               
               <ul className="space-y-4 mb-8 flex-grow">
                 {[
                   "Everything in Business Standard",
                   "Advanced animations and micro-interactions",
                   "Enhanced visual polish",
                   "Performance optimization",
                   "SEO-ready structure",
                   "Extended post-launch support"
                 ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                 ))}
               </ul>
               <Button variant="outline" fullWidth onClick={() => navigate('/book-consultation')}>
                  Go Premium
               </Button>
            </div>
          </ScrollReveal>

        </div>

        {/* Reassurance Line */}
        <div className="text-center mb-24">
            <p className="text-slate-500 text-lg font-medium">
                Not sure which plan fits you? We’ll help you decide on a quick call.
            </p>
        </div>

        {/* HOW TO GET STARTED Section */}
        <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">How to get started</h2>
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">1</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-slate-900">Book a quick call</h4>
                        <p className="text-slate-600 mt-1 text-sm">We'll discuss your business, your competitors, and your taste. No sales pressure.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">2</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-slate-900">We build & preview</h4>
                        <p className="text-slate-600 mt-1 text-sm">We design a mockup. Once you approve, we build it. You watch the progress.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">3</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-slate-900">Launch & Handover</h4>
                        <p className="text-slate-600 mt-1 text-sm">We connect your domain, set up hosting, and show you how to make small edits.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Have questions right now?</h4>
                    <p className="text-slate-600 text-sm mb-6">We are available on WhatsApp for quick queries.</p>
                    <button 
                      onClick={() => window.open('https://wa.me/919619280807', '_blank')}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </button>
                    <p className="text-xs text-slate-400 mt-6">
                      Need custom E-commerce or Backend? <span className="underline cursor-pointer hover:text-slate-600">Contact us.</span>
                    </p>
                </div>
              </div>
            </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Pricing;