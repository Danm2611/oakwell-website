import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, FileText, Clock, Award, Phone } from 'lucide-react';

const StormDamage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keyPoints = [
    {
      icon: Shield,
      title: "Insurance Approved Contractors",
      description: "Certified by all major insurers with direct billing capabilities"
    },
    {
      icon: FileText,
      title: "Direct Billing to Insurers", 
      description: "No upfront costs - we handle all paperwork and claims"
    },
    {
      icon: Clock,
      title: "Emergency Temporary Repairs",
      description: "Immediate weatherproofing to prevent further damage"
    },
    {
      icon: Award,
      title: "Full Restoration Services",
      description: "Complete repair and restoration to pre-damage condition"
    }
  ];

  const stats = [
    { number: "£2.3M", label: "Successful Claims Processed" },
    { number: "98%", label: "Claim Success Rate" },
    { number: "24hrs", label: "Average Response Time" },
    { number: "500+", label: "Storm Repairs Completed" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1561484930-998b6a7b22d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Storm damage on roof"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Emergency Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2"
              >
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency</span>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-oakwell-dark">£2.3M</div>
                  <div className="text-sm text-gray-600">Claims Processed</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-oakwell-light/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-oakwell-medium/20 rounded-full"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-sm mb-6"
            >
              <Shield className="w-4 h-4" />
              <span>Storm Damage Specialists</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Storm Damage{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-oakwell-dark to-oakwell-medium">
                Experts
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-8"
            >
              When storms strike, you need rapid response and expert restoration. 
              Our certified team works directly with insurers to get your roof 
              repaired quickly with zero upfront costs.
            </motion.p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-oakwell-dark to-oakwell-medium rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.slice(0, 2).map((stat, index) => (
                <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-oakwell-dark">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency flex items-center justify-center space-x-2 flex-1"
              >
                <Phone className="w-5 h-5" />
                <span>Recent Storm?</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 flex-1"
              >
                <FileText className="w-5 h-5" />
                <span>File Claim</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="flex items-center space-x-2 text-green-800">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Trusted by all major insurers</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                No upfront payment required for insurance work
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StormDamage;