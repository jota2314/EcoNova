import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® Home Energy Assessment',
  description: 'No cost home energy assessment in Massachusetts. Find ways to save energy and money with professional evaluation, instant energy-saving devices, and detailed efficiency reports.',
  slug: '/energy-assessment/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Home Energy Assessment">
      <Section title="Find Ways to Save Energy and Money!">
        <p>
          Our comprehensive no-cost evaluation identifies exactly where your home loses energy and money.
          Get personalized energy upgrade recommendations, instant energy-saving devices, and access to
          valuable rebates and incentives through the Mass Save® program.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">Potential Savings:</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-emerald-700">
              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Up to 20% reduction in heating/cooling costs
            </li>
            <li className="flex items-center text-emerald-700">
              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              75-100% off insulation upgrades through rebates
            </li>
            <li className="flex items-center text-emerald-700">
              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Potential savings up to $16,000 on heating/cooling systems
            </li>
            <li className="flex items-center text-emerald-700">
              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              No-cost air sealing for qualified homes
            </li>
          </ul>
        </div>
      </Section>

      <Section title="What's Included in Your Assessment">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Comprehensive Testing:</h4>
            <ul>
              <li><strong>Blower-Door Test</strong> - Measures whole-house air leakage and identifies leak locations</li>
              <li><strong>Thermal Imaging</strong> - Reveals hidden insulation gaps and thermal bridges</li>
              <li><strong>Insulation Assessment</strong> - Check R-values in attic, walls, and basement</li>
              <li><strong>HVAC Evaluation</strong> - Analyze system efficiency and ductwork condition</li>
              <li><strong>Safety Inspection</strong> - Check for combustion safety and moisture issues</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Instant Improvements:</h4>
            <ul>
              <li>Energy-efficient LED light bulbs</li>
              <li>Low-flow showerheads and faucet aerators</li>
              <li>Weather-stripping for doors and windows</li>
              <li>Smart power strips to reduce phantom loads</li>
              <li>Programmable thermostat installation (when applicable)</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="4-Step Assessment Process">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Schedule Assessment</h4>
            <p className="text-sm text-gray-600">Book your no-cost home energy assessment online or by phone</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Receive Recommendations</h4>
            <p className="text-sm text-gray-600">Get personalized upgrade recommendations and rebate calculations</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Schedule Improvements</h4>
            <p className="text-sm text-gray-600">Book energy improvements at your convenience with certified installers</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">4</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Enjoy Savings</h4>
            <p className="text-sm text-gray-600">Start saving money immediately with lower energy bills</p>
          </div>
        </div>
      </Section>

      <Section title="Assessment Timeline & Process">
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-emerald-500 rounded-full p-2 flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Pre-Visit Call (15 minutes)</h4>
              <p className="text-gray-600">Confirm eligibility, schedule appointment, and answer initial questions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-blue-500 rounded-full p-2 flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Exterior Walkthrough (15 minutes)</h4>
              <p className="text-gray-600">Examine building envelope, siding, windows, and exterior conditions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-purple-500 rounded-full p-2 flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Interior Assessment (45-90 minutes)</h4>
              <p className="text-gray-600">Detailed inspection of insulation, air sealing, HVAC, and safety systems</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Results Review (15 minutes)</h4>
              <p className="text-gray-600">Discuss findings, recommendations, rebate options, and next steps</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          <strong>Total visit time:</strong> 90-120 minutes for most single-family homes. We work efficiently while being thorough.
        </p>
      </Section>

      <Section title="What You'll Receive">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-4">Detailed Assessment Report</h4>
            <ul className="space-y-2 text-emerald-700">
              <li>• Comprehensive analysis with photos and measurements</li>
              <li>• Prioritized list of recommended improvements</li>
              <li>• Energy savings projections for each measure</li>
              <li>• Before and after efficiency comparisons</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Rebate & Financing Info</h4>
            <ul className="space-y-2 text-blue-700">
              <li>• Mass Save® rebate calculations and eligibility</li>
              <li>• Federal and state tax credit information</li>
              <li>• Custom project timeline and pricing</li>
              <li>• Flexible financing options available</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Who Qualifies for No-Cost Assessment?">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-800 mb-4">Eligibility Requirements:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-blue-700">
              <li>✓ Massachusetts residents served by participating utilities</li>
              <li>✓ Single-family homes, condos, and some townhomes</li>
              <li>✓ Properties that haven't received recent energy upgrades</li>
            </ul>
            <ul className="space-y-2 text-blue-700">
              <li>✓ Owner-occupied or rental properties (with owner permission)</li>
              <li>✓ Homes built before current energy efficiency standards</li>
              <li>✓ Properties with gas or electric heating systems</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-blue-600 bg-white/50 p-3 rounded-lg">
            <strong>Note:</strong> Eligibility varies by utility and program guidelines. We verify qualification before scheduling your assessment.
          </p>
        </div>
      </Section>

      <Section title="Prepare for Your Assessment">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h4 className="font-bold text-orange-800 mb-4">Before We Arrive:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-700 mb-2">Access & Safety:</h5>
              <ul className="space-y-1 text-orange-600">
                <li>• Clear access to attic hatch and basement</li>
                <li>• Remove items from utility areas</li>
                <li>• Secure pets in a separate room</li>
                <li>• Ensure clear walkways throughout home</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-700 mb-2">Information to Gather:</h5>
              <ul className="space-y-1 text-orange-600">
                <li>• Recent utility bills (12 months if available)</li>
                <li>• List of comfort issues: drafts, cold rooms</li>
                <li>• Notes about high energy bills or concerns</li>
                <li>• Any previous energy work documentation</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-orange-600 bg-white/50 p-3 rounded-lg">
            <strong>Professional Service:</strong> We provide shoe covers and work respectfully in your home. Plan to be present for the entire assessment.
          </p>
        </div>
      </Section>

      <Section title="After Your Assessment">
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-bold text-green-800 mb-4">Next Steps:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-green-700">
                <li>• Review your personalized savings plan</li>
                <li>• Understand available rebate options</li>
                <li>• Schedule recommended improvements</li>
                <li>• No pressure - proceed at your own pace</li>
              </ul>
              <ul className="space-y-2 text-green-700">
                <li>• We handle all Mass Save® paperwork</li>
                <li>• Coordinate rebate applications</li>
                <li>• Provide ongoing support and guidance</li>
                <li>• Post-installation testing and verification</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How much does the assessment cost?</h4>
            <p className="text-gray-700">$0 for eligible customers through Mass Save® programs. The assessment is funded through a small charge on gas and electric bills that Massachusetts residents already pay.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Are you trying to sell me something?</h4>
            <p className="text-gray-700">We provide honest, unbiased recommendations based on your home's needs. There's absolutely no pressure to proceed with any work. Our goal is to help you save energy and money.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How soon can I get an assessment?</h4>
            <p className="text-gray-700">Most assessments can be scheduled within 1-2 weeks. We offer flexible scheduling including evenings and weekends to accommodate your schedule.</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What if I'm not eligible for rebates?</h4>
            <p className="text-gray-700">We still provide the full assessment and detailed recommendations. We can discuss other financing options and help you prioritize the most cost-effective improvements.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Do you work with tenants and landlords?</h4>
            <p className="text-gray-700">Yes! Both owner-occupied and rental properties qualify. For rental properties, we need property owner permission and coordination for any recommended improvements.</p>
          </div>
        </div>
      </Section>

      <Section title="Why Choose Econova for Your Assessment?">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">BPI Certified</h4>
            <p className="text-gray-600">Our energy specialists are Building Performance Institute certified with 15+ years experience</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Guaranteed Results</h4>
            <p className="text-gray-600">30% energy bill reduction guarantee or money back on qualifying improvements</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">No Upfront Costs</h4>
            <p className="text-gray-600">$0 down with utility rebates covering up to 80% of total improvement costs</p>
          </div>
        </div>
      </Section>

      <Section title="Ready to Start Saving?">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your No-Cost Assessment Today</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Call <strong>(617) 596-2476</strong> or use our online scheduling system to book your assessment.
            We'll confirm your eligibility and answer any questions before your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="tel:+16175962476" className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              Call Now
            </a>
            <a href="#contact" className="flex-1 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Schedule Online
            </a>
          </div>
        </div>
      </Section>
    </ServicePage>
  );
}

