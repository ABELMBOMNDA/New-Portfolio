import Reveal from './Reveal'

function Hero({ data }) {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-chip">Open to internships, opportunities, and collaboration</span>
          <h1>{data.name}</h1>
          <p className="hero-role">{data.role}</p>
          <h2>{data.tagline}</h2>
          <p className="hero-text">{data.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View Projects
            </a>
            <a href={data.resumeLink} className="button secondary" target="_blank" rel="noreferrer" download="Mbomnda_Resume_Final.pdf">
              Download Resume
            </a>
            <a href="#contact" className="button ghost">
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={100}>
          <div className="profile-card">
            <img src={data.image} alt="Abel Mbomnda placeholder portrait" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
