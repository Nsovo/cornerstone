import { ArrowRight } from 'lucide-react';
import communityGrid from '../assets/community-grid.png';

export function MediaSection() {
  return (
    <section className="media-section" id="media">
      <div className="media-copy">
        <p className="section-label">Messages & moments</p>
        <h2>Watch, read and revisit.</h2>

        <p>
          Share sermon videos through YouTube, publish event graphics, and
          turn key teachings into articles that stay accessible beyond social
          media.
        </p>

        <a className="text-link" href="https://www.youtube.com/@CornerstonePortal" target="_blank" rel="noopener noreferrer">
          Visit the portal YouTube channel
          <ArrowRight size={17} />
        </a>
      </div>

      <div className="media-frame">
        <img
          src={communityGrid}
          alt="A selection of Cornerstone media posts and event designs"
        />
      </div>
    </section>
  );
}