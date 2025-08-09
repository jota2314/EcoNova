import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'No-Cost Home Energy Assessment',
  description: 'Professional home energy assessment in Massachusetts: blower-door testing, thermal imaging, rebate qualification, and savings analysis.',
  slug: '/energy-assessment/',
});

export default function Page() {
  return (
    <ServicePage title="No-Cost Home Energy Assessment">
      <Section title="Why Get an Energy Assessment?">
        <p>
          Our comprehensive assessment identifies exactly where your home loses energy and money.
          You'll receive a detailed report with prioritized recommendations and guaranteed savings projections.
        </p>
        <ul className="mt-3">
          <li>Pinpoint air leaks and insulation gaps</li>
          <li>Quantify potential energy savings</li>
          <li>Determine Mass Save® rebate eligibility</li>
          <li>Get a custom improvement plan</li>
        </ul>
      </Section>

      <Section title="What We Test & Inspect">
        <ul>
          <li><strong>Blower-Door Test</strong> - Measures whole-house air leakage (when applicable)</li>
          <li><strong>Thermal Imaging</strong> - Reveals hidden insulation gaps and air leaks</li>
          <li><strong>Insulation Levels</strong> - Check R-values in attic, walls, and basement</li>
          <li><strong>HVAC System</strong> - Evaluate efficiency and ductwork condition</li>
          <li><strong>Air Sealing Opportunities</strong> - Identify rim joists, penetrations, and bypasses</li>
          <li><strong>Safety Inspection</strong> - Check for combustion safety and moisture issues</li>
        </ul>
      </Section>

      <Section title="The Assessment Process">
        <ol>
          <li><strong>Pre-Visit (15 minutes)</strong> - Phone call to confirm eligibility and appointment details</li>
          <li><strong>Exterior Walkthrough (15 minutes)</strong> - Examine building envelope, siding, windows</li>
          <li><strong>Interior Assessment (45-90 minutes)</strong> - Detailed inspection of all areas</li>
          <li><strong>Blower-Door Testing (20 minutes)</strong> - When applicable for program compliance</li>
          <li><strong>Results Review (15 minutes)</strong> - Discuss findings and next steps</li>
        </ol>
        <p className="mt-3 text-sm opacity-80">
          Total visit time: 90-120 minutes for most single-family homes.
        </p>
      </Section>

      <Section title="What You'll Receive">
        <ul>
          <li>Detailed assessment report with photos and measurements</li>
          <li>Prioritized list of recommended improvements</li>
          <li>Estimated costs and potential savings for each measure</li>
          <li>Mass Save® rebate calculations (when eligible)</li>
          <li>Custom project timeline and financing options</li>
        </ul>
      </Section>

      <Section title="Prepare for Your Assessment">
        <ul>
          <li>Clear access to attic hatch, basement, and utility areas</li>
          <li>Secure pets in a separate room during the visit</li>
          <li>List any comfort issues: cold rooms, drafts, high bills</li>
          <li>Gather recent utility bills if available</li>
          <li>Plan to be home for the entire assessment</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          We'll provide shoe covers and work respectfully in your home.
        </p>
      </Section>

      <Section title="Who Qualifies for No-Cost Assessment?">
        <ul>
          <li>Single-family homes and condos (some townhomes qualify)</li>
          <li>Customers of participating Massachusetts utilities</li>
          <li>Properties that haven't received recent energy upgrades</li>
          <li>Owner-occupied or rental properties (with owner permission)</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Eligibility varies by utility and program. We verify qualification before scheduling.
        </p>
      </Section>

      <Section title="After Your Assessment">
        <ul>
          <li>Review your custom savings plan and rebate options</li>
          <li>Schedule any recommended improvements at your convenience</li>
          <li>We handle all Mass Save® paperwork and program documentation</li>
          <li>Post-installation testing confirms the work meets program standards</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <p><strong>How much does the assessment cost?</strong> $0 for eligible customers through Mass Save® programs.</p>
        <p><strong>Are you trying to sell me something?</strong> We provide honest recommendations. There's no pressure to proceed with any work.</p>
        <p><strong>How soon can I get an assessment?</strong> Most assessments can be scheduled within 1-2 weeks.</p>
        <p><strong>What if I'm not eligible for rebates?</strong> We still provide the full assessment and can discuss other financing options.</p>
      </Section>

      <Section title="Ready to Schedule?">
        <p>
          Call <strong>(833) 363-7442</strong> or use our online scheduling system to book your no-cost assessment.
          We'll confirm your eligibility and answer any questions before your visit.
        </p>
      </Section>
    </ServicePage>
  );
}

