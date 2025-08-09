import type { Metadata } from 'next';
import { CTA } from '@/components/Section';

export function buildServiceMetadata(opts: { title: string; description: string; slug: string }): Metadata {
  return {
    title: `${opts.title} | Econova`,
    description: opts.description,
    alternates: { canonical: opts.slug },
  };
}

export default function ServicePage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-3 opacity-80">BPI-certified crews. Utility rebates available through Mass Save® for eligible homes.</p>
      </header>
      {children}
      <CTA />
    </main>
  );
}

