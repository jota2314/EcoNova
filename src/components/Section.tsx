import Link from 'next/link';
import { SERVICE_LINKS, SITE } from '@/lib/site';

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}

export function CTA() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="rounded-xl border border-emerald-500/40 bg-emerald-600/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-lg">See if you qualify for utility rebates today.</div>
        <div className="flex gap-3">
          <Link href="/energy-assessment/" className="rounded-lg px-5 py-3 bg-emerald-500 text-black font-medium">Schedule No-Cost Assessment</Link>
          <a href={`tel:${SITE.phone.replace(/[^0-9]/g,'')}`} className="rounded-lg px-5 py-3 border border-emerald-500/60">Call {SITE.phone}</a>
        </div>
      </div>
      <div className="mt-4 text-sm opacity-70">Rebates and no-cost assessments depend on program eligibility and utility participation.</div>
      <ul className="mt-4 flex flex-wrap gap-3 text-sm opacity-80">
        {SERVICE_LINKS.map(s => <li key={s.slug}><Link className="underline underline-offset-2" href={s.slug}>{s.label}</Link></li>)}
      </ul>
    </div>
  );
}

