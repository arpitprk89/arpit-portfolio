(() => {
  "use strict";

  const data = window.PORTFOLIO;
  if (!data) {
    console.error("Portfolio content did not load. Check that content.js is available.");
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const safeUrl = (value = "") => /^(https:\/\/|mailto:|#)/i.test(String(value)) ? String(value) : "#";
  const setText = (selector, value) => {
    const node = $(selector);
    if (node && value != null) node.textContent = value;
  };
  const setHeading = (selector, value) => {
    const node = $(selector);
    if (node && value != null) node.innerHTML = escapeHTML(value).replace(/\n/g, "<br>");
  };

  // Hero
  setText("#hero-eyebrow", data.hero.eyebrow);
  setHeading("#hero-title", data.hero.title);
  setText("#hero-description", data.hero.description);
  setText("#hero-footnote", data.hero.footnote);
  const heroTags = $("#hero-tags");
  if (heroTags) heroTags.innerHTML = data.hero.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("");

  // Profile and the second portrait
  setText("#about-kicker", data.about.kicker);
  setHeading("#about-title", data.about.title);
  setText("#about-summary", data.about.summary);
  const aboutCopy = $("#about-copy");
  if (aboutCopy) {
    aboutCopy.innerHTML = data.about.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("") +
      `<blockquote class="quote">“${escapeHTML(data.about.quote)}”</blockquote>`;
  }
  setText("#about-photo-caption", data.about.photoCaption);
  setText("#about-photo-meta", data.about.photoMeta);
  const facts = $("#facts-grid");
  if (facts) facts.innerHTML = data.about.facts.map((fact) => `
    <div class="fact"><div class="fact-label">${escapeHTML(fact.label)}</div>
    <div class="fact-value${fact.accent ? " accent" : ""}">${escapeHTML(fact.value)}</div></div>`).join("");

  // Research interests and skill foundations
  setText("#focus-kicker", data.focus.kicker);
  setHeading("#focus-title", data.focus.title);
  setText("#focus-summary", data.focus.summary);
  const focusGrid = $("#focus-grid");
  if (focusGrid) focusGrid.innerHTML = data.focus.items.map((item) => `
    <article class="focus-card">
      <span class="focus-index">${escapeHTML(item.index)}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <span class="small-label">${escapeHTML(item.label)}</span>
    </article>`).join("");
  const skills = $("#skills-tags");
  if (skills) skills.innerHTML = data.focus.skills.map((skill) => `<span class="skill-tag">${escapeHTML(skill)}</span>`).join("");

  // Selected projects
  setText("#projects-kicker", data.projects.kicker);
  setHeading("#projects-title", data.projects.title);
  setText("#projects-summary", data.projects.summary);
  setText("#projects-note", data.projects.note);
  const allRepos = $("#all-repos");
  if (allRepos) allRepos.href = safeUrl(data.projects.allRepos);
  const projectsGrid = $("#projects-grid");
  if (projectsGrid) projectsGrid.innerHTML = data.projects.items.map((project) => `
    <article class="project-card${project.featured ? " featured" : ""}">
      <div class="project-top"><span class="project-number">PROJECT / ${escapeHTML(project.number)}</span><span class="project-status">${escapeHTML(project.status)}</span></div>
      <h3>${escapeHTML(project.name)}</h3>
      <div class="project-subtitle">${escapeHTML(project.subtitle)}</div>
      <p>${escapeHTML(project.description)}</p>
      <div class="project-tags">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="project-links">${project.links.map((link) => `<a class="text-link" href="${escapeHTML(safeUrl(link.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} <span aria-hidden="true">↗</span></a>`).join("")}</div>
    </article>`).join("");

  // Press and features
  setText("#press-kicker", data.press.kicker);
  setHeading("#press-title", data.press.title);
  setText("#press-summary", data.press.summary);
  const pressGrid = $("#press-grid");
  if (pressGrid) pressGrid.innerHTML = data.press.items.map((item) => `
    <article class="press-card${item.featured ? " featured" : ""}">
      <div class="press-top"><span class="press-publication">${escapeHTML(item.publication)}</span><span class="press-label">${escapeHTML(item.label)}</span></div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <a class="text-link" href="${escapeHTML(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.action)} <span aria-hidden="true">↗</span></a>
    </article>`).join("");

  // Milestones
  setText("#journey-kicker", data.journey.kicker);
  setHeading("#journey-title", data.journey.title);
  setText("#journey-summary", data.journey.summary);
  const timeline = $("#timeline-grid");
  if (timeline) timeline.innerHTML = data.journey.items.map((item) => `
    <article class="timeline-item">
      <div class="timeline-date">${escapeHTML(item.date)}</div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      ${item.url ? `<a class="text-link" href="${escapeHTML(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.linkLabel || "Read more")} <span aria-hidden="true">↗</span></a>` : ""}
    </article>`).join("");

  // Approach
  setText("#principles-kicker", data.principles.kicker);
  setHeading("#principles-title", data.principles.title);
  setText("#principles-summary", data.principles.summary);
  const method = $("#principles-list");
  if (method) method.innerHTML = data.principles.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("");
  setText("#beyond-title", data.principles.beyondTitle);
  const beyond = $("#beyond-copy");
  if (beyond) beyond.innerHTML = data.principles.beyondParagraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("");

  // Contact
  setText("#contact-kicker", data.contact.kicker);
  setHeading("#contact-title", data.contact.title);
  setText("#contact-description", data.contact.description);
  const email = data.contact.items.find((item) => String(item.url).startsWith("mailto:"));
  if (email) {
    const cta = $("#email-cta");
    if (cta) cta.href = safeUrl(email.url);
  }
  const contactList = $("#contact-list");
  if (contactList) contactList.innerHTML = data.contact.items.map((item) => `
    <a class="contact-link" href="${escapeHTML(safeUrl(item.url))}" ${String(item.url).startsWith("https://") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      <span><span class="contact-label">${escapeHTML(item.label)}</span><span class="contact-value">${escapeHTML(item.value)}</span></span>
      <span class="contact-arrow" aria-hidden="true">↗</span>
    </a>`).join("");

  // Footer year
  setText("#year", new Date().getFullYear());

  // NASA-inspired but restrained motion: section reveals and reading progress.
  // Content remains visible when JavaScript or IntersectionObserver is unavailable.
  document.documentElement.classList.add("js-motion");
  const revealTargets = document.querySelectorAll(
    ".section-heading, .about-copy, .about-side, .focus-card, .project-card, .press-card, .timeline-item, .approach-card, .beyond-card, .contact-panel, .profile-strip-inner > div"
  );
  revealTargets.forEach((node, index) => {
    node.classList.add("reveal");
    if (node.matches(".focus-card, .project-card, .press-card, .timeline-item")) {
      node.classList.add(`reveal-delay-${(index % 3) + 1}`);
    }
  });
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach((node) => revealObserver.observe(node));
  } else {
    revealTargets.forEach((node) => node.classList.add("is-visible"));
  }

  const progressBar = $("#scroll-progress-bar");
  let progressTicking = false;
  const updateScrollProgress = () => {
    if (!progressBar || progressTicking) return;
    progressTicking = true;
    window.requestAnimationFrame(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      progressBar.style.width = `${ratio * 100}%`;
      progressTicking = false;
    });
  };
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Accessible mobile navigation
  const menuButton = $(".menu-toggle");
  const navLinks = $(".nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.innerHTML = isOpen ? 'CLOSE <span aria-hidden="true">−</span>' : 'MENU <span aria-hidden="true">+</span>';
    });
    navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.innerHTML = 'MENU <span aria-hidden="true">+</span>';
    }));
  }
})();
