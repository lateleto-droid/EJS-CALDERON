import Link from 'next/link';
import { HardHat, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] text-steel pt-20 pb-10 border-t-[8px] border-orange relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17H22L12 2L2 17Z" fill="#E8620A"/>
                <rect x="8" y="17" width="8" height="4" fill="#E8620A"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-heading text-2xl leading-none tracking-tight text-navy">EJS CALDERON</span>
                <span className="text-orange text-[10px] font-bold tracking-widest uppercase">Construction LLC</span>
              </div>
            </Link>
            <p className="text-steel text-sm leading-relaxed mb-6 max-w-xs font-medium border-l-2 border-orange pl-4 block">
              Building trust and solid foundations across New York. Delivering serious construction projects with precision, safety, and undeniable quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-2xl mb-6 relative inline-block text-navy">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-[4px] bg-orange block"></span>
            </h3>
            <ul className="flex flex-col gap-3 font-medium">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-steel hover:text-orange transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-orange opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="uppercase text-[12px] tracking-[1px]">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-2xl mb-6 relative inline-block text-navy">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-[4px] bg-orange block"></span>
            </h3>
            <ul className="flex flex-col gap-4 font-medium text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange w-5 h-5 flex-shrink-0 mt-1" />
                <span><b className="text-navy uppercase tracking-wider block text-[11px] mb-[2px]">Address</b>
                7 Lincoln St<br />Middletown, NY 10940</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange w-5 h-5 flex-shrink-0" />
                <span><b className="text-navy uppercase tracking-wider block text-[11px] mb-[2px]">Call</b>
                <a href="tel:15852611174" className="hover:text-orange transition-colors">(585) 261-1174</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-2xl mb-6 relative inline-block text-navy">
              Business Hours
              <span className="absolute -bottom-2 left-0 w-1/2 h-[4px] bg-orange block"></span>
            </h3>
            <ul className="flex flex-col gap-3 text-steel text-[13px] relative font-medium">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Mon - Sat</span>
                <span className="text-navy font-bold">6:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span className="text-orange font-bold uppercase">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] font-medium text-steel gap-4">
          <p>
            <b className="text-navy uppercase tracking-widest text-[10px]">Registered Contractor NY</b>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            &copy; {new Date().getFullYear()} EJS Calderon Construction LLC.
          </p>
          <div className="flex gap-6 uppercase tracking-wider text-[11px]">
            <Link href="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
