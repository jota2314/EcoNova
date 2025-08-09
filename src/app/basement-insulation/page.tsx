import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Basement / Rim Joist Insulation',
  description: 'Basement insulation for Massachusetts homes: rim joist sealing, foundation walls, moisture management, and code compliance.',
  slug: '/basement-insulation/',
});

export default function Page() {
  return (
    <ServicePage title="Basement & Rim Joist Insulation">
      <Section title="Why Basements Matter">
        <p>
          Uninsulated basements in Massachusetts homes lose significant heat through rim joists, foundation walls,
          and floor framing. Proper basement insulation improves comfort upstairs and reduces heating costs.
        </p>
        <ul className="mt-3">
          <li>Eliminate cold floors in rooms above the basement</li>
          <li>Prevent frozen pipes and ice dams</li>
          <li>Create more usable basement space</li>
          <li>Reduce overall heating and cooling costs</li>
        </ul>
      </Section>

      <Section title="Rim/Band Joist Priority">
        <p>
          The rim joist is where floor framing meets the foundation—a critical area for air leakage and heat loss.
          This is often the most cost-effective basement improvement.
        </p>
        <ul className="mt-3">
          <li><strong>Air Sealing First</strong> - Seal gaps between rim joist and foundation</li>
          <li><strong>Insulation Installation</strong> - Rigid foam or spray foam application</li>
          <li><strong>Penetration Sealing</strong> - Address electrical, plumbing, and HVAC penetrations</li>
          <li><strong>Code Compliance</strong> - Maintain clearances around combustion equipment</li>
        </ul>
      </Section>

      <Section title="Material Options">
        <ul>
          <li><strong>Spray Foam</strong> - Excellent air sealing; fills irregular spaces perfectly</li>
          <li><strong>Rigid Foam Board</strong> - Cost-effective; good for flat, regular surfaces</li>
          <li><strong>Batt Insulation + Sealant</strong> - Budget option when properly air sealed</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Material selection depends on basement conditions, moisture levels, and budget considerations.
        </p>
      </Section>

      <Section title="Foundation Wall Insulation">
        <ul>
          <li><strong>Interior Approach</strong> - Rigid foam or framed walls with batts</li>
          <li><strong>Partial vs Full Height</strong> - Upper 4 feet often most cost-effective</li>
          <li><strong>Moisture Management</strong> - Vapor barriers and drainage considerations</li>
          <li><strong>Finished vs Unfinished</strong> - Different strategies for each scenario</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Foundation wall work requires careful moisture assessment and code compliance.
        </p>
      </Section>

      <Section title="Moisture & Safety Considerations">
        <ul>
          <li>Pre-work moisture inspection and documentation</li>
          <li>Proper vapor barrier placement to prevent condensation</li>
          <li>Combustion safety clearances around furnaces and water heaters</li>
          <li>Adequate ventilation for gas appliances</li>
          <li>Drainage and waterproofing recommendations when needed</li>
        </ul>
      </Section>

      <Section title="Installation Process">
        <ol>
          <li><strong>Assessment & Planning</strong> - Moisture inspection, measurements, material selection</li>
          <li><strong>Prep Work</strong> - Clear work areas, protect stored items</li>
          <li><strong>Air Sealing</strong> - Seal all penetrations and gaps first</li>
          <li><strong>Insulation Installation</strong> - Professional application with proper coverage</li>
          <li><strong>Final Inspection</strong> - Code compliance check and quality verification</li>
        </ol>
      </Section>

      <Section title="What You Can Expect">
        <ul>
          <li>Warmer floors in rooms above the basement</li>
          <li>More comfortable basement temperature year-round</li>
          <li>Reduced condensation and moisture issues</li>
          <li>Lower heating bills and improved system efficiency</li>
          <li>Better indoor air quality from reduced air leakage</li>
        </ul>
      </Section>

      <Section title="When to Insulate Your Basement">
        <ul>
          <li>Cold floors above basement or crawl space</li>
          <li>High heating costs despite attic insulation</li>
          <li>Basement renovation or finishing project planned</li>
          <li>Frozen pipes or ice dam problems</li>
          <li>Musty odors or excess humidity in basement</li>
        </ul>
      </Section>

      <Section title="Mass Save® Coverage">
        <p>
          Rim joist insulation is typically covered by Mass Save® programs for eligible customers.
          Foundation wall insulation may qualify depending on specific program requirements and home conditions.
        </p>
        <p className="mt-3 text-sm opacity-80">
          We verify coverage during your assessment and handle all program paperwork.
        </p>
      </Section>

      <Section title="FAQs">
        <p><strong>Will insulating my basement cause moisture problems?</strong> No, when done correctly with proper vapor barriers and ventilation.</p>
        <p><strong>Can I finish my basement after insulation?</strong> Yes, proper insulation actually makes basement finishing more comfortable.</p>
        <p><strong>How long does basement insulation take?</strong> Rim joist work typically takes 1 day; full basement insulation may take 2-3 days.</p>
        <p><strong>Do you work around stored items?</strong> We work around items when possible, but clear access improves quality and efficiency.</p>
      </Section>
    </ServicePage>
  );
}

