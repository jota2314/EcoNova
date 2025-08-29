import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® FAQs - Frequently Asked Questions About Energy Rebates',
  description: 'Get answers to common questions about Mass Save® program rebates, home energy assessments, eligibility requirements, and energy efficiency incentives in Massachusetts.',
  slug: '/mass-save-faqs/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Frequently Asked Questions">
      <Section title="Everything You Need to Know About Mass Save®">
        <p>
          Get answers to the most commonly asked questions about Massachusetts' premier energy efficiency program. 
          Whether you're curious about rebates, home energy assessments, eligibility requirements, or the application 
          process, we've compiled comprehensive answers to help you understand how Mass Save® can benefit your home and wallet.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
          <h4 className="text-lg font-bold text-emerald-800 mb-3">Quick Navigation:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <ul className="space-y-2 text-emerald-700">
              <li>• <a href="#program-overview" className="hover:underline">Program Overview</a></li>
              <li>• <a href="#assessments" className="hover:underline">Home Energy Assessments</a></li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• <a href="#rebates" className="hover:underline">Rebates & Incentives</a></li>
              <li>• <a href="#eligibility" className="hover:underline">Eligibility Requirements</a></li>
            </ul>
            <ul className="space-y-2 text-emerald-700">
              <li>• <a href="#financing" className="hover:underline">Financing Options</a></li>
              <li>• <a href="#contractors" className="hover:underline">Working with Contractors</a></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Program Overview" id="program-overview">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What is Mass Save®?</h4>
            <p className="text-gray-700 mb-2">
              Mass Save® is a collaborative initiative by Massachusetts' electric and natural gas utilities that promotes 
              energy efficiency services for residents, renters, landlords, and businesses. The program offers no-cost 
              home energy assessments, substantial rebates, and zero-interest financing to help reduce energy consumption 
              and lower utility bills.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Participating Utilities:</strong> Eversource, National Grid, Unitil, Berkshire Gas, Cape Light Compact, and Liberty Utilities
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Who funds Mass Save®?</h4>
            <p className="text-gray-700">
              Mass Save® is funded through energy efficiency charges that appear on customers' monthly gas and electric bills. 
              These small charges, which Massachusetts residents already pay, fund the no-cost assessments, rebates, and 
              incentives offered through the program. Essentially, you've already contributed to funding these benefits.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Who qualifies for Mass Save® programs?</h4>
            <p className="text-gray-700">
              Massachusetts homeowners, renters, landlords, and businesses who are customers of participating utility companies 
              qualify for various Mass Save® programs. Some rebates may have additional requirements based on household income, 
              property type, or previous participation in energy efficiency programs.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How long has Mass Save® been around?</h4>
            <p className="text-gray-700">
              Mass Save® was launched in 2009 as part of Massachusetts' commitment to energy efficiency and carbon reduction. 
              The program has evolved over the years, expanding rebates, adding new technologies like heat pumps, and 
              introducing innovative financing options like the zero-interest HEAT Loan.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Home Energy Assessments" id="assessments">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What is a Mass Save® Home Energy Assessment?</h4>
            <p className="text-gray-700">
              A comprehensive evaluation of your home's energy efficiency conducted by BPI-certified professionals. The 
              assessment identifies energy-saving opportunities, provides personalized upgrade recommendations, and determines 
              your eligibility for rebates and incentives. The process includes blower-door testing, thermal imaging, 
              and installation of immediate energy-saving products.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How much does a home energy assessment cost?</h4>
            <p className="text-gray-700">
              The comprehensive home energy assessment is completely no cost for eligible Massachusetts residents. The assessment 
              is funded by energy efficiency charges that you already pay on your utility bills, so there's no additional 
              cost to schedule and receive this valuable service.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How long does an assessment take?</h4>
            <p className="text-gray-700">
              A typical home energy assessment takes 90-120 minutes for most single-family homes. Larger homes or properties 
              with complex systems may require additional time. The assessment includes exterior and interior evaluation, 
              testing, installation of energy-saving products, and a detailed review of findings and recommendations.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What do I receive during the assessment?</h4>
            <p className="text-gray-700 mb-2">
              During your assessment, you'll receive no cost installation of immediate energy-saving products, including:
            </p>
            <ul className="text-gray-600 text-sm ml-4 space-y-1">
              <li>• Energy-efficient LED light bulbs</li>
              <li>• Low-flow showerheads and faucet aerators</li>
              <li>• Weather-stripping for doors and windows</li>
              <li>• Smart power strips to reduce phantom loads</li>
              <li>• Programmable thermostat (when applicable)</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can renters get assessments?</h4>
            <p className="text-gray-700">
              Yes! Renters can access online energy assessments without landlord permission. For in-person assessments 
              with major upgrade opportunities, landlord cooperation is beneficial but we can help you approach property 
              owners with information about available rebates and the value of energy efficiency improvements.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Rebates & Incentives" id="rebates">
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-emerald-800 mb-3">2025 Mass Save® Rebate Highlights</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-emerald-700">
                <li>• <strong>75-100% off</strong> insulation upgrades</li>
                <li>• <strong>No-cost</strong> air sealing for qualified homes</li>
                <li>• <strong>Up to $16,000</strong> heat pump rebates</li>
                <li>• <strong>$750</strong> heat pump water heater rebate</li>
              </ul>
              <ul className="space-y-2 text-emerald-700">
                <li>• <strong>$75 per window</strong> ENERGY STAR window rebates</li>
                <li>• <strong>$100</strong> smart thermostat rebates</li>
                <li>• <strong>$150</strong> ENERGY STAR appliance rebates</li>
                <li>• <strong>0% interest</strong> HEAT Loan up to $25,000</li>
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What types of improvements qualify for rebates?</h4>
            <p className="text-gray-700 mb-2">
              Mass Save® offers rebates for a wide range of energy efficiency improvements:
            </p>
            <ul className="text-gray-600 text-sm ml-4 space-y-1">
              <li>• <strong>Insulation:</strong> Attic, wall, basement, and rim joist insulation</li>
              <li>• <strong>Air Sealing:</strong> Comprehensive whole-house air sealing</li>
              <li>• <strong>Heating/Cooling:</strong> Heat pumps, high-efficiency boilers, and smart thermostats</li>
              <li>• <strong>Water Heating:</strong> Heat pump water heaters and high-efficiency systems</li>
              <li>• <strong>Windows:</strong> ENERGY STAR certified replacement windows</li>
              <li>• <strong>Appliances:</strong> ENERGY STAR refrigerators, washers, and dryers</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Are there rebates for gas, oil, or propane equipment?</h4>
            <p className="text-gray-700">
              Mass Save® focuses on electric and renewable energy technologies. Traditional gas, oil, and propane heating 
              equipment typically do not qualify for rebates. However, there are substantial incentives for transitioning 
              to electric heat pumps, which can provide both heating and cooling while significantly reducing energy costs.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can I combine Mass Save® rebates with federal tax credits?</h4>
            <p className="text-gray-700">
              Yes! Mass Save® rebates can often be combined with federal tax credits, state incentives, and utility-specific 
              programs to maximize your total savings. For example, heat pump installations may qualify for both Mass Save® 
              rebates and federal tax credits of up to 30% of the project cost.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How are rebates processed and paid?</h4>
            <p className="text-gray-700">
              Rebates are typically processed as instant discounts at the time of installation when you work with Mass Save® 
              participating contractors like Econova. We handle all rebate paperwork and applications, so you see the 
              reduced price immediately rather than waiting for reimbursement checks.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Eligibility Requirements" id="eligibility">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What makes a home eligible for Mass Save® programs?</h4>
            <p className="text-gray-700 mb-2">
              To qualify for Mass Save® residential programs, you must meet these basic requirements:
            </p>
            <ul className="text-gray-600 text-sm ml-4 space-y-1">
              <li>• Be a customer of a participating Massachusetts utility</li>
              <li>• Live in a one to four-unit residential property</li>
              <li>• Have not received similar energy upgrades recently</li>
              <li>• Complete a home energy assessment before rebate eligibility</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Are income limits required for Mass Save® rebates?</h4>
            <p className="text-gray-700">
              Most Mass Save® rebates are available to all eligible customers regardless of income. However, some enhanced 
              rebates and additional programs may have income qualifications that provide even greater savings for 
              low-to-moderate income households. We can help determine all programs you qualify for during your assessment.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Can I participate if I've had energy work done before?</h4>
            <p className="text-gray-700">
              Previous participation in energy efficiency programs may affect eligibility for certain rebates, but doesn't 
              disqualify you entirely. We review your home's history during the assessment and identify any remaining 
              qualifying improvements. Many homes can benefit from multiple phases of efficiency upgrades over time.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Do condos and townhomes qualify?</h4>
            <p className="text-gray-700">
              Yes, many condos and townhomes qualify for Mass Save® programs, though the specific improvements available 
              may vary based on what systems you control versus what the condo association manages. We can evaluate your 
              specific situation and identify eligible improvements during the assessment.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Financing Options" id="financing">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What is the HEAT Loan program?</h4>
            <p className="text-gray-700">
              The HEAT (Home Energy Assessment and Transformation) Loan provides up to $25,000 in zero-interest financing 
              for qualifying energy efficiency improvements. This innovative program allows you to finance the remaining 
              costs after rebates with no interest charges, making comprehensive energy upgrades accessible to more homeowners.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Is the 0% interest rate permanent?</h4>
            <p className="text-gray-700">
              Yes, the HEAT Loan offers true 0% interest for the entire loan term. There are no introductory rates, 
              promotional periods, or interest rate increases over time. You pay back exactly what you borrow with 
              no additional interest charges.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What credit score is needed for HEAT Loan approval?</h4>
            <p className="text-gray-700">
              Credit requirements vary by participating lender, but the HEAT Loan program is designed to be accessible 
              to homeowners with fair to excellent credit. The exact requirements depend on the lender, loan amount, 
              and other factors. We can help you understand your options during the assessment process.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Are there other financing options available?</h4>
            <p className="text-gray-700">
              Beyond the HEAT Loan, many contractors offer additional financing options for energy efficiency improvements. 
              These may include traditional loans, equipment financing, or lease programs. We can help you compare all 
              available options to find the best solution for your budget and project needs.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Working with Contractors" id="contractors">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Do I have to use a Mass Save® participating contractor?</h4>
            <p className="text-gray-700">
              To receive Mass Save® rebates and participate in programs like the HEAT Loan, you must work with approved 
              Mass Save® participating contractors. These contractors are certified, trained on program requirements, 
              and can process rebates as instant discounts rather than requiring you to wait for reimbursement.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How do I choose the right Mass Save® contractor?</h4>
            <p className="text-gray-700 mb-2">
              When selecting a Mass Save® contractor, consider these key factors:
            </p>
            <ul className="text-gray-600 text-sm ml-4 space-y-1">
              <li>• Years of experience with energy efficiency projects</li>
              <li>• BPI and other relevant certifications</li>
              <li>• Customer reviews and testimonials</li>
              <li>• Range of services offered under one roof</li>
              <li>• Quality of customer service and communication</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">Will contractors handle the rebate paperwork?</h4>
            <p className="text-gray-700">
              Yes, experienced Mass Save® contractors like Econova handle all rebate paperwork, applications, and processing 
              on your behalf. This means you receive instant discounts at the time of installation rather than having to 
              apply for rebates yourself and wait for reimbursement checks.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What qualifications should I look for in a contractor?</h4>
            <p className="text-gray-700">
              Look for contractors who are BPI (Building Performance Institute) certified, have Mass Save® approval, 
              carry proper insurance and licensing, and have a proven track record with energy efficiency projects. 
              The best contractors offer comprehensive services, transparent communication, and guarantees on their work.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Getting Started">
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What's the first step to participate in Mass Save®?</h4>
            <p className="text-gray-700">
              The first step is scheduling a no-cost home energy assessment with a Mass Save® participating contractor. 
              This comprehensive evaluation determines your eligibility for various rebates, identifies the most 
              cost-effective improvements for your home, and provides the foundation for all other Mass Save® programs.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">How quickly can I schedule an assessment?</h4>
            <p className="text-gray-700">
              Most assessments can be scheduled within 1-2 weeks of your initial contact. We offer flexible scheduling 
              including evenings and weekends to accommodate your schedule. During peak seasons, there may be slightly 
              longer wait times, but we work efficiently to serve all customers promptly.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What should I do to prepare for my assessment?</h4>
            <p className="text-gray-700 mb-2">
              To prepare for your assessment:
            </p>
            <ul className="text-gray-600 text-sm ml-4 space-y-1">
              <li>• Clear access to attic hatch, basement, and utility areas</li>
              <li>• Gather recent utility bills (12 months if available)</li>
              <li>• Note any comfort issues like drafts or temperature variations</li>
              <li>• Secure pets in a separate room during the visit</li>
              <li>• Plan to be present for the entire assessment</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h4 className="font-bold text-gray-900 mb-2">What happens after my assessment?</h4>
            <p className="text-gray-700">
              After your assessment, you'll receive a detailed report with personalized recommendations, rebate calculations, 
              and energy savings projections. There's no pressure to proceed immediately. You can review your options, 
              ask questions, and move forward with improvements when you're ready. We provide ongoing support throughout 
              the decision-making process.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Ready to Get Started with Mass Save®?">
        <div className="text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your No-Cost Assessment Today</h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to discover how Mass Save® can benefit your home? Contact Econova to schedule your comprehensive 
            no-cost energy assessment and get personalized answers to all your questions about rebates, financing, 
            and energy efficiency improvements.
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

      <Section title="Program Information">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            Mass Save® programs, rebates, and incentives are subject to change and fund availability. Complete program 
            details and current rebate amounts are available at MassSave.com. Information on this page is current as 
            of 2025 but should be verified during your energy assessment. Econova is an independent contractor 
            participating in Mass Save® programs.
          </p>
        </div>
      </Section>
    </ServicePage>
  );
}