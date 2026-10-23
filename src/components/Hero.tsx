import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ClipboardCheck, Phone, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/complex-slate-aerial.jpg"
          alt="Aerial view of a new slate roof fitted by Oakwell Roofing"
          className="w-full h-full object-cover"
          width={2048}
          height={1152}
          {...({ fetchpriority: 'high' } as Record<string, string>)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 w-full">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Slate, tile and flat roofing across West Yorkshire
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              Re-roofs, repairs, flat roofs, chimneys and leadwork for homes and new builds.
              Free, no-obligation quotes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/90 text-base md:text-lg mb-8"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-5 h-5 text-oakwell-light" aria-hidden="true" />
                Based in Morley, Leeds
              </span>
              <span className="inline-flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-oakwell-light" aria-hidden="true" />
                Free surveys and written quotes
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5 text-oakwell-light" aria-hidden="true" />
                Emergency call-outs
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Get a free quote</span>
              </a>
              <a
                href="tel:07469179470"
                className="inline-flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-lg font-semibold bg-white/10 text-white border border-white/40 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call 07469 179470</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
