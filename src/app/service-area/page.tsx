import { CITIES } from '@/lib/site';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';

export const metadata = {
  title: 'Service Areas Across Massachusetts | Professional Energy Services | Econova',
  description: 'Econova provides comprehensive insulation, air sealing, and HVAC services across Massachusetts. Serving 35+ communities with Mass Save® rebates and professional energy efficiency solutions.',
  keywords: 'Massachusetts energy services, insulation, air sealing, HVAC, Mass Save rebates',
};

// Create markers for major service areas
const serviceAreaMarkers = [
  {
    position: { lat: 42.5584, lng: -71.1738 },
    title: 'Wilmington, MA',
    info: 'Our headquarters - Full service area with same-day assessments'
  },
  {
    position: { lat: 42.4792, lng: -71.1563 },
    title: 'Woburn, MA',
    info: 'Complete insulation and energy efficiency services'
  },
  {
    position: { lat: 42.5047, lng: -71.2003 },
    title: 'Burlington, MA',
    info: 'Mass Save® rebates and professional installation'
  },
  {
    position: { lat: 42.5256, lng: -71.0955 },
    title: 'Reading, MA',
    info: 'Attic, wall, and basement insulation specialists'
  },
  {
    position: { lat: 42.6431, lng: -71.0828 },
    title: 'Andover, MA',
    info: 'Energy assessments and HVAC efficiency services'
  },
  {
    position: { lat: 42.4430, lng: -71.1097 },
    title: 'Stoneham, MA',
    info: 'Air sealing and insulation professionals'
  },
  {
    position: { lat: 42.3188, lng: -71.1063 },
    title: 'Lowell, MA',
    info: 'Comprehensive energy efficiency solutions'
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              Serving Massachusetts
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Service Areas
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional energy efficiency services across Massachusetts. From Boston's suburbs to the North Shore, 
              we bring Mass Save® rebates and expert insulation services directly to your community.
            </p>
            
            {/* Stats */}
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">35+</div>
                  <div className="text-sm text-emerald-100">Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">30 Miles</div>
                  <div className="text-sm text-emerald-100">Massachusetts Only</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Same Day</div>
                  <div className="text-sm text-emerald-100">Assessment Booking</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Licensed</div>
                  <div className="text-sm text-emerald-100">& Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-emerald-300/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </header>

      <main className="relative z-10 bg-white">
        {/* Interactive Map Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Service Map</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive service area across Massachusetts. Click on any marker to learn more 
                about the services available in that community.
              </p>
            </div>
            
            {/* Map Container */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 mb-8">
              <GoogleMap 
                className="w-full h-[500px] md:h-[600px]"
                center={{ lat: 42.5584, lng: -71.1738 }}
                zoom={10}
                markers={serviceAreaMarkers}
              />
            </div>
            
            {/* Map Legend */}
            <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Area Details</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-gray-900">Primary Service Zone</div>
                    <div className="text-sm text-gray-600">Same-day assessments available</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-300 rounded-full mr-3 opacity-50"></div>
                  <div>
                    <div className="font-medium text-gray-900">Extended Service Area</div>
                    <div className="text-sm text-gray-600">30-mile radius within MA</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-gray-900">Water Bodies</div>
                    <div className="text-sm text-gray-600">Geographic boundaries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-emerald-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Communities We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional energy efficiency services with Mass Save® rebates available in all listed communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {CITIES.map((city) => (
                <Link 
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {city.city}
                      </h3>
                      <p className="text-sm text-gray-600">{city.state}</p>
                      {city.county && (
                        <p className="text-xs text-gray-500 mt-1">{city.county} County</p>
                      )}
                    </div>
                    <div className="text-emerald-500 group-hover:text-emerald-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-emerald-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Mass Save® Available
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Don't see your community listed? Contact us anyway! We're constantly expanding our service area 
                and may be able to serve your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a 
                  href="tel:+17817324817" 
                  className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Call (781) 732-4817</span>
                </a>
                <Link 
                  href="/energy-assessment/" 
                  className="flex-1 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Assessment</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

