import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertTriangle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const PHONE_DISPLAY = '07469 179470';
const PHONE_HREF = 'tel:07469179470';
const EMAIL = 'lewis@oakwellroofing.com';
const WHATSAPP = 'https://wa.me/447469179470?text=Hi%20Oakwell%2C%20could%20you%20take%20a%20look%20at%20my%20roof%3F';

const inputClass =
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oakwell-medium focus:border-oakwell-medium transition-colors';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/', { method: 'POST', body: data });
      if (!res.ok) throw new Error(`Form post failed: ${res.status}`);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-5">Get a free quote</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us a bit about the roof and we'll get back to you to arrange a visit. Or just call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Send us your details</h3>

            {status === 'sent' ? (
              <div className="text-center py-12" role="status">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thanks, we've got your enquiry</h4>
                <p className="text-gray-600 mb-6">
                  We'll be in touch to arrange a time to look at the roof. If it's urgent, call{' '}
                  <a href={PHONE_HREF} className="text-oakwell-dark font-semibold">{PHONE_DISPLAY}</a>.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="text-oakwell-dark underline">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate={false}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input id="contact-name" type="text" name="name" required autoComplete="name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone number <span aria-hidden="true">*</span>
                    </label>
                    <input id="contact-phone" type="tel" name="phone" required autoComplete="tel" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email address
                    </label>
                    <input id="contact-email" type="email" name="email" autoComplete="email" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-postcode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Postcode <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-postcode"
                      type="text"
                      name="postcode"
                      required
                      autoComplete="postal-code"
                      placeholder="e.g. LS27 0AA"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-semibold text-gray-700 mb-2">
                    What do you need?
                  </label>
                  <select id="contact-service" name="service" className={inputClass} defaultValue="">
                    <option value="">Choose one (optional)</option>
                    <option value="repair">Roof repair</option>
                    <option value="reroof">Re-roof / new roof</option>
                    <option value="flat-roof">Flat roof</option>
                    <option value="chimney-leadwork">Chimney or leadwork</option>
                    <option value="survey">Roof survey</option>
                    <option value="insurance">Storm damage / insurance claim</option>
                    <option value="new-build">New build / commercial</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <fieldset>
                  <legend className="block text-sm font-semibold text-gray-700 mb-2">How urgent is it?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { value: 'normal', label: 'No rush', cls: 'text-gray-700' },
                      { value: 'soon', label: 'This week if possible', cls: 'text-gray-700' },
                      { value: 'emergency', label: 'Water coming in', cls: 'text-red-700' },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2">
                        <input type="radio" name="urgency" value={opt.value} defaultChecked={opt.value === 'normal'} />
                        <span className={`text-sm font-medium ${opt.cls}`}>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about the roof
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className={inputClass}
                    placeholder="What's the problem, what type of roof is it, and when did you notice it?"
                  />
                </div>

                <div>
                  <label htmlFor="contact-photo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Add a photo (optional, up to 8 MB)
                  </label>
                  <input
                    id="contact-photo"
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-oakwell-light/40 file:text-oakwell-dark file:font-semibold"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input id="contact-consent" type="checkbox" name="consent" value="yes" required className="mt-1" />
                  <label htmlFor="contact-consent" className="text-sm text-gray-700">
                    I'm happy for Oakwell Roofing Ltd to use these details to reply to my enquiry. See our{' '}
                    <a href="/privacy" className="text-oakwell-dark underline">privacy policy</a>.
                  </label>
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4" role="alert">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm">
                      Sorry, that didn't send. Please try again, or call{' '}
                      <a href={PHONE_HREF} className="font-semibold underline">{PHONE_DISPLAY}</a> or email{' '}
                      <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-wait"
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  <span>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-oakwell-dark rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">Prefer to talk?</h3>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <a href={PHONE_HREF} className="text-2xl font-bold hover:text-oakwell-light transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                  <div className="text-oakwell-light">Lewis, Oakwell Roofing</div>
                </div>
              </div>
              <p className="text-white/85">
                Water coming in? Call rather than email and we'll get to you as quickly as we can.
              </p>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-700 hover:bg-green-800 rounded-2xl p-6 text-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8" aria-hidden="true" />
                <div>
                  <div className="font-bold">Send photos on WhatsApp</div>
                  <div className="text-green-100">Quickest way to get a first opinion</div>
                </div>
              </div>
            </a>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-oakwell-light/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-oakwell-dark" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${EMAIL}`} className="text-oakwell-dark font-bold hover:text-oakwell-medium transition-colors break-all">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-oakwell-light/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-oakwell-dark" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Where we work</h4>
                  <p className="text-oakwell-dark font-bold mb-1">Morley, Leeds and across West Yorkshire</p>
                  <p className="text-gray-600 text-sm">Leeds, Bradford, Wakefield, Huddersfield, Halifax, Dewsbury and nearby.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-oakwell-dark" aria-hidden="true" />
                <h4 className="font-semibold text-lg text-gray-900">Phone hours</h4>
              </div>
              <dl className="space-y-2 text-gray-700">
                <div className="flex justify-between"><dt>Monday to Friday</dt><dd>8:00am to 6:00pm</dd></div>
                <div className="flex justify-between"><dt>Saturday</dt><dd>9:00am to 4:00pm</dd></div>
                <div className="flex justify-between"><dt>Sunday</dt><dd>Emergencies only</dd></div>
              </dl>
              <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                Out-of-hours emergency call-outs may carry an additional charge. We'll tell you before we come out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
