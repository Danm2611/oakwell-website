import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Reviews: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      name: "James W.",
      rating: 5,
      text: "Fantastic service from start to finish. They came out the same day after our roof was damaged in a storm. Professional, tidy, and reasonably priced. Highly recommend!",
      date: "2 months ago"
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "Oakwell Roofing replaced our entire roof and the quality of work is outstanding. The team were polite, punctual and kept us informed throughout. Couldn't be happier.",
      date: "1 month ago"
    },
    {
      name: "David H.",
      rating: 5,
      text: "Used them for an insurance claim after wind damage. They handled everything with the insurance company and the repair was completed quickly. Excellent communication.",
      date: "3 weeks ago"
    },
    {
      name: "Michelle T.",
      rating: 5,
      text: "Had a flat roof installed on our extension. The finish is brilliant and they cleaned up after themselves. Fair price and great workmanship. Would definitely use again.",
      date: "1 month ago"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-oakwell-dark to-oakwell-medium text-white overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Google Rating Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold">5.0</span>
            <span className="text-white/80">on Google</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. See why homeowners across West Yorkshire trust Oakwell Roofing.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-oakwell-light/50 mb-4" />
              
              {/* Review Text */}
              <p className="text-white/90 mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-white/60 text-sm">{review.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://www.google.com/search?q=oakwell+roofing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-white text-oakwell-dark font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>See All Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <p className="text-white/60 mt-4 text-sm">
            We're proud of our 5-star rating. Leave us a review!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
