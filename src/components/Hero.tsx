import {
  ArrowRight,
  CalendarDays,
  Clock3,
  PlayCircle,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" id="home" data-header-theme="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <p className="eyebrow">Cornerstone Open Portal Network</p>

        <h1>A place to grow in faith, purpose and community.</h1>

        <p className="hero-copy">
          Weekly Bible studies, prayer, teaching, announcements and
          fellowship, built around one simple motto:
          <strong> Loving You.</strong>
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#studies">
            Explore studies
            <ArrowRight size={18} />
          </a>

          <a className="button button-secondary" href="#media">
            <PlayCircle size={19} />
            Watch latest
          </a>
        </div>
      </div>

      <aside className="hero-card">
  <span className="live-pill">This Week Topic</span>

  <h2>Consultation with God</h2>

  <div className="event-row">
    <CalendarDays size={20} />
    <span>Every Saturday</span>
  </div>

  <div className="event-row">
    <Clock3 size={20} />
    <span>Gather from 6:30 PM · Study at 7:00 PM</span>
  </div>

  <div className="event-row">
    <span style={{ fontSize: '1.2rem' }}>🎥</span>
   <a
  href="https://meet.google.com/your-meet-code"
  target="_blank"
  rel="noopener noreferrer"
  className="meet-link "
>
  Join Google Meet
</a>
  </div>

  <p>✨ Everyone is welcome.</p>
</aside>
    </section>
  );
}