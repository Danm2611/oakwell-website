import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle,
  Star,
  Wrench,
  MapPin
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of roofing expertise across West Yorkshire",
      stat: "30+",
      label: "Years"
    },
    {
      icon: CheckCircle,
      title: "1000+ Roofs Completed",
      description: "Successfully completed over 1000 roofing projects",
      stat: "1000+",
      label: "Projects"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for urgent roof repairs",
      stat: "24/7",
      label: "Available"
    },
    {
      icon: Shield,
      title: "Insurance Approved",
      description: "Certified by all major insurance companies",
      stat: "100%",
      label: "Approved"
    },
    {
      icon: Star,
      title: "25 Year Warranties",
      description: "Long-term guarantees for complete peace of mind",
      stat: "25",
      label: "Year Warranty"
    },
    {
      icon: Users,
      title: "Local Yorkshire Team",
      description: "Born and bred Yorkshire roofers who understand local weather",
      stat: "100%",
      label: "Local"
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-5"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-construction-workers-on-a-roof-4785-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-oakwell-light/20 text-oakwell-dark px-6 py-3 rounded-full font-semibold mb-6"
          >
            <Award className="w-5 h-5" />
            <span>Why Choose Oakwell Roofing</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yorkshire's Most{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oakwell-dark to-oakwell-medium">
              Trusted
            </span>{' '}
            Roofing Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When it comes to protecting your home, experience matters. Here's why thousands 
            of Yorkshire homeowners choose Oakwell Roofing for their roofing needs.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-oakwell-light/5 to-oakwell-medium/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon and Stat */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-oakwell-dark to-oakwell-medium rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-oakwell-dark">{reason.stat}</div>
                    <div className="text-sm text-gray-500">{reason.label}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-oakwell-dark transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-oakwell-light to-oakwell-medium opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-oakwell-dark to-oakwell-medium rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold mb-2"
              >
                4.9★
              </motion.div>
              <div className="text-oakwell-light">Average Rating</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold mb-2"
              >
                98%
              </motion.div>
              <div className="text-oakwell-light">Customer Satisfaction</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold mb-2"
              >
                500+
              </motion.div>
              <div className="text-oakwell-light">Happy Customers</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold mb-2"
              >
                £2.3M
              </motion.div>
              <div className="text-oakwell-light">Claims Processed</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Oakwell Difference?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Oakwell Roofing 
            for their roofing needs. Get your free inspection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Wrench className="w-5 h-5" />
              <span>Free Roof Inspection</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-oakwell-dark text-oakwell-dark font-semibold py-3 px-8 rounded-lg hover:bg-oakwell-dark hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Check Our Service Area</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;