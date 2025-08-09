import type { Metadata } from 'next';
import { CITIES, SERVICE_LINKS } from '@/lib/site';
import Link from 'next/link';
import { CTA, Section } from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { use } from 'react';

export const generateStaticParams = async () => {
  return CITIES.map(c => ({ city: c.slug }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> => {
  const { city } = await params;
  const data = CITIES.find(c => c.slug === city);
  const cityName = data ? `${data.city}, ${data.state}` : 'Massachusetts';
  return {
    title: `Insulation & Air Sealing in ${cityName} | Econova`,
    description: `BPI-certified insulation and air sealing services in ${cityName}. Utility rebates available for eligible homes.`,
    alternates: { canonical: `/${city}/` },
  };
}

export default function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = use(params);
  const data = CITIES.find(c => c.slug === city);
  const cityName = data ? `${data.city}, ${data.state}` : 'Massachusetts';
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-teal-900 to-slate-900">
      <Navigation />
      <main className="pt-8">
        <header className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Insulation & Air Sealing in {cityName}</h1>
          <p className="mt-3 text-gray-300">Econova serves homeowners in {cityName} with attic insulation, dense-pack walls, basement rim-joist work, and air sealing. Utility rebates available for eligible homes.</p>
        </header>

        <Section title="Popular Services">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 !list-none !pl-0">
            {SERVICE_LINKS.map(s => (
              <li key={s.slug}><Link className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors" href={s.slug}>{s.label}</Link></li>
            ))}
          </ul>
        </Section>

        <Section title="Why Homeowners Choose Econova">
          <ul>
            <li>BPI-certified professionals; compliant with Mass Save® program requirements</li>
            <li>Air sealing + insulation scoped from a thorough assessment</li>
            <li>Clean installs, documented results</li>
          </ul>
        </Section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

