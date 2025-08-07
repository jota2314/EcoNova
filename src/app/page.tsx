import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-teal-900 to-slate-900">
      {/* Sub Navigation */}
      <div className="bg-slate-900/90 backdrop-blur-sm shadow-lg border-b border-slate-700/50">
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
              <button className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white px-6 py-1 rounded-xl text-sm font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule Free Assessment</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/Untitled design (26).png" alt="Econova Logo" width={80} height={80} className="h-16 w-auto hover:scale-110 transition-all duration-500 relative z-10"/>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {/* Learn More About Mass Save Dropdown */}
              <div className="relative group">
                <button className="text-white/90 hover:text-green-400 transition-all duration-300 font-medium text-base relative flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5">
                  <span>Mass Save</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-3 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-green-500/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-4">
                    <Link href="#rebates" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Rebates & Incentives</Link>
                    <Link href="#eligibility" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Eligibility Requirements</Link>
                    <Link href="#process" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Application Process</Link>
                    <Link href="#savings" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Energy Savings</Link>
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
                    <Link href="#attic-insulation" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Attic Insulation</Link>
                    <Link href="#wall-insulation" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Wall Insulation</Link>
                    <Link href="#basement-insulation" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Basement Insulation</Link>
                    <Link href="#air-sealing" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Air Sealing</Link>
                    <Link href="#energy-audit" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Energy Audits</Link>
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
                    <Link href="#our-story" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Our Story</Link>
                    <Link href="#team" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Our Team</Link>
                    <Link href="#certifications" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Certifications</Link>
                    <Link href="#testimonials" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Testimonials</Link>
                    <Link href="#contact" className="block px-6 py-3 text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-200 border-l-2 border-transparent hover:border-green-500">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Call Now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Save Up to 40% on Energy Bills with
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-8">
            Professional Home Insulation
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get <span className="text-green-400 font-semibold">FREE home energy assessment</span> and professional installation with up to <span className="text-green-400 font-semibold">80% rebates</span> from utility programs. Start saving immediately with guaranteed results.
          </p>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">$0</div>
              <div className="text-sm text-gray-300">Down Payment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Average Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-sm text-gray-300">Utility Rebates</div>
            </div>
          </div>
          
          {/* Mass Save Focus */}
          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-8 mb-12 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-2xl font-bold text-green-400">Mass Save® Partner</h3>
            </div>
            <p className="text-white text-center text-lg mb-6">
              Get up to <span className="text-green-400 font-bold text-xl">80% rebates</span> on insulation through Massachusetts utility programs
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">FREE</div>
                <div className="text-sm text-gray-300">Energy Assessment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">$0</div>
                <div className="text-sm text-gray-300">Out of Pocket</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out group">
              <span className="relative z-10 flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Schedule FREE Assessment</span>
              </span>
            </button>
            <button className="relative overflow-hidden border-2 border-green-400/80 text-green-400 px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-500 hover:bg-green-600 hover:text-white hover:border-green-600 hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm group">
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <span>Check Mass Save® Rebates</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Insulation Services Section */}
      <section id="insulation" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional Insulation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified installers • Guaranteed results • Up to 80% utility rebates • No upfront costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20 hover:border-green-400/40 hover:scale-105 transform group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524 9.026 9.026 0 01-1 .8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">Attic Insulation</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                Blown-in cellulose and fiberglass for maximum R-value
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20 hover:border-green-400/40 hover:scale-105 transform group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">Wall Insulation</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                Injection foam and dense-pack for existing walls
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20 hover:border-green-400/40 hover:scale-105 transform group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">Basement Insulation</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                Spray foam and rigid board for foundation walls
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20 hover:border-green-400/40 hover:scale-105 transform group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.94l1-4H9.03z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">Air Sealing</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                Complete thermal envelope sealing for maximum efficiency
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Econova Insulation?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">Certified Installers</div>
                  <div className="text-green-100 text-sm">BPI & RESNET certified professionals with 15+ years experience</div>
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
                  <div className="text-green-100 text-sm">30% energy bill reduction guarantee or money back</div>
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
                  <div className="text-green-100 text-sm">$0 down with utility rebates up to 80% of total cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Energy Solutions
            </h2>
            <p className="text-xl text-gray-300">
              From insulation to solar, we handle all your home energy needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-500/20 hover:border-green-400/50 hover:scale-105 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-green-300 group-hover:to-green-500 transition-all duration-300 group-hover:scale-110 transform shadow-lg group-hover:shadow-green-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center group-hover:text-green-400 transition-colors duration-300">Solar Installation</h3>
              <p className="text-gray-300 mb-6 text-center group-hover:text-gray-100 transition-colors duration-300">
                Premium solar panels with 25-year performance guarantee and net metering.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Tier-1 panel manufacturers
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Professional design & installation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Federal & state tax credits
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-500/20 hover:border-green-400/50 hover:scale-105 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-green-300 group-hover:to-green-500 transition-all duration-300 group-hover:scale-110 transform shadow-lg group-hover:shadow-green-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center group-hover:text-green-400 transition-colors duration-300">Battery Storage</h3>
              <p className="text-gray-300 mb-6 text-center group-hover:text-gray-100 transition-colors duration-300">
                Backup power systems with smart energy management and grid independence.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Tesla Powerwall & Enphase
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  10-15 year warranties
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Emergency backup power
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-500/20 hover:border-green-400/50 hover:scale-105 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-green-300 group-hover:to-green-500 transition-all duration-300 group-hover:scale-110 transform shadow-lg group-hover:shadow-green-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center group-hover:text-green-400 transition-colors duration-300">HVAC Efficiency</h3>
              <p className="text-gray-300 mb-6 text-center group-hover:text-gray-100 transition-colors duration-300">
                High-efficiency heating and cooling systems with smart thermostats.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Heat pumps & mini-splits
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Smart home integration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Utility rebates available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Assessment Section */}
      <section id="energy-assessment" className="py-20 bg-green-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                FREE Home Energy Assessment
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Our certified energy auditors will identify exactly where your home is losing energy and money. Get a detailed report with guaranteed savings projections.
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
                  <span className="font-medium">Detailed savings report with rebate options</span>
                </div>
              </div>
              
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Schedule Your FREE Assessment
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Assessment Form</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-green-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-green-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-green-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-green-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50" />
                <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-green-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50" />
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" disabled>Home Age</option>
                  <option value="new" className="text-gray-900">Less than 5 years</option>
                  <option value="recent" className="text-gray-900">5-15 years</option>
                  <option value="older" className="text-gray-900">15-30 years</option>
                  <option value="vintage" className="text-gray-900">Over 30 years</option>
                </select>
                <button type="submit" className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Get My FREE Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Over 2,847 homeowners have saved money with Econova
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;My energy bills went from $340/month to $180/month after Econova insulated my attic and walls. The rebates covered 75% of the cost - incredible value!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Martinez</div>
                  <div className="text-gray-400 text-sm">Homeowner, Austin TX</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;Professional installation, no upfront costs, and my house stays comfortable year-round now. The whole process was seamless and the team was fantastic.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  DJ
                </div>
                <div>
                  <div className="text-white font-semibold">David Johnson</div>
                  <div className="text-gray-400 text-sm">Homeowner, Denver CO</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;The energy audit found air leaks I never knew existed. After sealing and insulation, we&rsquo;re saving $200+ monthly. ROI was achieved in under 2 years!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MR
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Rodriguez</div>
                  <div className="text-gray-400 text-sm">Homeowner, Phoenix AZ</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Thousands of Satisfied Customers?
            </h3>
            <p className="text-green-100 mb-6">
              Get your FREE energy assessment and custom savings plan today
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
      <section id="financing" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Financing & Maximum Rebates
            </h2>
            <p className="text-xl text-gray-300">
              Make energy efficiency affordable with $0 down payment options
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Utility Rebates & Incentives</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-slate-700 rounded-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Up to 80% Utility Rebates</div>
                    <div className="text-gray-300 text-sm">Mass Save, NYSERDA, and other programs</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-slate-700 rounded-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Federal Tax Credits</div>
                    <div className="text-gray-300 text-sm">Up to 30% for qualifying improvements</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-slate-700 rounded-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">State & Local Incentives</div>
                    <div className="text-gray-300 text-sm">Additional rebates vary by location</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Financing Options</h3>
              <div className="bg-slate-700 p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">$0</div>
                    <div className="text-sm text-gray-300">Down Payment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">2.9%</div>
                    <div className="text-sm text-gray-300">APR from</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">20yr</div>
                    <div className="text-sm text-gray-300">Terms</div>
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Pre-qualification in 60 seconds
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    No prepayment penalties
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Monthly payments often less than savings
                  </li>
                </ul>
                
                <button className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Check Your Pre-Qualification
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-green-600 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Saving Immediately – No Out-of-Pocket Costs
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              With utility rebates covering up to 80% and flexible financing, many homeowners pay nothing upfront and start saving from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Calculate My Savings
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Schedule Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a free consultation and assessment from our certified energy experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Call 833 363 7442
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image src="/Untitled design (26).png" alt="Econova Logo" width={32} height={32} className="h-8 w-auto mr-3"/>
                <h3 className="text-2xl font-bold text-green-400">Econova</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional home insulation and energy efficiency solutions. Save money, increase comfort, and help the environment with our certified installation services.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400">4.9/5 from 2,847 reviews</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-green-400 transition-colors cursor-pointer">Attic Insulation</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Wall Insulation</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Air Sealing</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Solar Installation</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Energy Audits</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  833 363 7442
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@econova.com
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                  </svg>
                  Available 7 days a week
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 Econova. All rights reserved.</p>
              <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}