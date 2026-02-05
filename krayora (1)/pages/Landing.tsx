import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Smartphone, Layout, CheckCircle, Terminal, Check } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // State for styling cursor during drag
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs for animation logic (avoids stale closures)
  const isCardHoveredRef = useRef(false); // Tracks if mouse is over a specific card
  const isDraggingRef = useRef(false);    // Tracks if user is actively dragging
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // --- Process Card Animation Logic ---
  const [processStep, setProcessStep] = useState(0); // 0: Idle, 1: Discovery, 2: Build, 3: Launch
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && processStep === 0) {
          // Start the sequence when visible
          setProcessStep(1);
          const t1 = setTimeout(() => setProcessStep(2), 1500); // Wait 1.5s for step 2
          const t2 = setTimeout(() => setProcessStep(3), 3500); // Wait 2s more for step 3
          return () => { clearTimeout(t1); clearTimeout(t2); };
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, [processStep]);

  const benefits = [
    {
      icon: Smartphone,
      title: "Mobile First",
      desc: "70% of Indian customers browse on phones. We design for the small screen first, ensuring you never lose a mobile visitor."
    },
    {
      icon: Zap,
      title: "Blazing Fast",
      desc: "Speed builds trust. Our hand-coded sites load instantly, keeping customers engaged and improving your Google ranking."
    },
    {
      icon: Layout,
      title: "Premium Aesthetics",
      desc: "Stand out from competitors using generic templates. We build custom designs that elevate your brand's perceived value."
    }
  ];

  const clientTypes = [
    { title: "Modern Cafes", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" },
    { title: "Fitness Studios", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
    { title: "Fine Dining", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" },
    { title: "Boutique Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Luxury Salons", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" },
    { title: "Corporate Offices", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  ];

  // Animation Loop for Auto-Scroll & Infinite Reset
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let animationFrameId: number;

    const animate = () => {
      // 1. Auto-scroll Logic
      // Only scroll if NO card is hovered AND user is NOT dragging
      if (!isCardHoveredRef.current && !isDraggingRef.current) {
        el.scrollLeft += 0.8; // Constant smooth speed
      }

      // 2. Infinite Loop Logic
      // Only reset scroll position if NOT dragging to avoid jumping under the cursor
      if (!isDraggingRef.current) {
        const totalWidth = el.scrollWidth;
        const setWidth = totalWidth / 3; // We have 3 sets of items

        // If we've scrolled past the second set, jump back to first
        if (el.scrollLeft >= setWidth * 2) {
          el.scrollLeft = setWidth;
        } 
        // If we've scrolled backwards past the start, jump forward
        else if (el.scrollLeft <= 0) {
           el.scrollLeft = setWidth;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- MOUSE EVENTS (Container Level - Dragging) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    if (scrollContainerRef.current) {
      startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    // Only stop dragging if cursor leaves container.
    // We do NOT reset hover state here; that's handled by card listeners.
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // --- TOUCH EVENTS (Mobile) ---
  // We pause auto-scroll during touch interaction to prevent fighting native scroll
  const handleTouchStart = () => {
    isDraggingRef.current = true;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // --- HOVER EVENTS (Card Level) ---
  // Only pause when hovering specific cards, not the gaps
  const handleCardMouseEnter = () => {
    isCardHoveredRef.current = true;
  };

  const handleCardMouseLeave = () => {
    isCardHoveredRef.current = false;
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                Your business deserves a <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">better website.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Most agency websites are slow, cluttered, and overpriced. We build clean, modern sites that turn visitors into paying customers.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" withArrow onClick={() => navigate('/book-consultation')}>
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Our Work
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION (Draggable + Auto Scroll + Premium Hover) */}
      <section id="work" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Works that speak for themselves</h2>
            <p className="text-slate-500">Clean layouts. Clear typography. Intentional design.</p>
          </div>
        </div>

        {/* Draggable Slider Container */}
        <div className="relative w-full group">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={scrollContainerRef}
            className={`
              flex overflow-x-auto space-x-8 px-4 pb-12 pt-12 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
              ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
            `}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Triplicated items to ensure infinite scrolling buffer */}
            {[...clientTypes, ...clientTypes, ...clientTypes].map((client, index) => (
              <div 
                key={index} 
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                className="
                  relative w-72 h-48 md:w-96 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-slate-200
                  transform transition-all duration-500 ease-out origin-center
                  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10
                  group/card
                "
              >
                <img 
                  src={client.image} 
                  alt={client.title} 
                  className="
                    w-full h-full object-cover pointer-events-none
                    transition-transform duration-700 ease-in-out
                    group-hover/card:scale-105
                  " 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <span className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">Tailored for</span>
                  <h3 className="text-white text-xl font-bold">{client.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS / VALUE PROP */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                {/* Applied premium-hover-card class */}
                <div className="premium-hover-card p-8 rounded-2xl h-full">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <benefit.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <ScrollReveal>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Simple process.<br/>Premium results.</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We don't use confusing jargon. We just build great websites that work for your business.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Discovery call to understand your business goals",
                    "Design & Development (approx. 2 weeks)",
                    "Launch, Training & Handover"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-800">{step}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            
            {/* Living Process Panel */}
            <div className="md:w-1/2 relative" ref={processRef}>
              <ScrollReveal delay={200}>
                <div className="relative z-10 bg-slate-950 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-slate-800/50 pb-4">
                        <div className="flex items-center space-x-2 text-slate-400">
                            <Terminal size={14} />
                            <span className="text-xs font-mono tracking-wide">PROCESS_MONITOR</span>
                        </div>
                        <div className="flex space-x-1.5">
                            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                        </div>
                    </div>

                    {/* Steps Container */}
                    <div className="space-y-4 relative">
                        {/* Step 1: Discovery */}
                        <div className={`
                            relative p-4 rounded-lg border transition-all duration-700 ease-out
                            ${processStep === 1 ? 'bg-indigo-900/10 border-indigo-500/30 translate-x-0 opacity-100' : 
                              processStep > 1 ? 'bg-slate-900/50 border-slate-800 translate-x-0 opacity-60' : 
                              'bg-transparent border-transparent translate-x-4 opacity-30'}
                        `}>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center space-x-3">
                                    <span className={`text-xs font-mono ${processStep === 1 ? 'text-indigo-400' : 'text-slate-500'}`}>01</span>
                                    <span className={`text-sm font-medium ${processStep >= 1 ? 'text-slate-200' : 'text-slate-500'}`}>Discovery</span>
                                </div>
                                {processStep === 1 && <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></div>}
                                {processStep > 1 && <Check size={14} className="text-slate-400" />}
                            </div>
                            <div className={`text-xs pl-7 transition-colors duration-500 ${processStep === 1 ? 'text-indigo-300/80' : 'text-slate-600'}`}>
                                Analyzing requirements...
                            </div>
                        </div>

                        {/* Step 2: Build */}
                        <div className={`
                            relative p-4 rounded-lg border transition-all duration-700 ease-out
                            ${processStep === 2 ? 'bg-indigo-900/10 border-indigo-500/30 translate-x-0 opacity-100' : 
                              processStep > 2 ? 'bg-slate-900/50 border-slate-800 translate-x-0 opacity-60' : 
                              'bg-transparent border-transparent translate-x-4 opacity-30'}
                        `}>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center space-x-3">
                                    <span className={`text-xs font-mono ${processStep === 2 ? 'text-indigo-400' : 'text-slate-500'}`}>02</span>
                                    <span className={`text-sm font-medium ${processStep >= 2 ? 'text-slate-200' : 'text-slate-500'}`}>Design & Build</span>
                                </div>
                                {processStep === 2 && <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></div>}
                                {processStep > 2 && <Check size={14} className="text-slate-400" />}
                            </div>
                            <div className={`text-xs pl-7 transition-colors duration-500 ${processStep === 2 ? 'text-indigo-300/80' : 'text-slate-600'}`}>
                                Compiling architecture...
                            </div>
                        </div>

                        {/* Step 3: Launch */}
                        <div className={`
                            relative p-4 rounded-lg border transition-all duration-700 ease-out
                            ${processStep === 3 ? 'bg-emerald-900/10 border-emerald-500/30 translate-x-0 opacity-100' : 
                              'bg-transparent border-transparent translate-x-4 opacity-30'}
                        `}>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center space-x-3">
                                    <span className={`text-xs font-mono ${processStep === 3 ? 'text-emerald-400' : 'text-slate-500'}`}>03</span>
                                    <span className={`text-sm font-medium ${processStep === 3 ? 'text-white' : 'text-slate-500'}`}>Launch</span>
                                </div>
                                 {processStep === 3 && <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">LIVE</span>}
                            </div>
                            <div className={`text-xs pl-7 transition-colors duration-500 ${processStep === 3 ? 'text-emerald-400/60' : 'text-slate-600'}`}>
                                System deployed.
                            </div>
                        </div>
                    </div>
                    
                    {/* Footer info */}
                    <div className="mt-8 pt-4 border-t border-slate-800/50 flex justify-between items-center text-[10px] font-mono text-slate-600 uppercase">
                         <span>krayora_v1.0</span>
                         <span>{processStep === 3 ? 'Complete' : 'Initializing...'}</span>
                    </div>
                </div>
                {/* Decorative element background - dimmed for focus */}
                <div className="absolute top-10 -right-10 w-full h-full bg-indigo-100 rounded-2xl -z-10 transform rotate-6 opacity-30"></div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to upgrade your business?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Get a website that reflects the quality of your services. No hidden fees, no complex contracts.
            </p>
            <Button variant="secondary" size="lg" onClick={() => navigate('/pricing')}>
              Start Your Project
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Landing;