import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Wrench, 
  Home, 
  Layers, 
  Search, 
  FileText, 
  Building,
  Clock,
  Shield
} from 'lucide-react';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Wrench,
      title: "Emergency Roof Repairs",
      description: "Rapid response for storm damage, leaks, and urgent repairs",
      highlight: "1-Hour Response Time",
      price: "From £150",
      features: ["24/7 availability", "Emergency weatherproofing", "Insurance claim assistance"]
    },
    {
      icon: Home,
      title: "Complete Re-Roofing", 
      description: "Full roof replacement with premium materials and craftsmanship",
      highlight: "10 Year Warranty",
      price: "From £5,500",
      features: ["Free detailed survey", "Premium materials", "Project management"]
    },
    {
      icon: Layers,
      title: "Flat Roof Specialists",
      description: "EPDM, GRP, and modern flat roofing systems",
      highlight: "EPDM & GRP Systems", 
      price: "From £70/m²",
      features: ["20+ year lifespan", "Energy efficient", "Minimal maintenance"]
    },
    {
      icon: Search,
      title: "Roof Inspections",
      description: "Comprehensive roof health checks and maintenance advice",
      highlight: "Free Survey & Quote",
      price: "FREE",
      features: ["Drone surveys available", "Detailed report", "Maintenance plan"]
    },
    {
      icon: FileText,
      title: "Insurance Claims",
      description: "Full support for storm damage and insurance claims",
      highlight: "We Handle Everything",
      price: "No upfront costs",
      features: ["Direct billing", "Claims management", "Restoration work"]
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Large-scale roofing for schools, offices, and warehouses",
      highlight: "Schools, Offices, Warehouses",
      price: "Bespoke quotes",
      features: ["Project management", "Minimal disruption", "Health & safety"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-oakwell-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 5l25 20v20L30 55 5 45V25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Roofing Services
          </h2>
          <p className="text-xl text-oakwell-light max-w-3xl mx-auto">
            From emergency repairs to complete re-roofing, we deliver exceptional results 
            with unmatched expertise across West Yorkshire.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-oakwell-light/10 to-oakwell-medium/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-oakwell-dark to-oakwell-medium rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-oakwell-dark transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center space-x-2 bg-oakwell-light/20 text-oakwell-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{service.highlight}</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-oakwell-dark mb-4">
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-oakwell-medium mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-oakwell-dark to-oakwell-medium text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </div>

              {/* Hover Effect Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-oakwell-medium to-oakwell-light opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-oakwell-light text-lg mb-6">
            Need a custom solution? We handle all types of roofing projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-oakwell-dark font-bold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-300"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;