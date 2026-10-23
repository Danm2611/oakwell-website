import React from 'react';
import { Shield, FileText, Clock, Award, Phone } from 'lucide-react';

const StormDamage: React.FC = () => {
  const keyPoints = [
    {
      icon: Clock,
      title: 'Make-safe repairs first',
      description: 'We get the roof weatherproof quickly to stop further damage inside the house.',
    },
    {
      icon: FileText,
      title: 'Help with the paperwork',
      description: 'Photos, a written report and a quote in the format insurers ask for.',
    },
    {
      icon: Shield,
      title: 'We can speak to your insurer',
      description: 'If you want us to, we will deal with the loss adjuster directly on the roofing side.',
    },
    {
      icon: Award,
      title: 'Full repair afterwards',
      description: 'Once the claim is agreed we carry out the permanent repair to the pre-damage standard.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/WhatsApp Image 2025-04-07 at 22.33.09 (1).jpeg"
              alt="Newly re-roofed hip roof in slate-effect tile with scaffolding still up"
              className="w-full h-[420px] lg:h-[520px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Storm damage and insurance work</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Storm damage? Call us first.
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Wind-lifted tiles, a leaking roof or a chimney that has moved needs sorting fast. We
              make it safe, document the damage and help you through the insurance process.
            </p>

            <div className="space-y-4 mb-8">
              {keyPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oakwell-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07469179470" className="btn-emergency inline-flex items-center justify-center gap-2 flex-1">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call 07469 179470</span>
              </a>
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 flex-1">
                <FileText className="w-5 h-5" aria-hidden="true" />
                <span>Get help with a claim</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StormDamage;
