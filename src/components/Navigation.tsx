'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LANGUAGES } from '@/lib/translations';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Enhanced Sub Navigation */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-8">
              <div className="flex items-center text-white/90 group hover:text-white transition-colors duration-300">
                <div className="p-1.5 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <a href="tel:+16175962476" className="text-sm font-semibold hover:text-emerald-100 transition-colors">(617) 596-2476</a>
              </div>
              <div className="hidden sm:flex items-center text-white/80 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                {t.servingMassachusetts}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-white/80 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                {t.licensedInsured}
              </div>
              <Link href="/energy-assessment/" className="relative overflow-hidden bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-500 hover:bg-white/30 hover:shadow-xl hover:shadow-white/25 transform hover:-translate-y-0.5 border border-white/30 group">
                <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">{t.freeAssessment}</span>
                  <span className="sm:hidden">{t.freeAssessment}</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Main Navigation */}
      <nav className="bg-white/98 backdrop-blur-xl border-b border-emerald-200/40 shadow-xl shadow-emerald-100/20 relative z-50 py-3 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <Link href="/" className="relative flex items-center">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                <Image src="/logo (4).png" alt="Econova Logo" width={130} height={130} className="h-16 w-auto hover:scale-105 transition-all duration-500 relative z-10"/>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {/* Mass Save Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold text-base relative flex items-center space-x-2 px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:shadow-md group">
                  <span className="relative z-10">{t.massSave}</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="absolute top-full left-0 mt-4 w-72 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    <div className="px-6 py-2 border-b border-emerald-100">
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{t.massachusettsPrograms}</div>
                    </div>
                    <Link href="/mass-save/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                      {t.massSaveRebates}
                    </Link>
                    <Link href="/mass-save-contractors/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                      {t.massSaveContractors}
                    </Link>
                    <Link href="/mass-save-commercial/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"/>
                      </svg>
                      {t.commercialAssessment}
                    </Link>
                    <Link href="/mass-save-heat-loan/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
                      </svg>
                      {t.heatLoanFinancing}
                    </Link>
                    <Link href="/mass-save-renters/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      {t.assessmentsRenters}
                    </Link>
                    <Link href="/mass-save-faqs/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
                      </svg>
                      {t.massSaveFaqs}
                    </Link>
                    <Link href="/energy-assessment/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                      </svg>
                      {t.eligibilityRequirements}
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold text-base relative flex items-center space-x-2 px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:shadow-md group">
                  <span className="relative z-10">{t.services}</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="absolute top-full left-0 mt-4 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    <div className="px-6 py-2 border-b border-emerald-100">
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{t.ourServices}</div>
                    </div>
                    <Link href="/attic-insulation/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7z"/>
                      </svg>
                      {t.atticInsulation}
                    </Link>
                    <Link href="/wall-insulation-dense-pack/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9V7a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1z"/>
                      </svg>
                      {t.wallInsulation}
                    </Link>
                    <Link href="/basement-insulation/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
                      </svg>
                      {t.basementInsulation}
                    </Link>
                    <Link href="/air-sealing/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {t.airSealing}
                    </Link>
                    <Link href="/energy-assessment/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                      </svg>
                      {t.energyAssessmentNav}
                    </Link>
                    <Link href="/hvac/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                      </svg>
                      {t.hvacHeatPumps}
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold text-base relative flex items-center space-x-2 px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:shadow-md group">
                  <span className="relative z-10">{t.aboutUs}</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="absolute top-full left-0 mt-4 w-56 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    <div className="px-6 py-2 border-b border-emerald-100">
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{t.company}</div>
                    </div>
                    <Link href="/service-area/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                      {t.serviceArea}
                    </Link>
                    <Link href="/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                      {t.ourTeam}
                    </Link>
                    <Link href="/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 transition-all duration-200 border-l-2 border-transparent hover:border-emerald-500 group/item">
                      <svg className="w-4 h-4 mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      {t.certifications}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              {/* Desktop CTA Button */}
              <a href="tel:+16175962476" className="hidden md:block relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>{t.callNow}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="px-4 pb-6 bg-white/98 backdrop-blur-xl border-t border-gray-200/50">
            {/* Mobile CTA Button */}
            <div className="mb-6 pt-4">
              <a href="tel:+16175962476" className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>(617) 596-2476</span>
              </a>
            </div>
            
            {/* Mobile menu items */}
            <div className="space-y-1">
              {/* Mass Save Section */}
              <div className="border-b border-gray-200 pb-3 mb-3">
                <div className="text-emerald-600 font-semibold text-lg mb-2">{t.massSave}</div>
                <div className="space-y-1 pl-4">
                  <Link href="/mass-save/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.massSaveRebates}</Link>
                  <Link href="/mass-save-contractors/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.massSaveContractors}</Link>
                  <Link href="/mass-save-commercial/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.commercialAssessment}</Link>
                  <Link href="/mass-save-heat-loan/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.heatLoanFinancing}</Link>
                  <Link href="/mass-save-renters/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.assessmentsRenters}</Link>
                  <Link href="/mass-save-faqs/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.massSaveFaqs}</Link>
                  <Link href="/energy-assessment/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.eligibilityRequirements}</Link>
                </div>
              </div>
              
              {/* Services Section */}
              <div className="border-b border-gray-200 pb-3 mb-3">
                <div className="text-emerald-600 font-semibold text-lg mb-2">{t.services}</div>
                <div className="space-y-1 pl-4">
                  <Link href="/attic-insulation/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.atticInsulation}</Link>
                  <Link href="/wall-insulation-dense-pack/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.wallInsulation}</Link>
                  <Link href="/basement-insulation/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.basementInsulation}</Link>
                  <Link href="/air-sealing/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.airSealing}</Link>
                  <Link href="/energy-assessment/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.energyAssessmentNav}</Link>
                  <Link href="/hvac/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.hvacHeatPumps}</Link>
                </div>
              </div>
              
              {/* About Us Section */}
              <div className="pb-3">
                <div className="text-emerald-600 font-semibold text-lg mb-2">{t.aboutUs}</div>
                <div className="space-y-1 pl-4">
                  <Link href="/service-area/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.serviceArea}</Link>
                  <Link href="/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.ourTeam}</Link>
                  <Link href="/" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.certifications}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

interface LanguageSwitcherProps {
  className?: string;
}

function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = LANGUAGES.find(lang => lang.code === language);
  
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium text-sm rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 group"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:block">{currentLanguage?.name}</span>
        <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white/98 backdrop-blur-xl rounded-xl shadow-2xl border border-emerald-100/50 z-50 overflow-hidden">
            <div className="py-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 ${
                    language === lang.code 
                      ? 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-600 font-semibold border-l-2 border-emerald-500' 
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {language === lang.code && (
                    <svg className="w-4 h-4 ml-auto text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}