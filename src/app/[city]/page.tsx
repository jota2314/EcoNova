"use client";
import { CITIES, SERVICE_LINKS } from '@/lib/site';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { use } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = use(params);
  const { t, language } = useLanguage();
  const data = CITIES.find(c => c.slug === city);
  const cityName = data ? `${data.city}, ${data.state}` : 'Massachusetts';
  const cityOnly = data ? data.city : 'Massachusetts';
  
  // Force re-render when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      console.log('Language changed event received!');
      // Force component re-render
    };
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);
  
  // Clean component without debug
  
  // Add key prop to force re-render when language changes
  const componentKey = `city-page-${language}`;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div key={componentKey} className="min-h-screen bg-gradient-to-b from-blue-50 via-emerald-50 to-green-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-32 md:pt-24 md:pb-40 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-green-50/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-emerald-200/60 rounded-full px-6 py-2 mb-8 shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">{t.heroSubtitle} {cityName}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{t.energyEfficient}</span>
            <br />{t.homesIn} {cityOnly}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            {t.heroSubtitle} {cityName} • {t.massSaveRebates} • {t.documentedSavings}
          </p>
          
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl md:text-4xl font-black text-emerald-600 mb-2">$0</div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{t.downPayment}</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">40%</div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{t.averageSavings}</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">80%</div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{t.utilityRebates}</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="#contact" className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 hover:scale-[1.02] border-2 border-transparent hover:border-white/20" aria-label="Schedule No-Cost Assessment">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t.getFreeAssessment}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="tel:+16175962476" className="group bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-gray-200 hover:border-emerald-300 px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 transform hover:-translate-y-1 hover:scale-[1.02]" aria-label="Call (617) 596-2476">
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>{t.callNow}</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Insulation Services Section */}
      <section id="insulation" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Services in {cityOnly}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Professional <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Insulation</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Certified installers serving {cityName} • Guaranteed results • Up to 80% utility rebates • No upfront costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 scroll-animate">
            {/* Attic Insulation Card */}
            <Link href="/attic-insulation" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-emerald-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/attic.png"
                    alt="Attic Insulation in {cityOnly}"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {t.popularIn} {cityOnly}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{t.atticInsulation}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Blown-in cellulose and fiberglass for maximum R-value in {cityOnly} homes
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">Up to 80% rebate</span>
                    <div className="bg-emerald-50 rounded-full p-2 group-hover:bg-emerald-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Wall Insulation Card */}
            <Link href="/wall-insulation-dense-pack" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-blue-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/blowinsu.png"
                    alt="Wall Insulation in {cityOnly}"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {t.professional}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{t.wallInsulation}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Injection foam and dense-pack insulation for {cityOnly} existing walls
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">{t.professionalInstall}</span>
                    <div className="bg-blue-50 rounded-full p-2 group-hover:bg-blue-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Basement Insulation Card */}
            <Link href="/basement-insulation" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-purple-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/1picinsu.png"
                    alt="Basement Insulation in {cityOnly}"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Foundation
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Basement Insulation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Spray foam and rigid board for {cityOnly} foundation walls
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Foundation expert</span>
                    <div className="bg-purple-50 rounded-full p-2 group-hover:bg-purple-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Air Sealing Card */}
            <Link href="/air-sealing" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-orange-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/image.png"
                    alt="Air Sealing in {cityOnly}"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Complete
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Air Sealing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Complete thermal envelope sealing for {cityOnly} maximum efficiency
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Max efficiency</span>
                    <div className="bg-orange-50 rounded-full p-2 group-hover:bg-orange-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-orange-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">{t.whyChoose} {cityOnly} {t.homeownersChooseEconova}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">Certified Installers</div>
                  <div className="text-green-100 text-sm">BPI & RESNET certified professionals serving {cityOnly} with 15+ years experience</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">Guaranteed Results</div>
                  <div className="text-green-100 text-sm">30% energy bill reduction guarantee for {cityOnly} homeowners or money back</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">No Upfront Costs</div>
                  <div className="text-green-100 text-sm">$0 down for {cityOnly} residents with utility rebates up to 80% of total cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy Assessment Section */}
      <section id="energy-assessment" className="py-20 bg-green-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center scroll-animate">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.noCostAssessment} {cityOnly}
              </h2>
              <p className="text-xl text-green-100 mb-8">
                {t.assessmentDescription} {cityName} {t.homeIsLosing}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Blower door air leakage testing</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Thermal imaging camera inspection</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Detailed savings report with rebate options for {cityOnly}</span>
                </div>
              </div>
              
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Schedule Your No Cost Assessment
              </button>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-emerald-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.quickAssessmentForm} {cityOnly}</h3>
              <form className="space-y-4" onSubmit={() => {
                // GTM lead submit event
                import('@/lib/gtm')
                  .then(m => m.pushDataLayer({ event: 'lead_submit', form_id: 'quick_assessment_city', city: cityName }))
                  .catch(() => {});
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder={t.firstName} className="px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                  <input type="text" placeholder={t.lastName} className="px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                </div>
                <input type="email" placeholder={t.emailAddress} className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                <input type="tel" placeholder={t.phoneNumber} className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                <input type="text" placeholder={`Address in ${cityOnly}`} className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
                  <option value="" disabled>Home Age</option>
                  <option value="new">Less than 5 years</option>
                  <option value="recent">5-15 years</option>
                  <option value="older">15-30 years</option>
                  <option value="vintage">Over 30 years</option>
                </select>
                <button type="submit" className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
                  {t.getAssessmentIn} {cityOnly}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Local Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t.whatHomeownersSay} {cityOnly} {t.homeownersSay}
            </h2>
            <p className="text-xl text-gray-600">
              {t.joinHundreds} {cityOnly} {t.customersWhoSaved}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 scroll-animate">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;{t.testimonial1} {cityOnly} {t.testimonial1Cont}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">Sarah Martinez</div>
                  <div className="text-gray-500 text-sm">{t.homeowner}, {cityName}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;{t.testimonial2} {cityOnly} {t.testimonial2Cont}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  DJ
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">David Johnson</div>
                  <div className="text-gray-500 text-sm">{t.homeowner}, {cityName}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;{t.testimonial3} {cityOnly} {t.testimonial3Cont}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MR
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">Michael Rodriguez</div>
                  <div className="text-gray-500 text-sm">{t.homeowner}, {cityName}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Other {cityOnly} Homeowners?
            </h3>
            <p className="text-green-100 mb-6">
              Get your No Cost energy assessment and custom savings plan for your {cityOnly} home today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="text" 
                placeholder={`Enter ${cityOnly} ZIP Code`}
                className="px-4 py-3 border border-green-300 bg-white/20 text-white rounded-lg flex-grow focus:ring-2 focus:ring-white focus:border-transparent placeholder-green-100"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{t.readyToStart} {cityOnly}?</h2>
          <p className="text-xl mb-8 text-gray-600">
            {t.getConsultation} {cityName} {t.today}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+16175962476" className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Call (617) 596-2476
            </a>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Schedule {cityOnly} Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

