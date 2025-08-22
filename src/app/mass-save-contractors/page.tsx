import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® Contractors - Qualified Energy Efficiency Professionals',
  description: 'Econova is a Mass Save-approved contractor helping Massachusetts homeowners save energy and money through rebates, assessments, and professional energy efficiency upgrades.',
  slug: '/mass-save-contractors/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Contractors">
      <Section title="Helping You Save Energy and Money">
        <p>
          Econova is a Mass Save-approved contractor dedicated to helping Massachusetts homeowners improve 
          energy efficiency and qualify for valuable rebates and incentives. As qualified energy professionals, 
          we provide comprehensive home energy assessments and install energy-saving upgrades that reduce your 
          utility bills while increasing home comfort.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">What Makes Us Different:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-emerald-700">
              <li>• Mass Save® partner since 2018</li>
              <li>• Helped thousands of Massachusetts families</li>
              <li>• BPI-certified energy specialists</li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• Comprehensive service offerings</li>
              <li>• Expert navigation of Mass Save® incentives</li>
              <li>• Guaranteed energy savings results</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="What is a Mass Save® Contractor?">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-blue-800 mb-4">
            Mass Save® contractors are highly skilled energy professionals who have been approved by the 
            Mass Save® program to help homeowners improve their energy efficiency.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 mb-2">Qualified Assessors</h5>
              <p className="text-blue-600 text-sm">Certified to perform comprehensive Home Energy Assessments</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 mb-2">Licensed Installers</h5>
              <p className="text-blue-600 text-sm">Approved to install energy-saving home upgrades</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 mb-2">Rebate Experts</h5>
              <p className="text-blue-600 text-sm">Navigate incentives and maximize your savings potential</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Choosing the Right Mass Save® Contractor">
        <div className="space-y-6">
          <p className="text-gray-700">
            When selecting a Mass Save® contractor, consider these key factors to ensure you receive 
            the best service and maximum savings:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-800">Experience & Expertise</h4>
                  <p className="text-emerald-600">Proven track record with energy efficiency</p>
                </div>
              </div>
              <ul className="space-y-2 text-emerald-700">
                <li>• Years in the energy efficiency industry</li>
                <li>• BPI and other relevant certifications</li>
                <li>• Knowledge of local building codes</li>
                <li>• Familiarity with Mass Save® programs</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-800">Customer Reviews</h4>
                  <p className="text-blue-600">Verified customer satisfaction record</p>
                </div>
              </div>
              <ul className="space-y-2 text-blue-700">
                <li>• Positive online reviews and ratings</li>
                <li>• Customer testimonials and referrals</li>
                <li>• Better Business Bureau rating</li>
                <li>• Industry recognition and awards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-purple-800">Comprehensive Services</h4>
                  <p className="text-purple-600">Full range of energy efficiency solutions</p>
                </div>
              </div>
              <ul className="space-y-2 text-purple-700">
                <li>• Complete home energy assessments</li>
                <li>• Multiple upgrade options available</li>
                <li>• One-stop shop for efficiency needs</li>
                <li>• Coordinated project management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-800">Quality Customer Service</h4>
                  <p className="text-orange-600">Professional support throughout the process</p>
                </div>
              </div>
              <ul className="space-y-2 text-orange-700">
                <li>• Clear communication and transparency</li>
                <li>• Respectful treatment of your home</li>
                <li>• Timely project completion</li>
                <li>• Post-installation support</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Econova's Mass Save® Services">
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Complete Energy Efficiency Solutions</h4>
            <p className="text-gray-700 max-w-3xl mx-auto">
              As a trusted Mass Save® contractor, Econova offers the full range of energy efficiency services 
              to help Massachusetts homeowners maximize their savings and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 className="font-bold text-emerald-800 mb-2">No-Cost Home Energy Assessments</h5>
              <p className="text-emerald-700 text-sm">Comprehensive evaluation to identify energy-saving opportunities and rebate eligibility</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h5 className="font-bold text-blue-800 mb-2">Insulation Upgrades</h5>
              <p className="text-blue-700 text-sm">Attic, wall, and basement insulation with up to 75-100% rebate coverage</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4V6H12V4Z"/>
                </svg>
              </div>
              <h5 className="font-bold text-purple-800 mb-2">Air Sealing</h5>
              <p className="text-purple-700 text-sm">Professional air sealing to reduce drafts and energy waste</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4V6H12V4Z"/>
                </svg>
              </div>
              <h5 className="font-bold text-orange-800 mb-2">Heat Pump Installation</h5>
              <p className="text-orange-700 text-sm">High-efficiency heating and cooling systems with substantial rebates</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <h5 className="font-bold text-green-800 mb-2">Window Replacement</h5>
              <p className="text-green-700 text-sm">Energy-efficient windows with available rebates and financing</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 5.26L16 6L13.09 6.74L12 10L10.91 6.74L8 6L10.91 5.26L12 2ZM4 12L5.09 15.26L8 16L5.09 16.74L4 20L2.91 16.74L0 16L2.91 15.26L4 12ZM20 12L21.09 15.26L24 16L21.09 16.74L20 20L18.91 16.74L16 16L18.91 15.26L20 12Z"/>
                </svg>
              </div>
              <h5 className="font-bold text-yellow-800 mb-2">Solar Panel Installation</h5>
              <p className="text-yellow-700 text-sm">Renewable energy solutions with federal and state incentives</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Why Choose Econova as Your Mass Save® Contractor?">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-emerald-800 mb-4">Our Track Record</h4>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <strong>Mass Save® partner since 2018</strong>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Helped thousands of Massachusetts homeowners
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Average 30% energy bill reduction for customers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  BPI-certified energy specialists on staff
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-emerald-800 mb-4">Our Advantage</h4>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Expert navigation of Mass Save® incentives
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Comprehensive service range under one roof
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Local Massachusetts company with community focus
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Quality guarantee on all installations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Getting Started with Mass Save®">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-800 mb-4">Your First Step: Schedule a No-Cost Home Energy Assessment</h4>
          <p className="text-blue-700 mb-6">
            The best way to determine what energy efficiency improvements your home needs and what 
            Mass Save® rebates you qualify for is to schedule a comprehensive home energy assessment. 
            Our BPI-certified specialists will evaluate your home and provide personalized recommendations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h5 className="font-semibold text-blue-700 mb-1">Call or Schedule Online</h5>
              <p className="text-blue-600 text-sm">Book your assessment at your convenience</p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h5 className="font-semibold text-blue-700 mb-1">Comprehensive Evaluation</h5>
              <p className="text-blue-600 text-sm">90-120 minute professional assessment</p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h5 className="font-semibold text-blue-700 mb-1">Receive Recommendations</h5>
              <p className="text-blue-600 text-sm">Detailed report with rebate calculations</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Contractor Qualifications & Certifications">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Professional Certifications</h4>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-800">BPI Certified</h5>
                  <p className="text-emerald-700 text-sm">Building Performance Institute energy analyst certification</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-800">Mass Save® Approved</h5>
                  <p className="text-blue-700 text-sm">Official contractor status for all Mass Save® programs</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-800">Licensed & Insured</h5>
                  <p className="text-purple-700 text-sm">Full licensing and comprehensive insurance coverage</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Service Excellence</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">15+ Years Experience</h5>
                <p className="text-gray-600 text-sm">Extensive experience in residential energy efficiency across Massachusetts</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Customer Satisfaction Focus</h5>
                <p className="text-gray-600 text-sm">Consistently high ratings and positive customer reviews</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Complete Project Management</h5>
                <p className="text-gray-600 text-sm">From assessment to rebate processing, we handle everything</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Quality Guarantee</h5>
                <p className="text-gray-600 text-sm">All work comes with satisfaction guarantee and post-installation testing</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="The Econova Advantage">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">What Sets Us Apart from Other Mass Save® Contractors</h4>
          <p className="text-gray-700 max-w-3xl mx-auto">
            While many contractors offer basic services, Econova provides a comprehensive approach to 
            energy efficiency that maximizes your savings and ensures lasting results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h5 className="font-bold text-gray-900 mb-2">Comprehensive Approach</h5>
            <p className="text-gray-600 text-sm">We look at your entire home as a system, not just individual components</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <h5 className="font-bold text-gray-900 mb-2">Rebate Maximization</h5>
            <p className="text-gray-600 text-sm">We ensure you receive every available rebate and incentive you qualify for</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h5 className="font-bold text-gray-900 mb-2">Complete Paperwork Handling</h5>
            <p className="text-gray-600 text-sm">We manage all documentation, forms, and rebate applications for you</p>
          </div>
        </div>
      </Section>

      <Section title="Ready to Work with Massachusetts' Leading Mass Save® Contractor?">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Start Your Energy Efficiency Journey Today</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact Econova to schedule your no-cost Mass Save® assessment and discover how much you can save 
            on energy efficiency improvements. Our experienced team will guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="tel:+16175962476" className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              Call (617) 596-2476
            </a>
            <a href="/energy-assessment/" className="flex-1 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Schedule Assessment
            </a>
          </div>
        </div>
      </Section>

      <Section title="Program Compliance">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            Mass Save® is a registered trademark of the utilities and energy efficiency service providers of 
            Massachusetts. All offers subject to change and program availability. Complete program details 
            available at MassSave.com/HEA. Econova is an independent contractor participating in Mass Save® programs.
          </p>
        </div>
      </Section>
    </ServicePage>
  );
}