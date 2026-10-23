import React from 'react';

const Portfolio: React.FC = () => {
  const images = [
    { src: '/images/complex-slate-aerial.jpg', alt: 'Multi-gable slate roof on a new build, seen from above' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.10.jpeg', alt: 'Hip roof re-covered in slate-effect tiles' },
    { src: '/images/terracotta-tile-roof.jpg', alt: 'Roofers finishing a terracotta tile roof' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.09.jpeg', alt: 'Single-ply flat roof with rooflights on an extension' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (3).jpeg', alt: 'Dormer with composite cladding and tiled roof' },
    { src: '/images/hip-roof-tiles.jpg', alt: 'Roofer on the ridge of a terracotta hip roof' },
    { src: '/images/flat-roof-skylight.jpg', alt: 'GRP flat roof with a roof lantern on a stone extension' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.12 (3).jpeg', alt: 'Breathable membrane and battens being fitted before tiling' },
    { src: '/images/tile-roof-dormer.jpg', alt: 'Tiled roof with dormer window' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14 (2).jpeg', alt: 'Completed re-roof on a semi-detached house' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14 (4).jpeg', alt: 'Rebuilt stone chimney stack' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.12 (1).jpeg', alt: 'Lead flashing and back gutter to a chimney' },
    { src: '/images/new-build-slate.jpg', alt: 'Stone new build with a full slate roof' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14 (3).jpeg', alt: 'Finished tile roof seen from the scaffold' },
    { src: '/images/WhatsApp Image 2025-04-07 at 22.33.14 (8).jpeg', alt: 'New build slate roof with dormers, aerial view' },
    { src: '/images/grp-flat-roof-extension.jpg', alt: 'GRP flat roof on a home extension' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-5">Recent work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Slate, tile, flat roofs, chimneys and leadwork across West Yorkshire. More on our Facebook page.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <figure key={image.src} className="relative aspect-square overflow-hidden rounded-xl shadow-lg m-0">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-600 mb-6">Want a roof like one of these? Get in touch for a free quote.</p>
          <a href="#contact" className="btn-primary inline-block">Get a free quote</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
