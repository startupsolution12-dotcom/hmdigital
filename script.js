// HMDigital 2.0 – interactions, theme, language, animations

(function () {
  const LANG_STORAGE_KEY = "hmdigital-lang";
  const THEME_STORAGE_KEY = "hmdigital-theme";
  const EASING_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

  // ---------------------------------------------------------------------------
  // Translations (same idea as before – EN + FR)
  // ---------------------------------------------------------------------------

  const translations = {
    en: {
      "brand.name": "HMDigital",
      "brand.tagline": "Quietly powerful digital partnerships.",

      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",

      "hero.kicker": "Digital partner for serious teams.",
      "hero.title": "Corporate-grade web experiences with startup speed.",
      "hero.subtitle":
        "We combine clean design, reliable engineering, and calm communication to ship sites and apps your clients actually trust.",
      "hero.cta.primary": "Schedule a call",
      "hero.cta.secondary": "View our capabilities",
      "hero.stats.1.label": "Typical project span",
      "hero.stats.1.value": "4–8 weeks",
      "hero.stats.2.label": "Core focus",
      "hero.stats.2.value": "Web, apps, SEO",
      "hero.stats.3.label": "Engagements",
      "hero.stats.3.value": "Flexible, transparent",

      "home.services.title": "A focused set of services, delivered like a large agency.",
      "home.services.subtitle":
        "We stay lean but operate with enterprise-level processes, documentation and reliability.",
      "home.services.link": "Explore our service breakdown",

      "home.projects.title": "Selected recent projects.",
      "home.projects.subtitle":
        "Concrete work for teams that need to look established and operate with confidence.",
      "projects.startupsolution.title": "Startup Solution",
      "projects.startupsolution.copy":
        "A clear, metrics-focused presence for a lean consultancy.",
      "projects.palais.title": "Le Palais Shahnawaz",
      "projects.palais.copy":
        "A rich hospitality experience that still feels clean and corporate.",
      "projects.viewSite": "Open live site",

      "home.cta.title": "Ready to look like the serious partner you are?",
      "home.cta.copy":
        "Share your current situation and constraints. We’ll respond with a clear, budget-aligned proposal.",
      "home.cta.button": "Start the project conversation",

      "services.kicker": "Services",
      "services.pageTitle":
        "A precise set of capabilities, delivered with corporate discipline.",
      "services.pageSubtitle":
        "We’re senior, opinionated and direct about what will move the needle for you.",

      "services.webdev.title": "Web Development",
      "services.webdev.copy":
        "Robust builds on modern stacks with performance, security and maintainability at the core.",
      "services.webdesign.title": "Web Design",
      "services.webdesign.copy":
        "Minimal, conversion-driven interfaces tailored to your brand and audience.",
      "services.appdev.title": "App Development",
      "services.appdev.copy":
        "Web and internal apps that streamline workflows and scale across teams.",
      "services.seo.title": "SEO",
      "services.seo.copy":
        "Technical SEO and content structure that quietly move you up in search.",

      "services.webdev.label": "Custom builds • Replatforming • Optimisation",
      "services.webdev.detail":
        "From marketing sites to product interfaces, we build performant, maintainable experiences using modern stacks. We document decisions and hand over cleanly to your internal teams.",
      "services.webdesign.label": "UX • UI • Design systems",
      "services.webdesign.detail":
        "We design clear, premium interfaces that respect your brand and your users’ time. Every layout is purposeful, with conversions and clarity at the center.",
      "services.appdev.label": "Web apps • Internal tools • MVPs",
      "services.appdev.detail":
        "We create focused applications that integrate with your existing stack, automate manual work and keep performance and security in focus.",
      "services.seo.label": "Technical audits • Content strategy",
      "services.seo.detail":
        "We align site structure, performance and content so search engines can understand and rank you. No gimmicks, just solid foundations.",

      "services.cta.title": "Need help prioritising what to do first?",
      "services.cta.copy":
        "Share your current site and goals. We’ll map out a phased approach that respects your budget and internal capacity.",
      "services.cta.button": "Talk to HMDigital",

      "about.kicker": "About HMDigital",
      "about.pageTitle": "A small, senior team with a big-company mindset.",
      "about.pageSubtitle":
        "We operate with the calm, structure and reliability you expect from a large agency, without the overhead or noise.",
      "about.who.title": "Who we are",
      "about.who.copy":
        "HMDigital is an independent studio focused on delivering corporate-grade digital work for teams that value clarity, precision and results over hype.",
      "about.mission.title": "Our mission",
      "about.mission.copy":
        "We build websites, apps and SEO foundations that earn trust from your clients and stakeholders, while staying maintainable for your teams.",
      "about.values.title": "Values",
      "about.values.1":
        "Clarity over complexity. We remove noise and design around essentials.",
      "about.values.2":
        "Reliability over hype. We value stability and well-tested decisions.",
      "about.values.3":
        "Partnership over one-off projects. We aim to be a long-term, trusted collaborator.",

      "testimonials.kicker": "Testimonials",
      "testimonials.pageTitle": "Quiet results, clear feedback.",
      "testimonials.pageSubtitle":
        "A selection of comments from teams we support on an ongoing basis.",
      "testimonials.1.quote":
        "“HMDigital feels like an internal team. Deadlines are clear, communication is calm, and the work is consistently on point.”",
      "testimonials.1.name": "Amir L.",
      "testimonials.1.role": "Founder, startup consultancy",
      "testimonials.2.quote":
        "“They rebuilt our site with a cleaner structure and better SEO. Enquiries increased without any big launch noise.”",
      "testimonials.2.name": "Claire P.",
      "testimonials.2.role": "Marketing lead, hospitality brand",
      "testimonials.3.quote":
        "“The team is senior, pragmatic and reliable. They give us options and explain trade-offs, which makes decisions easy.”",
      "testimonials.3.name": "Jonas K.",
      "testimonials.3.role": "Product lead, SaaS company",
      "testimonials.cta.title": "Want to build a similar partnership?",
      "testimonials.cta.copy":
        "Share your context and constraints. We’ll outline how we can support you and what a first phase might look like.",
      "testimonials.cta.button": "Discuss your project",

      "contact.kicker": "Contact",
      "contact.pageTitle":
        "Share a few details and we’ll respond within two business days.",
      "contact.pageSubtitle":
        "No hard sell. Just a clear view of how we can help and what it might cost.",
      "contact.form.name.label": "Your name",
      "contact.form.name.placeholder": "Full name",
      "contact.form.email.label": "Email",
      "contact.form.email.placeholder": "you@company.com",
      "contact.form.budget.label": "Approximate budget",
      "contact.form.budget.placeholder": "e.g. $5k–$15k",
      "contact.form.message.label": "Project or context",
      "contact.form.message.placeholder":
        "Tell us about your current site, goals and timeline.",
      "contact.form.submit": "Send message",
      "contact.form.note":
        "This form is for demonstration only – once submitted, you’ll see a success state instead of sending data.",
      "contact.form.success":
        "Thank you. Your message has been recorded locally. In a real project, this is where we would confirm your submission.",
      "contact.aside.title": "Prefer email?",
      "contact.aside.copy":
        "You can also share a short brief directly. Include your current URL, budget range and ideal start date.",

      "footer.copy": "Quietly building confident digital experiences.",

      "validation.required": "This field is required.",
      "validation.email": "Please enter a valid email address."
    },

    fr: {
      "brand.name": "HMDigital",
      "brand.tagline": "Des partenariats digitaux discrets et puissants.",

      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.about": "Agence",
      "nav.testimonials": "Témoignages",
      "nav.contact": "Contact",

      "hero.kicker": "Partenaire digital pour équipes exigeantes.",
      "hero.title": "Des expériences web de niveau corporate, au rythme d’une startup.",
      "hero.subtitle":
        "Nous réunissons design clair, développement fiable et communication sereine pour livrer des sites et apps qui inspirent confiance.",
      "hero.cta.primary": "Planifier un appel",
      "hero.cta.secondary": "Voir nos expertises",
      "hero.stats.1.label": "Durée typique d’un projet",
      "hero.stats.1.value": "4–8 semaines",
      "hero.stats.2.label": "Expertises clés",
      "hero.stats.2.value": "Sites, apps, SEO",
      "hero.stats.3.label": "Engagements",
      "hero.stats.3.value": "Flexibles, transparents",

      "home.services.title":
        "Un ensemble de services ciblés, délivrés comme une grande agence.",
      "home.services.subtitle":
        "Nous restons légers mais travaillons avec des processus, une documentation et une fiabilité de niveau entreprise.",
      "home.services.link": "Découvrir le détail de nos services",

      "home.projects.title": "Quelques projets récents.",
      "home.projects.subtitle":
        "Des réalisations concrètes pour des équipes qui doivent paraître établies et fiables.",
      "projects.startupsolution.title": "Startup Solution",
      "projects.startupsolution.copy":
        "Une présence claire et orientée métriques pour un cabinet de conseil agile.",
      "projects.palais.title": "Le Palais Shahnawaz",
      "projects.palais.copy":
        "Une expérience hôtelière riche qui reste propre et corporate.",
      "projects.viewSite": "Ouvrir le site",

      "home.cta.title":
        "Prêt à refléter le sérieux de votre équipe ?",
      "home.cta.copy":
        "Expliquez votre situation et vos contraintes. Nous revenons avec une proposition claire, alignée sur votre budget.",
      "home.cta.button": "Lancer la discussion projet",

      "services.kicker": "Services",
      "services.pageTitle":
        "Un périmètre précis, délivré avec rigueur.",
      "services.pageSubtitle":
        "Nous apportons un regard senior, direct, sur ce qui peut vraiment faire progresser vos résultats.",

      "services.webdev.title": "Développement web",
      "services.webdev.copy":
        "Des sites robustes sur des stacks modernes, avec performance, sécurité et maintenabilité au centre.",
      "services.webdesign.title": "Design de sites",
      "services.webdesign.copy":
        "Des interfaces minimalistes et orientées conversion, pensées pour votre marque et votre audience.",
      "services.appdev.title": "Développement d’applications",
      "services.appdev.copy":
        "Des apps web et outils internes qui fluidifient vos flux de travail et se déploient à l’échelle.",
      "services.seo.title": "SEO",
      "services.seo.copy":
        "Des fondations techniques et éditoriales pour vous faire progresser durablement dans les résultats de recherche.",

      "services.webdev.label": "Sur-mesure • Refonte • Optimisation",
      "services.webdev.detail":
        "Du site marketing à l’interface produit, nous créons des expériences performantes et maintenables. Nous documentons les choix et assurons une passation claire à vos équipes.",
      "services.webdesign.label": "UX • UI • Design system",
      "services.webdesign.detail":
        "Nous concevons des interfaces premium qui respectent votre identité et le temps de vos utilisateurs.",
      "services.appdev.label": "Apps web • Outils internes • MVP",
      "services.appdev.detail":
        "Nous développons des applications ciblées, intégrées à votre stack, qui automatisent le manuel et gardent performance et sécurité en vue.",
      "services.seo.label": "Audits techniques • Stratégie contenu",
      "services.seo.detail":
        "Nous alignons structure, performance et contenu pour que les moteurs comprennent et valorisent votre site.",

      "services.cta.title": "Besoin d’aide pour prioriser ?",
      "services.cta.copy":
        "Partagez votre site actuel et vos objectifs. Nous proposons un plan par phases adapté à votre budget et votre capacité interne.",
      "services.cta.button": "Parler à HMDigital",

      "about.kicker": "À propos d’HMDigital",
      "about.pageTitle":
        "Une petite équipe senior avec une vision de grande entreprise.",
      "about.pageSubtitle":
        "Nous travaillons avec la structure et la fiabilité d’une grande agence, sans la lourdeur ni le bruit.",
      "about.who.title": "Qui nous sommes",
      "about.who.copy":
        "HMDigital est un studio indépendant qui livre des projets digitaux de niveau corporate pour des équipes qui privilégient la clarté, la précision et les résultats.",
      "about.mission.title": "Notre mission",
      "about.mission.copy":
        "Construire des sites, des apps et des bases SEO qui inspirent confiance à vos clients et parties prenantes, tout en restant gérables pour vos équipes.",
      "about.values.title": "Nos valeurs",
      "about.values.1":
        "La clarté avant la complexité. Nous retirons le superflu pour garder l’essentiel.",
      "about.values.2":
        "La fiabilité avant l’effet de mode. Nous privilégions les décisions stables et éprouvées.",
      "about.values.3":
        "Le partenariat avant le one-shot. Nous visons une collaboration de confiance sur le long terme.",

      "testimonials.kicker": "Témoignages",
      "testimonials.pageTitle": "Des résultats discrets, des retours clairs.",
      "testimonials.pageSubtitle":
        "Une sélection de retours d’équipes que nous accompagnons dans la durée.",
      "testimonials.1.quote":
        "« HMDigital fonctionne comme une équipe interne. Les délais sont clairs, le ton est calme et le travail est toujours au niveau. »",
      "testimonials.1.name": "Amir L.",
      "testimonials.1.role": "Fondateur, cabinet de conseil",
      "testimonials.2.quote":
        "« Ils ont refondu notre site avec une structure plus claire et un meilleur SEO. Les demandes ont augmenté sans grande annonce. »",
      "testimonials.2.name": "Claire P.",
      "testimonials.2.role": "Responsable marketing, hôtellerie",
      "testimonials.3.quote":
        "« L’équipe est senior, pragmatique et fiable. Ils présentent les options et les compromis, ce qui rend les décisions simples. »",
      "testimonials.3.name": "Jonas K.",
      "testimonials.3.role": "Responsable produit, SaaS",
      "testimonials.cta.title": "Envie d’une collaboration similaire ?",
      "testimonials.cta.copy":
        "Expliquez votre contexte et vos contraintes. Nous détaillons comment nous pouvons vous aider et à quoi pourrait ressembler une première phase.",
      "testimonials.cta.button": "Parler de votre projet",

      "contact.kicker": "Contact",
      "contact.pageTitle":
        "Partagez quelques éléments, nous vous répondons sous deux jours ouvrés.",
      "contact.pageSubtitle":
        "Pas de discours agressif, simplement une vision claire de ce que nous pouvons faire et du budget associé.",
      "contact.form.name.label": "Votre nom",
      "contact.form.name.placeholder": "Nom complet",
      "contact.form.email.label": "Email",
      "contact.form.email.placeholder": "vous@entreprise.com",
      "contact.form.budget.label": "Budget approximatif",
      "contact.form.budget.placeholder": "ex. 5k–15k €",
      "contact.form.message.label": "Projet ou contexte",
      "contact.form.message.placeholder":
        "Parlez-nous de votre site actuel, de vos objectifs et de votre timing.",
      "contact.form.submit": "Envoyer le message",
      "contact.form.note":
        "Ce formulaire est une démonstration – après validation, un message de confirmation s’affiche à la place d’un envoi réel.",
      "contact.form.success":
        "Merci. Votre message a été enregistré localement. Dans un projet réel, nous confirmerions ici la bonne réception.",
      "contact.aside.title": "Vous préférez l’e-mail ?",
      "contact.aside.copy":
        "Vous pouvez aussi envoyer un court brief avec votre URL actuelle, votre budget et la date de démarrage souhaitée.",

      "footer.copy": "Nous créons des expériences digitales confiantes et discrètes.",

      "validation.required": "Ce champ est obligatoire.",
      "validation.email": "Merci d’indiquer une adresse e-mail valide."
    }
  };

  function getCurrentLanguage() {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "fr" ? "fr" : "en";
  }

  function setCurrentLanguage(lang) {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n-key]").forEach((el) => {
      const key = el.getAttribute("data-i18n-key");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("lang-active", btn.dataset.lang === lang);
    });
  }

  // Theme --------------------------------------------------------------------

  function getCurrentTheme() {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  function initThemeToggle() {
    const themeBtn = document.querySelector(".theme-toggle");
    if (!themeBtn) return;

    themeBtn.addEventListener("click", () => {
      const current = getCurrentTheme();
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Scroll reveal -----------------------------------------------------------

  function initScrollReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.revealDelay || "0");
            setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el, index) => {
      el.dataset.revealDelay = (index % 6) * 90; // GSAP-like stagger
      observer.observe(el);
    });
  }

  // Intro animation (hero text) ---------------------------------------------

  function runIntroAnimation() {
    const items = Array.from(document.querySelectorAll("[data-intro='stagger']"));
    if (!items.length) return;
    items.forEach((el, index) => {
      const delay = 220 + index * 110;
      setTimeout(() => {
        el.classList.add("intro-visible");
      }, delay);
    });
  }

  // Intro splash overlay ----------------------------------------------------

  function initIntroOverlay() {
    const overlay = document.querySelector(".intro-overlay");
    if (!overlay) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hideOverlay = () => {
      overlay.classList.add("is-hidden");
      overlay.addEventListener(
        "transitionend",
        () => {
          overlay.style.display = "none";
        },
        { once: true }
      );
    };

    if (prefersReduced) {
      hideOverlay();
      return;
    }

    setTimeout(hideOverlay, 1400);
  }

  // Magnetic cursor ---------------------------------------------------------

  function initMagneticCursor() {
    const cursor = document.querySelector(".cursor-dot");
    if (!cursor) return;
    if (window.matchMedia("(max-width: 780px)").matches) {
      cursor.style.display = "none";
      return;
    }

    let mouseX = 0,
      mouseY = 0,
      dotX = 0,
      dotY = 0;

    window.addEventListener("pointermove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    function animate() {
      dotX += (mouseX - dotX) * 0.18;
      dotY += (mouseY - dotY) * 0.18;
      cursor.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      requestAnimationFrame(animate);
    }
    animate();

    const targets = document.querySelectorAll("a, button, .card");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
    });
  }

  // Mobile nav --------------------------------------------------------------

  function initNavToggle() {
    const nav = document.querySelector(".site-nav");
    const toggle = document.querySelector(".nav-toggle");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Contact form validation --------------------------------------------------

  function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    function dict() {
      const lang = getCurrentLanguage();
      return translations[lang] || translations.en;
    }

    function showError(fieldName, type) {
      const d = dict();
      const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
      if (!errorEl) return;
      const key = type === "email" ? "validation.email" : "validation.required";
      errorEl.textContent = d[key];
    }

    function clearErrors() {
      form.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();

      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const budget = form.querySelector("#budget");
      const message = form.querySelector("#message");
      const success = form.querySelector(".form-success");

      let valid = true;
      if (!name.value.trim()) {
        showError("name", "required");
        valid = false;
      }
      if (!email.value.trim()) {
        showError("email", "required");
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError("email", "email");
        valid = false;
      }
      if (!budget.value.trim()) {
        showError("budget", "required");
        valid = false;
      }
      if (!message.value.trim()) {
        showError("message", "required");
        valid = false;
      }

      if (!valid) return;

      if (success) {
        success.hidden = false;
        success.style.opacity = "0";
        success.style.transform = "translate3d(0, 8px, 0)";
        requestAnimationFrame(() => {
          success.style.transition =
            `opacity 480ms ${EASING_OUT}, transform 480ms ${EASING_OUT}`;
          success.style.opacity = "1";
          success.style.transform = "translate3d(0, 0, 0)";
        });
      }

      form.reset();
      form.querySelectorAll("input, textarea").forEach((el) => el.classList.remove("has-value"));
    });

    form.querySelectorAll("input, textarea").forEach((el) => {
      const handler = () => {
        if (el.value.trim()) el.classList.add("has-value");
        else el.classList.remove("has-value");
      };
      el.addEventListener("input", handler);
      handler();
    });
  }

  // Language switch ---------------------------------------------------------

  function initLanguageSwitcher() {
    const current = getCurrentLanguage();
    applyTranslations(current);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setCurrentLanguage(lang);
        applyTranslations(lang);
      });
    });
  }

  // Hero 3D parallax --------------------------------------------------------

  function initHeroParallax() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const orbit1 = hero.querySelector(".hero-orbit-1");
    const orbit2 = hero.querySelector(".hero-orbit-2");

    if (!orbit1 && !orbit2) return;

    let ticking = false;

    function update() {
      const rect = hero.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const depth = Math.max(Math.min(centerOffset / viewportH, 0.6), -0.6);

      if (orbit1) {
        orbit1.style.transform =
          `translate3d(${depth * -45}px, ${depth * -60}px, 0)` +
          ` scale(${1 + depth * 0.12}) rotate3d(1, 0, 0, ${depth * 14}deg)`;
      }

      if (orbit2) {
        orbit2.style.transform =
          `translate3d(${depth * 55}px, ${depth * 40}px, 0)` +
          ` scale(${1 - depth * 0.08}) rotate3d(0, 1, 0, ${depth * -18}deg)`;
      }

      ticking = false;
    }

    update();

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    });
  }

  // Tilt interactions (3D card tilt) ----------------------------------------

  function initTilt() {
    const nodes = document.querySelectorAll("[data-tilt]");
    if (!nodes.length) return;
    const isMobile = window.matchMedia("(max-width: 780px)").matches;
    if (isMobile) return;

    nodes.forEach((card) => {
      const rect = () => card.getBoundingClientRect();
      let frame;

      function handleMove(e) {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const r = rect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          const midX = r.width / 2;
          const midY = r.height / 2;
          const rotateX = ((y - midY) / midY) * -6;
          const rotateY = ((x - midX) / midX) * 6;
          card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -4px, 0)`;
        });
      }

      function reset() {
        if (frame) cancelAnimationFrame(frame);
        card.style.transform = "rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
      }

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", reset);
    });
  }

  // Misc ---------------------------------------------------------------------

  function syncYear() {
    const yearEls = document.querySelectorAll("#year");
    const year = new Date().getFullYear();
    yearEls.forEach((el) => (el.textContent = year));
  }

  // Init ---------------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", () => {
    // Theme first
    applyTheme(getCurrentTheme());

    syncYear();
    initLanguageSwitcher();
    initThemeToggle();
    initScrollReveal();
    initMagneticCursor();
    initNavToggle();
    initContactForm();
    initHeroParallax();
    initTilt();
    initIntroOverlay();
    runIntroAnimation();
  });
})();

