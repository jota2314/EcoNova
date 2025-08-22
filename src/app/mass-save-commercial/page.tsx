import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® Commercial Energy Assessment - Business Energy Efficiency',
  description: 'Reduce operating costs and improve workplace comfort with Mass Save® commercial energy assessments. Professional evaluation, customized savings proposals, and rebates for Massachusetts businesses.',
  slug: '/mass-save-commercial/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Commercial Energy Assessment">
      <Section title="Reduce Operating Costs and Improve Your Business">
        <p>
          Econova helps Massachusetts businesses evaluate their building's energy efficiency and identify 
          opportunities to improve energy performance. Through Mass Save® commercial programs, your business 
          can reduce energy consumption, lower overhead costs, and create a more comfortable workplace while 
          demonstrating environmental responsibility.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">Commercial Energy Assessment Benefits:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-emerald-700">
              <li>• Reduce energy consumption and operating costs</li>
              <li>• Increase profit margins through lower overhead</li>
              <li>• Improve workplace comfort and productivity</li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• Access substantial commercial rebates</li>
              <li>• Demonstrate environmental responsibility</li>
              <li>• Support your business's decarbonization goals</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Benefits of Commercial Energy Assessment">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 2L3 7V9H21ZM21 10H3V15H7V13H17V15H21V10Z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Energy Savings</h4>
            <p className="text-sm text-gray-600">Reduce energy consumption and lower monthly utility costs</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Environmental Impact</h4>
            <p className="text-sm text-gray-600">Decrease carbon emissions and support sustainability goals</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Workplace Improvements</h4>
            <p className="text-sm text-gray-600">Enhanced comfort and potential productivity increases</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Business Reputation</h4>
            <p className="text-sm text-gray-600">Demonstrate environmental responsibility and improve public image</p>
          </div>
        </div>
      </Section>

      <Section title="Types of Commercial Energy Assessments">
        <div className="space-y-8">
          {/* Online Assessment */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">Online Commercial Energy Assessment</h4>
                <p className="text-blue-600">Virtual and self-guided assessment for all business sizes</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li>• Quick online questionnaire about your business</li>
                <li>• Identify potential energy upgrades</li>
                <li>• Learn about available rebates and incentives</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li>• No on-site visit required</li>
                <li>• Get started immediately</li>
                <li>• Foundation for planning future improvements</li>
              </ul>
            </div>
          </div>

          {/* Small Business Assessment */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-800">Small Business Energy Assessment</h4>
                <p className="text-emerald-600">For businesses using less than 1.5M kWh electricity or 40,000 therms gas annually</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-emerald-700">
                <li>• <strong>No-cost professional assessment</strong></li>
                <li>• On-site evaluation by certified energy specialists</li>
                <li>• Customized Energy Savings Proposal</li>
                <li>• Detailed rebate calculations</li>
              </ul>
              <ul className="space-y-2 text-emerald-700">
                <li>• Free installation of energy-saving measures</li>
                <li>• Priority access to small business rebates</li>
                <li>• Ongoing support throughout implementation</li>
                <li>• Post-installation verification and testing</li>
              </ul>
            </div>
            <div className="mt-4 bg-white/70 rounded-lg p-4">
              <p className="text-emerald-700 font-medium">
                <strong>Eligibility:</strong> Annual usage below 1.5 million kWh electricity OR 40,000 therms natural gas
              </p>
            </div>
          </div>

          {/* Large Facility Assessment */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-800">Large Facility Energy Assessment</h4>
                <p className="text-purple-600">For buildings using more than 1.5M kWh electricity or 40,000 therms gas annually</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-purple-700">
                <li>• Comprehensive whole-building evaluation</li>
                <li>• Advanced energy modeling and analysis</li>
                <li>• Multiple improvement scenarios</li>
                <li>• ROI analysis for major capital investments</li>
              </ul>
              <ul className="space-y-2 text-purple-700">
                <li>• Access to large facility rebate programs</li>
                <li>• Custom incentive negotiations</li>
                <li>• Project management support</li>
                <li>• Performance verification and monitoring</li>
              </ul>
            </div>
            <div className="mt-4 bg-white/70 rounded-lg p-4">
              <p className="text-purple-700 font-medium">
                <strong>Eligibility:</strong> Annual usage above 1.5 million kWh electricity OR 40,000 therms natural gas
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Commercial Rebates & Incentives">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Substantial Savings Available</h4>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Mass Save® offers significant rebates and incentives for commercial energy efficiency improvements, 
              helping businesses reduce upfront costs while maximizing long-term savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <h5 className="font-bold text-emerald-800 mb-4">Building Envelope & Insulation</h5>
              <ul className="space-y-2 text-emerald-700">
                <li>• Commercial insulation upgrades - Up to 70% rebate</li>
                <li>• Weatherization improvements - Custom incentives</li>
                <li>• Air sealing and building tightening</li>
                <li>• High-performance windows and doors</li>
                <li>• Roof and wall insulation systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h5 className="font-bold text-orange-800 mb-4">HVAC System Upgrades</h5>
              <ul className="space-y-2 text-orange-700">
                <li>• Commercial heat pumps - Up to $50,000 rebate</li>
                <li>• High-efficiency boilers and furnaces</li>
                <li>• Smart building controls and thermostats</li>
                <li>• Variable frequency drives (VFDs)</li>
                <li>• Energy recovery ventilation systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h5 className="font-bold text-blue-800 mb-4">Water Heating & Equipment</h5>
              <ul className="space-y-2 text-blue-700">
                <li>• Commercial heat pump water heaters</li>
                <li>• High-efficiency water heating systems</li>
                <li>• Water heating controls and timers</li>
                <li>• Pipe insulation and hot water recirculation</li>
                <li>• Solar hot water systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <h5 className="font-bold text-purple-800 mb-4">Lighting & Electrical</h5>
              <ul className="space-y-2 text-purple-700">
                <li>• LED lighting conversions - Up to $200 per fixture</li>
                <li>• Occupancy and daylight sensors</li>
                <li>• Lighting controls and dimming systems</li>
                <li>• High-efficiency motors</li>
                <li>• Power factor correction equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Commercial Assessment Process">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Initial Consultation</h5>
            <p className="text-xs text-gray-600">Discuss your business needs and energy goals</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Site Assessment</h5>
            <p className="text-xs text-gray-600">Professional evaluation of your facility's energy systems</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Custom Proposal</h5>
            <p className="text-xs text-gray-600">Detailed savings plan with rebate calculations</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">4</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Implementation</h5>
            <p className="text-xs text-gray-600">Professional installation with minimal business disruption</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">5</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Ongoing Support</h5>
            <p className="text-xs text-gray-600">Performance monitoring and continued optimization</p>
          </div>
        </div>
      </Section>

      <Section title="Why Choose Econova for Commercial Energy Services">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-emerald-800 mb-4">Our Commercial Expertise</h4>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <strong>15+ years commercial energy experience</strong>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Hundreds of successful commercial projects
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Average 25-40% energy cost reduction
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Certified commercial energy professionals
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-emerald-800 mb-4">Our Business Approach</h4>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Minimal disruption to your operations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Flexible scheduling around business hours
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Complete rebate and incentive management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Ongoing performance monitoring and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Commercial Energy Assessment FAQ">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How much can my business save with energy efficiency improvements?</h4>
            <p className="text-gray-700">Commercial energy efficiency improvements typically reduce energy costs by 25-40%. The exact savings depend on your current systems, building condition, and which improvements are implemented.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What types of businesses qualify for Mass Save® commercial programs?</h4>
            <p className="text-gray-700">Most Massachusetts businesses served by participating utilities qualify. Programs are available for small businesses, large facilities, office buildings, retail spaces, restaurants, warehouses, and manufacturing facilities.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How long does a commercial energy assessment take?</h4>
            <p className="text-gray-700">Small business assessments typically take 2-4 hours. Large facility assessments can take several days depending on building size and complexity. We work around your business schedule to minimize disruption.</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What's the typical payback period for commercial energy improvements?</h4>
            <p className="text-gray-700">With Mass Save® rebates, most commercial energy improvements have payback periods of 2-5 years. Some lighting and simple HVAC improvements can pay back in under 2 years.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can we implement improvements in phases?</h4>
            <p className="text-gray-700">Yes! We can prioritize improvements based on your budget and business needs. Many businesses start with lighting and simple HVAC improvements, then implement larger projects over time.</p>
          </div>
        </div>
      </Section>

      <Section title="Ready to Reduce Your Business Energy Costs?">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Commercial Energy Assessment</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact Econova today to evaluate your business's energy efficiency potential. Our commercial energy 
            specialists will help you identify opportunities to reduce costs, improve comfort, and access valuable rebates.
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

      <Section title="Program Information & Compliance">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            Mass Save® commercial programs are available to eligible Massachusetts businesses served by 
            participating utilities. Rebates and incentives are subject to program guidelines and fund availability. 
            Energy usage thresholds determine program eligibility. Econova is an independent contractor 
            participating in Mass Save® commercial programs.
          </p>
        </div>
      </Section>
    </ServicePage>
  );
}