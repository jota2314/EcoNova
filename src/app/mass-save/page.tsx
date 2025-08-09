import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'Mass Save® Rebates',
  description: 'How Mass Save® insulation rebates work in MA: eligibility, steps, documentation, and FAQs.',
  slug: '/mass-save/',
});

export default function Page() {
  return (
    <ServicePage title="Mass Save® Rebates in Massachusetts">
      <Section title="How It Works">
        <p>Eligibility and rebate amounts vary by utility and home. Econova participates in Mass Save® programs for qualifying customers. We’ll verify eligibility during your assessment and prepare all paperwork.</p>
      </Section>
      <Section title="Typical Steps">
        <ol>
          <li>Initial qualification & scheduling</li>
          <li>Home energy assessment (blower-door when applicable)</li>
          <li>Air sealing & insulation scope</li>
          <li>Rebate paperwork & installation</li>
          <li>Post-work documentation</li>
        </ol>
      </Section>
      <Section title="FAQs">
        <p><strong>Do all homes qualify?</strong> Not always—programs and caps vary by utility and home condition.</p>
      </Section>
    </ServicePage>
  );
}

