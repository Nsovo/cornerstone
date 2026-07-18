import logo from '../assets/cornerstone-logo.png';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Cornerstone Open Portal Network" />

          <p>
            Cornerstone Open Portal Network
            <br />
            <strong>Loving You.</strong>
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#studies">Bible Studies</a>
            <a href="#announcements">Announcements</a>
            <a href="mailto:cornerstoneportalza@gmail.com?subject=Donation%20information">Prayer Requests</a>
            <a href="mailto:cornerstoneportalza@gmail.com?subject=Donation%20information">Testimonies</a>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>

          <div className="footer-connect">
            <p>📖 Saturday Bible Study</p>
            <p>🕡 Fellowship at 6:30 PM</p>
            <p>🕖 Bible Study at 7:00 PM</p>

            <a
              href="https://meet.google.com/your-meet-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 Join Google Meet
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Cornerstone Open Portal Network
        </p>

        <p>Loving You.</p>
      </div>
    </footer>
  );
}