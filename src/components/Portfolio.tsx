import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    '/images/complex-slate-aerial.jpg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.10.jpeg',
    '/images/terracotta-tile-roof.jpg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.09.jpeg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.10 (3).jpeg',
    '/images/hip-roof-tiles.jpg',
    '/images/flat-roof-skylight.jpg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.12 (3).jpeg',
    '/images/tile-roof-dormer.jpg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.14 (2).jpeg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.13.jpeg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.12 (1).jpeg',
    '/images/WhatsApp Image 2025-04-07 at 22.33.14.jpeg',
    '/images/grp-flat-roof-extension.jpg',
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality craftsmanship across West Yorkshire. From slate roofs to flat roofs,
            see the standard of work you can expect from Oakwell Roofing.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            >
              <img
                src={image}
                alt="Oakwell Roofing project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oakwell-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see your roof transformed? Get in touch for a free quote.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
