import ServicePage, { buildServiceMetadata } from '@/components/ServicePage';
import { Section } from '@/components/Section';

export const metadata = buildServiceMetadata({
  title: 'HVAC (Heat Pumps & Mini-Splits)',
  description: 'High-efficiency heat pumps and mini-splits for Massachusetts homes: installation, rebates, and envelope integration for maximum comfort.',
  slug: '/hvac/',
});

export default function Page() {
  return (
    <ServicePage title="Heat Pumps & Mini-Splits">
      <Section title="Why Heat Pumps in Massachusetts?">
        <p>
          Modern heat pump technology works efficiently even in Massachusetts winters, providing year-round 
          heating and cooling with significant energy savings compared to traditional systems.
        </p>
        <ul className="mt-3">
          <li>2-3x more efficient than oil or propane heating</li>
          <li>Effective heating down to -15°F with cold-climate models</li>
          <li>Combined heating and cooling in one system</li>
          <li>Reduced carbon footprint and environmental impact</li>
          <li>Substantial utility rebates available</li>
        </ul>
      </Section>

      <Section title="Heat Pump Options">
        <ul>
          <li><strong>Ducted Heat Pumps</strong> - Whole-house systems using existing ductwork</li>
          <li><strong>Ductless Mini-Splits</strong> - Individual room/zone control without ducts</li>
          <li><strong>Multi-Zone Systems</strong> - One outdoor unit serving multiple indoor heads</li>
          <li><strong>Hybrid Systems</strong> - Heat pump with backup heating for extreme cold</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          System selection depends on home layout, existing equipment, and comfort preferences.
        </p>
      </Section>

      <Section title="Cold-Climate Performance">
        <p>
          Today&apos;s cold-climate heat pumps are specifically designed for Massachusetts weather conditions
          and maintain high efficiency even in sub-zero temperatures.
        </p>
        <ul className="mt-3">
          <li><strong>Variable Speed Technology</strong> - Adjusts output to match heating/cooling needs</li>
          <li><strong>Enhanced Defrost</strong> - Minimizes ice buildup and system downtime</li>
          <li><strong>Backup Heat Integration</strong> - Seamless switching during extreme cold</li>
          <li><strong>Smart Controls</strong> - Optimize performance and maximize savings</li>
        </ul>
      </Section>

      <Section title="Mini-Split Advantages">
        <ul>
          <li><strong>No Ductwork Required</strong> - Ideal for homes without existing ducts</li>
          <li><strong>Zone Control</strong> - Heat and cool only occupied rooms</li>
          <li><strong>Quiet Operation</strong> - Indoor units operate at whisper-quiet levels</li>
          <li><strong>Easy Installation</strong> - Minimal disruption compared to ducted systems</li>
          <li><strong>Flexible Placement</strong> - Wall-mount, floor, or ceiling options</li>
        </ul>
      </Section>

      <Section title="Smart Controls & Integration">
        <ul>
          <li><strong>Smart Thermostats</strong> - WiFi connectivity and smartphone control</li>
          <li><strong>Zoning Systems</strong> - Independent control of different areas</li>
          <li><strong>Home Integration</strong> - Compatible with smart home systems</li>
          <li><strong>Scheduling</strong> - Automatic temperature adjustments for savings</li>
          <li><strong>Remote Monitoring</strong> - Service alerts and performance tracking</li>
        </ul>
      </Section>

      <Section title="The Importance of Building Envelope">
        <p>
          Heat pumps work best in well-sealed, properly insulated homes. We strongly recommend
          air sealing and insulation improvements before or during heat pump installation.
        </p>
        <ul className="mt-3">
          <li><strong>Right-Sizing</strong> - Efficient envelope allows smaller, less expensive systems</li>
          <li><strong>Better Comfort</strong> - Consistent temperatures with less equipment cycling</li>
          <li><strong>Maximum Savings</strong> - Reduced heating/cooling loads mean lower bills</li>
          <li><strong>System Longevity</strong> - Less strain on equipment extends lifespan</li>
        </ul>
      </Section>

      <Section title="Installation Process">
        <ol>
          <li><strong>Home Assessment</strong> - Load calculation and system sizing</li>
          <li><strong>System Design</strong> - Equipment selection and placement planning</li>
          <li><strong>Permits & Approvals</strong> - Local permitting and utility coordination</li>
          <li><strong>Installation</strong> - Professional installation by certified technicians</li>
          <li><strong>Startup & Testing</strong> - System commissioning and performance verification</li>
          <li><strong>Training</strong> - Customer education on operation and maintenance</li>
        </ol>
      </Section>

      <Section title="Available Rebates & Incentives">
        <ul>
          <li><strong>Mass Save® Rebates</strong> - Up to $10,000 for qualifying heat pumps</li>
          <li><strong>Federal Tax Credits</strong> - 30% of equipment and installation costs</li>
          <li><strong>State Incentives</strong> - Additional rebates for income-qualified customers</li>
          <li><strong>Utility Programs</strong> - Special offers from local utility companies</li>
          <li><strong>Financing Options</strong> - 0% interest loans for qualifying improvements</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Rebate amounts and availability change frequently. We verify current programs during assessment.
        </p>
      </Section>

      <Section title="What You Can Expect">
        <ul>
          <li>Consistent, comfortable temperatures year-round</li>
          <li>Significant reduction in heating and cooling costs</li>
          <li>Improved air quality with better filtration</li>
          <li>Quiet operation compared to traditional HVAC systems</li>
          <li>Environmental benefits from reduced fossil fuel use</li>
          <li>Increased home value and marketability</li>
        </ul>
      </Section>

      <Section title="Maintenance & Service">
        <ul>
          <li><strong>Annual Service</strong> - Professional cleaning and performance check</li>
          <li><strong>Filter Changes</strong> - Regular filter replacement for optimal performance</li>
          <li><strong>Outdoor Unit Care</strong> - Keep clear of snow, leaves, and debris</li>
          <li><strong>Warranty Coverage</strong> - Manufacturer warranties on parts and labor</li>
          <li><strong>Service Plans</strong> - Optional maintenance agreements for peace of mind</li>
        </ul>
      </Section>

      <Section title="Is a Heat Pump Right for You?">
        <ul>
          <li>Home with existing ductwork or suitable for mini-splits</li>
          <li>Current heating costs over $2,000/year</li>
          <li>Need for both heating and cooling</li>
          <li>Interest in reducing carbon footprint</li>
          <li>Desire for improved comfort and air quality</li>
          <li>Plans for other energy efficiency improvements</li>
        </ul>
      </Section>

      <Section title="FAQs">
        <p><strong>Do heat pumps work in Massachusetts winters?</strong> Yes, modern cold-climate heat pumps are designed for New England weather and work efficiently below 0°F.</p>
        <p><strong>Will a heat pump increase my electric bill?</strong> While electricity use may increase, total energy costs typically decrease significantly.</p>
        <p><strong>Can I keep my existing heating system?</strong> Yes, many customers install heat pumps as primary systems with existing heating as backup.</p>
        <p><strong>How long does installation take?</strong> Most residential installations are completed in 1-2 days.</p>
      </Section>

      <Section title="Start with an Assessment">
        <p>
          Every heat pump project begins with a comprehensive home energy assessment to determine
          the best system type, size, and configuration for your specific needs and budget.
        </p>
        <p className="mt-3 text-sm opacity-80">
          We coordinate envelope improvements with HVAC installation to maximize comfort and savings.
        </p>
      </Section>
    </ServicePage>
  );
}

