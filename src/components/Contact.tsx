import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Upload,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: '',
    urgency: 'normal',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "24/7 Emergency Hotline",
      details: "07469 179470",
      description: "Available round the clock for emergency repairs"
    },
    {
      icon: Phone,
      title: "General Enquiries", 
      details: "07469 179470",
      description: "Monday - Friday: 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@oakwellroofing.co.uk",
      description: "We respond within 2 hours during business days"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "West Yorkshire",
      description: "Leeds, Bradford, Wakefield, Huddersfield & surrounding areas"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need a roofing expert? Contact us for emergency repairs, free inspections, 
            or project consultations. We're here to help 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Send Us Your Details
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600">
                  We'll get back to you within 2 hours during business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-transparent transition-all duration-300"
                      placeholder="e.g. LS1 1AA"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="inspection">Free Inspection</option>
                    <option value="reroofing">Complete Re-roofing</option>
                    <option value="flat-roof">Flat Roof Specialist</option>
                    <option value="insurance">Insurance Claim</option>
                    <option value="commercial">Commercial Roofing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['normal', 'urgent', 'emergency'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value={level}
                          checked={formData.urgency === level}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className={`text-sm font-medium ${
                          level === 'emergency' ? 'text-red-600' :
                          level === 'urgent' ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-transparent transition-all duration-300"
                    placeholder="Describe your roofing needs or any damage..."
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Upload damage photos (optional)</p>
                  <p className="text-sm text-gray-500">Drag & drop or click to browse</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-4"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Emergency? Call Now!
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <a href="tel:07469179470" className="text-2xl font-bold hover:text-red-200 transition-colors">07469 179470</a>
                  <div className="text-red-100">Available 24/7</div>
                </div>
              </div>
              <p className="text-red-100">
                Storm damage, leaks, or urgent repairs? Our emergency team is ready to help.
              </p>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="bg-green-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <div className="font-bold">WhatsApp Quick Photos</div>
                  <div className="text-green-100">Send photos instantly for quick assessment</div>
                </div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-oakwell-light rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-oakwell-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <div className="text-oakwell-dark font-bold mb-1">
                        {info.title.includes('Phone') || info.title.includes('Hotline') || info.title.includes('Enquiries') ? (
                          <a href={`tel:${info.details.replace(/\s/g, '')}`} className="hover:text-oakwell-medium transition-colors">
                            {info.details}
                          </a>
                        ) : (
                          info.details
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-oakwell-dark rounded-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-oakwell-light" />
                <h4 className="font-semibold text-lg">Office Hours</h4>
              </div>
              <div className="space-y-2 text-oakwell-light">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency only</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-oakwell-medium/30">
                <p className="text-sm text-oakwell-light">
                  Out-of-hours emergency service available with additional charges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;