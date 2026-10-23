import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Oakwell+Roofing+Ltd+Morley+reviews';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-oakwell-dark text-white overflow-hidden">
      <div className="section-container text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          <span className="font-semibold">Reviews on Google</span>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">What our customers say</h2>
        <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10">
          Our reviews are on Google, where we can't edit them. Have a read before you get in touch,
          and if we've worked for you, we'd be grateful for a review.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-oakwell-dark font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span>Read our Google reviews</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/p/Oakwell-Roofing-Ltd-100089302566138/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            <span>See recent jobs on Facebook</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
