import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-slate-900 block mb-4">
              Krayora<span className="text-indigo-600">.</span>
            </span>
            <p className="text-slate-500 text-sm leading-relaxed">
              We build premium, high-converting websites for businesses. 
              Modern design, built to last.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><button onClick={() => navigate('/')} className="hover:text-indigo-600 transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-indigo-600 transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-indigo-600 transition-colors">Pricing & Consultation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><button onClick={() => navigate('/privacy-policy')} className="hover:text-indigo-600 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/terms-of-service')} className="hover:text-indigo-600 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>hello@krayora.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <span>+91 96192 80807</span>
                  <span>+91 70195 13649</span>
                </div>
              </li>
              <li className="flex items-center">
                <Instagram className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>@krayora.design</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Krayora. All rights reserved.</p>
          <p className="text-xs text-slate-400 mt-2 md:mt-0">Designed in India with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;