import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Wall Insulation (Dense-Pack)',
  description: 'Dense-pack wall insulation for Massachusetts homes: drill-and-fill method, minimal disruption, professional patching.',
  slug: '/wall-insulation-dense-pack/',
});

export default function Page() {
  return (
    <ServicePage title="Dense-Pack Wall Insulation">
      <Section title="Why Wall Insulation Matters">
        <p>
          Many Massachusetts homes have uninsulated or under-insulated walls, leading to cold drafts, uneven temperatures,
          and higher heating costs. Dense-pack insulation fills wall cavities completely for year-round comfort.
        </p>
      </Section>

      <Section title="The Dense-Pack Method">
        <ul>
          <li>Small access holes drilled from exterior or interior (typically 2.5-3 inches)</li>
          <li>Cellulose or fiberglass blown at high density to eliminate settling</li>
          <li>Complete cavity fill verified through density testing</li>
          <li>Professional patching and finish work</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          This proven technique works in existing homes without major renovation disruption.
        </p>
      </Section>

      <Section title="Material Options">
        <ul>
          <li><strong>Dense-Pack Cellulose</strong> - Made from recycled paper; excellent air-sealing properties</li>
          <li><strong>Dense-Pack Fiberglass</strong> - Non-combustible; good for specific applications</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Material selection depends on wall construction, moisture conditions, and program requirements.
        </p>
      </Section>

      <Section title="Installation Process">
        <ul>
          <li>Site preparation and protection of work areas</li>
          <li>Strategic hole placement (typically every 16&quot; on center)</li>
          <li>Dense-pack installation with density verification</li>
          <li>Hole patching with matching materials</li>
          <li>Cleanup and final walkthrough</li>
        </ul>
      </Section>

      <Section title="What You Can Expect">
        <ul>
          <li>More consistent room temperatures throughout your home</li>
          <li>Reduced drafts and cold spots near exterior walls</li>
          <li>Lower heating and cooling costs</li>
          <li>Improved sound dampening between rooms</li>
        </ul>
      </Section>

      <Section title="Prep & Restoration">
        <ul>
          <li>Remove wall hangings and furniture from work areas</li>
          <li>We protect floors and adjacent surfaces</li>
          <li>Professional patching with primer application</li>
          <li>Paint touch-up by homeowner or included as scoped</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Most projects completed in 1-2 days with minimal disruption to daily routine.
        </p>
      </Section>

      <Section title="When to Consider Wall Insulation">
        <ul>
          <li>Home built before 1980 with little to no wall insulation</li>
          <li>Cold exterior walls and uneven room temperatures</li>
          <li>High heating bills despite adequate attic insulation</li>
          <li>Planning exterior siding or interior renovation work</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <p><strong>Will this make a mess inside my home?</strong> We use dust containment and protect all work areas. Some fine dust is normal but cleanup is included.</p>
        <p><strong>How do you match exterior siding?</strong> We source matching materials and stain/paint patches to blend seamlessly with existing siding.</p>
        <p><strong>Is dense-pack covered by Mass Save®?</strong> Often yes, for qualifying homes. We verify eligibility during your assessment.</p>
      </Section>
    </ServicePage>
  );
}

