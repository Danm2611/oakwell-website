import React from 'react';

const Privacy: React.FC = () => {
  return (
    <main id="main" className="bg-white">
      <div className="section-container py-16 md:py-20">
        <article className="max-w-3xl prose-oakwell">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy policy</h1>
          <p className="text-gray-500 mb-10">Last updated 23 October 2026</p>

          <h2>Who we are</h2>
          <p>
            Oakwell Roofing Ltd is a roofing contractor registered in England and Wales, company number
            13915962, registered office 55 Fountain Street, Morley, Leeds, West Yorkshire, LS27 0AA. We
            are the data controller for the personal information described here. You can contact us
            about anything in this policy at{' '}
            <a href="mailto:lewis@oakwellroofing.com">lewis@oakwellroofing.com</a> or on 07469 179470.
          </p>

          <h2>What we collect and why</h2>
          <p>
            When you send an enquiry through this website, by phone, by email or on WhatsApp, we collect
            the details you give us: usually your name, phone number, email address, postcode, a
            description of the work and any photos of the roof. We use this to reply to you, arrange a
            visit, prepare a quote and, if you go ahead, carry out and invoice the work.
          </p>
          <p>
            Our lawful basis is that this processing is necessary to take steps at your request before
            entering into a contract, and afterwards to perform that contract. For keeping records of
            completed work and guarantees, our basis is our legitimate interest in running the business
            and meeting our obligations to you.
          </p>

          <h2>Who we share it with</h2>
          <ul>
            <li>
              <strong>Netlify, Inc.</strong>, which hosts this website and receives website form
              submissions on our behalf. Netlify stores submissions in the United States under standard
              contractual clauses.
            </li>
            <li>
              <strong>Google</strong>, which provides our email (Google Workspace).
            </li>
            <li>
              Your insurer or loss adjuster, only where you have asked us to help with a claim.
            </li>
            <li>Scaffolding, skip and materials suppliers, limited to the site address and access details.</li>
          </ul>
          <p>We do not sell personal information and we do not use it for marketing.</p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries that do not lead to work are deleted within 12 months. Records of completed work,
            including quotes, invoices and guarantee details, are kept for 6 years after the job to meet
            our accounting obligations and to honour guarantees.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us for a copy of the information we hold about you, ask us to correct it, ask us
            to delete it, or object to how we use it. Email{' '}
            <a href="mailto:lewis@oakwellroofing.com">lewis@oakwellroofing.com</a> and we will respond
            within one month. If you are not happy with how we handle your information you can complain
            to the Information Commissioner's Office at{' '}
            <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
              ico.org.uk
            </a>{' '}
            or on 0303 123 1113.
          </p>

          <h2 id="cookies">Cookies</h2>
          <p>
            This website does not set cookies and does not use analytics or tracking tools. Google Fonts
            are loaded from Google's servers, which means Google receives your IP address when the page
            loads. Links to Google, Facebook, Instagram and WhatsApp take you to those services, which
            have their own privacy policies.
          </p>

          <h2 id="complaints">Complaints about our work</h2>
          <p>
            If something is not right with a job we have done, tell us as soon as you can at{' '}
            <a href="mailto:lewis@oakwellroofing.com">lewis@oakwellroofing.com</a> or on 07469 179470.
            We will acknowledge your complaint within 3 working days, come and inspect the work if
            needed, and give you a written response within 14 days.
          </p>

          <p className="mt-10">
            <a href="/" className="text-oakwell-dark font-semibold underline">Back to the home page</a>
          </p>
        </article>
      </div>
    </main>
  );
};

export default Privacy;
