import type { Metadata } from 'next';
import { CTA } from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export function buildServiceMetadata(opts: { title: string; description: string; slug: string }): Metadata {
  return {
    title: `${opts.title} | Econova`,
    description: opts.description,
    alternates: { canonical: opts.slug },
  };
}

export default function ServicePage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-teal-900 to-slate-900">
      <Navigation />
      {/* Hero Header */}
      <header className="relative pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              BPI-certified crews. Utility rebates available through Mass Save® for eligible homes. 
              Improve comfort and reduce energy waste with documented results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#contact" 
                className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule No Cost Assessment
                </span>
              </a>
              <a 
                href="tel:+18333637442" 
                className="relative overflow-hidden border-2 border-green-400/80 text-green-400 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:bg-green-600 hover:text-white hover:border-green-600 hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call (833) 363-7442
                </span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">BPI Certified</div>
                  <div className="text-sm text-green-100">Professional installers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">Mass Save®</div>
                  <div className="text-sm text-green-100">Utility rebates available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">Guaranteed</div>
                  <div className="text-sm text-green-100">Documented results</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-green-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-emerald-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      <CTA />
      <Footer />
    </div>
  );
}

