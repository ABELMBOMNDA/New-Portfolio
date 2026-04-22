import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function Achievements({ achievements }) {
  return (
    <section id="achievements" className="section alt-section">
      <div className="container">
        <SectionTitle
          eyebrow="Achievements"
          title="Honors, leadership, and standout qualities"
          description="Use this section for awards, honors, organizations, certifications, and leadership roles that strengthen your profile."
        />

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement} className="card achievement-card" delay={index * 70}>
              <span className="achievement-icon">★</span>
              <p>{achievement}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
