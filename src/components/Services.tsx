import React from 'react';
import { Wrench, Home, Layers, Search, FileText, Building, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Roof repairs',
      description: 'Leaks, slipped tiles, storm damage and wear. Fixed properly, not patched.',
      highlight: 'Emergency call-outs',
      features: ['Temporary weatherproofing if needed', 'Slate, tile and flat roof repairs', 'Clear quote before work starts'],
    },
    {
      icon: Home,
      title: 'Re-roofing',
      description: 'Full roof replacement in slate, slate-effect or concrete tile, including new battens, membrane and leadwork.',
      highlight: 'Workmanship guarantee',
      features: ['Free survey and written quote', 'Scaffold and waste handled', 'Guarantee terms supplied in writing'],
    },
    {
      icon: Layers,
      title: 'Flat roofs',
      description: 'GRP fibreglass and single-ply systems for extensions, garages and dormers.',
      highlight: 'GRP and single-ply',
      features: ['Roof lanterns and skylights fitted', 'Long service life, low maintenance', 'Insulated warm-roof build-ups'],
    },
    {
      icon: Search,
      title: 'Roof surveys',
      description: 'A proper look at your roof with honest advice on whether to repair or replace.',
      highlight: 'Free survey and quote',
      features: ['Drone survey where it helps', 'Photos of any problems', 'No pressure, no obligation'],
    },
    {
      icon: FileText,
      title: 'Storm damage and insurance work',
      description: 'Help getting your roof made safe and your claim documented.',
      highlight: 'We help with the claim',
      features: ['Photos and report for your insurer', 'Emergency make-safe repairs', 'Repair to pre-damage condition'],
    },
    {
      icon: Building,
      title: 'New build and commercial',
      description: 'Roofing for new builds, developments and commercial buildings.',
      highlight: 'Slate and tile specialists',
      features: ['Work with builders and developers', 'Programme and site safety managed', 'Chimneys and leadwork included'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-oakwell-dark relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5">What we do</h2>
          <p className="text-xl text-oakwell-light max-w-3xl mx-auto">
            Domestic and new-build roofing across Leeds, Bradford, Wakefield, Huddersfield and the
            rest of West Yorkshire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-xl flex flex-col"
            >
              <div className="w-14 h-14 bg-oakwell-dark rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="inline-flex items-center gap-2 bg-oakwell-light/30 text-oakwell-dark px-3 py-1 rounded-full text-sm font-semibold mb-4 self-start">
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                <span>{service.highlight}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-oakwell-medium mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto w-full bg-oakwell-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-oakwell-medium transition-colors block text-center"
              >
                Get a quote
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-oakwell-light text-lg mb-6">
            Not sure what you need? Send us a photo and we'll tell you.
          </p>
          <a
            href="https://wa.me/447469179470?text=Hi%20Oakwell%2C%20could%20you%20take%20a%20look%20at%20my%20roof%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-oakwell-dark font-bold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-300 inline-block"
          >
            Send a photo on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
