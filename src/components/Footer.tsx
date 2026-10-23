import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Roof repairs',
    'Re-roofing',
    'Flat roofs',
    'Chimneys and leadwork',
    'Storm damage and insurance work',
    'New build and commercial',
  ];

  const areas = ['Morley', 'Leeds', 'Bradford', 'Wakefield', 'Huddersfield', 'Halifax', 'Dewsbury', 'Cleckheaton'];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Oakwell-Roofing-Ltd-100089302566138/', label: 'Oakwell Roofing on Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/oakwell_roofing_ltd/', label: 'Oakwell Roofing on Instagram' },
  ];

  return (
    <footer className="bg-oakwell-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="/images/oakwell_logo.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 mb-4 bg-white/10 rounded-lg p-1"
              loading="lazy"
            />
            <h3 className="font-heading text-xl font-bold mb-1">Oakwell Roofing Ltd</h3>
            <p className="text-oakwell-light text-sm mb-5">Roofers in Morley, Leeds</p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-oakwell-light flex-shrink-0" aria-hidden="true" />
                <a href="tel:07469179470" className="hover:text-oakwell-light transition-colors">07469 179470</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-oakwell-light flex-shrink-0" aria-hidden="true" />
                <a href="mailto:lewis@oakwellroofing.com" className="hover:text-oakwell-light transition-colors break-all">
                  lewis@oakwellroofing.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-oakwell-light flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>55 Fountain Street, Morley, Leeds LS27 0AA</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-oakwell-medium transition-colors"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="/#services" className="text-oakwell-light hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Areas we cover</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area} className="text-oakwell-light text-sm">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-red-700 rounded-lg p-4 mb-6">
              <div className="font-bold text-sm mb-1">Roof emergency?</div>
              <p className="text-red-100 text-xs mb-2">Call us and we'll get it made safe.</p>
              <a href="tel:07469179470" className="text-lg font-bold hover:text-red-100 transition-colors inline-block">
                07469 179470
              </a>
            </div>
            <h4 className="font-heading text-lg font-bold mb-3">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-oakwell-light hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="/privacy#cookies" className="text-oakwell-light hover:text-white transition-colors">Cookies</a></li>
              <li><a href="/privacy#complaints" className="text-oakwell-light hover:text-white transition-colors">Complaints</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="section-container py-6 text-oakwell-light text-xs leading-relaxed">
          <p className="mb-1">
            © {new Date().getFullYear()} Oakwell Roofing Ltd. Registered in England and Wales, company number 13915962.
            Registered office: 55 Fountain Street, Morley, Leeds, West Yorkshire, LS27 0AA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
