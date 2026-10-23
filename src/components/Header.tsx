import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const PHONE_DISPLAY = '07469 179470';
const PHONE_HREF = 'tel:07469179470';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Our work', href: '/#portfolio' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white text-oakwell-dark px-4 py-2 rounded"
      >
        Skip to content
      </a>

      {/* Emergency banner */}
      <a
        href={PHONE_HREF}
        className="block bg-red-700 text-white py-3 px-4 text-center font-semibold text-sm md:text-base hover:bg-red-800 transition-colors"
      >
        <span className="inline-flex items-center gap-2">
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Roof emergency? Call {PHONE_DISPLAY}</span>
        </span>
      </a>

      <header
        className={`sticky top-0 w-full z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : 'border-b border-gray-100'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between gap-4 py-3">
            <a href="/" className="flex items-center gap-3 min-w-0">
              <img
                src="/images/oakwell_logo.png"
                alt=""
                width={64}
                height={64}
                className={`transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-14 w-14'}`}
              />
              <span className="min-w-0">
                <span className="block font-heading text-lg md:text-xl font-bold text-oakwell-dark leading-tight">
                  Oakwell Roofing
                </span>
                <span className="block text-xs text-gray-600 font-medium">Morley, Leeds</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-oakwell-dark font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-oakwell-dark transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="text-oakwell-dark hover:text-oakwell-medium font-semibold inline-flex items-center gap-2 text-sm border border-oakwell-dark rounded-lg px-4 py-2 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a href="/#contact" className="btn-primary text-sm whitespace-nowrap">
                Free quote
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden bg-white border-t transition-all duration-300 ${
            isMenuOpen ? 'max-h-[480px]' : 'max-h-0'
          }`}
        >
          <div className="section-container py-4">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-oakwell-dark font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <a
                  href={PHONE_HREF}
                  className="text-oakwell-dark border border-oakwell-dark font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>
                <a href="/#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                  Free quote
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
