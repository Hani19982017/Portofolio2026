import {
  contactDetails,
  careerObjective,
  projectsData,
  experienceData,
  educationData,
  trainingCourses,
  certificatesData,
  skillCategories,
  languages,
} from '../data/portfolioData';

export function getSeparateHTML(): string {
  const projectsHTML = projectsData
    .map(
      (p) => `
      <div class="project-card" data-category="${p.category}" data-title="${p.title.toLowerCase()}">
        <div class="project-header">
          <span class="badge ${p.category}">${p.categoryLabel}</span>
          <span class="role-tag">${p.role}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <h4 class="project-sub">${p.subtitle}</h4>
        <p class="project-desc">${p.description}</p>
        <div class="tags-container">
          ${p.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span class="tools-label"><strong>Tools:</strong> ${p.tools.join(', ')}</span>
        </div>
      </div>`
    )
    .join('\n');

  const expHTML = experienceData
    .map(
      (e) => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="exp-header">
            <h3>${e.role} <span class="company">@ ${e.company}</span></h3>
            <span class="period-badge ${e.isCurrent ? 'current' : ''}">${e.period}</span>
          </div>
          <p class="location-tag">📍 ${e.location} • ${e.employmentType}</p>
          <ul class="bullet-list">
            ${e.bulletPoints.map((b) => `<li>${b}</li>`).join('')}
          </ul>
          <div class="skill-tags">
            ${e.coreSkills.map((s) => `<span class="skill-pill">${s}</span>`).join('')}
          </div>
        </div>
      </div>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${contactDetails.name} | ${contactDetails.title}</title>
  <meta name="description" content="Portfolio of ${contactDetails.name} - Full-stack WordPress & Web Developer.">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Header & Navigation -->
  <header class="header">
    <nav class="nav-container">
      <a href="#hero" class="logo">${contactDetails.name}</a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects (${projectsData.length})</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact" class="btn-primary-sm">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <div class="container hero-content">
      <div class="badge-status">🟢 Available for Full-Time & Freelance Contracts</div>
      <h1 class="hero-name">${contactDetails.name}</h1>
      <h2 class="hero-title">${contactDetails.title}</h2>
      <p class="hero-location">📍 ${contactDetails.location} • ✉️ <a href="mailto:${contactDetails.email}">${contactDetails.email}</a> • 📞 ${contactDetails.phone1} / ${contactDetails.phone2}</p>
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="#contact" class="btn-secondary">Hire Me</a>
        <a href="${contactDetails.github}" target="_blank" class="btn-outline">GitHub</a>
        <a href="${contactDetails.linkedin}" target="_blank" class="btn-outline">LinkedIn</a>
      </div>
    </div>
  </section>

  <!-- Career Objective -->
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">Career Objective</h2>
      <div class="objective-box">
        <p>${careerObjective}</p>
      </div>
    </div>
  </section>

  <!-- Projects Showcase -->
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">Featured Projects (${projectsData.length})</h2>
      <p class="section-subtitle">Real-world commercial e-commerce, custom WordPress themes, plugins, and platforms.</p>
      
      <!-- Filter Bar -->
      <div class="filter-controls">
        <div class="filter-buttons">
          <button class="filter-btn active" data-filter="all">All Projects (${projectsData.length})</button>
          <button class="filter-btn" data-filter="wordpress">WordPress & WooCommerce (9)</button>
          <button class="filter-btn" data-filter="shopify">Shopify E-Commerce (2)</button>
          <button class="filter-btn" data-filter="frontend">Frontend & Apps (3)</button>
          <button class="filter-btn" data-filter="ai">AI & Deep Learning (1)</button>
        </div>
        <input type="text" id="projectSearch" class="search-input" placeholder="Search project by name or tech...">
      </div>

      <div class="projects-grid" id="projectsGrid">
        ${projectsHTML}
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="experience-section">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      <div class="timeline">
        ${expHTML}
      </div>
    </div>
  </section>

  <!-- Skills Matrix -->
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">Technical & Professional Skills</h2>
      <div class="skills-grid">
        ${skillCategories
          .map(
            (c) => `
          <div class="skill-category-card">
            <h3>${c.title}</h3>
            <div class="skill-pills-list">
              ${c.skills.map((s) => `<span class="skill-item ${s.highlight ? 'highlight' : ''}">${s.name} <small>(${s.level})</small></span>`).join('')}
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- Education & Certifications -->
  <section id="education" class="education-section">
    <div class="container">
      <h2 class="section-title">Education & Certifications</h2>
      <div class="edu-grid">
        <div class="edu-card">
          <h3>${educationData.degree}</h3>
          <h4>${educationData.institution} (${educationData.period})</h4>
          <p><strong>Overall Grade:</strong> ${educationData.grade}</p>
          <div class="grad-project">
            <h5>Graduation Project: ${educationData.graduationProject.title}</h5>
            <p><strong>Project Grade:</strong> ${educationData.graduationProject.grade}</p>
            <p>${educationData.graduationProject.description}</p>
            <p><strong>Technologies:</strong> ${educationData.graduationProject.technologies.join(', ')}</p>
          </div>
        </div>

        <div class="cert-card">
          <h3>Professional Training & Contests</h3>
          <ul class="cert-list">
            ${trainingCourses.map((t) => `<li><strong>${t.title}</strong> — ${t.platform} (${t.duration}, ${t.period})</li>`).join('')}
            ${certificatesData.filter((c) => c.type === 'contest').map((c) => `<li><strong>${c.title}</strong> — ${c.issuer}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Let's Connect & Collaborate</h2>
      <p class="section-subtitle">Reach out directly for freelance projects, WordPress development, or full-time opportunities.</p>
      <div class="contact-grid">
        <div class="contact-card">
          <p>📧 Email: <a href="mailto:${contactDetails.email}">${contactDetails.email}</a></p>
          <p>📞 Phone 1: <a href="tel:${contactDetails.phone1}">${contactDetails.phone1}</a></p>
          <p>📞 Phone 2: <a href="tel:${contactDetails.phone2}">${contactDetails.phone2}</a></p>
          <p>📍 Location: ${contactDetails.location}</p>
          <p>🔗 LinkedIn: <a href="${contactDetails.linkedin}" target="_blank">mohamed-hani500</a></p>
          <p>🐙 GitHub: <a href="${contactDetails.github}" target="_blank">mtdm2023</a></p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>© ${new Date().getFullYear()} ${contactDetails.name}. All Rights Reserved.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

export function getSeparateCSS(): string {
  return `/* Reset & Base Variables */
:root {
  --bg-dark: #020617;
  --card-bg: #0f172a;
  --card-border: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --accent: #10b981;
  --accent-hover: #059669;
  --accent-light: rgba(16, 185, 129, 0.12);
  --font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  text-decoration: underline;
}

/* Header & Nav */
.header {
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--card-border);
  z-index: 100;
  padding: 16px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--text-primary);
  text-decoration: none;
}

.btn-primary-sm {
  background: var(--accent);
  color: #020617 !important;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 6px;
}

/* Hero Section */
.hero-section {
  padding: 80px 0 60px;
  text-align: center;
  background: radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
}

.badge-status {
  display: inline-block;
  background: var(--accent-light);
  color: var(--accent);
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.hero-name {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 12px;
}

.hero-title {
  font-size: 1.35rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 16px;
}

.hero-location {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary, .btn-outline {
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--accent);
  color: #020617;
}
.btn-primary:hover {
  background: var(--accent-hover);
  text-decoration: none;
}

.btn-secondary {
  background: #1e293b;
  color: var(--text-primary);
}
.btn-secondary:hover {
  background: #334155;
  text-decoration: none;
}

.btn-outline {
  border: 1px solid var(--card-border);
  color: var(--text-primary);
}
.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  text-decoration: none;
}

/* Sections */
section {
  padding: 70px 0;
  border-bottom: 1px solid var(--card-border);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-size: 1.05rem;
}

/* Objective Box */
.objective-box {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 32px;
  border-radius: 12px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
}

/* Filter Controls */
.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.filter-btn.active, .filter-btn:hover {
  background: var(--accent);
  color: #020617;
  border-color: var(--accent);
  font-weight: 600;
}

.search-input {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  color: var(--text-primary);
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 280px;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, border-color 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(16, 185, 129, 0.4);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(16, 185, 129, 0.15);
  color: var(--accent);
}

.role-tag {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.project-sub {
  font-size: 0.95rem;
  color: #38bdf8;
  font-weight: 500;
  margin-bottom: 12px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  flex-grow: 1;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.78rem;
  color: #e2e8f0;
}

.project-footer {
  padding-top: 12px;
  border-top: 1px solid var(--card-border);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Timeline */
.timeline {
  position: relative;
  border-left: 2px solid var(--card-border);
  margin-left: 16px;
  padding-left: 24px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  left: -31px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--bg-dark);
}

.timeline-content {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 24px;
  border-radius: 12px;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 6px;
}

.period-badge {
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 6px;
  color: #cbd5e1;
}

.period-badge.current {
  background: var(--accent-light);
  color: var(--accent);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.bullet-list {
  padding-left: 20px;
  margin: 16px 0;
  color: var(--text-secondary);
}

.bullet-list li {
  margin-bottom: 6px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-pill {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.skill-category-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 24px;
  border-radius: 12px;
}

.skill-category-card h3 {
  margin-bottom: 16px;
  font-size: 1.2rem;
  color: var(--accent);
}

.skill-pills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--card-border);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.skill-item.highlight {
  border-color: rgba(16, 185, 129, 0.4);
  color: #6ee7b7;
}

/* Education */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.edu-card, .cert-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 28px;
  border-radius: 12px;
}

.grad-project {
  margin-top: 16px;
  background: rgba(255, 255, 255, 0.03);
  padding: 16px;
  border-radius: 8px;
  border-left: 3px solid var(--accent);
}

.cert-list {
  list-style: none;
}

.cert-list li {
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-secondary);
}

/* Contact */
.contact-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 32px;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}

.contact-card p {
  margin-bottom: 14px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 30px 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-name {
    font-size: 2.2rem;
  }
  .nav-links {
    display: none;
  }
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .search-input {
    width: 100%;
  }
}
`;
}

export function getSeparateJS(): string {
  return `// Mohamed Hani Mohamed Portfolio Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearch');

  function filterProjects() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const textContent = card.innerText.toLowerCase();

      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesQuery = query === '' || textContent.includes(query);

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
`;
}

export function getStandaloneHTML(): string {
  const html = getSeparateHTML();
  const css = getSeparateCSS();
  const js = getSeparateJS();

  // Replace external link with embedded CSS and JS
  return html
    .replace('<link rel="stylesheet" href="style.css">', `<style>\n${css}\n</style>`)
    .replace('<script src="script.js"></script>', `<script>\n${js}\n</script>`);
}
