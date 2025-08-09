import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'No-Cost Home Energy Assessment',
  description: 'What to expect from Econova’s home energy assessment in Massachusetts: eligibility, prep list, and booking.',
  slug: '/energy-assessment/',
});

export default function Page() {
  return (
    <ServicePage title="No-Cost Home Energy Assessment">
      <Section title="What to Expect">
        <ul>
          <li>Eligibility check and appointment scheduling</li>
          <li>Assessment walkthrough; blower-door testing when applicable</li>
          <li>Scope for air sealing and insulation, plus rebate guidance</li>
        </ul>
      </Section>
      <Section title="Prepare for Your Visit">
        <ul>
          <li>Clear access to attic, basement, and major mechanicals</li>
          <li>Pets secured; list any comfort or draft concerns</li>
        </ul>
      </Section>
      <Section title="Book Now">
        <p>Use your preferred booking link or call to schedule. Rebates depend on program eligibility and utility participation.</p>
      </Section>
    </ServicePage>
  );
}

