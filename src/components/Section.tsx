import Link from 'next/link';
import { SERVICE_LINKS, SITE } from '@/lib/site';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section className="py-12 px-4" id={id}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 hover:border-emerald-200/50 transition-all duration-300 shadow-lg hover:shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
            {title}
          </h2>
          <div className="prose prose-gray prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
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
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50/30 to-green-50/50" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-300/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="text-center relative z-10">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              Get Started Today
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Start Saving Energy?
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              See if you qualify for utility rebates today. Get your no-cost assessment 
              and custom savings plan from our BPI-certified professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-lg mx-auto">
              <Link 
                href="/energy-assessment/" 
                className="flex-1 relative overflow-hidden bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-emerald-100/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Assessment
                </span>
              </Link>
              <a 
                href={`tel:${SITE.phone.replace(/[^0-9]/g,'')}`}
                className="flex-1 relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:bg-white hover:text-emerald-600 hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
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
            <div className="border-t border-white/30 pt-8 mt-8">
              <p className="text-emerald-100 mb-4 font-medium">Our Services:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {SERVICE_LINKS.map(s => (
                  <Link 
                    key={s.slug}
                    href={s.slug}
                    className="text-sm text-emerald-100 hover:text-white bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 backdrop-blur-sm"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-emerald-200/80">
              Rebates and no-cost assessments depend on program eligibility and utility participation.
              Econova is an independent contractor participating in Mass Save® programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

