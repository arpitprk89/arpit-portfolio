/*
  EDITABLE PORTFOLIO CONTENT
  --------------------------
  Update your introduction, interests, projects, press links and contact details here.
  The website layout is in index.html and the visual design is in styles.css.
*/
window.PORTFOLIO = {
  hero: {
    eyebrow: "CLASS XII · PCM · RAJASTHAN, INDIA",
    title: "Exploring how we think, learn and make decisions.",
    description: "I’m Arpit Pareek, a Class XII student from Shrimadhopur, Rajasthan. I build independent projects to explore artificial intelligence, probabilistic reasoning, reinforcement learning and technology that supports students.",
    tags: ["Artificial intelligence", "Bayesian reasoning", "Reinforcement learning", "Cognitive computing"],
    footnote: "INDEPENDENT BUILDER · LEARNING IN PUBLIC"
  },
  about: {
    kicker: "01 / PROFILE",
    title: "Curiosity is the starting point.",
    summary: "A student profile shaped by questions, independent learning and the habit of turning ideas into working projects.",
    paragraphs: [
      "I’m currently studying Physics, Chemistry and Mathematics in Class XII in Rajasthan, India. Alongside school, I learn through code, documentation, experiments and projects that help me investigate questions that interest me.",
      "My interests are converging around how people learn, make decisions and respond to uncertainty—and how computational ideas might help us understand those processes more clearly.",
      "I try to make my work understandable and honest. I describe what a project is designed to do, distinguish assumptions from evidence and acknowledge what a prototype cannot establish. For me, building is a way to learn more carefully."
    ],
    quote: "I learn by building. Every project begins with a question I do not have an answer to yet.",
    photoCaption: "A view beyond the screen",
    photoMeta: "CURIOSITY · CULTURE · CREATIVITY",
    facts: [
      { label: "Academic focus", value: "Class XII · PCM", accent: true },
      { label: "Based in", value: "Shrimadhopur, Rajasthan" },
      { label: "Working style", value: "Learn by building" },
      { label: "Long-term interest", value: "AI & cognition" }
    ]
  },
  focus: {
    kicker: "02 / RESEARCH INTERESTS",
    title: "Questions worth investigating.",
    summary: "Areas I am actively exploring through reading, code and small experiments—not claims of expertise.",
    items: [
      { index: "01", title: "Bayesian reasoning", description: "How should a belief change when new evidence arrives? I am interested in using probability to make uncertainty more explicit in decision systems.", label: "INFERENCE · UNCERTAINTY · DECISIONS" },
      { index: "02", title: "Learning through feedback", description: "Reinforcement learning offers a way to explore how an agent can improve through experience, actions and feedback instead of following only a fixed route.", label: "Q-LEARNING · EXPLORATION" },
      { index: "03", title: "Cognition & education", description: "I build student-centred experiments around learning, pressure and personal choices, exploring how technology might support reflection without replacing human judgement.", label: "COGNITIVE MODELS · STUDENT SUPPORT" }
    ],
    skills: ["Python", "HTML / CSS / JavaScript", "Bayesian inference", "Q-learning", "Interactive prototyping", "Research communication"]
  },
  projects: {
    kicker: "03 / SELECTED WORK",
    title: "Ideas, made tangible.",
    summary: "A selection of independent builds and research-style explorations. Each project begins with a question and develops through making, testing and revision.",
    items: [
      {
        number: "01", status: "LIVE PROJECT · 15 OCT 2026", name: "ARPIK.AI", subtitle: "A student-focused reflection companion", featured: true,
        description: "A student-focused reflection and decision-support companion. It aims to help people notice patterns, weigh trade-offs, explore opportunities and consider a next step—without making the decision for them.",
        tags: ["AI", "Reflection", "Decision support", "Student-centred"],
        links: [{ label: "Open app", url: "https://arpik-ai.vercel.app/" }, { label: "Read the story", url: "https://arpik-ai-story.vercel.app/" }]
      },
      {
        number: "02", status: "LIVE DEMO", name: "Brain 2.0", subtitle: "A Bayesian model of student cognitive load",
        description: "A self-reflection tool combining repeated reports about study hours, sleep, stress, exam pressure and felt support to estimate a low, moderate or high cognitive-load state. This is a learning project, not a clinical or diagnostic tool.",
        tags: ["Bayesian updating", "HTML / CSS / JS", "Student wellbeing"],
        links: [{ label: "Open project", url: "https://arpitprk89.github.io/Brain-2.0/" }, { label: "Source code", url: "https://github.com/arpitprk89/Brain-2.0" }]
      },
      {
        number: "03", status: "INTERACTIVE PROJECT", name: "RL Visualiser", subtitle: "Q-learning through trial and feedback",
        description: "An interactive grid where an agent learns to reach a goal through experience. The visual feedback helps explain how actions, mistakes and rewards affect the route it learns.",
        tags: ["Reinforcement learning", "Q-learning", "Visualisation"],
        links: [{ label: "Open visualiser", url: "https://arpitprk89.github.io/rl-visuliser/" }]
      },
      {
        number: "04", status: "SOURCE CODE", name: "Bayesian Decision Maker", subtitle: "Reasoning under uncertainty",
        description: "An independent project exploring Bayesian inference for decision-making when outcomes are uncertain, informed by an interest in computational decision systems.",
        tags: ["Python", "Bayesian inference", "Decision systems"],
        links: [{ label: "View repository", url: "https://github.com/arpitprk89/bayesian-decision-maker" }]
      },
      {
        number: "05", status: "RESEARCH CONCEPT", name: "Vidya Yatra", subtitle: "The journey of learning",
        description: "An interactive exploration of India’s school journey from Class 1 to 12, including subject-stream choices, social expectations and how exam systems can influence future decisions. Research models are distinguished from sourced figures.",
        tags: ["Education", "Research communication", "Interactive web"],
        links: [{ label: "Explore the project", url: "https://arpitprk89.github.io/-Vidya-Yatra/" }]
      },
      {
        number: "06", status: "IN PROGRESS", name: "33 KOTI", subtitle: "The inner pattern study",
        description: "An exploratory project asking whether traditional categories can be examined as recurring inner qualities and family patterns. The idea remains a hypothesis, not established psychological or scientific proof.",
        tags: ["Culture", "Human behaviour", "Hypothesis testing"],
        links: [{ label: "Explore the project", url: "https://arpitprk89.github.io/33-KOTI/" }]
      },
      {
        number: "07", status: "SOURCE CODE", name: "Cognitive AI Simulator", subtitle: "State, decisions and memory",
        description: "A small web experiment exploring how a changing internal state—such as mood, stress and focus—might be represented alongside decisions and a running memory log.",
        tags: ["HTML", "State modelling", "Cognitive computing"],
        links: [{ label: "View repository", url: "https://github.com/arpitprk89/cognitive-ai-simulator" }]
      }
    ],
    note: "These are student-led experiments. Where I use hand-picked weights, illustrative examples or hypotheses, I aim to say so clearly rather than imply validation that has not happened.",
    allRepos: "https://github.com/arpitprk89?tab=repositories"
  },
  press: {
    kicker: "04 / PRESS & FEATURES",
    title: "Work that travelled beyond my desk.",
    summary: "Selected coverage of my projects and learning journey. Links open the original publisher pages.",
    items: [
      {
        publication: "THE HINDU",
        label: "PRESS FEATURE",
        title: "Teen beats odds, builds app to help peers",
        description: "Read the original feature on The Hindu about a young student building an app to help peers.",
        url: "https://www.thehindu.com/incoming/teen-beats-odds-builds-app-to-help-peers/article71691167.ece",
        featured: true,
        action: "Read on The Hindu"
      },
      {
        publication: "SHEKHAWATI LIVE",
        label: "REGIONAL FEATURE · 29 SEP 2026",
        title: "A feature from Shrimadhopur",
        description: "A regional article covering my early AI and digital projects, including Brain 2.0, Vidya Yatra, 33 KOTI and RL Visualiser.",
        url: "https://shekhawatilive.com/sikar/shrimadhopur-16-year-old-arpit-parik-ai-projects.html/",
        featured: false,
        action: "Read the article"
      }
    ]
  },
  journey: {
    kicker: "05 / MILESTONES",
    title: "A path still in progress.",
    summary: "A few public milestones that mark the evolution of my work so far.",
    items: [
      { date: "15 OCTOBER 2026", title: "ARPIK.AI went live", description: "Published a student-centred reflection and decision-support project, shaped by the belief that guidance should help people think—not make choices on their behalf." },
      { date: "29 SEPTEMBER 2026", title: "Featured by Shekhawati Live", description: "A regional article covered my early AI and digital projects, including Brain 2.0, Vidya Yatra, 33 KOTI and RL Visualiser.", url: "https://shekhawatilive.com/sikar/shrimadhopur-16-year-old-arpit-parik-ai-projects.html/", linkLabel: "Read the article" }
    ]
  },
  principles: {
    kicker: "06 / APPROACH",
    title: "Build carefully. Think clearly.",
    summary: "The process matters as much as the prototype: a useful idea should be understandable, inspectable and honest about its limits.",
    points: [
      "Start with a question that matters, rather than choosing technology first.",
      "Build a small experiment that makes the idea easier to inspect.",
      "Separate facts, assumptions, hypotheses and illustrative examples.",
      "Review limitations, learn from feedback and communicate clearly."
    ],
    beyondTitle: "Beyond code",
    beyondParagraphs: [
      "Physics, mathematics, dance and storytelling give me different ways to think. I am interested in technology that makes learning and opportunity feel more accessible to students who may not have a large ecosystem around them.",
      "My next step is to keep improving the foundations—programming, mathematics, probability and careful experimentation—while continuing to build."
    ]
  },
  contact: {
    kicker: "07 / CONTACT",
    title: "Let’s exchange thoughtful questions.",
    description: "For conversations about AI, student-centred technology, projects or learning, please get in touch.",
    items: [
      { label: "EMAIL", value: "arpitpareek79@gmail.com", url: "mailto:arpitpareek79@gmail.com" },
      { label: "LINKEDIN", value: "Connect professionally", url: "https://www.linkedin.com/in/arpit-pareek-83b533361/" },
      { label: "GITHUB", value: "Code and experiments", url: "https://github.com/arpitprk89" },
      { label: "AZ GROUP / ARPIT’S ZONE", value: "Explore the wider initiative", url: "https://arpitszone.netlify.app/" }
    ]
  }
};
