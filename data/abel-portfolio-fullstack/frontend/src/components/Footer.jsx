function Footer({ contactLinks }) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p className="footer-name">Abel Mbomnda</p>
          <p className="footer-text">Computer Science Student | Aspiring Software Developer</p>
        </div>

        <div className="footer-links">
          <a href={contactLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contactLinks.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
