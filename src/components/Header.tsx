import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Emergency Banner */}
      <motion.a
        href="tel:07469179470"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="block bg-red-600 text-white py-4 px-4 text-center font-semibold text-sm md:text-base hover:bg-red-700 transition-colors cursor-pointer"
      >
        <div className="flex items-center justify-center space-x-2">
          <Phone className="w-4 h-4 animate-pulse" />
          <span>Storm Damage? Call Now: 07469 179470 - 24/7 Emergency Service</span>
        </div>
      </motion.a>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
        style={{ top: '54px' }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/images/oakwell_logo.png" 
                alt="Oakwell Roofing" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-16'
                }`}
              />
              <div>
                <h1 className="font-heading text-xl md:text-2xl font-bold text-oakwell-dark">
                  Oakwell Roofing
                </h1>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  Protecting Yorkshire Homes Since 1995
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-gray-700 hover:text-oakwell-dark font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-oakwell-dark transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                href="tel:07469179470"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-oakwell-dark hover:text-oakwell-medium font-semibold flex items-center space-x-2 text-sm border border-oakwell-dark rounded-lg px-4 py-2 hover:bg-oakwell-light/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 07469 179470</span>
              </motion.a>
              <motion.a
                href="tel:07469179470"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency flex items-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm"
              >
                Free Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden bg-white border-t"
        >
          <div className="section-container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-oakwell-dark font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a 
                  href="tel:07469179470"
                  className="text-oakwell-dark border border-oakwell-dark font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 07469 179470</span>
                </a>
                <a href="tel:07469179470" className="btn-emergency flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Emergency Call</span>
                </a>
                <a href="#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Free Quote</a>
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;