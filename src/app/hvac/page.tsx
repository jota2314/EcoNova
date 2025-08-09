import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'HVAC (Heat Pumps & Mini-Splits)',
  description: 'High-efficiency heat pumps, mini-splits, and smart thermostats. Pair with insulation and air sealing for best results.',
  slug: '/hvac/',
});

export default function Page() {
  return (
    <ServicePage title="Heat Pumps & Mini-Splits">
      <Section title="Efficient Heating & Cooling">
        <p>Modern heat pumps deliver year-round comfort with excellent efficiency. We recommend proper envelope upgrades for best performance.</p>
      </Section>
      <Section title="Smart Controls">
        <p>Smart thermostats and zoning improve comfort and savings. Ask about available rebates.</p>
      </Section>
      <Section title="Next Steps">
        <p>Start with an energy assessment to right-size HVAC and document available rebates.</p>
      </Section>
    </ServicePage>
  );
}

