import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Wall Insulation (Dense-Pack)',
  description: 'Drill-and-fill dense-pack for existing homes: prep, install, and patch with minimal disruption.',
  slug: '/wall-insulation-dense-pack/',
});

export default function Page() {
  return (
    <ServicePage title="Dense-Pack Wall Insulation">
      <Section title="Best For Existing Homes">
        <p>Dense-pack cellulose or fiberglass is installed through small access holes and provides uniform coverage in wall cavities.</p>
      </Section>
      <Section title="Prep & Patch">
        <p>We protect work areas, remove outlet covers as needed, and patch holes after install. Paint touch-up by homeowner or as scoped.</p>
      </Section>
    </ServicePage>
  );
}

