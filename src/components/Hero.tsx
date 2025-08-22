'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold">
        Massachusetts Home Insulation & Air Sealing
      </h1>
      <p className="mt-4 text-lg opacity-85">
        BPI-certified crews. Utility rebates available through Mass Save® for eligible homes.
        Improve comfort and reduce energy waste with documented results.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/energy-assessment/" className="rounded-lg px-5 py-3 bg-emerald-500 text-black font-medium">
          Schedule No-Cost Assessment
        </Link>
        <a href="tel:+16175962476" className="rounded-lg px-5 py-3 border border-emerald-500/60">
          Call (617) 596-2476
        </a>
      </div>

      <ul className="mt-6 text-sm opacity-80 list-disc pl-5 space-y-1">
        <li>No-cost home energy assessment for eligible customers</li>
        <li>Air sealing + insulation completed by certified professionals</li>
        <li>Post-work results documented (blower-door testing when applicable)</li>
      </ul>

      <p className="mt-3 text-xs opacity-70">
        Rebates and no-cost assessments are subject to program eligibility and utility participation.
        Availability and amounts vary by home and location. Econova is an independent contractor
        participating in Mass Save®; not all customers will qualify.
      </p>
    </section>
  );
}

