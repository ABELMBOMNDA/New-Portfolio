import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Work that reflects both technical range and polish"
          description="Use these cards to showcase real software projects, GitHub repositories, and live demos. Replace the placeholder links and screenshots with your own later."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} className="card project-card" delay={index * 80}>
              <img src={project.image} alt={`${project.title} preview`} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="badge-list compact">
                  {project.stack.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="button secondary">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="button ghost">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
