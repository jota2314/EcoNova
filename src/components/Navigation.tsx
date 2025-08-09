'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sub Navigation */}
      <div className="bg-slate-900/90 backdrop-blur-sm shadow-lg border-b border-slate-700/50 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-sm font-medium">(617) 596-2476</span>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/energy-assessment/" className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white px-4 sm:px-6 py-1 rounded-xl text-xs sm:text-sm font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group">
                <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Schedule No Cost Assessment</span>
                  <span className="sm:hidden">No Cost Assessment</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-black/20 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center group">
              <Link href="/" className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                <Image src="/Untitled design (26).png" alt="Econova Logo" width={240} height={240} className="h-40 w-auto hover:scale-110 transition-all duration-500 relative z-10"/>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {/* Mass Save Dropdown */}
              <div className="relative group">
                <button className="text-white/90 hover:text-green-400 transition-all duration-300 font-medium text-base relative flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5">
                  <span>Mass Save</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-3 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-green-500/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-4">
                    <Link href="/mass-save/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Mass Save® Rebates</Link>
                    <Link href="/energy-assessment/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Eligibility Requirements</Link>
                  </div>
                </div>
              </div>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white/90 hover:text-green-400 transition-all duration-300 font-medium text-base relative flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5">
                  <span>Services</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-3 w-56 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-green-500/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-4">
                    <Link href="/attic-insulation/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Attic Insulation</Link>
                    <Link href="/wall-insulation-dense-pack/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Wall Insulation</Link>
                    <Link href="/basement-insulation/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Basement Insulation</Link>
                    <Link href="/air-sealing/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Air Sealing</Link>
                    <Link href="/energy-assessment/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Energy Assessment</Link>
                    <Link href="/hvac/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">HVAC Heat Pumps</Link>
                  </div>
                </div>
              </div>
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="text-white/90 hover:text-green-400 transition-all duration-300 font-medium text-base relative flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5">
                  <span>About Us</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-3 w-48 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-green-500/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-4">
                    <Link href="/service-area/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Service Area</Link>
                    <Link href="/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Our Team</Link>
                    <Link href="/" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Certifications</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
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
              <a href="tel:+16175962476" className="hidden md:block relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Call Now</span>
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
          <div className="px-4 pb-6 bg-slate-900/98 backdrop-blur-xl border-t border-green-500/20">
            {/* Mobile CTA Button */}
            <div className="mb-6 pt-4">
              <a href="tel:+16175962476" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>(617) 596-2476</span>
              </a>
            </div>
            
            {/* Mobile menu items */}
            <div className="space-y-1">
              {/* Mass Save Section */}
              <div className="border-b border-slate-700 pb-3 mb-3">
                <div className="text-green-400 font-semibold text-lg mb-2">Mass Save</div>
                <div className="space-y-1 pl-4">
                  <Link href="/mass-save/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Mass Save® Rebates</Link>
                  <Link href="/energy-assessment/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Eligibility Requirements</Link>
                </div>
              </div>
              
              {/* Services Section */}
              <div className="border-b border-slate-700 pb-3 mb-3">
                <div className="text-green-400 font-semibold text-lg mb-2">Services</div>
                <div className="space-y-1 pl-4">
                  <Link href="/attic-insulation/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Attic Insulation</Link>
                  <Link href="/wall-insulation-dense-pack/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Wall Insulation</Link>
                  <Link href="/basement-insulation/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Basement Insulation</Link>
                  <Link href="/air-sealing/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Air Sealing</Link>
                  <Link href="/energy-assessment/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Energy Assessment</Link>
                  <Link href="/hvac/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>HVAC Heat Pumps</Link>
                </div>
              </div>
              
              {/* About Us Section */}
              <div className="pb-3">
                <div className="text-green-400 font-semibold text-lg mb-2">About Us</div>
                <div className="space-y-1 pl-4">
                  <Link href="/service-area/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Service Area</Link>
                  <Link href="/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
                  <Link href="/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Certifications</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}