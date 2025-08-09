export const SITE = {
  name: 'Econova',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.econova.com',
  phone: '(833) 363-7442',
};

export const SERVICE_LINKS = [
  { slug: '/attic-insulation/', label: 'Attic Insulation' },
  { slug: '/air-sealing/', label: 'Air Sealing' },
  { slug: '/wall-insulation-dense-pack/', label: 'Wall Insulation (Dense-Pack)' },
  { slug: '/basement-insulation/', label: 'Basement / Rim Joist' },
  { slug: '/hvac/', label: 'HVAC (Heat Pumps & Mini-Splits)' },
  { slug: '/energy-assessment/', label: 'No-Cost Energy Assessment' },
  { slug: '/mass-save/', label: 'Mass Save® Rebates' },
];

export type City = { slug: string; city: string; state: string; county?: string };

export const CITIES: City[] = [
  { slug: 'wilmington-ma', city: 'Wilmington', state: 'MA' },
  { slug: 'woburn-ma', city: 'Woburn', state: 'MA' },
  { slug: 'burlington-ma', city: 'Burlington', state: 'MA' },
  { slug: 'reading-ma', city: 'Reading', state: 'MA' },
  { slug: 'north-reading-ma', city: 'North Reading', state: 'MA' },
  { slug: 'lynnfield-ma', city: 'Lynnfield', state: 'MA' },
  { slug: 'andover-ma', city: 'Andover', state: 'MA' },
  { slug: 'north-andover-ma', city: 'North Andover', state: 'MA' },
  { slug: 'stoneham-ma', city: 'Stoneham', state: 'MA' },
  { slug: 'wakefield-ma', city: 'Wakefield', state: 'MA' },
  { slug: 'malden-ma', city: 'Malden', state: 'MA' },
  { slug: 'medford-ma', city: 'Medford', state: 'MA' },
  { slug: 'lowell-ma', city: 'Lowell', state: 'MA' },
  { slug: 'billerica-ma', city: 'Billerica', state: 'MA' },
  { slug: 'peabody-ma', city: 'Peabody', state: 'MA' },
];

