import React from 'react';
import { MapPin, Layers, ClipboardCheck, Clock, FileText, Award, Wrench, Phone } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: MapPin,
      title: 'Local team',
      description: 'Based in Morley, Leeds. We cover Leeds, Bradford, Wakefield, Huddersfield, Halifax and Dewsbury.',
    },
    {
      icon: Layers,
      title: 'Every type of roof',
      description: 'Natural slate, slate-effect and concrete tile, GRP and single-ply flat roofs, dormers, chimneys and leadwork.',
    },
    {
      icon: ClipboardCheck,
      title: 'Free survey and written quote',
      description: 'We look at the roof, tell you what it needs, and put the price in writing. No obligation.',
    },
    {
      icon: Clock,
      title: 'Emergency call-outs',
      description: 'If your roof is letting water in, call and we will get it made safe as soon as we can.',
    },
    {
      icon: FileText,
      title: 'Insurance work handled',
      description: 'Reports, photos and quotes in the format your insurer needs, and we will talk to them if you want us to.',
    },
    {
      icon: Award,
      title: 'Workmanship guarantee',
      description: 'Our re-roofs and flat roofs come with a written workmanship guarantee. Ask us for the terms.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Why homeowners choose Oakwell
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A small, local firm that turns up when it says it will and does the job properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-14 h-14 bg-oakwell-dark rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
            Want someone to look at your roof?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Send us your details or give us a call. We will arrange a time to come out and have a look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              <Wrench className="w-5 h-5" aria-hidden="true" />
              <span>Book a free survey</span>
            </a>
            <a
              href="tel:07469179470"
              className="border-2 border-oakwell-dark text-oakwell-dark font-semibold py-3 px-8 rounded-lg hover:bg-oakwell-dark hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Call 07469 179470</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
