import { ArrowRight, HeartHandshake } from 'lucide-react';

export function GivingSection() {
  return (
    <section className="giving" id="give">
      <HeartHandshake size={42} />

      <div>
        <p className="section-label">Support the mission</p>
        <h2>Give with purpose.</h2>
        <p>
          Your generosity helps support gatherings, outreach, teaching and
          community care.
        </p>
      </div>

      <a
        className="button button-light"
        href="mailto:cornerstoneportalza@gmail.com?subject=Donation%20information"
      >
        Donation information
        <ArrowRight size={18} />
      </a>
    </section>
  );
}