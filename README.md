# Abhishek Kumar — Developer Portfolio

A personal portfolio website for Abhishek Kumar, a MERN Stack Developer. Built to showcase his skills, projects, and education to recruiters and potential collaborators.

## Live Demo

Once deployed on GitHub Pages, the site will be available at:
`https://<your-github-username>.github.io/<repo-name>/`

## Features

- Dark mode by default with a light/dark theme toggle (preference saved in local storage)
- Responsive layout that works across mobile, tablet, and desktop
- Animated hero section with a particle network background and a typewriter effect
- Smooth scrolling and scroll-triggered reveal animations
- Sections for About, Skills, Projects, Education, and Contact
- Project cards with live screenshots, descriptions, tech tags, and links to live demos
- Frontend-only contact form with basic validation
- SEO-friendly meta tags and semantic HTML

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid, animations)
- Vanilla JavaScript (no frameworks or build tools)

## Folder Structure

```
.
├── index.html
├── style.css
├── script.js
├── assets/
│   └── projects/
│       ├── lifexp.png
│       ├── currency-converter.png
│       └── calculator.png
└── README.md
```

## Sections Overview

1. **Hero** — Name, title, short introduction, and call-to-action buttons (View Projects, Contact Me, Download Resume).
2. **About Me** — Background, interests, and what drives Abhishek as a developer.
3. **Skills** — Languages, development areas, tools, and databases displayed as tags and a scrolling marquee.
4. **Projects** — LifeXP, Live Currency Converter, and Advanced Calculator, each with a screenshot, description, and links.
5. **Education** — Diploma details, achievements, and certificates.
6. **Contact** — Contact form (frontend only) plus direct email, LinkedIn, GitHub, and LeetCode links.

## Running Locally

No build steps are required. Simply open `index.html` in a browser, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

## Deployment to GitHub Pages

1. Create a new GitHub repository and push this project's files to it.
2. In the repository, go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and the `/ (root)` folder.
4. Save. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.
5. Wait a minute or two for the deployment to complete, then visit the URL.

## Notes

- The "Download Resume" button is currently a placeholder. Replace its behavior in `script.js` and add a resume PDF to the `assets/` folder once available.
- The contact form does not send emails; it validates input and prompts visitors to email Abhishek directly. Connect it to a service like Formspree or EmailJS if a working form is needed.
- Project screenshots live in `assets/projects/`. Replace them with updated screenshots as the projects evolve.

## Contact

- Email: abhishek638983k@gmail.com
- LinkedIn: [abhishek-tyagii](https://www.linkedin.com/in/abhishek-tyagii)
- GitHub: [abhishek638983k-oss](https://github.com/abhishek638983k-oss)
- LeetCode: [abhishek638983k-oss](https://leetcode.com/u/abhishek638983k-oss/)
