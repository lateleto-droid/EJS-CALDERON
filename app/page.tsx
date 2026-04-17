'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Ruler, Hammer, Building2, Quote } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import AnimatedDivider from '@/components/AnimatedDivider';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const wordAnimation = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 15 } },
  };

  const services = [
    { title: 'General Contracting', icon: Building2, desc: 'End-to-end management of your entire construction project.' },
    { title: 'Residential Construction', icon: Hammer, desc: 'Custom homes and major renovations built to your exact specs.' },
    { title: 'Commercial Construction', icon: Ruler, desc: 'Retail, office, and industrial spaces delivered on time.' },
    { title: 'Roofing & Framing', icon: HardHat, desc: 'Structural integrity you can bet your life on.' },
  ];

  const stats = [
    { label: 'Years Experience', value: 15, suffix: '+' },
    { label: 'Projects Completed', value: 250, suffix: '+' },
    { label: 'Clients Served', value: 180, suffix: '+' },
    { label: 'Average Rating', value: 5.0, suffix: '' },
  ];

  const reviews = [
    { author: 'Remberto Calderon', text: 'Excellent service and top-notch craftsmanship. They finished the project on time and the results are amazing. I will definitely hire them again for future projects!' },
    { author: 'Byron E. Calderon Padilla', text: 'I am very happy with the results. The team at EJS Calderon Construction LLC is reliable, punctual, and very easy to work with. If you are looking for great craftsmanship, this is the company to hire!' },
    { author: 'Juan Calderon (Local Guide)', text: 'Excellent and efficient work.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "EJS Calderon Construction LLC",
        "image": "https://example.com/logo.png",
        "@id": "",
        "url": "https://example.com",
        "telephone": "+15852611174",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7 Lincoln St",
          "addressLocality": "Middletown",
          "addressRegion": "NY",
          "postalCode": "10940",
          "addressCountry": "US"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "06:00",
          "closes": "18:00"
        }
      })}} />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex overflow-hidden bg-navy pt-[80px]">
        <div className="absolute inset-0 bg-blueprint pointer-events-none" />
        <div className="absolute bottom-[-40px] right-5 font-heading text-[240px] text-white/5 leading-none select-none pointer-events-none">01</div>
        
        <div className="w-full md:w-[60%] pl-[40px] md:pl-[80px] py-[60px] flex flex-col justify-center relative z-10">
          <span className="text-orange font-black uppercase tracking-[4px] text-[14px] mb-[12px] block">General Contracting & Framing</span>
          <motion.h1 
            variants={wordAnimation}
            initial="hidden"
            animate="show"
            className="text-white font-heading text-[70px] md:text-[100px] leading-[0.85] font-black uppercase mb-[30px] flex flex-wrap gap-x-4"
          >
            <div className="w-full">BUILDING<br/>WITH<br/><span className="text-orange font-black flex items-center gap-[15px]">
              INTEGRITY.
            </span></div>
          </motion.h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl font-sans leading-relaxed border-l-4 border-orange pl-6">
            We build structures that stand the test of time. General contracting for Middletown, NY and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" className="bg-orange text-navy hover:bg-orange-hover font-black py-[20px] px-[40px] uppercase tracking-[2px] text-[16px] w-fit shadow-[6px_6px_0px_#FFFFFF] flex items-center justify-center gap-[15px] transition-colors relative z-20">
              Start Your Estimate
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-navy font-black py-[20px] px-[40px] uppercase tracking-[2px] text-[16px] transition-all duration-300 text-center flex items-center justify-center gap-2">
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* Hero BG Image Placeholder */}
        <div className="hidden md:flex w-[40%] bg-[#0d1e33] border-l border-white/5 items-center justify-center relative clip-placeholder overflow-hidden">
          <ImagePlaceholder className="absolute inset-0" prompt="epic dynamic construction site building structure crane wide angle cinematic" text="Hero Background" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white h-auto md:h-[120px] flex flex-col md:flex-row border-t-[8px] border-orange relative">
        <div className="absolute top-[-12px] left-0 w-full h-[4px] bg-caution pointer-events-none" />
        {stats.map((stat, i) => (
          <div key={i} className={`flex-1 flex flex-col justify-center px-[40px] py-6 md:py-0 ${i !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#eee]' : ''} ${i === stats.length -1 ? 'bg-[#fcfcfc]' : ''}`}>
            <span className="text-navy font-heading text-[40px] font-black leading-none mb-1">
              <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-steel font-bold uppercase tracking-[1px] text-[11px]">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60">
            {['100% Insured & Licensed', 'OSHA Certified Teams', 'On-Time Completion Guarantee', 'BBB Accredited Business'].map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-navy" />
                <span className="font-heading text-2xl uppercase tracking-wider text-navy">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 relative pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <span className="text-orange font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-navy font-heading text-5xl md:text-7xl leading-none inline-block relative">
              <span className="absolute -left-8 -top-12 text-[150px] font-heading text-gray-200 opacity-50 z-0 select-none">01</span>
              <span className="relative z-10">Constructing Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 relative border border-gray-100 shadow-sm"
                >
                  <div className="absolute left-0 bottom-0 top-0 w-0 bg-orange group-hover:w-2 transition-all duration-300 ease-out" />
                  <div className="bg-navy w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl text-navy mb-4 uppercase">{service.title}</h3>
                  <p className="text-steel mb-6">{service.desc}</p>
                  <Link href="/services" className="text-orange font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-orange font-bold tracking-widest uppercase mb-2 block">Client Validation</span>
            <h2 className="text-navy font-heading text-5xl md:text-7xl leading-none inline-block relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-12 text-[150px] font-heading text-gray-100 opacity-50 z-0 select-none">02</span>
              <span className="relative z-10">Built On Reputation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 relative border-t-4 border-orange"
              >
                <Quote className="text-gray-200 w-16 h-16 absolute top-4 right-4 z-0" />
                <p className="text-navy font-medium italic relative z-10 mb-6">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <a href="tel:15852611174" className="block w-full bg-orange text-white text-center font-bold font-heading text-2xl py-4 uppercase tracking-widest shadow-lg">
          Call Now
        </a>
      </div>
    </>
  );
}
