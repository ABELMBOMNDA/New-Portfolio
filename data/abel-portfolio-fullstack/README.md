# Abel Portfolio Full-Stack Project

A complete personal portfolio website project with:
- **Frontend:** React + Vite + JavaScript + CSS
- **Backend:** Node.js + Express
- **API routes:** portfolio data, contact form submission, health check
- **Responsive UI:** dark/light mode, sticky navbar, smooth scrolling, animations

## Project Structure

```text
abel-portfolio-fullstack/
├── package.json
├── .gitignore
├── README.md
├── backend/
│   ├── package.json
│   ├── server.js
│   └── data/
│       ├── messages.json
│       └── portfolio.json
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── public/
    │   └── resume-placeholder.pdf
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── assets/
        │   ├── abel-profile.svg
        │   ├── about-card.svg
        │   └── projects/
        │       ├── project-epl-db.svg
        │       ├── project-ltf.svg
        │       ├── project-neuralcards.svg
        │       └── project-sports-site.svg
        └── components/
            ├── About.jsx
            ├── Achievements.jsx
            ├── Contact.jsx
            ├── Education.jsx
            ├── Experience.jsx
            ├── Footer.jsx
            ├── Hero.jsx
            ├── Navbar.jsx
            ├── Projects.jsx
            ├── Reveal.jsx
            ├── SectionTitle.jsx
            └── Skills.jsx
```

## Run in VS Code

Open the root folder in Visual Studio Code, then run:

```bash
npm install
npm run install-all
npm run dev
```

This starts:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Available Backend Endpoints

- `GET /api/health`
- `GET /api/portfolio`
- `POST /api/contact`
- `GET /api/contact`

## Notes

- Update your portfolio text, links, and details in `backend/data/portfolio.json`.
- Replace placeholder images in `frontend/src/assets/`.
- Replace the placeholder PDF in `frontend/public/resume-placeholder.pdf`.
- Contact form submissions are stored in `backend/data/messages.json`.
