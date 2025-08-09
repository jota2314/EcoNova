import { CITIES } from '@/lib/site';
import Link from 'next/link';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Service Area | Econova',
  description: 'Econova provides insulation, air sealing, and HVAC services across Massachusetts.',
};

export default function Page() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold">Service Area</h1>
        <p className="mt-3 opacity-80">Proudly serving Wilmington and communities across Massachusetts.</p>
      </header>
      <Section title="Cities We Serve">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 !list-none !pl-0">
          {CITIES.map(c => (
            <li key={c.slug}>
              <Link className="underline underline-offset-2" href={`/${c.slug}/`}>
                {c.city}, {c.state}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

