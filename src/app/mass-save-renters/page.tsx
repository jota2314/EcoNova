import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® Home Energy Assessments for Renters',
  description: 'Massachusetts renters can save money and improve comfort with Mass Save® energy assessments. Get rebates, reduce bills, and encourage energy efficiency upgrades in your rental.',
  slug: '/mass-save-renters/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Home Energy Assessments for Renters">
      <Section title="Save Money and Improve Comfort in Your Rental">
        <p>
          Even as a renter, you can take advantage of Massachusetts energy efficiency programs to reduce your 
          energy bills, improve home comfort, and encourage your landlord to make energy-saving upgrades. 
          Econova helps renters navigate Mass Save® programs and access valuable incentives for a more 
          comfortable, efficient living space.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">Benefits for Renters:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-emerald-700">
              <li>• Solve comfort issues: cold floors, hot bedrooms, drafts</li>
              <li>• Reduce monthly energy bills immediately</li>
              <li>• Access to free energy-saving products</li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• No-cost online and in-person assessments</li>
              <li>• Help landlords access rebates for major upgrades</li>
              <li>• Improve your rental's energy efficiency rating</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Key Benefits for Rental Properties">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Improve Comfort</h4>
            <p className="text-sm text-gray-600">Solve problems like cold floors, hot bedrooms, and uncomfortable drafts</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Energy Efficiency</h4>
            <p className="text-sm text-gray-600">Save energy and reduce your rental's carbon footprint</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 2L3 7V9H21ZM21 10H3V15H7V13H17V15H21V10Z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Lower Energy Bills</h4>
            <p className="text-sm text-gray-600">Reduce heating and cooling costs with efficiency improvements</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Rebates & Incentives</h4>
            <p className="text-sm text-gray-600">Access rebates for energy-saving products and upgrades</p>
          </div>
        </div>
      </Section>

      <Section title="Assessment Options for Renters">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">No-Cost Online Home Energy Assessment</h4>
                <p className="text-blue-600">Perfect for renters who want to start saving immediately</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li>• Customized energy efficiency report for your rental</li>
                <li>• Learn about energy-saving appliances and products</li>
                <li>• Tips for reducing energy waste</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li>• Identify opportunities for immediate savings</li>
                <li>• Understand your rental's energy performance</li>
                <li>• No landlord permission required</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-800">In-Person Assessment (with Landlord Cooperation)</h4>
                <p className="text-emerald-600">Maximum savings potential for your rental property</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-emerald-700">
                <li>• Comprehensive whole-home evaluation</li>
                <li>• Blower-door testing and thermal imaging</li>
                <li>• Instant energy-saving products installed</li>
              </ul>
              <ul className="space-y-2 text-emerald-700">
                <li>• Detailed rebate opportunities for landlord</li>
                <li>• Professional recommendations for major upgrades</li>
                <li>• Post-assessment support and guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Landlord Collaboration Opportunities">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h4 className="font-bold text-orange-800 mb-4">Encourage Your Landlord to Participate</h4>
          <p className="text-orange-700 mb-6">
            Help your landlord understand the significant benefits of Mass Save® programs. Many property owners 
            are unaware of the substantial rebates available for energy efficiency improvements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">Potential Improvements for Landlords:</h5>
              <ul className="space-y-2 text-orange-600">
                <li>• <strong>Insulation upgrades</strong> - Up to 100% covered by rebates</li>
                <li>• <strong>Heating & cooling rebates</strong> - Up to $16,000 available</li>
                <li>• <strong>Air sealing improvements</strong> - Often no-cost for qualified homes</li>
                <li>• <strong>Window replacement</strong> - Significant rebates available</li>
                <li>• <strong>Energy-efficient appliances</strong> - Multiple rebate programs</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">Benefits for Property Owners:</h5>
              <ul className="space-y-2 text-orange-600">
                <li>• Increased property value</li>
                <li>• Reduced tenant turnover</li>
                <li>• Lower maintenance costs</li>
                <li>• Improved tenant satisfaction</li>
                <li>• Compliance with energy efficiency standards</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-white/70 rounded-lg p-4">
            <p className="text-orange-700 font-medium">
              <strong>How to approach your landlord:</strong> Share information about Mass Save® rebates and 
              suggest a no-cost assessment. Many landlords are receptive when they understand the financial benefits.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Immediate Benefits for Renters">
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <h5 className="font-bold text-emerald-800 mb-3">Free Energy-Saving Products</h5>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li>• LED light bulbs</li>
                <li>• Low-flow showerheads</li>
                <li>• Faucet aerators</li>
                <li>• Weather-stripping</li>
                <li>• Smart power strips</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h5 className="font-bold text-blue-800 mb-3">Comfort Improvements</h5>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Reduced drafts and cold spots</li>
                <li>• More consistent temperatures</li>
                <li>• Better indoor air quality</li>
                <li>• Quieter living environment</li>
                <li>• Improved humidity control</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <h5 className="font-bold text-purple-800 mb-3">Bill Savings</h5>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Lower monthly energy costs</li>
                <li>• Reduced heating and cooling bills</li>
                <li>• Energy-efficient appliance rebates</li>
                <li>• Long-term savings potential</li>
                <li>• Budget predictability</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Assessment Process for Renters">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Contact Econova</h5>
            <p className="text-xs text-gray-600">Discuss your rental situation and assessment options</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Choose Assessment Type</h5>
            <p className="text-xs text-gray-600">Online assessment or work with landlord for in-person visit</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Receive Report</h5>
            <p className="text-xs text-gray-600">Get customized recommendations and rebate information</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-red-50 rounded-xl border border-orange-200">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">4</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Implement Solutions</h5>
            <p className="text-xs text-gray-600">Start with immediate improvements you can control</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">5</span>
            </div>
            <h5 className="font-bold text-gray-900 text-sm mb-1">Enjoy Savings</h5>
            <p className="text-xs text-gray-600">Benefit from reduced bills and improved comfort</p>
          </div>
        </div>
      </Section>

      <Section title="What Makes Econova Different for Renters">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Local Expertise</h4>
            <p className="text-gray-600">Deep understanding of Massachusetts rental market and energy programs</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Seamless Process</h4>
            <p className="text-gray-600">We make it easy for both renters and landlords to participate</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Trusted & Local</h4>
            <p className="text-gray-600">Hundreds of satisfied customers across Massachusetts</p>
          </div>
        </div>
      </Section>

      <Section title="Frequently Asked Questions for Renters">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Do I need my landlord's permission for an assessment?</h4>
            <p className="text-gray-700">For online assessments, no permission is needed. For in-person assessments with major upgrade opportunities, landlord cooperation is required and beneficial.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What if my landlord isn't interested in energy upgrades?</h4>
            <p className="text-gray-700">You can still benefit from online assessments, energy-saving tips, and products that don't require property modifications. We can also help you approach your landlord with compelling information about rebate programs.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can I get rebates directly as a renter?</h4>
            <p className="text-gray-700">Some rebates for appliances and products may be available to renters. Major structural improvements typically require property owner participation, but the savings benefit you as the tenant.</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How much can I save on my energy bills?</h4>
            <p className="text-gray-700">Savings vary by property condition and implemented measures. Even simple changes can reduce bills by 10-15%, while comprehensive upgrades can save 30% or more on energy costs.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What if I move to a different rental?</h4>
            <p className="text-gray-700">Energy-saving habits and knowledge travel with you. Many portable efficiency products can be taken to your new rental, and you'll know how to evaluate energy performance in future homes.</p>
          </div>
        </div>
      </Section>

      <Section title="Ready to Start Saving in Your Rental?">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Get Your No-Cost Energy Assessment Today</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're looking for an online assessment or want to work with your landlord on major upgrades, 
            Econova can help you save money and improve comfort in your rental property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="tel:+17817324817" className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              Call (781) 732-4817
            </a>
            <a href="/energy-assessment/" className="flex-1 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Start Assessment
            </a>
          </div>
        </div>
      </Section>

      <Section title="Program Information">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            Mass Save® programs are available to eligible Massachusetts residents, including renters. 
            Some programs may require property owner participation. Information may be shared with 
            Mass Save® sponsors and vendors to facilitate program delivery. Econova is an independent 
            contractor participating in Mass Save® programs.
          </p>
        </div>
      </Section>
    </ServicePage>
  );
}