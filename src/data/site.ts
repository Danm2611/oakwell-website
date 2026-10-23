/**
 * Single source of truth for company facts. Everything here was confirmed by Lewis (Oakwell Roofing Ltd)
 * on 23 October 2026. Do not add claims that are not in this file.
 */
export const site = {
  name: 'Oakwell Roofing',
  legalName: 'Oakwell Roofing Ltd',
  tagline: 'Roofing contractors, Morley, Leeds',
  url: 'https://oakwellroofing.com',
  phoneDisplay: '07469 179470',
  phoneHref: 'tel:+447469179470',
  phoneE164: '+447469179470',
  whatsappHref:
    'https://wa.me/447469179470?text=Hi%20Oakwell%2C%20could%20you%20take%20a%20look%20at%20my%20roof%3F',
  email: 'lewis@oakwellroofing.com',
  contactName: 'Lewis',
  address: {
    street: '55 Fountain Street',
    town: 'Morley',
    city: 'Leeds',
    region: 'West Yorkshire',
    postcode: 'LS27 0AA',
  },
  companyNumber: '13915962',
  vatNumber: '457472759',
  experienceYears: 15,
  insurance: { provider: 'Simply Business', cover: '£10 million public liability' },
  hours: [
    { days: 'Monday to Friday', time: '8:00am to 6:00pm' },
    { days: 'Saturday and Sunday', time: '9:00am to 4:00pm' },
  ],
  emergency: '24/7 emergency call-outs',
  googleReviewsUrl: 'https://share.google/HARg3HAVBEQQQWfIm',
  facebook: 'https://www.facebook.com/p/Oakwell-Roofing-Ltd-100089302566138/',
  instagram: 'https://www.instagram.com/oakwell_roofing_ltd/',
  guarantees: [
    { work: 'New roof (new slate or tile)', years: 25 },
    { work: 'Flat roof (GRP or single-ply)', years: 25 },
    { work: 'Re-roof using reclaimed slate or tile', years: 15 },
    { work: 'Repairs', years: 1 },
  ],
  guaranteeNote:
    'All guarantees cover our workmanship and are provided by Oakwell Roofing Ltd. They are not insurance-backed.',
} as const;

export const areas = [
  { slug: 'morley', name: 'Morley' },
  { slug: 'leeds', name: 'Leeds' },
  { slug: 'bradford', name: 'Bradford' },
  { slug: 'wakefield', name: 'Wakefield' },
  { slug: 'huddersfield', name: 'Huddersfield' },
  { slug: 'halifax', name: 'Halifax' },
  { slug: 'dewsbury', name: 'Dewsbury' },
  { slug: 'cleckheaton', name: 'Cleckheaton' },
] as const;

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Our work', href: '/our-work/' },
  { label: 'Areas', href: '/areas/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export function fullAddress() {
  const a = site.address;
  return `${a.street}, ${a.town}, ${a.city}, ${a.region}, ${a.postcode}`;
}
