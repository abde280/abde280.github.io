/* =========================================================
   PORTFOLIO — Script commun à toutes les pages
   Tout le contenu vient des fichiers js/data/*.js : pas besoin de modifier ce fichier.
   ========================================================= */
(() => {
  const D = PORTFOLIO;
  const page = document.body.dataset.page;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };
  const html = (sel, h) => { const el = $(sel); if (el) el.innerHTML = h; };
  const compName = (id) => (D.competencesE5.find((c) => c.id === id) || {}).nom || id;
  const plural = (n, mot) => `${n} ${mot}${n > 1 ? "s" : ""}`;
  const fullName = `${D.profil.prenom} ${D.profil.nom}`;
  const aVenir = (r) => r.statut === "À venir";
  const realisees = () => D.realisations.filter((r) => !aVenir(r));
  const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, "-");

  /* ================= EN-TÊTE ET PIED DE PAGE ================= */
  const pages = [
    ["accueil", "index.html", "Accueil"],
    ["epreuves", "epreuves.html", "Épreuves"],
    ["projets", "projets.html", "Projets"],
    ["veille", "veille.html", "Veille"],
    ["certifications", "certifications.html", "Certifications"],
    ["contact", "contact.html", "Contact"]
  ];
  html("#nav", `
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo"><span class="prompt">~$</span> ${esc(D.profil.prenom.toLowerCase())}</a>
      <button class="nav__burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="nav__links" id="nav-links">
        ${pages.map(([id, href, label]) => `<a href="${href}"${id === page ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}
        <button class="theme-toggle" id="theme-toggle" aria-label="Changer de thème"></button>
      </nav>
    </div>`);
  html("#footer", `
    <div class="container footer__inner">
      <p class="mono">© ${new Date().getFullYear()} ${esc(fullName)} · BTS SIO SISR · Session 2027</p>
      <p>${[["LinkedIn", D.contact.linkedin], ["GitHub", D.contact.github], ["CV", D.profil.cv]]
        .filter(([, u]) => u).map(([l, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${l}</a>`).join(" · ")}</p>
    </div>`);
  document.title = document.title.replace("Portfolio BTS SIO SISR", `${fullName} · Portfolio BTS SIO SISR`);

  /* ================= FENÊTRE DÉTAIL D'UNE RÉALISATION ================= */
  const modal = $("#modal");
  let lastFocus = null;

  const archiHTML = (r) => `
    <div class="archi" aria-label="Schéma d'architecture">
      ${r.architecture.map((b, i) => `
        ${i ? '<span class="archi__arrow" aria-hidden="true"></span>' : ""}
        <div class="archi__node"><strong>${esc(b.nom)}</strong><span>${esc(b.detail)}</span></div>`).join("")}
    </div>`;

  function openRealisation(id) {
    const r = D.realisations.find((x) => x.id === id);
    if (!r) return;
    lastFocus = document.activeElement;
    const list = (a) => a && a.length;
    html("#modal-content", `
      <div class="badges"><span class="badge badge--${slug(r.cadre)}">${esc(r.cadre)}</span>${statutBadge(r.statut)}</div>
      <h2 id="modal-title">${esc(r.titre)}</h2>
      <h4>Contexte</h4><p>${esc(r.resume)}</p>
      ${list(r.architecture) ? `<h4>Architecture</h4>${archiHTML(r)}` : ""}
      ${list(r.environnement) ? `<h4>Environnement technique</h4>
        <div class="chips">${r.environnement.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
      ${list(r.competences) ? `<h4>Compétences mobilisées (bloc 1)</h4>
        <ul class="modal__comps">${r.competences.map((c) => `<li><strong>${c}</strong>${esc(compName(c))}</li>`).join("")}</ul>` : ""}
      ${r.procedure ? `<h4>Procédure</h4><div class="docs"><a href="${esc(r.procedure)}" download>📄 Télécharger la procédure (PDF)</a></div>` : ""}`);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__box").scrollTop = 0;
    modal.querySelector(".modal__close").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  // Compétences en étiquettes : [code, intitulé]
  function compTags(list) {
    return `<div class="comp-tags">${list.map(([code, nom]) =>
      `<span class="comp-tag"><b>${esc(code)}</b><span>${esc(nom)}</span></span>`).join("")}</div>`;
  }

  function statutBadge(s) {
    return `<span class="statut statut--${slug(s)}"><span class="dot"></span>${esc(s)}</span>`;
  }

  /* ================= PAGE : ACCUEIL ================= */
  function renderAccueil() {
    const p = D.profil;
    set("#hero-badge", p.badge);
    html("#hero-name", `${esc(p.prenom)}<br><span class="outline">${esc(p.nom)}</span>`);
    set("#hero-intro", p.intro);
    $("#cv-btn").href = p.cv;

    // Machine à écrire
    const el = $("#typed");
    let l = 0, c = 0, del = false;
    (function type() {
      const t = p.accroche[l];
      el.textContent = t.slice(0, c);
      if (!del && c < t.length) { c++; setTimeout(type, 60); }
      else if (!del) { del = true; setTimeout(type, 1800); }
      else if (c > 0) { c--; setTimeout(type, 30); }
      else { del = false; l = (l + 1) % p.accroche.length; setTimeout(type, 300); }
    })();

    // Chiffres clés — calculés depuis data.js, donc toujours justes
    const certifsOk = D.certifications.filter((c) => c.statut === "Obtenue").length;
    html("#stats", [
      [`${realisees().length}/${D.realisations.length}`, "Projets réalisés", "projets.html"],
      ["Oct. 2025", `En alternance au ${D.entreprise.nom}`, "index.html#apropos"],
      [D.veille.articles.length, "Articles dans ma veille", "veille.html"],
      certifsOk ? [certifsOk, certifsOk > 1 ? "Certifications obtenues" : "Certification obtenue", "certifications.html"]
                : [D.epreuves.length, "Épreuves préparées (E5 · E6 · E7)", "epreuves.html"]
    ].map(([n, label, href]) => `<a class="stat card reveal" href="${href}"><strong>${n}</strong><span>${label}</span></a>`).join(""));

    // À propos
    set("#about-presentation", p.presentation);
    const photo = $("#about-photo");
    const img = new Image();
    img.alt = `Photo de ${fullName}`;
    img.onload = () => { photo.innerHTML = ""; photo.appendChild(img); };
    img.onerror = () => { photo.textContent = ((p.prenom[0] || "") + (p.nom[0] || "")).replace(/[\[\]]/g, "") || "🖧"; };
    img.src = p.photo;
    html("#about-infos", [
      ["Localisation", p.ville],
      ["Établissement", D.ecole.nom],
      ["Option", "SISR"],
      [D.entreprise.type, D.entreprise.nom],
      ["Objectif", p.objectif]
    ].filter(([, v]) => v).map(([k, v]) => `<li><strong>${esc(k)}</strong>${esc(v)}</li>`).join(""));

    set("#bts-text", D.bts);
    set("#ecole-nom", D.ecole.nom);
    set("#ecole-desc", D.ecole.description);
    html("#ecole-infos", D.ecole.infos.map((i) => `<dt>${esc(i.label)}</dt><dd>${esc(i.valeur)}</dd>`).join(""));
    $("#ecole-site").href = D.ecole.site;
    set("#entreprise-type", `A-03 · ${D.entreprise.type}`);
    set("#entreprise-nom", D.entreprise.nom);
    set("#entreprise-desc", D.entreprise.description);
    set("#entreprise-role", D.entreprise.role);
    $("#entreprise-site").href = D.entreprise.site;

    // Compétences
    html("#skills", D.competencesTech.map((s) => `
      <div class="card skill reveal">
        <div class="skill__head"><span class="skill__icon">${s.icone}</span><h3>${esc(s.categorie)}</h3></div>
        <div class="chips">${s.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
      </div>`).join(""));
    html("#soft", (D.interets || []).map((s) => `<span class="chip">${esc(s)}</span>`).join(""));
    if (D.langues.length) html("#langues", D.langues.map((l) => `<li>${esc(l)}</li>`).join(""));
    else $("#langues").closest(".card").hidden = true;

    // Parcours & expériences
    const tl = (arr) => arr.map((x) => `
      <div class="timeline__item reveal">
        <span class="timeline__date">${esc(x.periode)}</span>
        <h4>${esc(x.titre)}</h4>
        ${x.lieu ? `<span class="timeline__lieu">${esc(x.lieu)}</span>` : ""}
        ${x.details ? `<p>${esc(x.details)}</p>` : ""}
      </div>`).join("");
    html("#parcours-list", tl(D.parcours));
    html("#experiences-list", tl(D.experiences));

    networkBackground();
  }

  /* ================= PAGE : ÉPREUVES ================= */
  function renderEpreuves() {
    html("#epreuves-list", D.epreuves.map((e) => {
      const comps = e.competences === "bloc1" ? D.competencesE5.map((c) => [c.id, c.nom]) : (e.competences || []).map((n) => [e.code_bloc || e.codeBloc || e.blocCode || e.code, n]);
      return `
      <article class="card epreuve reveal">
        <div class="epreuve__code">${esc(e.code)}</div>
        <div class="epreuve__body">
          <div class="badges">${statutBadge(e.statut)}<span class="chip">${esc(e.format)}</span></div>
          <h2>${esc(e.titre)}</h2>
          <p>${esc(e.description)}</p>
          ${comps.length ? `
          <h4 class="mini">Compétences évaluées${e.bloc ? ` · ${esc(e.bloc)}` : ""}</h4>
          ${compTags(comps)}` : ""}
          <div class="docs">
            ${e.code === "E5" ? '<a href="projets.html">🗂️ Voir mes projets</a>' : ""}
            ${e.code === "E7" ? '<a href="veille.html">🔎 Voir ma veille</a>' : ""}
            ${e.documents.map((d) => `<a href="${esc(d.url)}" target="_blank" rel="noopener">📄 ${esc(d.label)}</a>`).join("")}
          </div>
        </div>
      </article>`;
    }).join(""));
  }

  /* ================= PAGE : PROJETS ================= */
  function renderProjets() {
    const n = D.realisations.length;
    const statuts = [...new Set(D.realisations.map((r) => r.statut))];
    set("#projets-count", `${plural(n, "projet")} · ` + statuts.map((st) =>
      `${D.realisations.filter((r) => r.statut === st).length} ${st.toLowerCase()}`).join(" · "));

    const cadres = [...new Set(D.realisations.map((r) => r.cadre))];
    html("#filters", `<button class="filter active" data-filter="all">Tous (${n})</button>` +
      cadres.map((c) => `<button class="filter" data-filter="${esc(c)}">${esc(c)} (${D.realisations.filter((r) => r.cadre === c).length})</button>`).join(""));

    html("#projects", D.realisations.map((r, i) => `
      <article class="card project reveal${aVenir(r) ? " project--soon" : ""}" data-cadre="${esc(r.cadre)}">
        <div class="project__top">
          <span class="project__num mono">P-${String(i + 1).padStart(2, "0")}</span>
          ${statutBadge(r.statut)}
        </div>
        <span class="badge badge--${slug(r.cadre)}">${esc(r.cadre)}</span>
        <h3>${esc(r.titre)}</h3>
        <p>${esc(r.resume)}</p>
        <div class="chips chips--sm">${r.environnement.slice(0, 4).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${!aVenir(r) && r.competences.length ? `
        <h4 class="mini">Compétences mobilisées</h4>
        ${compTags(r.competences.map((c) => [c, compName(c)]))}` : ""}
        ${aVenir(r) ? '<span class="project__soon mono">Bientôt disponible</span>' : `
        <div class="project__actions">
          ${r.procedure ? `<a class="btn btn--small btn--primary" href="${esc(r.procedure)}" download>📄 Procédure (PDF)</a>` : ""}
        </div>`}
      </article>`).join(""));

    $("#projects").addEventListener("click", (e) => {
      const b = e.target.closest("[data-open]");
      if (b) openRealisation(b.dataset.open);
    });
    filtres("#filters", ".project", "cadre");
  }

  /* ================= PAGE : VEILLE ================= */
  function renderVeille() {
    const v = D.veille;
    set("#veille-maj", `Mise à jour le ${v.miseAJour}`);
    html("#veille-sujet-hero", `<strong>Mon sujet :</strong> ${esc(v.sujet)}`);
    set("#veille-pb", v.problematique);
    set("#veille-pourquoi", v.pourquoi);
    html("#veille-axes", v.axes.map((a, i) => `<div class="axe card reveal"><span class="mono">V-0${i + 1}</span>${esc(a)}</div>`).join(""));
    html("#veille-articles", v.articles.map((a) => `
      <article class="card article reveal">
        <div class="article__meta">${esc(a.date)} · ${esc(a.source)}</div>
        <h3>${a.url && a.url !== "#" ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.titre)} ↗</a>` : esc(a.titre)}</h3>
        <p>${esc(a.resume)}</p>
        <p class="article__retenu"><strong>Ce que j'en retiens :</strong> ${esc(a.retenu)}</p>
      </article>`).join(""));
    const s = v.synthese;
    html("#veille-synthese", `
      <div class="card reveal"><p class="tag">Le constat</p><p>${esc(s.constat)}</p></div>
      <div class="card reveal"><p class="tag">Les effets</p><p>${esc(s.effets)}</p></div>
      <div class="card reveal"><p class="tag">Pour un admin SISR</p><ul class="list">${s.pourAdmin.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`);
    set("#veille-avis", s.avis);
    const m = v.methode;
    html("#veille-methode", `
      <div class="card reveal"><h3>🛠️ Outils</h3><ul class="list">${m.outils.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="card reveal"><h3>📚 Sources</h3><ul class="list">${m.sources.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><p class="regle">Règle : ${esc(m.regle)}</p></div>
      <div class="card reveal"><h3>⏱️ Rythme</h3><p>${esc(m.rythme)}</p></div>`);
  }

  /* ================= PAGE : CERTIFICATIONS ================= */
  function renderCertifications() {
    const C = D.certifications;
    if (!C.length) {
      set("#certs-count", "En préparation");
      $("#cert-filters").hidden = true;
      html("#certs", `<div class="card empty reveal"><span class="empty__icon">🎓</span>
        <h3>Certifications en préparation</h3>
        <p>Je prépare des certifications en réseau et en cybersécurité en parallèle de mon BTS. Elles apparaîtront ici dès qu'elles seront obtenues.</p></div>`);
      return;
    }
    const ok = C.filter((c) => c.statut === "Obtenue").length;
    set("#certs-count", `${ok} obtenue${ok > 1 ? "s" : ""} · ${C.length - ok} en cours`);
    const statuts = [...new Set(C.map((c) => c.statut))];
    html("#cert-filters", `<button class="filter active" data-filter="all">Toutes (${C.length})</button>` +
      statuts.map((s) => `<button class="filter" data-filter="${esc(s)}">${esc(s)} (${C.filter((c) => c.statut === s).length})</button>`).join(""));
    html("#certs", C.map((c) => `
      <article class="card cert reveal" data-statut="${esc(c.statut)}">
        <div class="cert__top"><span class="cert__org mono">${esc(c.organisme)}</span>${statutBadge(c.statut)}</div>
        <h3>${esc(c.nom)}</h3>
        <p>${esc(c.description)}</p>
        <span class="cert__date mono">${esc(c.date)}</span>
      </article>`).join(""));
    filtres("#cert-filters", ".cert", "statut", "#cert-shown");
  }

  /* ================= PAGE : CONTACT ================= */
  const icons = {
    mail: '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3V10H5.7v8.3h2.6zM7 8.9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.3 9.4v-4.6c0-2.4-1.3-3.6-3.1-3.6-1.4 0-2.1.8-2.4 1.3V10h-2.6v8.3h2.6v-4.4c0-1.2.2-2.3 1.7-2.3s1.5 1.4 1.5 2.4v4.3h2.3z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
    cv: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>'
  };
  function renderContact() {
    const c = D.contact;
    html("#contact-links", `
      ${c.email ? `<a href="mailto:${esc(c.email)}">${icons.mail}<span><strong>Email</strong>${esc(c.email)}</span></a>` : ""}
      <a href="${esc(c.linkedin)}" target="_blank" rel="noopener">${icons.linkedin}<span><strong>LinkedIn</strong>Mon profil ↗</span></a>
      ${c.github ? `<a href="${esc(c.github)}" target="_blank" rel="noopener">${icons.github}<span><strong>GitHub</strong>Mes dépôts ↗</span></a>` : ""}
      <a href="${esc(D.profil.cv)}" target="_blank" rel="noopener">${icons.cv}<span><strong>CV</strong>Télécharger (PDF)</span></a>`);
    // Sans email public : on masque le formulaire et on oriente vers LinkedIn
    if (!c.email) {
      $("#contact-form").outerHTML = `<div class="card form"><h3>Me contacter</h3>
        <p class="form__note" style="font-size:.95rem">Le plus simple est de m'envoyer un message sur LinkedIn : je réponds rapidement.</p>
        <a class="btn btn--primary" href="${esc(c.linkedin)}" target="_blank" rel="noopener">M'écrire sur LinkedIn ↗</a></div>`;
      set(".page-hero p", "Une question sur un projet, une proposition d'alternance ou de poursuite d'études : écrivez-moi sur LinkedIn.");
      return;
    }
    $("#contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      const sujet = encodeURIComponent(`[Portfolio] ${f.get("objet")}`);
      const corps = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("nom")}`);
      window.location.href = `mailto:${c.email}?subject=${sujet}&body=${corps}`;
    });
  }

  /* ================= OUTILS COMMUNS ================= */
  // Filtres : le compteur affiché correspond toujours aux cartes visibles
  function filtres(barSel, itemSel, attr, countSel) {
    const bar = $(barSel);
    const items = [...document.querySelectorAll(itemSel)];
    const update = (f) => {
      let shown = 0;
      items.forEach((it) => {
        const ok = f === "all" || it.dataset[attr] === f;
        it.hidden = !ok;
        if (ok) shown++;
      });
      if (countSel) set(countSel, `${shown} / ${items.length} affichée${shown > 1 ? "s" : ""}`);
    };
    bar.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      bar.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
      update(b.dataset.filter);
    });
    update("all");
  }

  function networkBackground() {
    const canvas = $("#network-bg");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes = [], W, H;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      const n = Math.min(60, Math.floor((W * H) / 20000));
      nodes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    };
    const draw = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = ctx.fillStyle = color;
      for (const n of nodes) {
        if (!reduced) { n.x += n.vx; n.y += n.vy; }
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d < 140) { ctx.globalAlpha = (1 - d / 140) * .3; ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
      }
      ctx.globalAlpha = .7;
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize);
    resize(); draw();
  }

  /* ================= LANCEMENT ================= */
  ({ accueil: renderAccueil, epreuves: renderEpreuves, projets: renderProjets,
     veille: renderVeille, certifications: renderCertifications, contact: renderContact }[page] || (() => {}))();

  // Navigation mobile
  const nav = $("#nav"), burger = $("#burger"), links = $("#nav-links");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
  nav.classList.toggle("scrolled", window.scrollY > 20 || page !== "accueil");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });

  // Thème clair / sombre
  const toggle = $("#theme-toggle");
  const applyTheme = (t) => {
    document.documentElement.dataset.theme = t;
    toggle.textContent = t === "light" ? "🌙" : "☀️";
    try { localStorage.setItem("theme", t); } catch (_) {}
  };
  applyTheme(document.documentElement.dataset.theme || "dark");
  toggle.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light"));

  // Apparition au défilement
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  }), { threshold: .1 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Aide pour toi : nombre de [crochets] restant à remplir (console F12)
  const restants = (JSON.stringify(D).match(/\[[^\]"]{2,}\]/g) || []).length;
  if (restants) console.warn(`📝 Portfolio : il reste ${restants} champ(s) [à remplir] dans js/data/`);
})();
