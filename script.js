(function () {
  const LANG_KEY = "hmd_lang";
  const THEME_KEY = "hmd_theme";

  // 👉 Replace with your own endpoint (Google Apps Script / backend)
  // Example: const FORM_ENDPOINT = "https://script.google.com/macros/s/XXXXX/exec";
  const FORM_ENDPOINT = ""; // leave empty until you have a URL

  const dict = {
    // (same dictionary as before — shortened comment)
    en: {
      "brand.name": "HMDigital",
      "brand.tagline": "Digital outcomes with boardroom confidence.",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      "hero.kicker": "Studio-level creativity. Corporate-level discipline.",
      "hero.title": "We architect websites and apps that belong in the boardroom.",
      "hero.subtitle":
        "HMDigital combines senior strategy, precise design and clean engineering to build digital experiences your clients, investors and partners actually trust.",
      "hero.cta.primary": "Book a strategy call",
      "hero.cta.secondary": "View detailed services",
      "hero.meta.clients":
        "Made for founders, marketing leaders and product teams that need to look established.",
      "hero.stats.1.label": "Typical project span",
      "hero.stats.1.value": "4–8 weeks",
      "hero.stats.2.label": "Core focus",
      "hero.stats.2.value": "Web, apps, SEO",
      "hero.stats.3.label": "Engagements",
      "hero.stats.3.value": "Retainer & project",

      "home.services.title": "A focused corporate services stack.",
      "home.services.subtitle":
        "We go deep on the digital pieces that actually matter at leadership level.",
      "home.services.link": "View detailed services",

      "home.projects.title": "Selected recent projects.",
      "home.projects.subtitle":
        "A glimpse of work for teams that need to look established and reliable.",
      "projects.startupsolution.title": "Startup Solution",
      "projects.startupsolution.copy":
        "A clear, metrics-led presence for a modern consultancy.",
      "projects.palais.title": "Le Palais Shahnawaz",
      "projects.palais.copy":
        "A luxurious yet structured experience for a hospitality brand.",
      "projects.viewSite": "Open live site",

      "home.cta.title": "Ready to present your company at a new level?",
      "home.cta.copy":
        "Share where you are today and where you need to be in 6–12 months. We’ll reply with a clear, costed plan and realistic timeline.",
      "home.cta.button": "Start the conversation",

      "services.kicker": "Services",
      "services.pageTitle": "Capabilities built for serious teams.",
      "services.pageSubtitle":
        "We keep our offering tight and execute it with the structure, documentation and clarity you’d expect from a large agency.",
      "services.webdev.title": "Web Development",
      "services.webdev.copy":
        "Enterprise-ready builds with clear architecture and tidy handover.",
      "services.webdesign.title": "Web Design",
      "services.webdesign.copy":
        "Minimal, confident interfaces that feel premium without being loud.",
      "services.appdev.title": "App Development",
      "services.appdev.copy":
        "Interfaces and internal tools that match how your teams really work.",
      "services.seo.title": "SEO",
      "services.seo.copy":
        "Solid foundations that compound quietly over time.",

      "services.webdev.label": "Custom builds • Replatforming • Optimisation",
      "services.webdev.detail":
        "We architect, build and refine sites on modern stacks. Expect clear structure, performance, security and a clean handover.",
      "services.webdesign.label": "UX • UI • Design systems",
      "services.webdesign.detail":
        "We design calm, conversion-driven interfaces that respect your brand guidelines and your users’ time.",
      "services.appdev.label": "Web apps • Internal tools • MVPs",
      "services.appdev.detail":
        "From internal tools to client portals, we build apps that integrate into your stack and reduce manual work.",
      "services.seo.label": "Technical audits • Content strategy",
      "services.seo.detail":
        "We align performance, IA and content so search engines and humans both understand what you do.",

      "services.cta.title": "Not sure where to start?",
      "services.cta.copy":
        "Share your current site and goals. We’ll map a phased plan that respects your budget and internal bandwidth.",
      "services.cta.button": "Talk to HMDigital",

      "about.kicker": "About",
      "about.pageTitle": "A senior, compact team with a big-company mindset.",
      "about.pageSubtitle":
        "HMDigital operates with the calm, structure and reliability of a large agency, while staying lean and close to your reality.",
      "about.who.title": "Who we are",
      "about.who.copy":
        "We are an independent studio focused on corporate-level digital execution for teams who value clarity, precision and results over noise.",
      "about.mission.title": "Our mission",
      "about.mission.copy":
        "We build websites, apps and SEO foundations that earn trust from your clients and stakeholders, while staying maintainable for your internal team.",
      "about.values.title": "Values",
      "about.values.1":
        "Clarity over complexity. We remove noise and design around essentials.",
      "about.values.2":
        "Reliability over hype. We favour stable, well-tested decisions.",
      "about.values.3":
        "Partnership over one-offs. We aim to be a trusted, long-term collaborator.",

      "testimonials.kicker": "Testimonials",
      "testimonials.pageTitle": "Quiet results. Clear feedback.",
      "testimonials.pageSubtitle":
        "A sample of comments from teams that trust us with their digital presence.",
      "testimonials.1.quote":
        "“HMDigital feels like an internal team. Deadlines are clear, communication is calm, and the work is consistently on point.”",
      "testimonials.1.name": "Amir L.",
      "testimonials.1.role": "Founder, consultancy",
      "testimonials.2.quote":
        "“They rebuilt our site with a cleaner structure and stronger SEO. Enquiries increased without any big launch noise.”",
      "testimonials.2.name": "Claire P.",
      "testimonials.2.role": "Marketing lead, hospitality brand",
      "testimonials.3.quote":
        "“The team is senior, pragmatic and reliable. They present options with trade-offs, which makes decisions easy.”",
      "testimonials.3.name": "Jonas K.",
      "testimonials.3.role": "Product lead, SaaS",
      "testimonials.cta.title": "Want to build a similar partnership?",
      "testimonials.cta.copy":
        "Share your context and constraints. We’ll outline how we can support you and what a realistic first phase looks like.",
      "testimonials.cta.button": "Discuss your project",

      "contact.kicker": "Contact",
      "contact.pageTitle":
        "Share a few details. We’ll respond within two business days.",
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
        "Tell us about your site, goals and timing.",
      "contact.form.submit": "Send message",
      "contact.form.note":
        "This form uses front-end JavaScript to record your details and can forward them to a Google Sheet or document via a simple endpoint.",
      "contact.form.success":
        "Thank you. Your message has been recorded. If a spreadsheet endpoint is configured, your details have also been sent there.",
      "contact.aside.title": "Prefer email?",
      "contact.aside.copy":
        "You can also send a short brief by email. Include your current URL, budget range, and ideal start date.",

      "footer.copy": "Quietly building confident digital experiences.",

      "validation.required": "This field is required.",
      "validation.email": "Please enter a valid email address."
    },

    fr: {
      "brand.name": "HMDigital",
      "brand.tagline": "Des résultats digitaux taillés pour le board.",
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.about": "Agence",
      "nav.testimonials": "Témoignages",
      "nav.contact": "Contact",
      "hero.kicker": "Créativité de studio. Discipline corporate.",
      "hero.title":
        "Nous architecturons des sites et apps faits pour la salle du conseil.",
      "hero.subtitle":
        "HMDigital réunit stratégie senior, design précis et développement maîtrisé pour créer des expériences digitales qui inspirent confiance à vos clients et partenaires.",
      "hero.cta.primary": "Planifier un appel",
      "hero.cta.secondary": "Voir les services détaillés",
      "hero.meta.clients":
        "Pensé pour les fondateurs, responsables marketing et product teams qui doivent paraître établis.",
      "hero.stats.1.label": "Durée typique d’un projet",
      "hero.stats.1.value": "4–8 semaines",
      "hero.stats.2.label": "Expertises clés",
      "hero.stats.2.value": "Web, apps, SEO",
      "hero.stats.3.label": "Engagements",
      "hero.stats.3.value": "Récurrent & projet",

      "home.services.title": "Un socle de services corporate ciblé.",
      "home.services.subtitle":
        "Nous nous concentrons sur les briques digitales qui comptent réellement au niveau direction.",
      "home.services.link": "Voir le détail des services",

      "home.projects.title": "Quelques projets récents.",
      "home.projects.subtitle":
        "Un aperçu de réalisations pour des équipes qui doivent paraître solides et fiables.",
      "projects.startupsolution.title": "Startup Solution",
      "projects.startupsolution.copy":
        "Une présence claire et orientée métriques pour un cabinet moderne.",
      "projects.palais.title": "Le Palais Shahnawaz",
      "projects.palais.copy":
        "Une expérience digitale structurée pour une marque hôtelière haut de gamme.",
      "projects.viewSite": "Ouvrir le site",

      "home.cta.title": "Prêt à élever l’image de votre entreprise ?",
      "home.cta.copy":
        "Expliquez où vous en êtes aujourd’hui et où vous devez être dans 6–12 mois. Nous revenons avec un plan clair et chiffré.",
      "home.cta.button": "Lancer la discussion",

      "services.kicker": "Services",
      "services.pageTitle": "Des expertises pour des équipes exigeantes.",
      "services.pageSubtitle":
        "Une offre resserrée, exécutée avec la structure et la documentation d’une grande agence.",
      "services.webdev.title": "Développement web",
      "services.webdev.copy":
        "Des sites robustes, bien structurés, avec une passation propre.",
      "services.webdesign.title": "Design de sites",
      "services.webdesign.copy":
        "Des interfaces calmes et premium, loin du bruit.",
      "services.appdev.title": "Développement d’applications",
      "services.appdev.copy":
        "Des interfaces et outils internes adaptés à vos usages.",
      "services.seo.title": "SEO",
      "services.seo.copy":
        "Des bases solides qui progressent discrètement dans le temps.",

      "services.webdev.label": "Sur-mesure • Refonte • Optimisation",
      "services.webdev.detail":
        "Nous concevons, développons et optimisons des sites sur des stacks modernes, avec performance, sécurité et maintenabilité au centre.",
      "services.webdesign.label": "UX • UI • Design system",
      "services.webdesign.detail":
        "Nous dessinons des interfaces claires, documentées, prêtes pour vos équipes.",
      "services.appdev.label": "Apps web • Outils internes • MVP",
      "services.appdev.detail":
        "Des applications qui s’intègrent à votre stack et réduisent le travail manuel.",
      "services.seo.label": "Audits techniques • Contenus",
      "services.seo.detail":
        "Nous alignons performance, structure et contenu pour que moteurs et humains vous comprennent.",

      "services.cta.title": "Difficile de choisir par où commencer ?",
      "services.cta.copy":
        "Partagez votre site actuel et vos objectifs. Nous proposons un plan par étapes, adapté à votre budget.",
      "services.cta.button": "Parler à HMDigital",

      "about.kicker": "À propos",
      "about.pageTitle":
        "Une petite équipe senior, une vision de grande entreprise.",
      "about.pageSubtitle":
        "Nous travaillons avec la structure et la fiabilité d’une grande agence, tout en restant proches du terrain.",
      "about.who.title": "Qui nous sommes",
      "about.who.copy":
        "Un studio indépendant dédié aux projets digitaux de niveau corporate pour des équipes qui privilégient la clarté et les résultats.",
      "about.mission.title": "Notre mission",
      "about.mission.copy":
        "Créer des sites, apps et fondations SEO qui inspirent confiance à vos clients tout en restant gérables pour vos équipes.",
      "about.values.title": "Valeurs",
      "about.values.1":
        "Clarté avant complexité. Nous retirons le superflu.",
      "about.values.2":
        "Fiabilité avant effets de mode. Nous privilégions les choix stables.",
      "about.values.3":
        "Partenariat avant one-shot. Nous visons une relation durable.",

      "testimonials.kicker": "Témoignages",
      "testimonials.pageTitle": "Des résultats discrets, des retours clairs.",
      "testimonials.pageSubtitle":
        "Quelques retours d’équipes qui nous confient leur présence digitale.",
      "testimonials.1.quote":
        "« HMDigital fonctionne comme une équipe interne. Les délais sont clairs, le ton est calme et le travail est toujours au niveau. »",
      "testimonials.1.name": "Amir L.",
      "testimonials.1.role": "Fondateur, cabinet",
      "testimonials.2.quote":
        "« Ils ont refondu notre site avec une structure plus claire et un meilleur SEO. Les demandes ont augmenté sans grand lancement. »",
      "testimonials.2.name": "Claire P.",
      "testimonials.2.role": "Responsable marketing, hôtellerie",
      "testimonials.3.quote":
        "« L’équipe est senior, pragmatique et fiable. Les décisions sont simples grâce aux options et arbitrages qu’ils présentent. »",
      "testimonials.3.name": "Jonas K.",
      "testimonials.3.role": "Responsable produit, SaaS",
      "testimonials.cta.title": "Envie d’une collaboration similaire ?",
      "testimonials.cta.copy":
        "Expliquez votre contexte. Nous détaillons comment nous pouvons vous accompagner et à quoi ressemble une première phase.",
      "testimonials.cta.button": "Parler de votre projet",

      "contact.kicker": "Contact",
      "contact.pageTitle":
        "Partagez quelques éléments. Réponse sous deux jours ouvrés.",
      "contact.pageSubtitle":
        "Pas de démarchage agressif, simplement une vision claire de ce que nous pouvons faire.",
      "contact.form.name.label": "Votre nom",
      "contact.form.name.placeholder": "Nom complet",
      "contact.form.email.label": "Email",
      "contact.form.email.placeholder": "vous@entreprise.com",
      "contact.form.budget.label": "Budget approximatif",
      "contact.form.budget.placeholder": "ex. 5k–15k €",
      "contact.form.message.label": "Projet ou contexte",
      "contact.form.message.placeholder":
        "Parlez-nous de votre site, de vos objectifs et de votre timing.",
      "contact.form.submit": "Envoyer le message",
      "contact.form.note":
        "Ce formulaire utilise uniquement du JavaScript côté client et peut envoyer vos détails vers un Google Sheet ou document via un simple endpoint.",
      "contact.form.success":
        "Merci. Votre message a été enregistré. S’il y a un endpoint configuré, vos informations y ont également été envoyées.",
      "contact.aside.title": "Vous préférez l’e-mail ?",
      "contact.aside.copy":
        "Envoyez un bref descriptif avec votre URL actuelle, votre budget et votre date de démarrage souhaitée.",

      "footer.copy": "Nous créons des expériences digitales confiantes et discrètes.",

      "validation.required": "Ce champ est obligatoire.",
      "validation.email": "Merci d’indiquer une adresse e-mail valide."
    }
  };

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  function currentLang() {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === "fr" ? "fr" : "en";
  }

  function applyLang(lang) {
    const d = dict[lang] || dict.en;
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (d[key]) el.textContent = d[key];
    });

    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (d[key]) el.setAttribute("placeholder", d[key]);
    });

    $$(".lang-btn").forEach((btn) => {
      btn.classList.toggle("lang-active", btn.dataset.lang === lang);
    });
  }

  function initLang() {
    const lang = currentLang();
    applyLang(lang);

    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.dataset.lang;
        localStorage.setItem(LANG_KEY, chosen);
        applyLang(chosen);
      });
    });
  }

  function currentTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function initTheme() {
    applyTheme(currentTheme());
    const btn = $(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  function initYear() {
    $$("#year").forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  function initNav() {
    const nav = $(".site-nav");
    const toggle = $(".nav-toggle");
    if (!nav || !toggle) return;
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const open = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initCursor() {
    const dot = $(".cursor-dot");
    if (!dot) return;
    const mql = window.matchMedia("(max-width: 780px)");
    if (mql.matches) {
      dot.style.display = "none";
      return;
    }

    let mx = 0,
      my = 0,
      dx = 0,
      dy = 0;

    window.addEventListener("pointermove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function loop() {
      dx += (mx - dx) * 0.2;
      dy += (my - dy) * 0.2;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      requestAnimationFrame(loop);
    }
    loop();

    const targets = $$("a, button, .card");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => dot.classList.add("active"));
      el.addEventListener("mouseleave", () => dot.classList.remove("active"));
    });
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const d = Number(entry.target.dataset.delay || 0);
            setTimeout(() => entry.target.classList.add("visible"), d);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    els.forEach((el, i) => {
      el.dataset.delay = (i % 6) * 90;
      io.observe(el);
    });
  }

  function initIntroText() {
    const items = $$("[data-intro]");
    if (!items.length) return;
    items.forEach((el, i) => {
      const delay = 220 + i * 110;
      setTimeout(() => {
        el.style.transition = `opacity 520ms cubic-bezier(.22,1,.36,1), transform 520ms cubic-bezier(.22,1,.36,1)`;
        el.style.opacity = "1";
        el.style.transform = "translate3d(0,0,0)";
      }, delay);
    });
  }

  function initIntroOverlay() {
    const overlay = $(".intro-overlay");
    if (!overlay) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hide = () => {
      overlay.classList.add("hidden");
      overlay.addEventListener(
        "transitionend",
        () => (overlay.style.display = "none"),
        { once: true }
      );
    };

    if (prefersReduced) {
      hide();
      return;
    }
    setTimeout(hide, 1400);
  }

  function initHeroParallax() {
    const container = $(".hero-layers");
    if (!container) return;
    const layers = $$("[data-depth]", container);
    if (!layers.length) return;

    function update() {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0.1);
        layer.style.transform = `translate3d(${(window.innerWidth / 2 - cx) * depth}px, ${
          (window.innerHeight / 2 - cy) * depth
        }px, 0)`;
      });
    }
    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
  }

  function initTilt() {
    const cards = $$("[data-tilt]");
    if (!cards.length) return;
    const mobile = window.matchMedia("(max-width: 780px)");
    if (mobile.matches) return;

    cards.forEach((card) => {
      let frame;
      card.addEventListener("pointermove", (e) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          const rx = ((y - r.height / 2) / r.height) * -10;
          const ry = ((x - r.width / 2) / r.width) * 10;
          card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translate3d(0,-4px,0)`;
        });
      });
      card.addEventListener("pointerleave", () => {
        if (frame) cancelAnimationFrame(frame);
        card.style.transform = "rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
      });
    });
  }

  function initContactForm() {
    const form = $(".contact-form");
    if (!form) return;

    function t(key) {
      const lang = currentLang();
      const d = dict[lang] || dict.en;
      return d[key] || dict.en[key] || "";
    }

    function setError(name, type) {
      const err = form.querySelector(`[data-error-for="${name}"]`);
      if (!err) return;
      const key = type === "email" ? "validation.email" : "validation.required";
      err.textContent = t(key);
    }

    function clearErrors() {
      $$(".field-error", form).forEach((el) => (el.textContent = ""));
    }

    async function sendToEndpoint(payload) {
      if (!FORM_ENDPOINT) {
        console.log("Form submission payload (no endpoint configured):", payload);
        return;
      }
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const text = await res.text();
        console.log("Endpoint response:", text);
      } catch (err) {
        console.error("Error sending to endpoint:", err);
      }
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrors();

      const name = $("#name", form);
      const email = $("#email", form);
      const budget = $("#budget", form);
      const message = $("#message", form);
      const success = $(".form-success", form);

      let valid = true;
      if (!name.value.trim()) {
        setError("name", "required");
        valid = false;
      }
      if (!email.value.trim()) {
        setError("email", "required");
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setError("email", "email");
        valid = false;
      }
      if (!budget.value.trim()) {
        setError("budget", "required");
        valid = false;
      }
      if (!message.value.trim()) {
        setError("message", "required");
        valid = false;
      }

      if (!valid) return;

      const payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        budget: budget.value.trim(),
        message: message.value.trim(),
        timestamp: new Date().toISOString(),
      };

      // Send to console and optional external endpoint (Sheets / Docs via Apps Script)
      console.log("Form payload:", payload);
      sendToEndpoint(payload);

      if (success) {
        success.hidden = false;
        success.style.opacity = "0";
        success.style.transform = "translate3d(0,8px,0)";
        requestAnimationFrame(() => {
          success.style.transition =
            "opacity 480ms cubic-bezier(.22,1,.36,1), transform 480ms cubic-bezier(.22,1,.36,1)";
          success.style.opacity = "1";
          success.style.transform = "translate3d(0,0,0)";
        });
      }

      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initYear();
    initTheme();
    initLang();
    initNav();
    initCursor();
    initReveal();
    initHeroParallax();
    initTilt();
    initIntroOverlay();
    initIntroText();
    initContactForm();
  });
})();

