"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-emerald-50 to-green-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-32 md:pt-24 md:pb-40 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-green-50/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-emerald-200/60 rounded-full px-6 py-2 mb-8 shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Now serving Massachusetts homeowners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{t.energyEfficient}</span>
            <br />{t.homeSolutions}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            {t.heroDescription}
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
          
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50/50 border border-emerald-200/50 rounded-3xl p-10 mb-16 shadow-xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-white/80 border border-emerald-200 rounded-full px-6 py-2 mb-4">
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">{t.watchOurProcess}</span>
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">{t.seeHowWeTransform} <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{t.transform}</span> {t.transformHomes}</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.watchCertifiedProfessionals}</p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Home Energy Assessment Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{t.bpiCertified}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{t.documentedResults}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{t.noCostAssessmentHero}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
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
          </div>
        </div>
      </section>

      {/* Insulation Services Section */}
      <section id="insulation" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">{t.ourServices}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t.professionalServices} <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{t.insulation}</span> {t.services}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.servicesDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 scroll-animate">
            {/* Attic Insulation Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-emerald-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/attic.png"
                    alt="Attic Insulation"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {t.popular}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{t.atticInsulation}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t.atticDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">{t.upTo80RebateShort}</span>
                    <div className="bg-emerald-50 rounded-full p-2 group-hover:bg-emerald-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wall Insulation Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-blue-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/blowinsu.png"
                    alt="Wall Insulation"
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
                    {t.wallDescription}
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
            </div>
            
            {/* Basement Insulation Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-purple-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/1picinsu.png"
                    alt="Basement Insulation"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {t.foundation}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{t.basementInsulation}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t.basementDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">{t.foundationExpert}</span>
                    <div className="bg-purple-50 rounded-full p-2 group-hover:bg-purple-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Air Sealing Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-orange-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/image.png"
                    alt="Air Sealing"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {t.complete}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{t.airSealing}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t.airSealingDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">{t.maxEfficiency}</span>
                    <div className="bg-orange-50 rounded-full p-2 group-hover:bg-orange-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-orange-600 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">{t.whyChooseEconova}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">{t.certifiedInstallersTitle}</div>
                  <div className="text-green-100 text-sm">{t.certifiedInstallersDesc}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">{t.guaranteedResultsTitle}</div>
                  <div className="text-green-100 text-sm">{t.guaranteedResultsDesc}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">{t.noUpfrontCostsTitle}</div>
                  <div className="text-green-100 text-sm">{t.noUpfrontCostsDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-20 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-green-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-16 w-80 h-80 bg-gradient-to-tl from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
              </svg>
              {t.completeSolutions}
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t.completeEnergySolutions}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.completeEnergyDescription}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Solar Installation Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-emerald-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-emerald-500/50">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 7.26L18 4L15.74 9.09L21 10L15.74 10.91L18 16L13.09 12.74L12 18L10.91 12.74L6 16L8.26 10.91L3 10L8.26 9.09L6 4L10.91 7.26L12 2Z"/>
                      <path d="M12 8C10.9 8 10 8.9 10 10S10.9 12 12 12S14 11.1 14 10S13.1 8 12 8Z"/>
                    </svg>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">{t.solarInstallation}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.solarDescription}
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="bg-emerald-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.tier1Manufacturers}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="bg-emerald-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.professionalDesignInstall}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="bg-emerald-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.federalStateTaxCredits}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Battery Storage Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-blue-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/50">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM15 20H9V6h6v14zm-4.5-2H13v-2h-2.5v2zm0-3H13v-6h-2.5v6z"/>
                      <path d="M12 1h2v2h-2V1zm-2 0h2v2h-2V1z"/>
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{t.advanced}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{t.batteryStorage}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.batteryDescription}
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="bg-blue-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.teslaPowerwall}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="bg-blue-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.warranties10to15Years}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="bg-blue-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.emergencyBackupPower}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* HVAC Efficiency Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-orange-200 hover:scale-[1.02] hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-orange-500/50">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4V6H12V4Z"/>
                      <path d="M8 8V18H16V8H8ZM10 10H14V12H12V16H10V12H10V10Z"/>
                      <path d="M9 1H15V3H9V1Z"/>
                      <path d="M19 9V15H21V9H19Z"/>
                      <path d="M3 9V15H5V9H3Z"/>
                    </svg>
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">{t.efficient}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{t.hvacEfficiency}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.hvacDescription}
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="bg-orange-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.heatPumpsMiniSplits}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="bg-orange-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.smartHomeIntegration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="bg-orange-100 rounded-full p-1.5 mr-3">
                      <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.utilityRebatesAvailable}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                  Learn More
                </button>
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
                {t.noCostHomeAssessment}
              </h2>
              <p className="text-xl text-green-100 mb-8">
                {t.assessmentDescription}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{t.blowerDoorTesting}</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{t.thermalImaging}</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{t.detailedSavingsReport}</span>
                </div>
              </div>
              
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                {t.scheduleNoCostAssessment}
              </button>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-emerald-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.quickAssessmentForm}</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                import('@/lib/gtm')
                  .then(m => m.pushDataLayer({ event: 'lead_submit', form_id: 'quick_assessment' }))
                  .catch(() => {});
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder={t.firstName} className="px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                  <input type="text" placeholder={t.lastName} className="px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                </div>
                <input type="email" placeholder={t.emailAddress} className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                <input type="tel" placeholder={t.phoneNumber} className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                <input type="text" placeholder={t.zipCode} className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" disabled>{t.homeAge}</option>
                  <option value="new" className="text-gray-900">{t.lessThan5Years}</option>
                  <option value="recent" className="text-gray-900">{t.years5to15}</option>
                  <option value="older" className="text-gray-900">{t.years15to30}</option>
                  <option value="vintage" className="text-gray-900">{t.over30Years}</option>
                </select>
                <button type="submit" className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
                  {t.getMyNoCostAssessment}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Over 2,847 homeowners have saved money with Econova
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
                &ldquo;My energy bills went from $340/month to $180/month after Econova insulated my attic and walls. The rebates covered 75% of the cost - incredible value!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">Sarah Martinez</div>
                  <div className="text-gray-500 text-sm">Homeowner, Austin TX</div>
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
                &ldquo;Professional installation, no upfront costs, and my house stays comfortable year-round now. The whole process was seamless and the team was fantastic.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  DJ
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">David Johnson</div>
                  <div className="text-gray-500 text-sm">Homeowner, Denver CO</div>
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
                &ldquo;The energy audit found air leaks I never knew existed. After sealing and insulation, we&rsquo;re saving $200+ monthly. ROI was achieved in under 2 years!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MR
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">Michael Rodriguez</div>
                  <div className="text-gray-500 text-sm">Homeowner, Phoenix AZ</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Thousands of Satisfied Customers?
            </h3>
            <p className="text-green-100 mb-6">
              Get your No Cost energy assessment and custom savings plan today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Enter ZIP Code" 
                className="px-4 py-3 border border-green-300 bg-white/20 text-white rounded-lg flex-grow focus:ring-2 focus:ring-white focus:border-transparent placeholder-green-100"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Financing Section */}
      <section id="financing" className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 relative overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-tl from-green-400/10 to-emerald-500/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-emerald-300/10 to-green-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              {t.financingRebates}
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{t.flexibleFinancing}</span>
              <br />{t.maximumRebates}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.financingDescription}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Rebates Column */}
            <div className="space-y-6">
              <div className="flex items-center mb-8">
                <div className="bg-emerald-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t.utilityRebatesIncentives}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{t.upTo80UtilityRebates}</h4>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">{t.mostPopular}</span>
                      </div>
                      <p className="text-gray-600">{t.massSaveNyserda}</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t.federalTaxCredits}</h4>
                      <p className="text-gray-600">{t.upTo30Qualifying}</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t.stateLocalIncentives}</h4>
                      <p className="text-gray-600">{t.additionalRebatesVary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Financing Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t.financingOptions}</h3>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-600">
                {/* Top Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-emerald-400 mb-2">{t.zeroDown}</div>
                    <div className="text-sm font-medium text-slate-300">{t.downPaymentFinancing}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-emerald-400 mb-2">{t.apr}</div>
                    <div className="text-sm font-medium text-slate-300">{t.aprRate}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-emerald-400 mb-2">{t.years20}</div>
                    <div className="text-sm font-medium text-slate-300">{t.terms}</div>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <div className="bg-emerald-500/20 rounded-full p-2 mr-4">
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.prequalification60Seconds}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-emerald-500/20 rounded-full p-2 mr-4">
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.noPrepaymentPenalties}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-emerald-500/20 rounded-full p-2 mr-4">
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{t.paymentsLessThanSavings}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300">
                  Check Your Pre-Qualification
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                No Out-of-Pocket Costs
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                Start Saving Immediately
              </h3>
              <p className="text-emerald-100 mb-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                With utility rebates covering up to 80% and flexible financing, many homeowners pay nothing upfront and start saving from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <button className="flex-1 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Calculate My Savings
                </button>
                <button className="flex-1 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Schedule No Cost Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Get a no cost consultation and assessment from our certified energy experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Call (617) 596-2476
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}