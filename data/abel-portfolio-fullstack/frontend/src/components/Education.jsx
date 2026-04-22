import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function Education({ education }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Education"
          title="Academic foundation and coursework"
          description="This area gives recruiters a clean summary of school history, degree path, and coursework relevant to software and technical roles."
        />

        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal key={item.school} className="card education-card" delay={index * 80}>
              <h3>{item.school}</h3>
              <p className="education-degree">{item.degree}</p>
              <p className="education-meta">{item.meta}</p>
              <div className="badge-list compact">
                {item.coursework.map((course) => (
                  <span key={course} className="badge">
                    {course}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
