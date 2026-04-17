'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Target, Shield, Users, Trophy } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import AnimatedDivider from '@/components/AnimatedDivider';

export default function AboutPage() {
  const values = [
    { title: 'Integrity', icon: Shield, desc: 'We do what we say we will do. No shortcuts, no compromises.' },
    { title: 'Precision', icon: Target, desc: 'Every measurement, every cut, every pour is executed with absolute accuracy.' },
    { title: 'Teamwork', icon: Users, desc: 'Great structures are built by united teams working towards a common goal.' },
    { title: 'Excellence', icon: Trophy, desc: 'We aim to exceed expectations on every single project, big or small.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About EJS Calderon Construction LLC",
        "description": "Learn about our history, our values, and why EJS Calderon Construction is the trusted choice in Middletown, NY."
      })}} />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-navy relative border-b-8 border-orange">
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="text-orange font-bold tracking-widest uppercase mb-2 block">Our Story</span>
          <h1 className="text-white font-heading text-6xl md:text-9xl leading-none">
            BUILT ON <span className="text-orange">TRUST</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-orange font-bold tracking-widest uppercase mb-4 block">Who We Are</span>
              <h2 className="text-navy font-heading text-5xl md:text-6xl uppercase mb-8">
                More Than Just Builders.<br/>We Are Partners in Progress.
              </h2>
              <div className="space-y-6 text-steel text-lg leading-relaxed">
                <p>
                  EJS Calderon Construction LLC was founded on a simple principle: build it right the first time. We are a Middletown, NY based general contracting firm specializing in both commercial and residential projects.
                </p>
                <p>
                  With over 15 years of industry experience, our team brings industrial-grade precision to every job site. We understand that whether you are breaking ground on a new retail center, or renovating your family home, you are making a significant investment. 
                </p>
                <p>
                  We protect that investment through rigorous project management, strict safety protocols, and an uncompromising standard for craftsmanship. We don&apos;t just pour concrete and frame walls; we build relationships grounded in integrity and transparency.
                </p>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 border-l-4 border-orange">
                <p className="font-heading text-2xl text-navy italic">
                  &quot;We build structures that stand the test of time, but more importantly, we build trust.&quot;
                </p>
                <p className="font-bold text-orange mt-2">— The EJS Calderon Team</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange transform translate-x-4 translate-y-4 -z-10 clip-diagonal" />
                <div className="bg-navy aspect-[3/4] relative p-8">
                  <div className="relative w-full h-full">
                    <ImagePlaceholder className="absolute inset-0" prompt="construction workers team jobsite hardhats professional realistic bright" text="Team or Jobsite Photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Core Values */}
      <section className="py-24 bg-navy text-white relative clip-diagonal-reverse mt-[-4vw]">
        <div className="container mx-auto px-6 max-w-7xl pt-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl">OUR CORE VALUES</h2>
            <div className="w-24 h-1 bg-orange mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <Icon className="w-12 h-12 text-orange mb-6" />
                  <h3 className="font-heading text-3xl mb-4">{v.title}</h3>
                  <p className="text-gray-400">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange text-navy text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-5xl mb-8">Work With the Best</h2>
          <Link href="/contact" className="inline-block bg-navy hover:bg-white text-white hover:text-navy font-bold py-4 px-10 uppercase tracking-widest transition-colors duration-300 shadow-[8px_8px_0_0_rgba(10,22,40,0.5)]">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
