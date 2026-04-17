'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function ProjectsPage() {
  const projects = [
    { title: 'Oakwood Commercial Center', category: 'Commercial', delay: 0 },
    { title: 'Pine Ridge Estate Addition', category: 'Residential', delay: 0.1 },
    { title: 'Middletown Plaza Roofing', category: 'Roofing', delay: 0.2 },
    { title: 'Valley High Structural Framing', category: 'Framing', delay: 0.3 },
    { title: 'Sunrise Retail Build-Out', category: 'Commercial', delay: 0.4 },
    { title: 'Maple Street Custom Home', category: 'Residential', delay: 0.5 },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Projects Portfolio | EJS Calderon Construction LLC",
        "description": "View our portfolio of completed commercial, residential, and industrial construction projects."
      })}} />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-navy relative border-b-8 border-orange">
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="text-orange font-bold tracking-widest uppercase mb-2 block">Our Portfolio</span>
          <h1 className="text-white font-heading text-6xl md:text-9xl leading-none">
            SUCCESSFUL <span className="text-orange">PROJECTS</span>
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: project.delay, duration: 0.5 }}
                className="group relative cursor-none"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-navy relative overflow-hidden border-4 border-transparent group-hover:border-orange transition-colors duration-300">
                  <ImagePlaceholder className="absolute inset-0" prompt={`construction project ${project.title} photorealistic architecture`} text={project.title} />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-orange/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end p-6 z-20">
                    <span className="text-white font-bold tracking-widest text-xs uppercase mb-1 opacity-80">{project.category}</span>
                    <h3 className="text-white font-heading text-3xl uppercase">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-navy font-heading text-4xl mb-6">Have a project in mind?</h2>
          <Link href="/contact" className="inline-block bg-navy hover:bg-orange text-white font-bold py-4 px-8 uppercase tracking-widest transition-colors duration-300">
            Let&apos;s Talk Details
          </Link>
        </div>
      </section>
    </>
  );
}
