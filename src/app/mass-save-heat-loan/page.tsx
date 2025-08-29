import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® HEAT Loan Financing - 0% Interest Energy Loans',
  description: 'Get up to $25,000 in zero-interest financing for energy efficiency improvements through Mass Save® HEAT Loan program. Fund insulation, heat pumps, and weatherization upgrades.',
  slug: '/mass-save-heat-loan/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® HEAT Loan Financing">
      <Section title="Zero-Interest Financing for Energy Efficiency Improvements">
        <p>
          The Mass Save® HEAT (Home Energy Assessment and Transformation) Loan program offers Massachusetts 
          homeowners up to $25,000 in zero-interest financing for qualifying energy efficiency home improvements. 
          This innovative program, sponsored by Mass Save® program partners, makes it affordable to upgrade 
          your home's energy performance without upfront costs.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">HEAT Loan Key Benefits:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-emerald-700">
              <li>• <strong>0% interest rate</strong> - No interest charges ever</li>
              <li>• Up to $25,000 financing available</li>
              <li>• Flexible repayment terms</li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• Combine with Mass Save® rebates for maximum savings</li>
              <li>• No-cost home energy assessment included</li>
              <li>• Professional installation by certified contractors</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="HEAT Loan Program Overview">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Zero-Interest Financing</h4>
            <p className="text-sm text-gray-600">Borrow up to $25,000 with 0% interest for qualifying energy improvements</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Comprehensive Upgrades</h4>
            <p className="text-sm text-gray-600">Fund multiple energy efficiency improvements in a single loan package</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Mass Save® Integration</h4>
            <p className="text-sm text-gray-600">Seamlessly combines with rebates and incentives for maximum savings</p>
          </div>
        </div>
      </Section>

      <Section title="Eligible Improvements & Financing">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-800">Weatherization & Insulation</h4>
                <p className="text-emerald-600">Foundation improvements for maximum energy savings</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-emerald-700">
                <li>• Attic insulation upgrades</li>
                <li>• Wall insulation (dense pack)</li>
                <li>• Basement and crawl space insulation</li>
                <li>• Comprehensive air sealing</li>
              </ul>
              <ul className="space-y-2 text-emerald-700">
                <li>• Windows and door improvements</li>
                <li>• Ductwork sealing and insulation</li>
                <li>• Thermal bridging solutions</li>
                <li>• Pre-weatherization health and safety upgrades</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4V6H12V4Z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-orange-800">Heat Pump Systems</h4>
                <p className="text-orange-600">High-efficiency heating and cooling solutions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-orange-700">
                <li>• Air source heat pumps (ductless and ducted)</li>
                <li>• Ground source (geothermal) heat pumps</li>
                <li>• Heat pump water heaters</li>
                <li>• Hybrid heat pump systems</li>
              </ul>
              <ul className="space-y-2 text-orange-700">
                <li>• Smart thermostats and controls</li>
                <li>• Ductwork modifications for heat pumps</li>
                <li>• Electrical upgrades for heat pump installation</li>
                <li>• Backup heating system integration</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">Solar & Energy Storage</h4>
                <p className="text-blue-600">Renewable energy and backup power solutions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li>• Solar battery storage systems</li>
                <li>• Battery backup for essential loads</li>
                <li>• Smart energy management systems</li>
                <li>• Grid-tie and off-grid capabilities</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li>• Integration with existing solar panels</li>
                <li>• Emergency backup power solutions</li>
                <li>• Time-of-use optimization</li>
                <li>• Electric vehicle charging preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="HEAT Loan Eligibility Requirements">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-800 mb-4">Who Qualifies for HEAT Loan Financing?</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Homeowner Requirements:</h5>
              <ul className="space-y-2 text-blue-600">
                <li>✓ Current residential electric account with participating utility</li>
                <li>✓ Customers of Eversource, National Grid, or Unitil</li>
                <li>✓ Owner-occupied primary residence in Massachusetts</li>
                <li>✓ Completion of Mass Save® home energy assessment</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Loan Approval Process:</h5>
              <ul className="space-y-2 text-blue-600">
                <li>✓ Credit approval from participating lender</li>
                <li>✓ Verification of income and employment</li>
                <li>✓ Property ownership documentation</li>
                <li>✓ Energy improvement recommendations from assessment</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white/70 rounded-lg p-4">
            <p className="text-blue-700 font-medium">
              <strong>Important:</strong> A no-cost Mass Save® home energy assessment is required before 
              applying for HEAT Loan financing to determine eligible improvements and rebate opportunities.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Loan Terms & Benefits">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">HEAT Loan Terms</h4>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-800 mb-2">Loan Amount</h5>
                <p className="text-emerald-700">Up to $25,000 per eligible property</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">Interest Rate</h5>
                <p className="text-blue-700"><strong>0% interest</strong> - No interest charges for the life of the loan</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2">Repayment Terms</h5>
                <p className="text-purple-700">Flexible terms up to 7 years depending on loan amount</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">Application Fee</h5>
                <p className="text-orange-700">No application fees or prepayment penalties</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Additional Benefits</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Mass Save® Rebates</h5>
                <p className="text-gray-600">Combine loan with rebates to reduce total project cost significantly</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">No-Cost Assessment</h5>
                <p className="text-gray-600">Professional evaluation and energy-saving product installation included</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Certified Contractors</h5>
                <p className="text-gray-600">Work with BPI-certified professionals for quality installation</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Energy Savings Guarantee</h5>
                <p className="text-gray-600">Documented performance results and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="HEAT Loan Application Process">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Schedule Assessment</h5>
            <p className="text-xs text-gray-600">Book your no-cost Mass Save® home energy assessment</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Receive Recommendations</h5>
            <p className="text-xs text-gray-600">Get personalized improvement plan with HEAT Loan eligibility</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Apply for Financing</h5>
            <p className="text-xs text-gray-600">Complete loan application with participating lender</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">4</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Professional Installation</h5>
            <p className="text-xs text-gray-600">Certified contractors complete energy improvements</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">5</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Start Saving</h5>
            <p className="text-xs text-gray-600">Begin enjoying lower energy bills and increased comfort</p>
          </div>
        </div>
      </Section>

      <Section title="Maximizing Your Savings">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">HEAT Loan + Mass Save® Rebates = Maximum Savings</h4>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The HEAT Loan program is designed to work seamlessly with Mass Save® rebates and incentives, 
              allowing you to finance the remaining costs after rebates at 0% interest.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white/70 rounded-lg p-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Example: Insulation Project</h5>
              <p className="text-gray-600 text-sm">$8,000 project - $6,000 rebate = $2,000 financed at 0% interest</p>
            </div>
            
            <div className="text-center bg-white/70 rounded-lg p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4V6H12V4Z"/>
                </svg>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Example: Heat Pump System</h5>
              <p className="text-gray-600 text-sm">$20,000 project - $8,000 rebate = $12,000 financed at 0% interest</p>
            </div>
            
            <div className="text-center bg-white/70 rounded-lg p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Example: Comprehensive Package</h5>
              <p className="text-gray-600 text-sm">$35,000 project - $15,000 rebate = $20,000 financed at 0% interest</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Why Choose Econova for HEAT Loan Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">HEAT Loan Expertise</h4>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
                <svg className="w-5 h-5 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span className="text-emerald-800"><strong>HEAT Loan certified contractor</strong></span>
              </div>
              
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span className="text-blue-800">Complete loan application assistance</span>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span className="text-purple-800">Rebate maximization strategies</span>
              </div>
              
              <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                <svg className="w-5 h-5 mr-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span className="text-orange-800">Project coordination and management</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Customer Support</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-1">Financing Guidance</h5>
                <p className="text-gray-600 text-sm">Help you understand loan terms and application process</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-1">Seamless Installation</h5>
                <p className="text-gray-600 text-sm">Professional installation with minimal disruption</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-1">Ongoing Support</h5>
                <p className="text-gray-600 text-sm">Post-installation support and performance verification</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-1">Quality Guarantee</h5>
                <p className="text-gray-600 text-sm">Satisfaction guarantee on all HEAT Loan projects</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Is the 0% interest rate really permanent?</h4>
            <p className="text-gray-700">Yes, the HEAT Loan offers true 0% interest for the entire loan term. There are no introductory rates or interest rate increases over time.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can I combine the HEAT Loan with Mass Save® rebates?</h4>
            <p className="text-gray-700">Absolutely! The HEAT Loan is designed to work with Mass Save® rebates. You receive rebates first, then finance the remaining costs at 0% interest.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What credit score is required for HEAT Loan approval?</h4>
            <p className="text-gray-700">Credit requirements vary by lender, but the program is designed to be accessible to homeowners with fair to excellent credit. Contact us to discuss your specific situation.</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How long does the application and approval process take?</h4>
            <p className="text-gray-700">After your energy assessment, loan approval typically takes 1-2 weeks. Installation can usually begin within 30 days of approval, depending on project complexity.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What happens if I sell my home before the loan is paid off?</h4>
            <p className="text-gray-700">The remaining loan balance becomes due at the time of sale. However, energy efficiency improvements typically increase home value, which can offset the remaining balance.</p>
          </div>
        </div>
      </Section>

      <Section title="Ready to Finance Your Energy Efficiency Improvements?">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Start with a No-Cost Energy Assessment</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            The first step to accessing HEAT Loan financing is scheduling your no-cost Mass Save® home energy assessment. 
            We'll evaluate your home, identify eligible improvements, and help you navigate the financing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="tel:+17817324817" className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              Call (781) 732-4817
            </a>
            <a href="/energy-assessment/" className="flex-1 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Schedule Assessment
            </a>
          </div>
        </div>
      </Section>

      <Section title="Program Information & Disclaimer">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            HEAT Loan financing is subject to credit approval by participating lenders and program availability. 
            Loan terms, interest rates, and program details are subject to change. Eligible improvements must be 
            recommended through a Mass Save® home energy assessment. Not all improvements may qualify for financing. 
            Econova is an independent contractor participating in Mass Save® programs and can assist with the 
            HEAT Loan application process.
          </p>
        </div>
      </Section>
    </ServicePage>
  );
}