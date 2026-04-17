'use client';

import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact EJS Calderon Construction LLC",
        "description": "Get in touch with EJS Calderon Construction for a free estimate on your next project."
      })}} />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-navy relative border-b-8 border-orange">
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="text-orange font-bold tracking-widest uppercase mb-2 block">Reach Out</span>
          <h1 className="text-white font-heading text-6xl md:text-9xl leading-none">
            GET AN <span className="text-orange">ESTIMATE</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-10">
              <div>
                <h2 className="font-heading text-4xl text-navy mb-8 uppercase">Contact Details</h2>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-orange p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block font-bold text-navy uppercase tracking-wider text-sm mb-1">Call Us</span>
                    <a href="tel:15852611174" className="text-2xl font-bold hover:text-orange transition-colors">(585) 261-1174</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-navy p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block font-bold text-navy uppercase tracking-wider text-sm mb-1">Location</span>
                    <p className="text-lg text-steel leading-tight">
                      7 Lincoln St<br />
                      Middletown, NY 10940
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-gray-200 p-3 flex-shrink-0 text-navy">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-navy uppercase tracking-wider text-sm mb-1">Hours</span>
                    <table className="w-full text-steel">
                      <tbody>
                        <tr className="border-b border-gray-300">
                          <td className="py-1 pr-4">Mon - Sat</td>
                          <td className="py-1 font-bold text-navy">6:00 AM – 6:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-1 pr-4">Sunday</td>
                          <td className="py-1 font-bold text-orange uppercase text-sm">Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-navy p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
                <h3 className="font-heading text-3xl mb-4 relative z-10">Service Area</h3>
                <p className="text-gray-300 relative z-10">
                  Proudly serving Middletown, NY and surrounding communities. We tackle projects of all scopes within our region. Contact us to verify coverage for your specific location.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 md:p-12 shadow-xl border-t-8 border-navy">
                <h2 className="font-heading text-4xl text-navy mb-2 uppercase">Request a Callback</h2>
                <p className="text-steel mb-8">Fill out the form below with details about your project, and our team will get back to you promptly.</p>
                
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 p-8 text-center"
                  >
                    <h3 className="text-green-800 font-heading text-3xl mb-2">Message Received</h3>
                    <p className="text-green-700">Thank you for reaching out. We will contact you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-bold text-sm tracking-wider uppercase text-navy block">Full Name *</label>
                        <input required type="text" id="name" className="w-full border border-gray-300 p-4 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="font-bold text-sm tracking-wider uppercase text-navy block">Phone Number *</label>
                        <input required type="tel" id="phone" className="w-full border border-gray-300 p-4 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors" placeholder="(555) 555-5555" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-bold text-sm tracking-wider uppercase text-navy block">Email Address</label>
                        <input type="email" id="email" className="w-full border border-gray-300 p-4 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="font-bold text-sm tracking-wider uppercase text-navy block">Service Needed</label>
                        <select id="service" className="w-full border border-gray-300 p-4 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors bg-white">
                          <option>General Contracting</option>
                          <option>Residential Construction</option>
                          <option>Commercial Construction</option>
                          <option>Roofing</option>
                          <option>Concrete & Foundation</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="font-bold text-sm tracking-wider uppercase text-navy block">Project Description *</label>
                      <textarea required id="message" rows={5} className="w-full border border-gray-300 p-4 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none" placeholder="Tell us about your project timeline and scope..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-orange hover:bg-orange-hover text-white font-bold py-5 px-8 uppercase tracking-widest text-lg transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        {/* We use an iframe embed for Google Maps */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4841289569766!2d-74.42500000000001!3d41.4454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c32f8b548b89e7%3A0x627d0a27f6e0ea78!2s7%20Lincoln%20St%2C%20Middletown%2C%20NY%2010940!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - EJS Calderon Construction LLC"
        ></iframe>
      </section>
    </>
  );
}
