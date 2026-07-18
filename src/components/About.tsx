import { Quote } from 'lucide-react';

export function About() {
  return (
    <section className="intro" id="about" >
      <div>
        <p className="section-label">Who we are</p>
        <h2>Faith that feels like family.</h2>
      </div>

      <div className="intro-copy">
        <p>
          Cornerstone is a Bible-centred community that creates space for
          people to encounter God, discover purpose and walk with others in
          love.
        </p>

        <blockquote>
          <Quote size={24} />
          “Our motto is Loving You.”
        </blockquote>
      </div>
    </section>
  );
}