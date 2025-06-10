import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Award,
  FileText,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Emergency Roof Repairs',
    'Complete Re-roofing',
    'Flat Roof Specialists',
    'Roof Inspections',
    'Insurance Claims',
    'Commercial Roofing'
  ];

  const areas = [
    'Leeds',
    'Bradford',
    'Wakefield', 
    'Huddersfield',
    'Halifax',
    'Dewsbury'
  ];

  const certifications = [
    { name: 'NFRC Member', icon: Shield },
    { name: 'TrustMark', icon: Award },
    { name: 'CompetentRoofer', icon: FileText },
    { name: 'Safe Contractor', icon: Shield }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-oakwell-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 5l25 20v20L30 55 5 45V25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img 
                  src="/images/oakwell_logo.png" 
                  alt="Oakwell Roofing" 
                  className="h-16 w-auto mb-4 filter brightness-0 invert"
                />
                <h3 className="font-heading text-xl font-bold mb-2">
                  Oakwell Roofing Contractors
                </h3>
                <p className="text-oakwell-light text-sm">
                  Protecting Yorkshire Homes Since 1995
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-oakwell-light" />
                  <a href="tel:07469179470" className="text-sm hover:text-white transition-colors">07469 179470</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-oakwell-light" />
                  <span className="text-sm">info@oakwellroofing.co.uk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-oakwell-light" />
                  <span className="text-sm">West Yorkshire, UK</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4 mt-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 bg-oakwell-medium/20 rounded-lg flex items-center justify-center hover:bg-oakwell-medium transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-lg font-bold mb-6"
              >
                Our Services
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3"
              >
                {services.map((service, index) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-oakwell-light hover:text-white transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Areas Served */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-lg font-bold mb-6"
              >
                Areas Served
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                {areas.map((area, index) => (
                  <li key={area}>
                    <a
                      href="#areas"
                      className="text-oakwell-light hover:text-white transition-colors duration-300 text-sm"
                    >
                      {area}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Emergency & Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-red-600 rounded-lg p-4 mb-6"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-sm">24/7 Emergency</span>
                </div>
                <p className="text-red-100 text-xs">
                  Storm damage? Call now for immediate response
                </p>
                <a href="tel:07469179470" className="text-lg font-bold mt-2 hover:text-red-200 transition-colors inline-block">07469 179470</a>
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-heading text-lg font-bold mb-4"
              >
                Certifications
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2"
              >
                {certifications.map((cert, index) => (
                  <div key={cert.name} className="flex items-center space-x-2">
                    <cert.icon className="w-4 h-4 text-oakwell-light" />
                    <span className="text-sm text-oakwell-light">{cert.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-oakwell-medium/20 rounded-2xl p-8 mb-12"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Yorkshire Roof Maintenance Tips
              </h3>
              <p className="text-oakwell-light mb-6">
                Get seasonal maintenance tips and early warning signs to protect your roof. 
                Unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-oakwell-light"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-oakwell-dark font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center py-8 border-t border-oakwell-medium/30"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-oakwell-light text-sm">Homes Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-oakwell-light text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-oakwell-light text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-oakwell-light text-sm">Emergency Service</div>
              </div>
            </div>
            <p className="text-oakwell-light text-lg">
              "Proud to protect Yorkshire homes since 1995"
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-oakwell-medium/30">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-oakwell-light text-sm">
                © 2024 Oakwell Roofing Contractors. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="text-oakwell-light">
                  Privacy Policy
                </span>
                <span className="text-oakwell-light">
                  Terms of Service
                </span>
                <span className="text-oakwell-light">
                  Cookie Policy
                </span>
                <span className="text-oakwell-light">
                  Complaints Procedure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;