import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function About({ data }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About"
          title={data.title}
          description="A premium and recruiter-ready introduction that blends technical growth, ambition, and presentation."
        />

        <div className="about-grid">
          <Reveal className="card about-card">
            <p>{data.description}</p>
            <div className="about-points">
              {data.points?.map((point) => (
                <div key={point} className="about-point">
                  <span />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="card about-visual" delay={120}>
            <img src={data.image} alt="About Abel visual placeholder" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
