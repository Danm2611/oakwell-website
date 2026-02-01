import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: '/images/complex-slate-aerial.jpg', alt: 'Complex slate roof installation aerial view in West Yorkshire' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.10.jpeg', alt: 'Professional roofing work completed by Oakwell Roofing' },
    { src: '/images/terracotta-tile-roof.jpg', alt: 'Terracotta tile roof replacement in Leeds' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.09.jpeg', alt: 'Quality roof repair work in Bradford' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (3).jpeg', alt: 'Residential roofing project in Huddersfield' },
    { src: '/images/hip-roof-tiles.jpg', alt: 'Hip roof tile installation with precision craftsmanship' },
    { src: '/images/flat-roof-skylight.jpg', alt: 'Flat roof with skylight installation' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.12 (3).jpeg', alt: 'Expert roof restoration in Wakefield' },
    { src: '/images/tile-roof-dormer.jpg', alt: 'Tile roof with dormer window installation' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14 (2).jpeg', alt: 'Complete re-roofing project in Halifax' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.13.jpeg', alt: 'Professional lead flashing and detail work' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.12 (1).jpeg', alt: 'New roof installation with high-quality materials' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.09 (1).jpeg', alt: 'Scaffolding and roof replacement in progress' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14 (3).jpeg', alt: 'Finished roofing project in Dewsbury' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14.jpeg', alt: 'Quality slate roofing workmanship' },
    { src: '/images/grp-flat-roof-extension.jpg', alt: 'GRP flat roof on home extension' },
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
                src={image.src}
                alt={image.alt}
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
