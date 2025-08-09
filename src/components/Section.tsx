import Link from 'next/link';
import { SERVICE_LINKS, SITE } from '@/lib/site';

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-500/20 hover:border-green-500/30 transition-all duration-300 shadow-xl shadow-black/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full"></div>
            {title}
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 rounded-2xl p-8 md:p-12 shadow-2xl shadow-green-500/20 border border-green-400/30">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Saving Energy?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              See if you qualify for utility rebates today. Get your no-cost assessment 
              and custom savings plan from our BPI-certified professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link 
                href="/energy-assessment/" 
                className="relative overflow-hidden bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-green-100/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule No-Cost Assessment
                </span>
              </Link>
              <a 
                href={`tel:${SITE.phone.replace(/[^0-9]/g,'')}`}
                className="relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:bg-white hover:text-green-600 hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call {SITE.phone}
                </span>
              </a>
            </div>

            {/* Service quick links */}
            <div className="border-t border-green-400/30 pt-8 mt-8">
              <p className="text-green-100 mb-4 font-medium">Our Services:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {SERVICE_LINKS.map(s => (
                  <Link 
                    key={s.slug}
                    href={s.slug}
                    className="text-sm text-green-100 hover:text-white bg-green-500/20 hover:bg-green-500/40 px-3 py-2 rounded-lg transition-all duration-200 border border-green-400/20 hover:border-green-400/40"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-green-200/80">
              Rebates and no-cost assessments depend on program eligibility and utility participation.
              Econova is an independent contractor participating in Mass Save® programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

