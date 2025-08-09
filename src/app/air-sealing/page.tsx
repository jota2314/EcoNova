import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Air Sealing',
  description: 'Typical leakage points, blower-door logic, and sealing strategies prior to insulation.',
  slug: '/air-sealing/',
});

export default function Page() {
  return (
    <ServicePage title="Professional Air Sealing">
      <Section title="Where Homes Leak">
        <ul>
          <li>Rim/band joists and sill plates</li>
          <li>Top plates, can lights, chases, and bath fan penetrations</li>
          <li>Attic hatches, duct boots, and plumbing/electrical penetrations</li>
        </ul>
      </Section>
      <Section title="Test-In, Test-Out">
        <p>When applicable, blower-door testing quantifies leakage reduction and documents results for program compliance.</p>
      </Section>
    </ServicePage>
  );
}

