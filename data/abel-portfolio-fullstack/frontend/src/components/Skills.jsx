import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function Skills({ skillGroups }) {
  return (
    <section id="skills" className="section alt-section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Technical abilities organized for clarity"
          description="This section groups core skills into categories so recruiters and collaborators can quickly scan technical strengths."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} className="card skill-card" delay={index * 70}>
              <h3>{group.title}</h3>
              <div className="badge-list">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
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

export default Skills
