import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, MapPin, Calendar } from 'lucide-react';

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'pitched', name: 'Pitched Roofs' },
    { id: 'flat', name: 'Flat Roofs' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      category: 'pitched',
      title: 'Victorian Terrace Re-roof',
      location: 'Leeds, West Yorkshire',
      date: '2024',
      costRange: '£6,000 - £8,000',
      before: '/images/WhatsApp Image 2025-04-07 at 22.33.09.jpeg',
      after: '/images/WhatsApp Image 2025-04-07 at 22.33.10.jpeg',
      description: 'Complete slate roof replacement with modern insulation and breathable membrane.'
    },
    {
      id: 2,
      category: 'flat',
      title: 'Modern Extension Flat Roof',
      location: 'Bradford, West Yorkshire',
      date: '2024',
      costRange: '£3,500 - £4,500',
      before: '/images/WhatsApp Image 2025-04-07 at 22.33.11.jpeg',
      after: '/images/WhatsApp Image 2025-04-07 at 22.33.12.jpeg',
      description: 'High-performance EPDM flat roof installation with 20-year warranty.'
    },
    {
      id: 3,
      category: 'commercial',
      title: 'Industrial Warehouse Roof',
      location: 'Wakefield, West Yorkshire',
      date: '2024',
      costRange: '£15,000 - £20,000',
      before: '/images/WhatsApp Image 2025-04-07 at 22.33.13.jpeg',
      after: '/images/WhatsApp Image 2025-04-07 at 22.33.14.jpeg',
      description: 'Large-scale commercial roof replacement with energy-efficient materials.'
    },
    {
      id: 4,
      category: 'heritage',
      title: 'Listed Building Restoration',
      location: 'Halifax, West Yorkshire',
      date: '2024',
      costRange: '£12,000 - £15,000',
      before: '/images/WhatsApp Image 2025-04-07 at 22.33.09 (1).jpeg',
      after: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (1).jpeg',
      description: 'Sympathetic restoration using traditional Welsh slate and heritage techniques.'
    },
    {
      id: 5,
      category: 'pitched',
      title: 'Modern Family Home',
      location: 'Huddersfield, West Yorkshire',
      date: '2024',
      costRange: '£7,500 - £9,500',
      before: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (2).jpeg',
      after: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (3).jpeg',
      description: 'Contemporary tile roof with integrated solar panel preparation.'
    },
    {
      id: 6,
      category: 'flat',
      title: 'City Centre Apartment',
      location: 'Leeds, West Yorkshire',
      date: '2024',
      costRange: '£4,000 - £5,500',
      before: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (4).jpeg',
      after: '/images/WhatsApp Image 2025-04-07 at 22.33.10 (5).jpeg',
      description: 'Premium GRP flat roof system with 25-year manufacturer warranty.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
            See the quality and craftsmanship that makes Oakwell Roofing the preferred choice 
            for homeowners and businesses across West Yorkshire.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-oakwell-dark text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Before/After Slider */}
              <div className="relative h-64 overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src={project.before}
                    alt={`${project.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={project.after}
                    alt={`${project.title} - After`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Before/After Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-oakwell-dark text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    After
                  </div>

                  {/* View Button */}
                  <motion.button
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() => {}}
                  >
                    <Eye className="w-6 h-6 text-oakwell-dark" />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-oakwell-dark font-bold">
                    {project.costRange}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'pitched' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'flat' ? 'bg-green-100 text-green-800' :
                    project.category === 'heritage' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Eye className="w-5 h-5" />
            <span>View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;