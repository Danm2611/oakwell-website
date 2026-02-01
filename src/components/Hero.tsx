import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Phone, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [rainDrops, setRainDrops] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const drops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setRainDrops(drops);
  }, []);

  const trustBadges = [
    { name: 'NFRC Member', icon: Shield },
    { name: 'TrustMark', icon: Award },
    { name: "Which? Trusted", icon: Shield },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/complex-slate-aerial.jpg"
          alt="Professional slate roofing by Oakwell Roofing"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Animated Rain Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {rainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            className="rain-drop"
            style={{ left: `${drop.left}%` }}
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: drop.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="section-container pt-20 md:pt-24">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              West Yorkshire's Most{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-oakwell-light to-oakwell-medium">
                Trusted
              </span>{' '}
              Roofing Specialists
            </motion.h1>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 md:gap-8 text-white/90 text-lg md:text-xl mb-8"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-oakwell-light" />
                <span>24/7 Emergency Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-oakwell-light" />
                <span>Insurance Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-oakwell-light" />
                <span>25 Year Guarantee</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="tel:07469179470"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency flex items-center justify-center space-x-3 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                <span>Get Emergency Help</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(27, 94, 145, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-3 text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                <span>Free Roof Inspection</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <span className="text-white/70 font-medium text-sm">Trusted by:</span>
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <badge.icon className="w-4 h-4 text-oakwell-light" />
                  <span className="text-white text-sm font-medium">{badge.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-white/70 text-sm mt-2 text-center">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;