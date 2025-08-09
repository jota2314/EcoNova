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
      <Section title="Overview">
        <p>
          Mass Save® offers utility-funded incentives for qualifying homes to reduce energy waste through
          air sealing and insulation upgrades. Eligibility and rebate amounts vary by utility and by home.
          Econova participates in Mass Save® programs for eligible customers and handles all paperwork
          from assessment through installation and post-work documentation.
        </p>
      </Section>

      <Section title="What’s Typically Covered">
        <ul>
          <li>Air sealing of major leaks (attic penetrations, top plates, rim joists, bath/kitchen penetrations)</li>
          <li>Attic insulation to recommended R-values for Massachusetts climate</li>
          <li>Wall dense-pack (when applicable) and basement rim/band-joist insulation</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Note: Specific measures and caps are determined by your utility program and site conditions.
        </p>
      </Section>

      <Section title="How It Works — Step by Step">
        <ol>
          <li>Qualification & scheduling of a home energy assessment</li>
          <li>Assessment (blower-door testing when applicable) and scope of work</li>
          <li>Presentation of eligible incentives and customer approval</li>
          <li>Air sealing & insulation installation by BPI-certified crews</li>
          <li>Post-work documentation and rebate processing</li>
        </ol>
      </Section>

      <Section title="Documentation We Handle">
        <ul>
          <li>Photos and quantities for each measure (e.g., attic square footage, R-values)</li>
          <li>Blower-door readings pre/post (when applicable)</li>
          <li>Itemized invoices and program forms</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <p><strong>Do all homes qualify?</strong> Not always. Program eligibility depends on your utility, building type, and existing conditions.</p>
        <p><strong>Is it really no-cost?</strong> Many air-sealing measures are no-cost for eligible customers; insulation is often heavily discounted. Final amounts vary.</p>
        <p><strong>How long does it take?</strong> Assessments typically take 60–120 minutes. Most installs are 1 day; larger homes can take longer.</p>
      </Section>

      <Section title="Compliance Notice">
        <p className="text-sm opacity-80">
          Mass Save® is a registered trademark of the utilities and energy efficiency service providers of
          Massachusetts. Participation is subject to eligibility. Incentives and availability are subject to change.
        </p>
      </Section>
    </ServicePage>
  );
}
