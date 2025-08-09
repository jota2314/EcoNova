import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Attic Insulation',
  description: 'Attic insulation and air sealing for Massachusetts homes: proper R-values, materials, and results.',
  slug: '/attic-insulation/',
});

export default function Page() {
  return (
    <ServicePage title="Attic Insulation in Massachusetts">
      <Section title="Why Your Attic First">
        <p>
          In MA homes, most heat loss escapes at the top of the house. Addressing the attic with
          air sealing first, then insulation, delivers the biggest comfort and efficiency gains.
        </p>
      </Section>

      <Section title="Recommended R-Values (MA Climate)">
        <ul>
          <li>Existing attic top-up: target R-49 to R-60 where feasible</li>
          <li>Knee walls & hatches: insulate and weather-strip to reduce bypasses</li>
          <li>Bath/kitchen fans: seal and duct to exterior</li>
        </ul>
      </Section>

      <Section title="Air Sealing Comes First">
        <p>
          We seal penetrations, top plates, chases, and can lights (as applicable) before adding insulation.
          This prevents warm, moist air from leaking into the attic and undermining performance.
        </p>
      </Section>

      <Section title="Materials & Methods">
        <ul>
          <li><strong>Blown-in cellulose</strong> for most open attics (high coverage, good density)</li>
          <li><strong>Fiberglass</strong> where specified or to match existing systems</li>
          <li><strong>Rigid foam</strong> for hatches and transition details</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Material selection depends on existing conditions, code, and program requirements.
        </p>
      </Section>

      <Section title="What You Can Expect">
        <ul>
          <li>Cleaner, more even temperatures room-to-room</li>
          <li>Less ice dam risk due to reduced heat escape</li>
          <li>Documented post-work results (blower-door when applicable)</li>
        </ul>
      </Section>

      <Section title="Prep & Timeline">
        <ul>
          <li>Clear access to attic hatch; remove fragile items from below</li>
          <li>Typical install: 1 day for most single-family homes</li>
          <li>We clean work areas and leave documentation of measures installed</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <p><strong>Will this make rooms less drafty?</strong> Yes—air sealing combined with insulation reduces stack-effect drafts.</p>
        <p><strong>Do you cover recessed lights?</strong> We use code-compliant methods and only where fixtures allow.</p>
      </Section>
    </ServicePage>
  );
}
