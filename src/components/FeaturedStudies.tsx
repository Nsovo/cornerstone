import { ArrowRight, BookOpen } from 'lucide-react';
import { studies, type Study } from '../data/content';

type StudyCardProps = {
  study: Study;
  index: number;
};

function StudyCard({ study, index }: StudyCardProps) {
  return (
    <article className={`study-card study-${index + 1}`}>
      <div className="study-overlay" />

      <div className="study-content">
        <span>{study.category}</span>
        <h3>{study.title}</h3>
        <p>{study.date}</p>

        <button
          type="button"
          aria-label={`Open ${study.title}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}

export function FeaturedStudies() {
  return (
    <section className="section dark-section" id="studies">
      <div className="section-heading">
        <div>
          <p className="section-label">Learn & grow</p>
          <h2>Featured studies</h2>
        </div>

        <BookOpen size={34} />
      </div>

      <div className="study-grid">
        {studies.map((study, index) => (
          <StudyCard
            key={study.title}
            study={study}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}