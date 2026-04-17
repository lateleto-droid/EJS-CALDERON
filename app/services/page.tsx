'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Ruler, Hammer, Building2, HardHat, Pickaxe, Drill, ArrowRight } from 'lucide-react';
import AnimatedDivider from '@/components/AnimatedDivider';

export default function ServicesPage() {
  const allServices = [
    {
      id: "general-contracting",
      title: 'General Contracting',
      icon: Building2,
      desc: 'We oversee your entire project from blueprints to final inspection. Our strict management ensures safety, budget adherence, and on-time delivery.',
      features: ['Permit Acquisition', 'Subcontractor Management', 'Site Safety Enforcement', 'Daily Progress Tracking']
    },
    {
      id: "residential",
      title: 'Residential Construction',
      icon: Hammer,
      desc: 'Building custom homes and executing major renovations. We turn structural plans into livable art with precise craftsmanship.',
      features: ['Custom Home Builds', 'Major Additions', 'Kitchen & Bath Remodels', 'Structural Modifications']
    },
    {
      id: "commercial",
      title: 'Commercial Construction',
      icon: Ruler,
      desc: 'Delivering retail, office, and industrial spaces. We understand that time is money, and we build to get your business operational faster.',
      features: ['Office Fit-Outs', 'Retail Spaces', 'Warehouse Construction', 'Restaurant Build-Outs']
    },
    {
      id: "roofing-framing",
      title: 'Roofing & Framing',
      icon: HardHat,
      desc: 'The backbone and shield of your structure. We provide heavy-duty framing and industrial-grade roofing solutions.',
      features: ['Timber & Steel Framing', 'Truss Installation', 'Commercial Flat Roofs', 'Shingle & Metal Roofing']
    },
    {
      id: "concrete",
      title: 'Concrete & Foundation',
      icon: Pickaxe,
      desc: 'A structure is only as good as its foundation. We pour, cure, and reinforce concrete that exceeds load-bearing specifications.',
      features: ['Footings & Foundations', 'Slab Pouring', 'Retaining Walls', 'Concrete Repair']
    },
    {
      id: "finishing",
      title: 'Interior/Exterior Finishing',
      icon: Drill,
      desc: 'The final layer of durability and aesthetics. From drywall to siding, our finishes are flawless and built to endure.',
      features: ['Drywall & Insulation', 'Siding Installation', 'Industrial Painting', 'Custom Trim & Millwork']
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Services | EJS Calderon Construction LLC",
        "description": "Comprehensive construction services in Middletown, NY including general contracting, residential, commercial, roofing, and concrete."
      })}} />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-navy relative border-b-8 border-orange">
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="text-orange font-bold tracking-widest uppercase mb-2 block">What We Do</span>
          <h1 className="text-white font-heading text-6xl md:text-9xl leading-none">
            OUR <span className="text-orange">SERVICES</span>
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="flex flex-col bg-gray-50 border-t-[6px] border-orange p-10 lg:p-12 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-[-10%] text-[180px] font-heading text-navy/5 leading-none pointer-events-none select-none z-0 transform group-hover:scale-110 transition-transform duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Service Info */}
                  <div className="w-full flex flex-col pt-4 relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="bg-navy w-16 h-16 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-navy font-heading text-4xl md:text-5xl uppercase leading-tight">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-steel text-lg mb-10 leading-relaxed max-w-2xl">
                      {service.desc}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange mt-[6px] flex-shrink-0" />
                          <span className="text-navy font-bold text-[15px]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-gray-200">
                      <Link href="/contact" className="inline-flex items-center gap-2 text-navy hover:text-orange font-black uppercase tracking-[2px] transition-colors duration-300 group/link">
                        Get Estimate
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedDivider />
      <section className="py-24 bg-navy text-center px-6 clip-diagonal-reverse mt-[-4vw]">
        <div className="container mx-auto max-w-4xl pt-10">
          <h2 className="text-white font-heading text-5xl md:text-7xl mb-8">READY TO BREAK GROUND?</h2>
          <p className="text-gray-300 text-xl mb-10">Contact us today to discuss your project requirements and schedule a site visit.</p>
          <Link href="/contact" className="inline-block bg-orange hover:bg-orange-hover text-white font-bold py-5 px-10 uppercase tracking-widest text-lg shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] transition-transform transform hover:-translate-y-1">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
