'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HardHat, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-navy h-[80px] px-10 flex items-center justify-between border-b-[4px] border-orange"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 17H22L12 2L2 17Z" fill="#E8620A"/>
              <rect x="8" y="17" width="8" height="4" fill="#E8620A"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-heading text-[28px] leading-[0.9] font-black text-white tracking-[-1px]">EJS CALDERON</span>
              <span className="text-orange text-[11px] font-bold tracking-[2px] uppercase">Construction LLC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex list-none gap-8 m-0 p-0">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`font-sans font-bold text-[13px] uppercase tracking-[1px] text-white pb-1 ${
                      pathname === link.path ? 'border-b-2 border-orange' : 'hover:border-b-2 hover:border-orange hover:border-opacity-50 transition-colors'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:15852611174"
              className="text-orange font-black text-[14px] no-underline"
            >
              +1 (585) 261-1174
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy top-0 left-0 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-heading text-4xl uppercase tracking-wider ${
                    pathname === link.path ? 'text-orange' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-steel pt-6 mt-4">
                <a
                  href="tel:15852611174"
                  className="bg-orange text-white font-bold py-4 px-6 w-full uppercase tracking-wider text-center flex items-center justify-center gap-3 text-lg rounded-sm"
                >
                  <Phone className="w-6 h-6" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
