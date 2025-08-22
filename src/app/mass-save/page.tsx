import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® Program - Massachusetts Energy Efficiency',
  description: 'Mass Save® is a Massachusetts energy efficiency program providing rebates, incentives, and resources. Reduce energy demand, minimize grid strain, and save money with utility-sponsored programs.',
  slug: '/mass-save/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Program in Massachusetts">
      <Section title="Massachusetts Energy Efficiency Program">
        <p>
          Mass Save® is a comprehensive energy efficiency program sponsored by Massachusetts utility companies
          to help homeowners reduce energy consumption, minimize electric grid strain, reduce carbon emissions,
          and save money on energy bills. The program provides rebates, incentives, and resources to make
          energy efficiency upgrades affordable for Massachusetts residents.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">Participating Utility Companies:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <ul className="space-y-2 text-emerald-700">
              <li>• Berkshire Gas</li>
              <li>• Cape Light Compact</li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• Eversource</li>
              <li>• Liberty Utilities</li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• National Grid</li>
              <li>• Unitil</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Program Goals & Benefits">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Reduce Energy Demand</h4>
            <p className="text-sm text-gray-600">Lower overall energy consumption across Massachusetts</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Minimize Grid Strain</h4>
            <p className="text-sm text-gray-600">Reduce peak demand on the electrical grid system</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Reduce Carbon Emissions</h4>
            <p className="text-sm text-gray-600">Environmental impact reduction through efficiency</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 2L3 7V9H21ZM21 10H3V15H7V13H17V15H21V10Z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Help Homeowners Save</h4>
            <p className="text-sm text-gray-600">Significant energy and money savings for residents</p>
          </div>
        </div>
      </Section>

      <Section title="Eligibility Requirements">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-800 mb-4">To Qualify for Mass Save® Programs:</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 mb-2">Utility Customer</h5>
              <p className="text-blue-600 text-sm">Must be a customer of a participating Massachusetts utility company</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 mb-2">Property Type</h5>
              <p className="text-blue-600 text-sm">Live in a one to four-unit residential home or qualifying condo</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 mb-2">Assessment Required</h5>
              <p className="text-blue-600 text-sm">Complete a no-cost home energy assessment before rebate eligibility</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Available Rebates & Incentives">
        <div className="space-y-8">
          {/* Insulation & Air Sealing */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-800">Insulation & Air Sealing</h4>
                <p className="text-emerald-600">Highest rebate category with maximum savings</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-emerald-700">
                <li>• Up to 75-100% off insulation upgrades</li>
                <li>• No-cost air sealing for qualified homes</li>
                <li>• Attic, wall, and basement insulation rebates</li>
              </ul>
              <ul className="space-y-2 text-emerald-700">
                <li>• Comprehensive whole-house approach</li>
                <li>• Professional installation included</li>
                <li>• Post-work verification and testing</li>
              </ul>
            </div>
          </div>

          {/* Heating & Cooling */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4V6H12V4Z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-orange-800">Heating & Cooling Equipment</h4>
                <p className="text-orange-600">High-efficiency HVAC system rebates</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-orange-700">
                <li>• Up to $16,000 for air source heat pumps</li>
                <li>• $750 for heat pump water heaters</li>
                <li>• $100 for ENERGY STAR smart thermostats</li>
              </ul>
              <ul className="space-y-2 text-orange-700">
                <li>• 0% financing options available</li>
                <li>• Professional installation included</li>
                <li>• Energy efficiency guarantees</li>
              </ul>
            </div>
          </div>

          {/* Appliance Rebates */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">Appliance Rebates</h4>
                <p className="text-blue-600">Energy-efficient appliance incentives</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li>• $150 for ENERGY STAR clothes washers</li>
                <li>• $50 for ENERGY STAR clothes dryers</li>
                <li>• Advanced power strips provided</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li>• Up to $500 for induction stoves</li>
                <li>• Smart home technology rebates</li>
                <li>• Energy-efficient lighting upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="How the Program Works">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Schedule Assessment</h5>
            <p className="text-xs text-gray-600">Book your no-cost home energy evaluation</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Assessment & Testing</h5>
            <p className="text-xs text-gray-600">Comprehensive evaluation with blower-door testing</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Review Incentives</h5>
            <p className="text-xs text-gray-600">Understand available rebates and approve work</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">4</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Professional Installation</h5>
            <p className="text-xs text-gray-600">BPI-certified crews complete the work</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">5</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Documentation & Rebates</h5>
            <p className="text-xs text-gray-600">We handle all paperwork and rebate processing</p>
          </div>
        </div>
      </Section>

      <Section title="Comprehensive Home Energy Assessment">
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h4 className="font-bold text-green-800 mb-4">Required First Step - No-Cost Assessment:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3">What We Evaluate:</h5>
              <ul className="space-y-2 text-green-600">
                <li>• Comprehensive review of home's energy performance</li>
                <li>• Identify locations where energy is being wasted</li>
                <li>• Analyze insulation levels and air leakage</li>
                <li>• Evaluate heating and cooling systems</li>
                <li>• Safety and combustion testing</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-green-700 mb-3">What You Receive:</h5>
              <ul className="space-y-2 text-green-600">
                <li>• Personalized energy improvement recommendations</li>
                <li>• Detailed rebate calculations and eligibility</li>
                <li>• Custom savings projections</li>
                <li>• Priority list of cost-effective upgrades</li>
                <li>• Instant energy-saving devices installed</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white/70 rounded-lg p-4">
            <p className="text-green-700 font-medium">
              <strong>100% Free:</strong> The comprehensive assessment is completely free of charge for all eligible Massachusetts residents.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Maximum Savings with Econova">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Why Choose Econova as Your Mass Save® Partner?</h4>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As an experienced Mass Save® contractor, Econova helps customers maximize their potential savings
              through comprehensive program knowledge and professional installation services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white/70 rounded-lg p-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Program Expertise</h5>
              <p className="text-gray-600 text-sm">Deep knowledge of all Mass Save® programs and maximum rebate strategies</p>
            </div>
            
            <div className="text-center bg-white/70 rounded-lg p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Complete Paperwork Handling</h5>
              <p className="text-gray-600 text-sm">We manage all documentation, forms, and rebate processing from start to finish</p>
            </div>
            
            <div className="text-center bg-white/70 rounded-lg p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Quality Assurance</h5>
              <p className="text-gray-600 text-sm">BPI-certified installers with post-work testing and program compliance</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Do all homes qualify for Mass Save® rebates?</h4>
            <p className="text-gray-700">Not always. Program eligibility depends on your specific utility company, building type, existing conditions, and previous participation in energy efficiency programs. We verify qualification during the assessment process.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Is the insulation really no-cost?</h4>
            <p className="text-gray-700">Many air-sealing measures are completely no-cost for eligible customers. Insulation is often heavily discounted (75-100% off). Final rebate amounts vary by utility, home conditions, and program guidelines.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How long does the assessment and installation take?</h4>
            <p className="text-gray-700">Assessments typically take 90-120 minutes. Most insulation installations are completed in 1 day for single-family homes. Larger homes or complex projects may require additional time.</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What if I've already had energy work done?</h4>
            <p className="text-gray-700">Previous participation may affect eligibility for certain measures. We review your home's history during the assessment and identify any remaining qualifying improvements.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can I combine Mass Save® with other incentives?</h4>
            <p className="text-gray-700">Yes! Mass Save® rebates can often be combined with federal tax credits, state incentives, and utility-specific programs to maximize your total savings.</p>
          </div>
        </div>
      </Section>

      <Section title="Start Your Mass Save® Journey">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Maximize Your Energy Savings?</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact Econova today to schedule your no-cost Mass Save® assessment and discover how much you can save
            on energy efficiency improvements. We'll handle everything from evaluation to rebate processing.
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

      <Section title="Program Compliance Notice">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            Mass Save® is a registered trademark of the utilities and energy efficiency service providers of
            Massachusetts. Participation is subject to eligibility requirements and program guidelines. 
            Incentives and availability are subject to change. Econova is an independent contractor
            participating in Mass Save® programs.
          </p>
        </div>
      </Section>
    </ServicePage>
  );
}
