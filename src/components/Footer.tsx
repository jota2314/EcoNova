import Link from 'next/link';
import Image from 'next/image';
import { CITIES } from '@/lib/site';

export default function Footer() {
  const firstHalf = CITIES.slice(0, Math.ceil(CITIES.length / 2));
  const secondHalf = CITIES.slice(Math.ceil(CITIES.length / 2));

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-8">
              <Image 
                src="/Untitled design (26).png" 
                alt="Econova Logo" 
                width={180} 
                height={180} 
                className="h-36 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="space-y-4">
              <Link 
                href="/energy-assessment/" 
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Schedule Assessment
              </Link>
              <div className="text-gray-400">
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a href="tel:8333637442" className="hover:text-green-400 transition-colors">(833) 363-7442</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:info@econova.com" className="hover:text-green-400 transition-colors">info@econova.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/attic-insulation/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Attic Insulation</Link></li>
              <li><Link href="/wall-insulation-dense-pack/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Wall Insulation</Link></li>
              <li><Link href="/basement-insulation/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Basement Insulation</Link></li>
              <li><Link href="/air-sealing/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Air Sealing</Link></li>
              <li><Link href="/hvac/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">HVAC Heat Pumps</Link></li>
              <li><Link href="/energy-assessment/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Energy Assessment</Link></li>
              <li><Link href="/mass-save/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Mass Save® Rebates</Link></li>
            </ul>
          </div>

          {/* Areas We Serve - 2 Columns */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-white">Areas We Serve in Massachusetts</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div>
                {firstHalf.map(city => (
                  <div key={city.slug} className="mb-2">
                    <Link 
                      href={`/${city.slug}/`} 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {city.city}, {city.state}
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                {secondHalf.map(city => (
                  <div key={city.slug} className="mb-2">
                    <Link 
                      href={`/${city.slug}/`} 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {city.city}, {city.state}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Link 
              href="/service-area/" 
              className="inline-block mt-6 text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Econova Energy Solutions. All rights reserved. 
              <span className="mx-2">|</span>
              Licensed & Insured Energy Contractors
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}