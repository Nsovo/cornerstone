import {
  BookOpen,
  CalendarDays,
  Download,
  ArrowRight,
} from "lucide-react";

const notes = [
  {
    title: "Consultation with God",
    date: "19 July 2026",
    speaker: "Cornerstone",
    file: "#",
  },
  {
    title: "The Cave of Adullam",
    date: "12 July 2026",
    speaker: "Prophet Baloyi",
    file: "#",
  },
  {
    title: "Self Discipline",
    date: "23 May 2026",
    speaker: "Tom Zimite",
    file: "#",
  },
  {
    title: "Discovering My Purpose",
    date: "21 February 2026",
    speaker: "Lindiwe Mackaukau",
    file: "#",
  },
  {
    title: "God With You",
    date: "5 July 2026",
    speaker: "Cornerstone",
    file: "#",
  },
  {
    title: "The Mystery of Time",
    date: "11 April 2026",
    speaker: "Tom Sifile",
    file: "#",
  },
];

export function StudyNotes() {
  return (
    <section className="notes-section" id="notes">
      <div className="notes-header">
        <div>
          <p className="section-label">Bible Study Resources</p>

          <h2>Study Notes</h2>

          <p className="notes-intro">
            Download sermon notes, Bible study outlines and scriptures from
            previous teachings.
          </p>
        </div>

        <BookOpen size={44} />
      </div>

      <div className="notes-grid">
        {notes.map((note) => (
          <article className="note-card" key={note.title}>
            <div className="note-top">
              <BookOpen size={30} />

              <div>
                <h3>{note.title}</h3>

                <div className="note-meta">
                  <CalendarDays size={16} />
                  {note.date}
                </div>

                <small>{note.speaker}</small>
              </div>
            </div>

            <div className="note-actions">
              <a
                href={note.file}
                className="download-btn"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                Download PDF
              </a>

              <a href="#media" className="watch-link">
                Watch Message
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}