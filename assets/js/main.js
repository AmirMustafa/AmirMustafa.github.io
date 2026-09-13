(() => {
  "use strict";

  const LOCALIZATION_PATH = "assets/data/localization/";

  const LOCALES = [
    { value: "en", flag: "🇺🇸", label: "English (USA)" },
    { value: "en-GB", flag: "🇬🇧", label: "English (UK)" },
    { value: "en-IN", flag: "🇮🇳", label: "English (India)" },
    { value: "hi", flag: "🇮🇳", label: "Hindi" },
    { value: "ar", flag: "🇸🇦", label: "Arabic" },
    { value: "bg", flag: "🇧🇬", label: "Bulgarian" },
    { value: "cz", flag: "🇨🇿", label: "Czech" },
    { value: "da", flag: "🇩🇰", label: "Danish" },
    { value: "de", flag: "🇩🇪", label: "German" },
    { value: "el", flag: "🇬🇷", label: "Greek" },
    { value: "es", flag: "🇪🇸", label: "Spanish" },
    { value: "fi", flag: "🇫🇮", label: "Finnish" },
    { value: "fr", flag: "🇫🇷", label: "French" },
    { value: "hr", flag: "🇭🇷", label: "Croatian" },
    { value: "hu", flag: "🇭🇺", label: "Hungarian" },
    { value: "it", flag: "🇮🇹", label: "Italian" },
    { value: "ja", flag: "🇯🇵", label: "Japanese" },
    { value: "ko", flag: "🇰🇷", label: "Korean" },
    { value: "lt", flag: "🇱🇹", label: "Lithuanian" },
    { value: "nl", flag: "🇳🇱", label: "Dutch" },
    { value: "no", flag: "🇳🇴", label: "Norwegian" },
    { value: "pl", flag: "🇵🇱", label: "Polish" },
    { value: "pt", flag: "🇵🇹", label: "Portuguese" },
    { value: "ro", flag: "🇷🇴", label: "Romanian" },
    { value: "ru", flag: "🇷🇺", label: "Russian" },
    { value: "sv", flag: "🇸🇪", label: "Swedish" },
    { value: "th", flag: "🇹🇭", label: "Thai" },
    { value: "tr", flag: "🇹🇷", label: "Turkish" },
    { value: "uk", flag: "🇺🇦", label: "Ukrainian" },
    { value: "vi", flag: "🇻🇳", label: "Vietnamese" },
    { value: "zh", flag: "🇨🇳", label: "Chinese (Simplified)" },
    { value: "zh-TW", flag: "🇹🇼", label: "Chinese (Traditional)" },
  ];

  let dict = {};
  let fallback = {};

  const t = (key, def) => {
    if (
      dict &&
      Object.prototype.hasOwnProperty.call(dict, key) &&
      dict[key] !== ""
    )
      return dict[key];
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, key))
      return fallback[key];
    return def !== undefined ? def : key;
  };

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };

  /* ---------------- i18n ---------------- */

  async function loadLang(lang) {
    try {
      const res = await fetch(`${LOCALIZATION_PATH}${lang}.json`);
      if (!res.ok) throw new Error("missing locale " + lang);
      dict = await res.json();
    } catch (e) {
      console.warn("Falling back to English for", lang, e);
      dict = fallback;
    }
    applyStaticTranslations();
    updateLangPickerLabel();
    renderAll();
    observeReveals();
    loadMediumBlogs();
  }

  function updateLangPickerLabel() {
    const labelEl = document.getElementById("langPickerLabel");
    if (labelEl && dict && dict.lang) {
      labelEl.textContent = dict.lang.split(",")[0].trim();
    }
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = t(key, node.textContent);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const [attr, key] = node.getAttribute("data-i18n-attr").split(":");
      node.setAttribute(attr, t(key, node.getAttribute(attr)));
    });
  }

  /* ---------------- Scroll reveal ---------------- */

  let revealObserver = null;

  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();

    document
      .querySelectorAll(
        ".ability-card, .project-card, .blog-card, .tl-item, .edu-card, .award-card",
      )
      .forEach((node) => {
        if (!node.classList.contains("reveal-scale"))
          node.classList.add("reveal-scale");
      });

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("visible")
          ) {
            const delay =
              entry.target.dataset.delay ||
              entry.target.dataset.revealDelay ||
              0;
            setTimeout(() => entry.target.classList.add("visible"), delay * 80);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document
      .querySelectorAll(
        ".section .reveal, .reveal-scale, .ability-card, .project-card, .blog-card, .tl-item, .edu-card, .award-card",
      )
      .forEach((node, i) => {
        if (node.classList.contains("visible")) return;
        if (!node.dataset.revealDelay && !node.dataset.delay) {
          node.dataset.revealDelay = String(i % 6);
        }
        revealObserver.observe(node);
      });
  }

  /* ---------------- Hero canvas particles ---------------- */

  function initHeroCanvas() {
    const canvas = document.getElementById("heroCanvas");
    if (
      !canvas ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId = null;
    let w = 0;
    let h = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.min(60, Math.floor(w / 25));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const accent =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--brass")
          .trim() || "#3b82f6";

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.35;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = 0.08 * (1 - dist / 120);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => cancelAnimationFrame(animId);
  }

  /* ---------------- Scroll progress & nav ---------------- */

  function initScrollEffects() {
    const progress = document.getElementById("scrollProgress");
    const nav = document.getElementById("nav");

    window.addEventListener(
      "scroll",
      () => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (progress) progress.style.width = pct + "%";
        if (nav) nav.classList.toggle("scrolled", scrollTop > 40);
      },
      { passive: true },
    );
  }

  /* ---------------- Section renderers ---------------- */

  function renderTags() {
    const wrap = document.getElementById("specialistTags");
    wrap.innerHTML = "";
    const tags = SPECIALIST_TAGS.map((tag) => el("span", "tag", tag));
    tags.forEach((tag) => wrap.appendChild(tag));
    tags.forEach((tag) => wrap.appendChild(tag.cloneNode(true)));
  }

  function skillLogoImageSrc(logoValue) {
    if (!logoValue.startsWith("img:")) return null;
    const payload = logoValue.slice(4);
    const isDark =
      document.body.getAttribute("data-theme") !== "light";
    if (payload.includes("|dark:")) {
      const [light, dark] = payload.split("|dark:");
      return isDark ? dark : light;
    }
    return payload;
  }

  function appendSkillLogo(chip, key) {
    const logoClass =
      typeof SKILL_LOGOS !== "undefined" ? SKILL_LOGOS[key] : null;
    if (!logoClass) return;
    if (logoClass.startsWith("img:")) {
      const img = document.createElement("img");
      img.src = skillLogoImageSrc(logoClass);
      img.alt = "";
      img.className = "ability-chip-logo ability-chip-logo-img";
      img.loading = "lazy";
      img.decoding = "async";
      chip.appendChild(img);
      return;
    }
    const icon = document.createElement("i");
    icon.className = logoClass + " ability-chip-logo";
    icon.setAttribute("aria-hidden", "true");
    chip.appendChild(icon);
  }

  function createAbilityChip(key) {
    const chip = el("span", "ability-chip");
    appendSkillLogo(chip, key);
    chip.appendChild(el("span", "ability-chip-label", t(key, key)));
    return chip;
  }

  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = "";
    SKILL_GROUPS.forEach((group, i) => {
      const card = el("article", "ability-card glass reveal-scale");
      card.dataset.revealDelay = String(i);

      const head = el("header", "ability-card-head");
      const iconWrap = el("span", "ability-card-icon");
      iconWrap.innerHTML = `<i class="${group.icon || "fa-solid fa-star"}" aria-hidden="true"></i>`;
      const meta = el("div", "ability-card-meta");
      meta.appendChild(el("h3", "ability-card-title", group.title));
      meta.appendChild(
        el(
          "p",
          "ability-card-count mono",
          `${group.keys.length} ${t("abilities_items_label", "skills")}`,
        ),
      );
      head.appendChild(iconWrap);
      head.appendChild(meta);
      card.appendChild(head);

      const chips = el("div", "ability-chips");
      group.keys.forEach((k) => chips.appendChild(createAbilityChip(k)));
      card.appendChild(chips);

      grid.appendChild(card);
    });
  }

  const PROJECT_LINK_ICONS = {
    github: "fa-brands fa-github",
    gitlab: "fa-brands fa-gitlab",
    demo: "fa-solid fa-circle-play",
    site: "fa-solid fa-arrow-up-right-from-square",
  };

  function projectLinkLabel(link) {
    if (link.labelKey) return t(link.labelKey, link.labelKey);
    const key = `project_link_${link.kind}`;
    return t(key, link.kind === "site" ? "Live site" : link.kind);
  }

  function renderProjects() {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = "";
    PROJECTS.forEach((p, i) => {
      const links =
        p.links && p.links.length
          ? p.links
          : [{ kind: "github", href: "https://github.com/AmirMustafa" }];
      const card = el(
        "article",
        "project-card reveal-scale" +
          (p.feature ? " feature" : "") +
          (p.logo ? " has-logo" : "") +
          (p.logoWide ? " project-card--logo-wide" : "") +
          (p.detailDesc ? " project-card--detail" : ""),
      );
      card.dataset.revealDelay = String(i % 5);

      const thumb = el("div", "project-thumb" + (p.logo ? " is-logo" : ""));
      const img = new Image();
      img.src = p.img;
      img.alt = t(`project_name_${p.id}`, p.id);
      img.loading = "lazy";
      thumb.appendChild(img);
      thumb.appendChild(el("div", "project-thumb-shade"));
      if (links[0]) {
        const overlay = el(
          "a",
          "project-thumb-link",
          `<span>${t("project_open", "Open")}</span><i class="fa-solid fa-arrow-up-right-from-square"></i>`,
        );
        overlay.href = links[0].href;
        overlay.target = "_blank";
        overlay.rel = "noopener noreferrer";
        overlay.setAttribute(
          "aria-label",
          `${t("project_open", "Open")} ${t(`project_name_${p.id}`, p.id)}`,
        );
        thumb.appendChild(overlay);
      }

      const body = el("div", "project-body");
      const head = el("div", "project-head");
      head.appendChild(
        el("span", "project-index mono", String(i + 1).padStart(2, "0")),
      );
      head.appendChild(el("h3", null, t(`project_name_${p.id}`, p.id)));
      body.appendChild(head);
      const subtitle = t(`project_subtitle_${p.id}`, "");
      if (subtitle)
        body.appendChild(el("p", "project-subtitle mono", subtitle));
      body.appendChild(el("p", "project-desc", t(`project_desc_${p.id}`, "")));

      const tags = el("div", "project-tags");
      t(`project_tech_${p.id}`, "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((tag) => tags.appendChild(el("span", "project-tag", tag)));
      body.appendChild(tags);

      const actions = el("div", "project-actions");
      links.forEach((link) => {
        const a = el(
          "a",
          `project-link project-link--${link.kind}`,
          `<i class="${PROJECT_LINK_ICONS[link.kind] || PROJECT_LINK_ICONS.site}"></i><span>${projectLinkLabel(link)}</span>`,
        );
        a.href = link.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        actions.appendChild(a);
      });
      body.appendChild(actions);

      card.appendChild(thumb);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function renderExperience() {
    const wrap = document.getElementById("expTimeline");
    wrap.innerHTML = "";
    EXPERIENCE.forEach((exp, idx) => {
      const item = el(
        "div",
        "tl-item reveal-scale" +
          (idx === 0 ? " open" : "") +
          (exp.current ? " tl-item--current" : ""),
      );
      item.dataset.revealDelay = String(idx);

      const head = el("div", "tl-head");
      const identity = el("div", "tl-identity");

      if (exp.logo) {
        const logoWrap = el(
          "div",
          "tl-logo" +
            (exp.brandLogo ? " tl-logo--brand" : " tl-logo--fallback"),
        );
        const logoImg = document.createElement("img");
        const logoFallback =
          exp.logoFallback ||
          (typeof EXPERIENCE_LOGO_FALLBACK !== "undefined"
            ? EXPERIENCE_LOGO_FALLBACK
            : "");
        logoImg.src = exp.logo;
        logoImg.alt = t(`experience_${exp.id}`, exp.id);
        logoImg.loading = "lazy";
        logoImg.decoding = "async";
        if (logoFallback) {
          logoImg.addEventListener(
            "error",
            () => {
              if (logoImg.dataset.fallbackApplied === "1") return;
              logoImg.dataset.fallbackApplied = "1";
              logoImg.src = logoFallback;
              logoWrap.classList.remove("tl-logo--brand");
              logoWrap.classList.add("tl-logo--fallback");
            },
            { once: true },
          );
        }
        logoWrap.appendChild(logoImg);
        identity.appendChild(logoWrap);
      }

      const copy = el("div", "tl-copy");
      const titleRow = el("div", "tl-title-row");
      titleRow.appendChild(
        el("div", "tl-org", t(`experience_${exp.id}`, exp.id)),
      );
      if (exp.current) {
        titleRow.appendChild(
          el("span", "tl-badge mono", t("experience_current_badge", "Current")),
        );
      }
      copy.appendChild(titleRow);
      copy.appendChild(
        el("div", "tl-role", t(`experience_${exp.id}_designation`, "")),
      );
      const client = t(`experience_${exp.id}_client`, "");
      if (client) copy.appendChild(el("div", "tl-client", client));
      identity.appendChild(copy);

      const aside = el("div", "tl-aside");
      const meta = el("div", "tl-meta");
      meta.appendChild(
        el("div", "tl-period", t(`experience_${exp.id}_period`, "")),
      );
      meta.appendChild(
        el("div", "tl-location", t(`experience_${exp.id}_location`, "")),
      );
      aside.appendChild(meta);
      aside.appendChild(
        el("div", "tl-toggle", '<i class="fa-solid fa-plus"></i>'),
      );

      head.appendChild(identity);
      head.appendChild(aside);

      const body = el("div", "tl-body");
      const bodyIn = el("div", "tl-body-in");
      const skills = t(`experience_${exp.id}_skills`, "");
      const domain = t(`experience_${exp.id}_domain`, "");
      if (skills) {
        bodyIn.appendChild(
          el(
            "div",
            "tl-skills",
            `${t("experience_skill", "Skills:")} ${skills}`,
          ),
        );
      }
      if (domain) {
        bodyIn.appendChild(
          el(
            "div",
            "tl-skills tl-domain",
            `${t("experience_domain", "Domain:")} ${domain}`,
          ),
        );
      }

      if (exp.points > 0) {
        const ul = el("ul", "tl-points");
        for (let i = 1; i <= exp.points; i++) {
          const text = t(`experience_${exp.id}_point_${i}`, "");
          if (text) ul.appendChild(el("li", null, text));
        }
        if (ul.children.length) bodyIn.appendChild(ul);
      }
      body.appendChild(bodyIn);

      head.addEventListener("click", () => item.classList.toggle("open"));

      item.appendChild(head);
      item.appendChild(body);
      wrap.appendChild(item);
    });
  }

  function renderEducation() {
    const grid = document.getElementById("eduGrid");
    grid.innerHTML = "";
    EDUCATION.forEach((e, i) => {
      const card = el("div", "edu-card reveal-scale");
      card.dataset.revealDelay = String(i);
      card.appendChild(el("div", "edu-period mono", t(e.period, "")));
      card.appendChild(el("h4", null, t(e.title, "")));
      card.appendChild(el("div", "edu-degree", t(e.degree, "")));
      card.appendChild(el("div", "edu-desc", t(e.desc, "")));
      grid.appendChild(card);
    });
  }

  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html || "", "text/html");
    return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
  }

  function trimBlogText(text, maxLen) {
    const clean = (text || "").trim();
    if (clean.length <= maxLen) return clean;
    return clean.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
  }

  function blogImageFromItem(item) {
    if (item.thumbnail) return item.thumbnail;
    const html = item.content || item.description || "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    if (img?.getAttribute("src")) return img.getAttribute("src");
    return "";
  }

  function formatBlogDate(pubDate) {
    if (!pubDate) return "";
    const d = new Date(pubDate);
    if (Number.isNaN(d.getTime())) return pubDate;
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  async function loadMediumBlogs() {
    const grid = document.getElementById("blogGrid");
    const loading = document.getElementById("blogLoading");
    if (!grid) return;

    const username =
      typeof MEDIUM_USERNAME !== "undefined"
        ? MEDIUM_USERNAME
        : "@amirmustafaofficial";
    const limit =
      typeof MEDIUM_BLOG_LIMIT !== "undefined" ? MEDIUM_BLOG_LIMIT : 9;
    const feedUrl = `https://medium.com/feed/${username}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (loading) loading.remove();

      if (data.status !== "ok" || !Array.isArray(data.items) || !data.items.length) {
        grid.innerHTML = "";
        grid.appendChild(
          el("p", "blog-empty", t("blog_empty", "No Medium articles to show right now.")),
        );
        return;
      }

      grid.innerHTML = "";
      data.items.slice(0, limit).forEach((item, i) => {
        const card = el("article", "blog-card glass reveal-scale");
        card.dataset.revealDelay = String(i % 6);

        const thumbSrc = blogImageFromItem(item);
        const thumb = el("a", "blog-thumb");
        thumb.href = item.link;
        thumb.target = "_blank";
        thumb.rel = "noopener noreferrer";
        if (thumbSrc) {
          const img = new Image();
          img.src = thumbSrc;
          img.alt = "";
          img.loading = "lazy";
          img.decoding = "async";
          thumb.appendChild(img);
        } else {
          thumb.appendChild(el("span", "blog-thumb-fallback", "Medium"));
        }
        card.appendChild(thumb);

        const body = el("div", "blog-body");
        body.appendChild(
          el("time", "blog-date mono", formatBlogDate(item.pubDate)),
        );
        const titleLink = el("a", "blog-title", item.title || "");
        titleLink.href = item.link;
        titleLink.target = "_blank";
        titleLink.rel = "noopener noreferrer";
        body.appendChild(titleLink);
        const excerpt = trimBlogText(
          stripHtml(item.description || item.content),
          140,
        );
        body.appendChild(el("p", "blog-excerpt", excerpt));
        const read = el(
          "a",
          "blog-read mono",
          `${t("blog_read_more", "Read on Medium")} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>`,
        );
        read.href = item.link;
        read.target = "_blank";
        read.rel = "noopener noreferrer";
        body.appendChild(read);
        card.appendChild(body);

        grid.appendChild(card);
      });

      observeReveals();
    } catch (err) {
      console.error("Medium blogs:", err);
      if (loading) loading.remove();
      grid.innerHTML = "";
      grid.appendChild(
        el(
          "p",
          "blog-empty",
          t(
            "blog_error",
            "Could not load Medium articles. Visit Medium using the link above.",
          ),
        ),
      );
    }
  }

  function renderVideos() {
    const showcase = document.getElementById("videoShowcase");
    if (!showcase || typeof VIDEOS === "undefined") return;
    showcase.innerHTML = "";
    VIDEOS.forEach((v, i) => {
      const card = el("article", "video-wide glass-card reveal");
      card.dataset.revealDelay = String(i);

      const head = el("div", "video-wide-head");
      head.appendChild(el("h3", "video-wide-title", t(v.titleKey, "")));
      const playlist = el(
        "a",
        "video-wide-playlist mono",
        `${t(v.linkKey, "Check more contents")} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>`,
      );
      playlist.href = v.href;
      playlist.target = "_blank";
      playlist.rel = "noopener noreferrer";
      head.appendChild(playlist);
      card.appendChild(head);

      const frame = el("div", "video-frame");
      const iframe = document.createElement("iframe");
      iframe.src = v.embed || v.href;
      iframe.title = t(v.titleKey, "YouTube playlist");
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      frame.appendChild(iframe);
      card.appendChild(frame);

      showcase.appendChild(card);
    });
  }

  function renderAwards() {
    const grid = document.getElementById("awardGrid");
    grid.innerHTML = "";
    AWARDS.forEach((a, i) => {
      const card = el("div", "award-card reveal-scale");
      card.dataset.revealDelay = String(i % 6);
      const thumb = el("div", "award-thumb");
      const img = new Image();
      img.src = a.img;
      img.alt = t(a.titleKey, "");
      img.loading = "lazy";
      thumb.appendChild(img);
      const body = el("div", "award-body");
      body.appendChild(el("h4", null, t(a.titleKey, "")));
      body.appendChild(el("p", null, t(a.descKey, "")));
      body.appendChild(el("div", "award-time mono", t(a.timeKey, "")));
      card.appendChild(thumb);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------------- Testimonials carousel ---------------- */
  let testiIndex = 0;
  let testiTimer = null;

  const AVATAR_BG = [
    "2563EB",
    "6366F1",
    "0D9488",
    "7C3AED",
    "BE123C",
    "0284C7",
    "059669",
  ];

  function testimonialText(person) {
    if (person.lines >= 2) {
      const parts = [];
      for (let i = 1; i <= person.lines; i++) {
        const v = t(`review_${person.id}_desc_line${i}`, "");
        if (v) parts.push(v);
      }
      if (parts.length) return parts.join(" ");
    }
    return t(`review_${person.id}_desc`, "");
  }

  function reviewerFromWorkdetail(person) {
    const detail = t(`review_${person.id}_workdetail`, "");
    const parts = detail.split(" - ");
    const name = (parts[0] || person.id.replace(/_/g, " ")).trim();
    const role = parts.slice(1).join(" - ").trim();
    return { name, role, detail };
  }

  function avatarBgForId(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++)
      hash = (hash + id.charCodeAt(i) * 17) % AVATAR_BG.length;
    return AVATAR_BG[hash];
  }

  function reviewerPhotoUrl(person, name) {
    if (person.photo) return person.photo;
    const bg = avatarBgForId(person.id);
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=320&background=${bg}&color=ffffff&bold=true&format=png`;
  }

  function applyTestimonialPhoto(img, person, name) {
    const fallback = reviewerPhotoUrl(person, name);
    const candidates = [
      person.photo,
      `assets/images/testimonials/${person.id}.jpeg`,
      `assets/images/testimonials/${person.id}.jpg`,
      `assets/images/testimonials/${person.id.replace(/_/g, "-")}.jpeg`,
    ].filter(Boolean);
    let attempt = 0;
    img.alt = name;
    img.onerror = () => {
      attempt += 1;
      if (attempt < candidates.length) {
        img.src = candidates[attempt];
        return;
      }
      if (!img.src.includes("ui-avatars.com")) img.src = fallback;
    };
    img.src = candidates[0] || fallback;
  }

  function fillTestimonialUI(person) {
    const { name, role } = reviewerFromWorkdetail(person);
    document.getElementById("testiQuote").textContent =
      testimonialText(person) || "…";
    document.getElementById("testiWho").textContent = name;
    document.getElementById("testiRole").textContent =
      role || t(`review_${person.id}_workdetail`, "");
    document.getElementById("testiTime").textContent = t(
      `review_${person.id}_timestamp`,
      "",
    );
    applyTestimonialPhoto(document.getElementById("testiPhoto"), person, name);
    document.getElementById("testiCurrent").textContent = String(
      testiIndex + 1,
    );
    document.getElementById("testiTotal").textContent = String(
      TESTIMONIALS.length,
    );
  }

  function renderTestimonialPeople() {
    const wrap = document.getElementById("testiPeople");
    wrap.innerHTML = "";
    TESTIMONIALS.forEach((person, i) => {
      const { name } = reviewerFromWorkdetail(person);
      const btn = el(
        "button",
        "testi-person" + (i === testiIndex ? " active" : ""),
      );
      btn.type = "button";
      btn.title = name;
      const img = new Image();
      img.className = "testi-person-avatar";
      img.width = 56;
      img.height = 56;
      applyTestimonialPhoto(img, person, name);
      const label = el("span", "testi-person-name", name.split(" ")[0]);
      btn.appendChild(img);
      btn.appendChild(label);
      btn.addEventListener("click", () => showTestimonial(i));
      wrap.appendChild(btn);
    });
  }

  function renderTestimonialDots() {
    const dotsWrap = document.getElementById("testiDots");
    dotsWrap.innerHTML = "";
    TESTIMONIALS.forEach((_, i) => {
      const d = el("span", "testi-dot" + (i === testiIndex ? " active" : ""));
      d.addEventListener("click", () => showTestimonial(i));
      dotsWrap.appendChild(d);
    });
  }

  function syncTestimonialChrome(rebuildPeople) {
    renderTestimonialDots();
    if (rebuildPeople) renderTestimonialPeople();
    document.querySelectorAll(".testi-person").forEach((btn, i) => {
      btn.classList.toggle("active", i === testiIndex);
    });
  }

  function showTestimonial(i) {
    const content = document.getElementById("testiContent");
    const next = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    if (next === testiIndex && content.classList.contains("fade-out")) return;

    content.classList.add("fade-out");
    clearInterval(testiTimer);
    setTimeout(() => {
      testiIndex = next;
      fillTestimonialUI(TESTIMONIALS[testiIndex]);
      syncTestimonialChrome(false);
      content.classList.remove("fade-out");
      testiTimer = setInterval(() => showTestimonial(testiIndex + 1), 8000);
    }, 280);
  }

  function renderTestimonials() {
    testiIndex = 0;
    fillTestimonialUI(TESTIMONIALS[0]);
    syncTestimonialChrome(true);
    clearInterval(testiTimer);
    testiTimer = setInterval(() => showTestimonial(testiIndex + 1), 8000);
  }

  function renderAboutPage() {
    if (typeof ABOUT_PROFILE === "undefined") return;

    document.getElementById("aboutPageRole").textContent = ABOUT_PROFILE.title;
    const employerEl = document.getElementById("aboutPageEmployer");
    if (employerEl) {
      const employer = ABOUT_PROFILE.employer || "";
      employerEl.textContent = employer;
      employerEl.hidden = !employer;
    }
    document.getElementById("aboutPageOrg").textContent = ABOUT_PROFILE.org;
    document.getElementById("aboutSummary").textContent = ABOUT_PROFILE.summary;

    const meta = document.getElementById("aboutMetaList");
    meta.innerHTML = "";
    ABOUT_PROFILE.meta.forEach((m) => {
      const li = el("li");
      const icon = el("i", "fa-solid fa-chevron-right");
      li.appendChild(icon);
      const k = el("span", "about-meta-k", m.k);
      li.appendChild(k);
      const val = m.href ? el("a", "about-meta-v") : el("span", "about-meta-v");
      if (m.href) {
        val.href = m.href;
        if (!m.href.startsWith("mailto") && !m.href.startsWith("tel")) {
          val.target = "_blank";
          val.rel = "noopener";
        }
      }
      val.textContent = m.v;
      li.appendChild(val);
      meta.appendChild(li);
    });

    const links = document.getElementById("aboutLinks");
    links.innerHTML = "";
    ABOUT_PROFILE.links.forEach((link) => {
      const a = el("a", "about-link-chip", link.label);
      a.href = link.href;
      if (link.download) {
        a.setAttribute("download", link.download);
      } else {
        a.target = "_blank";
        a.rel = "noopener";
      }
      links.appendChild(a);
    });

    const grid = document.getElementById("skillBarsGrid");
    grid.innerHTML = "";
    SKILL_BARS.forEach((s, i) => {
      const row = el("div", "skill-bar-item reveal-scale");
      row.dataset.revealDelay = String(i % 4);
      const head = el("div", "skill-bar-head");
      head.appendChild(el("span", "skill-bar-name", s.name));
      head.appendChild(
        el("span", "skill-bar-meta mono", `${s.years} · ${s.level}%`),
      );
      const track = el("div", "skill-bar-track");
      const fill = el("div", "skill-bar-fill");
      fill.dataset.level = String(s.level);
      track.appendChild(fill);
      row.appendChild(head);
      row.appendChild(track);
      grid.appendChild(row);
    });

    const ps = document.getElementById("personalSkillsList");
    ps.innerHTML = "";
    PERSONAL_SKILLS.forEach((line) => {
      const li = el("li");
      li.appendChild(el("i", "fa-solid fa-chevron-right"));
      li.appendChild(document.createTextNode(" " + line));
      ps.appendChild(li);
    });

    const cg = document.getElementById("aboutCertGrid");
    cg.innerHTML = "";
    ABOUT_CERTS.forEach((c) => {
      const card = el("div", "cert-card glass");
      card.appendChild(el("h4", null, c.title));
      card.appendChild(el("p", "cert-issuer", c.issuer));
      card.appendChild(el("span", "cert-when mono", c.when));
      cg.appendChild(card);
    });
  }

  function initSkillBarAnimation() {
    const fills = document.querySelectorAll(".skill-bar-fill");
    if (!fills.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          bar.style.width = `${bar.dataset.level}%`;
          obs.unobserve(bar);
        });
      },
      { threshold: 0.2 },
    );
    fills.forEach((f) => obs.observe(f));
  }

  function wireResumeDownloadLinks() {
    if (typeof RESUME_FILE === "undefined") return;
    const name =
      typeof RESUME_DOWNLOAD_NAME !== "undefined"
        ? RESUME_DOWNLOAD_NAME
        : "Amir_Resume_Node_React_9y.pdf";
    document.querySelectorAll("[data-resume-download]").forEach((a) => {
      a.href = RESUME_FILE;
      a.setAttribute("download", name);
    });
  }

  function renderResumePage() {
    if (typeof RESUME_JOBS === "undefined") return;

    wireResumeDownloadLinks();

    const eduWrap = document.getElementById("resumeEducation");
    eduWrap.innerHTML = "";
    RESUME_EDUCATION.forEach((e) => {
      const card = el("div", "resume-edu-card glass");
      card.appendChild(el("span", "resume-date-pill mono", e.period));
      card.appendChild(el("h4", "resume-edu-degree", e.degree));
      card.appendChild(el("p", "resume-edu-field", e.field));
      card.appendChild(el("p", "resume-edu-school", e.school));
      if (e.university)
        card.appendChild(el("p", "resume-edu-university", e.university));
      card.appendChild(el("p", "resume-edu-desc", e.desc));
      eduWrap.appendChild(card);
    });

    const hi = document.getElementById("resumeHighlights");
    hi.innerHTML = "";
    RESUME_ACHIEVEMENTS.forEach((h) => hi.appendChild(el("li", null, h)));

    const tl = document.getElementById("resumeTimeline");
    tl.innerHTML = "";
    RESUME_JOBS.forEach((job) => {
      const item = el("article", "resume-job");
      const body = el("div", "resume-job-body glass-card");
      body.appendChild(el("h4", "resume-job-role", job.role));
      body.appendChild(el("span", "resume-date-pill accent mono", job.period));
      const company = el("p", "resume-job-company");
      company.innerHTML = `<em>${job.company}</em> · ${job.location}${job.client ? ` · ${job.client}` : ""}`;
      body.appendChild(company);
      body.appendChild(el("p", "resume-job-summary", job.summary));
      const ul = el("ul", "resume-job-bullets");
      job.bullets.forEach((b) => ul.appendChild(el("li", null, b)));
      body.appendChild(ul);
      if (job.skills)
        body.appendChild(el("p", "resume-job-skills mono", job.skills));
      item.appendChild(el("div", "resume-job-marker"));
      item.appendChild(body);
      tl.appendChild(item);
    });
  }

  function getPublicEmail() {
    const reversed = "moc.liamg@51ggnerima";
    return reversed.split("").reverse().join("");
  }

  function renderEmployerBrands() {
    const grid = document.getElementById("employerBrandGrid");
    if (!grid || typeof EMPLOYER_BRANDS === "undefined") return;
    grid.innerHTML = "";
    EMPLOYER_BRANDS.forEach((brand) => {
      const item = el("li", "employer-brand glass");
      item.title = brand.name;
      const img = new Image();
      img.src = brand.img;
      img.alt = brand.name;
      img.loading = "lazy";
      img.decoding = "async";
      item.appendChild(img);
      grid.appendChild(item);
    });
  }

  function renderBannerContact() {
    const wrap = document.getElementById("bannerContactStrip");
    if (!wrap || typeof HERO_SOCIAL_LINKS === "undefined") return;
    wrap.innerHTML = "";
    const email = getPublicEmail();

    HERO_SOCIAL_LINKS.forEach((item) => {
      const href = item.email ? `mailto:${email}` : item.href;
      const text = item.email ? email : item.text || item.label;
      const external = !item.email && !href.startsWith("tel:");

      const brand = item.brand ? ` banner-contact-item--${item.brand}` : "";
      const a = el("a", "banner-contact-item" + brand);
      a.href = href;
      if (external) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.setAttribute("aria-label", `${item.label}: ${text}`);

      const iconWrap = el(
        "span",
        "banner-contact-icon" + (item.brand ? ` banner-contact-icon--${item.brand}` : "")
      );
      iconWrap.innerHTML = `<i class="${item.icon}" aria-hidden="true"></i>`;
      a.appendChild(iconWrap);

      const copy = el("span", "banner-contact-copy");
      copy.appendChild(el("span", "banner-contact-label", item.label));
      copy.appendChild(el("span", "banner-contact-text", text));
      a.appendChild(copy);

      wrap.appendChild(a);
    });
  }

  function renderHeroStats() {
    const yearsEl = document.getElementById("heroStatYears");
    const projectsEl = document.getElementById("heroStatProjects");
    const companiesEl = document.getElementById("heroStatCompanies");
    const badgesEl = document.getElementById("heroStatBadges");
    if (!yearsEl) return;

    yearsEl.textContent = "9+";

    const projectCount =
      typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS)
        ? PROJECTS.length
        : 0;
    const companyCount =
      typeof EXPERIENCE !== "undefined" && Array.isArray(EXPERIENCE)
        ? EXPERIENCE.length
        : 0;
    const awardCount =
      typeof AWARDS !== "undefined" && Array.isArray(AWARDS)
        ? AWARDS.length
        : 0;
    const aboutCertCount =
      typeof ABOUT_CERTS !== "undefined" && Array.isArray(ABOUT_CERTS)
        ? ABOUT_CERTS.length
        : 0;
    const badgeCount = awardCount + aboutCertCount;

    if (projectsEl) projectsEl.textContent = String(projectCount);
    if (companiesEl) companiesEl.textContent = String(companyCount);
    if (badgesEl) badgesEl.textContent = String(badgeCount);
  }

  function renderAll() {
    renderBannerContact();
    renderEmployerBrands();
    renderHeroStats();
    renderTags();
    renderSkills();
    renderProjects();
    renderAboutPage();
    renderResumePage();
    renderExperience();
    renderEducation();
    renderVideos();
    renderAwards();
    renderTestimonials();
    initSkillBarAnimation();
  }

  /* ---------------- Chrome: nav, theme, email, back-to-top ---------------- */

  function initNav() {
    const burger = document.getElementById("navBurger");
    const links = document.getElementById("navLinks");

    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }),
    );

    const sections = document.querySelectorAll("main section[id]");
    const navAnchors = links.querySelectorAll("a");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) =>
              a.classList.toggle(
                "active",
                a.getAttribute("href") === `#${entry.target.id}`,
              ),
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));
  }

  function getThemeMode() {
    const stored = localStorage.getItem("themeMode");
    return stored === "light" ? "light" : "dark";
  }

  function initTheme() {
    const modeBtn = document.getElementById("themeToggle");
    const icon = modeBtn.querySelector("i");
    const colorSelect = document.getElementById("color-theme-select");

    let mode = getThemeMode();
    if (!localStorage.getItem("themeMode")) {
      localStorage.setItem("themeMode", "dark");
    }
    let colorTheme = localStorage.getItem("colorTheme") || "theme-10";
    if (!THEMES.some((th) => th.id === colorTheme)) colorTheme = "theme-1";

    colorSelect.value = colorTheme;
    icon.className = mode === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    applyTheme(colorTheme, mode);

    modeBtn.addEventListener("click", () => {
      mode = mode === "dark" ? "light" : "dark";
      icon.className = mode === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
      localStorage.setItem("themeMode", mode);
      applyTheme(colorTheme, mode);
      renderSkills();
    });

    colorSelect.addEventListener("change", (e) => {
      colorTheme = e.target.value;
      localStorage.setItem("colorTheme", colorTheme);
      applyTheme(colorTheme, mode);
    });
  }

  function renderContactSocial() {
    const row = document.getElementById("contactSocialRow");
    if (!row || typeof CONTACT_SOCIAL === "undefined") return;
    const email = getPublicEmail();
    row.innerHTML = "";

    CONTACT_SOCIAL.forEach((item) => {
      const href = item.email ? `mailto:${email}` : item.href;
      const external = !item.email && /^https?:\/\//.test(href);
      const brand = item.brand ? ` contact-social-link--${item.brand}` : "";
      const a = el("a", "contact-social-link" + brand);
      a.href = href;
      a.setAttribute("aria-label", item.label);
      a.title = item.label;
      if (item.email) a.id = "emailSocial";
      if (external) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      const iconWrap = el(
        "span",
        "banner-contact-icon" +
          (item.brand ? ` banner-contact-icon--${item.brand}` : ""),
      );
      if (item.img) {
        const img = new Image();
        img.src = item.img;
        img.alt = "";
        iconWrap.appendChild(img);
      } else {
        iconWrap.innerHTML = `<i class="${item.icon}" aria-hidden="true"></i>`;
      }
      a.appendChild(iconWrap);
      row.appendChild(a);
    });
  }

  function initEmail() {
    const address = getPublicEmail();
    document.getElementById("emailLink").href = `mailto:${address}`;
    document.getElementById("emailLink").textContent = address;
    renderContactSocial();
    renderBannerContact();
  }

  function initBackToTop() {
    const btn = document.getElementById("backTop");
    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("show", window.scrollY > 500);
      },
      { passive: true },
    );
    btn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }

  function getLocaleMeta(code) {
    return LOCALES.find((l) => l.value === code) || LOCALES[0];
  }

  function setLangPickerUI(code) {
    const meta = getLocaleMeta(code);
    document.getElementById("langPickerFlag").textContent = meta.flag;
    document.getElementById("langPickerLabel").textContent =
      meta.label.split(" (")[0];
    document.querySelectorAll(".lang-option").forEach((btn) => {
      const selected = btn.dataset.value === code;
      btn.setAttribute("aria-selected", String(selected));
    });
  }

  function closeLangPicker() {
    const root = document.getElementById("langPicker");
    const trigger = document.getElementById("langPickerTrigger");
    const menu = document.getElementById("langPickerMenu");
    root.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  }

  function openLangPicker() {
    const root = document.getElementById("langPicker");
    const trigger = document.getElementById("langPickerTrigger");
    const menu = document.getElementById("langPickerMenu");
    root.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    const active = menu.querySelector('[aria-selected="true"]');
    if (active) active.scrollIntoView({ block: "nearest" });
  }

  function selectLanguage(lang) {
    localStorage.setItem("preferredLanguage", lang);
    setLangPickerUI(lang);
    closeLangPicker();
    loadLang(lang);
  }

  function initLanguageSelect() {
    const url = new URL(window.location.href);
    const urlLang = url.searchParams.get("lang");
    const stored = localStorage.getItem("preferredLanguage");
    const browserLang = (navigator.language || "en").slice(0, 2);
    let initial = urlLang || stored || browserLang || "en";
    const available = LOCALES.map((l) => l.value);
    if (!available.includes(initial)) initial = "en";

    const menu = document.getElementById("langPickerMenu");
    menu.innerHTML = "";
    LOCALES.forEach((loc) => {
      const btn = el("button", "lang-option");
      btn.type = "button";
      btn.role = "option";
      btn.dataset.value = loc.value;
      btn.setAttribute("aria-selected", "false");
      btn.innerHTML = `
        <span class="lang-option-flag">${loc.flag}</span>
        <span class="lang-option-text">
          <span class="lang-option-name">${loc.label}</span>
          <span class="lang-option-code">${loc.value.toUpperCase()}</span>
        </span>
        <i class="fa-solid fa-check lang-option-check" aria-hidden="true"></i>`;
      btn.addEventListener("click", () => selectLanguage(loc.value));
      menu.appendChild(btn);
    });

    setLangPickerUI(initial);
    document
      .getElementById("langPickerMenu")
      .setAttribute("aria-hidden", "true");

    const trigger = document.getElementById("langPickerTrigger");
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = document
        .getElementById("langPicker")
        .classList.contains("open");
      if (isOpen) closeLangPicker();
      else openLangPicker();
    });

    document.addEventListener("click", (e) => {
      if (!document.getElementById("langPicker").contains(e.target))
        closeLangPicker();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangPicker();
    });

    return initial;
  }

  function initHeroReveals() {
    document.querySelectorAll(".hero-banner .reveal").forEach((node) => {
      const delay = (node.dataset.delay || 0) * 120;
      setTimeout(() => node.classList.add("visible"), 200 + delay);
    });
  }

  /* ---------------- Boot ---------------- */

  async function boot() {
    document.getElementById("year").textContent = new Date().getFullYear();
    initNav();
    initTheme();
    initEmail();
    initBackToTop();
    initScrollEffects();
    initHeroCanvas();
    initHeroReveals();

    const res = await fetch(`${LOCALIZATION_PATH}en.json`);
    fallback = await res.json();
    dict = fallback;

    const startLang = initLanguageSelect();
    if (startLang === "en") {
      applyStaticTranslations();
      updateLangPickerLabel();
      renderAll();
      observeReveals();
      loadMediumBlogs();
    } else {
      await loadLang(startLang);
    }

    document
      .getElementById("testiPrev")
      .addEventListener("click", () => showTestimonial(testiIndex - 1));
    document
      .getElementById("testiNext")
      .addEventListener("click", () => showTestimonial(testiIndex + 1));
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
