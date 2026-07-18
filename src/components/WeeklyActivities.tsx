import { CalendarDays } from 'lucide-react';
import {
  announcements,
  type Announcement,
} from '../data/content';

type AnnouncementCardProps = {
  item: Announcement;
};

function AnnouncementCard({ item }: AnnouncementCardProps) {
  return (
    <article className="announcement-card">
      <span>{item.tag}</span>
      <h3>{item.title}</h3>
      <p>{item.copy}</p>
      <small>{item.meta}</small>
    </article>
  );
}

export function WeeklyActivities() {
  return (
    <section className="section" id="announcements"  data-header-theme="light">
      <div className="section-heading">
        <div>
          <p className="section-label">Stay connected</p>
          <h2>Weekly activities</h2>
        </div>

        <CalendarDays size={34} />
      </div>

      <div className="announcement-grid">
        {announcements.map((item) => (
          <AnnouncementCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}