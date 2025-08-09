import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Basement / Rim Joist Insulation',
  description: 'Rim/band joist sealing, rigid board vs spray foam, and moisture considerations for basements in MA.',
  slug: '/basement-insulation/',
});

export default function Page() {
  return (
    <ServicePage title="Basement & Rim Joist Insulation">
      <Section title="Rim/Band Joist Sealing">
        <p>Critical leakage line where framing meets the foundation. We air seal and insulate for comfort and efficiency.</p>
      </Section>
      <Section title="Rigid vs Spray Foam">
        <p>Material choice depends on moisture, access, and code. We recommend rigid foam with sealed seams where appropriate.</p>
      </Section>
      <Section title="Moisture & Safety">
        <p>We inspect for moisture and combustion safety before work and document the final results.</p>
      </Section>
    </ServicePage>
  );
}

