import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Attic Insulation',
  description: 'Benefits, recommended R-values for MA climate, cellulose vs fiberglass, and why air sealing comes first.',
  slug: '/attic-insulation/',
});

export default function Page() {
  return (
    <ServicePage title="Attic Insulation in Massachusetts">
      <Section title="Why It Matters">
        <p>Attics are the largest source of heat loss. Air sealing combined with high R-value insulation drives comfort and savings.</p>
      </Section>
      <Section title="Recommended R-Values">
        <p>Massachusetts climate zones generally target R-49 to R-60 in attics. Existing levels and framing depth guide the final spec.</p>
      </Section>
      <Section title="Material Options">
        <p>Cellulose vs fiberglass: both are effective when installed properly. We recommend dense coverage after thorough air sealing.</p>
      </Section>
    </ServicePage>
  );
}

