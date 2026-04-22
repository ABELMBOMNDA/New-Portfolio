import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function Experience({ experiences }) {
  return (
    <section id="experience" className="section alt-section">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Professional and campus experience"
          description="A timeline-style section you can easily update with internships, leadership roles, jobs, and project-based experience."
        />

        <div className="timeline">
          {experiences.map((item, index) => (
            <Reveal key={`${item.title}-${item.organization}`} className="timeline-item" delay={index * 70}>
              <div className="timeline-line" />
              <div className="card timeline-card">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
