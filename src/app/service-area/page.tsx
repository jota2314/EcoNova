import { CITIES } from '@/lib/site';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Service Area | Econova',
  description: 'Econova provides insulation, air sealing, and HVAC services across Massachusetts.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-teal-900 to-slate-900">
      <Navigation />
      <main className="pt-8">
        <header className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Service Area</h1>
          <p className="mt-3 text-gray-300">Proudly serving Wilmington and communities across Massachusetts.</p>
        </header>
        <Section title="Cities We Serve">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 !list-none !pl-0">
            {CITIES.map(c => (
              <li key={c.slug}>
                <Link className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors" href={`/${c.slug}/`}>
                  {c.city}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

