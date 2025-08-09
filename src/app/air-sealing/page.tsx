import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Air Sealing',
  description: 'Professional air sealing for Massachusetts homes: blower-door testing, penetration sealing, and thermal envelope improvements.',
  slug: '/air-sealing/',
});

export default function Page() {
  return (
    <ServicePage title="Professional Air Sealing">
      <Section title="Why Air Sealing Matters">
        <p>
          Air leaks can account for 25-40% of heating and cooling costs in Massachusetts homes.
          Professional air sealing creates a more comfortable, efficient, and healthy indoor environment.
        </p>
        <ul className="mt-3">
          <li>Eliminate drafts and cold spots</li>
          <li>Reduce heating and cooling bills</li>
          <li>Improve indoor air quality</li>
          <li>Enhance insulation performance</li>
          <li>Prevent ice dams and moisture problems</li>
        </ul>
      </Section>

      <Section title="Where Homes Leak Most">
        <ul>
          <li><strong>Attic Areas</strong> - Top plates, penetrations, can lights, attic hatches</li>
          <li><strong>Basement/Foundation</strong> - Rim joists, sill plates, foundation cracks</li>
          <li><strong>Walls</strong> - Electrical outlets, plumbing penetrations, window/door frames</li>
          <li><strong>Mechanical Systems</strong> - Ductwork, furnace/water heater connections</li>
          <li><strong>Plumbing/Electrical</strong> - Chases, wire/pipe penetrations, service entrances</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          We use thermal imaging and blower-door testing to identify hidden air leaks.
        </p>
      </Section>

      <Section title="Our Air Sealing Process">
        <ol>
          <li><strong>Pre-Work Blower Door Test</strong> - Establish baseline air leakage rate</li>
          <li><strong>Visual & Thermal Inspection</strong> - Identify all major leakage points</li>
          <li><strong>Strategic Sealing</strong> - Focus on largest leaks first for maximum impact</li>
          <li><strong>Material Application</strong> - Caulk, foam, weatherstripping, gaskets as needed</li>
          <li><strong>Post-Work Testing</strong> - Verify improvements and document results</li>
        </ol>
      </Section>

      <Section title="Professional Materials & Methods">
        <ul>
          <li><strong>Expanding Foam</strong> - For larger gaps and irregular penetrations</li>
          <li><strong>Advanced Caulks</strong> - Long-lasting sealants for various applications</li>
          <li><strong>Weatherstripping</strong> - Doors, windows, and movable components</li>
          <li><strong>Gaskets & Barriers</strong> - Electrical boxes, attic hatches, access panels</li>
          <li><strong>Fire-Safe Materials</strong> - Code-compliant sealants around chimneys and flues</li>
        </ul>
      </Section>

      <Section title="Blower Door Testing">
        <p>
          We use calibrated blower-door equipment to measure your home&apos;s air leakage before and after work.
          This scientific approach ensures maximum efficiency and program compliance.
        </p>
        <ul className="mt-3">
          <li>Measures whole-house air changes per hour (ACH50)</li>
          <li>Identifies specific leak locations under controlled pressure</li>
          <li>Documents improvements for rebate program requirements</li>
          <li>Ensures balanced ventilation and indoor air quality</li>
        </ul>
      </Section>

      <Section title="Air Sealing Benefits">
        <ul>
          <li><strong>Immediate Comfort</strong> - Eliminate drafts and temperature variations</li>
          <li><strong>Energy Savings</strong> - Reduce heating/cooling bills by 10-30%</li>
          <li><strong>Enhanced Insulation</strong> - Prevent air from bypassing insulation</li>
          <li><strong>Moisture Control</strong> - Reduce condensation and ice dam risks</li>
          <li><strong>Air Quality</strong> - Less dust, pollen, and outdoor pollutants</li>
          <li><strong>HVAC Efficiency</strong> - Systems work less to maintain comfort</li>
        </ul>
      </Section>

      <Section title="Air Sealing Priority Areas">
        <ul>
          <li><strong>Attic Plane</strong> - Critical thermal boundary between living space and attic</li>
          <li><strong>Basement Ceiling</strong> - Rim joists and penetrations to living space</li>
          <li><strong>Mechanical Penetrations</strong> - Plumbing, electrical, and HVAC connections</li>
          <li><strong>Windows & Doors</strong> - Frames, sashes, and weatherstripping</li>
          <li><strong>Ductwork</strong> - Connections, joints, and register boots</li>
        </ul>
      </Section>

      <Section title="When to Focus on Air Sealing">
        <ul>
          <li>Before adding insulation (air sealing first maximizes effectiveness)</li>
          <li>Noticeable drafts, especially during windy weather</li>
          <li>Uneven room temperatures throughout the house</li>
          <li>High heating/cooling bills despite adequate insulation</li>
          <li>Dust, allergens, or outdoor odors entering the home</li>
          <li>Ice dams or condensation problems</li>
        </ul>
      </Section>

      <Section title="Mass Save® Air Sealing">
        <p>
          Air sealing is a priority measure in Mass Save® programs and often qualifies for significant rebates.
          We handle all program documentation and ensure work meets performance standards.
        </p>
        <ul className="mt-3">
          <li>No-cost air sealing for many eligible customers</li>
          <li>Required blower-door testing included</li>
          <li>Professional installation with guaranteed results</li>
          <li>Coordination with insulation improvements</li>
        </ul>
      </Section>

      <Section title="Safety & Code Compliance">
        <ul>
          <li>Maintain adequate ventilation for health and safety</li>
          <li>Preserve combustion air supply for gas appliances</li>
          <li>Use fire-rated materials around chimneys and flues</li>
          <li>Comply with Massachusetts building codes</li>
          <li>Document all work for program and permitting requirements</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <p><strong>Can you seal my house too tightly?</strong> We balance air sealing with proper ventilation to maintain healthy indoor air quality.</p>
        <p><strong>How long does air sealing take?</strong> Most single-family homes take 1 full day, including testing.</p>
        <p><strong>Will air sealing help with allergies?</strong> Yes, by reducing infiltration of outdoor allergens and dust.</p>
        <p><strong>Do you guarantee your air sealing work?</strong> Yes, we guarantee measurable improvement verified by blower-door testing.</p>
      </Section>

      <Section title="Ready to Stop Air Leaks?">
        <p>
          Professional air sealing is one of the most cost-effective energy improvements you can make.
          Contact us to schedule your assessment and start saving immediately.
        </p>
      </Section>
    </ServicePage>
  );
}

