(function () {
  const DATA = window.D2H_CATALOG;
  if (!DATA) return;

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* =========================================================
     1. MAIN LANDING PAGE (index.html)
     ========================================================= */

  /* Pillar 01: Architecture Design (32 Projects) */
  const archGridEl = document.getElementById("arch-grid");
  const archFilterEl = document.getElementById("arch-filters");
  if (archGridEl && archFilterEl) {
    const groups = [
      { key: "all", label: "All Works (" + DATA.projects.length + ")" },
      {
        key: "commercial",
        label:
          "Commercial & R&D (" +
          DATA.projects.filter(function (p) {
            return p.group === "commercial";
          }).length +
          ")"
      },
      {
        key: "transit",
        label:
          "Rail & Transit (" +
          DATA.projects.filter(function (p) {
            return p.group === "transit";
          }).length +
          ")"
      },
      {
        key: "public",
        label:
          "Public & Civic (" +
          DATA.projects.filter(function (p) {
            return p.group === "public";
          }).length +
          ")"
      },
      {
        key: "industrial",
        label:
          "Industrial & Remodeling (" +
          DATA.projects.filter(function (p) {
            return p.group === "industrial";
          }).length +
          ")"
      }
    ];

    let currentGroup = "all";

    function renderArch() {
      archFilterEl.innerHTML = groups
        .map(function (g) {
          return (
            '<button type="button" class="filter-btn' +
            (g.key === currentGroup ? " active" : "") +
            '" data-group="' +
            esc(g.key) +
            '">' +
            esc(g.label) +
            "</button>"
          );
        })
        .join("");

      const filtered =
        currentGroup === "all"
          ? DATA.projects
          : DATA.projects.filter(function (p) {
              return p.group === currentGroup;
            });

      archGridEl.innerHTML = filtered
        .map(function (p) {
          const heroThumb = "assets/thumbs/projects/" + p.folder + ".webp";
          const imgCountLabel =
            p.images.length === 1 ? "1 Visual" : p.images.length + " Visuals";
          return (
            '<a class="work-card" href="detail.html?type=project&id=' +
            encodeURIComponent(p.id) +
            '">' +
            '<div class="work-thumb">' +
            '<img src="' +
            esc(heroThumb) +
            '" alt="' +
            esc(p.title) +
            '" loading="lazy" decoding="async">' +
            '<span class="work-badge' +
            (p.isWinner ? " winner" : "") +
            '">' +
            esc(p.badge) +
            "</span>" +
            '<span class="work-count">' +
            esc(imgCountLabel) +
            "</span>" +
            "</div>" +
            '<div class="work-body">' +
            "<div>" +
            '<div class="work-meta-top"><span>' +
            esc(p.groupLabel) +
            "</span><span>" +
            esc(p.year) +
            "</span></div>" +
            '<h3 class="work-title kr">' +
            esc(p.title) +
            "</h3>" +
            '<p class="work-loc">' +
            esc(p.location) +
            "</p>" +
            "</div>" +
            '<div class="work-foot"><span>Open Project Dossier</span><span>→</span></div>' +
            "</div></a>"
          );
        })
        .join("");
    }

    archFilterEl.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-group]");
      if (btn) {
        currentGroup = btn.dataset.group;
        renderArch();
      }
    });
    renderArch();
  }

  /* Pillar 02: Environmental AI (9 Simulation Modules) */
  const energyGridEl = document.getElementById("energy-grid");
  if (energyGridEl) {
    energyGridEl.innerHTML = DATA.energyModules
      .map(function (m) {
        const thumbImg = "assets/thumbs/energy/" + m.id + ".webp";
        return (
          '<a class="work-card" href="detail.html?type=energy&id=' +
          encodeURIComponent(m.id) +
          '">' +
          '<div class="work-thumb">' +
          '<img src="' +
          esc(thumbImg) +
          '" alt="' +
          esc(m.title) +
          '" loading="lazy" decoding="async">' +
          '<span class="work-badge">' +
          esc(m.solver) +
          "</span>" +
          '<span class="work-count">' +
          esc(m.metric) +
          "</span>" +
          "</div>" +
          '<div class="work-body">' +
          "<div>" +
          '<div class="work-meta-top"><span>' +
          esc(m.category) +
          "</span><span>Cloud BPS</span></div>" +
          '<h3 class="work-title">' +
          esc(m.title) +
          "</h3>" +
          '<p class="work-loc">' +
          esc(m.summary) +
          "</p>" +
          "</div>" +
          '<div class="work-foot"><span>Inspect Simulation Output</span><span>→</span></div>' +
          "</div></a>"
        );
      })
      .join("");
  }

  /* Pillar 03: Spatial Art (8 Works — Yeojoo Park / D2H Archi_Lab) */
  const artGridEl = document.getElementById("art-grid");
  if (artGridEl) {
    artGridEl.innerHTML = DATA.artWorks
      .map(function (a) {
        const thumbImg = "assets/thumbs/art/" + a.id + ".webp";
        return (
          '<a class="work-card" href="detail.html?type=art&id=' +
          encodeURIComponent(a.id) +
          '">' +
          '<div class="work-thumb">' +
          '<img src="' +
          esc(thumbImg) +
          '" alt="' +
          esc(a.title) +
          '" loading="lazy" decoding="async">' +
          '<span class="work-badge">Spatial Light Art</span>' +
          '<span class="work-count">D2H Archi_Lab</span>' +
          "</div>" +
          '<div class="work-body">' +
          "<div>" +
          '<div class="work-meta-top"><span>' +
          esc(a.category) +
          "</span><span>Yeojoo Park</span></div>" +
          '<h3 class="work-title">' +
          esc(a.title) +
          "</h3>" +
          '<p class="work-loc">' +
          esc(a.summary) +
          "</p>" +
          "</div>" +
          '<div class="work-foot"><span>View Installation Study</span><span>→</span></div>' +
          "</div></a>"
        );
      })
      .join("");
  }

  /* =========================================================
     2. DETAIL PAGE (detail.html)
     ========================================================= */
  const detailRoot = document.getElementById("detail-root");
  if (detailRoot) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") || "project";
    const id = params.get("id");

    let list = DATA.projects;
    let backAnchor = "index.html#architecture";
    let pillarLabel = "Pillar 01 / Architecture Design";

    if (type === "energy") {
      list = DATA.energyModules;
      backAnchor = "index.html#environmental-ai";
      pillarLabel = "Pillar 02 / Environmental AI";
    } else if (type === "art") {
      list = DATA.artWorks;
      backAnchor = "index.html#spatial-art";
      pillarLabel = "Pillar 03 / Spatial Art";
    }

    let idx = list.findIndex(function (x) {
      return x.id === id;
    });
    if (idx < 0) idx = 0;

    const item = list[idx];
    const prevItem = list[(idx - 1 + list.length) % list.length];
    const nextItem = list[(idx + 1) % list.length];

    document.title = item.title + " | D2H Archi_Lab";

    const backLinkEl = document.getElementById("detail-back");
    if (backLinkEl) backLinkEl.href = backAnchor;

    const prevNavEl = document.getElementById("detail-prev");
    const nextNavEl = document.getElementById("detail-next");
    if (prevNavEl) {
      prevNavEl.href =
        "detail.html?type=" +
        encodeURIComponent(type) +
        "&id=" +
        encodeURIComponent(prevItem.id);
    }
    if (nextNavEl) {
      nextNavEl.href =
        "detail.html?type=" +
        encodeURIComponent(type) +
        "&id=" +
        encodeURIComponent(nextItem.id);
    }

    let galleryItems = [];
    if (type === "project") {
      galleryItems = item.images.map(function (img) {
        return {
          src: "assets/projects/" + item.folder + "/" + img.file,
          caption: img.caption
        };
      });
    } else {
      galleryItems = [
        {
          src: item.image,
          caption: item.title + " — " + (item.solver || item.category)
        }
      ];
    }

    const badgeText =
      type === "project"
        ? item.badge
        : type === "energy"
        ? item.solver
        : item.artist;
    const subTag =
      type === "project"
        ? item.groupLabel + " · " + item.year
        : type === "energy"
        ? item.category + " · " + item.metric
        : item.category + " · D2H Archi_Lab";

    detailRoot.innerHTML =
      '<div class="detail-breadcrumb">' +
      '<a href="' +
      esc(backAnchor) +
      '">' +
      esc(pillarLabel) +
      "</a>" +
      "<span>/</span>" +
      "<span>" +
      String(idx + 1).padStart(2, "0") +
      " of " +
      String(list.length).padStart(2, "0") +
      "</span>" +
      "</div>" +
      '<div class="detail-header">' +
      '<div class="detail-badges">' +
      '<span class="pill" style="color:var(--accent);border-color:rgba(125,211,252,.4);">' +
      esc(subTag) +
      "</span>" +
      '<span class="pill" style="' +
      (item.isWinner
        ? "color:var(--accent-amber);border-color:rgba(252,211,77,.45);"
        : "") +
      '">' +
      esc(badgeText) +
      "</span>" +
      "</div>" +
      '<h1 class="detail-title' +
      (type === "project" ? " kr" : "") +
      '">' +
      esc(item.title) +
      "</h1>" +
      '<p class="detail-summary">' +
      esc(item.summary) +
      "</p>" +
      "</div>" +
      '<dl class="detail-specs">' +
      item.specs
        .map(function (row) {
          return (
            "<div><dt>" +
            esc(row[0]) +
            "</dt><dd>" +
            esc(row[1]) +
            "</dd></div>"
          );
        })
        .join("") +
      "</dl>" +
      '<div class="gallery-stack">' +
      galleryItems
        .map(function (g, gi) {
          return (
            '<figure class="gallery-figure">' +
            '<img src="' +
            esc(g.src) +
            '" alt="' +
            esc(g.caption) +
            '" data-zoom="' +
            esc(g.src) +
            '" ' +
            (gi === 0
              ? 'loading="eager" fetchpriority="high" decoding="async"'
              : 'loading="lazy" decoding="async"') +
            ">" +
            '<figcaption class="gallery-cap"><span>' +
            esc(g.caption) +
            '</span><span style="font-family:var(--mono);font-size:.7rem;">PLATE ' +
            String(gi + 1).padStart(2, "0") +
            " / " +
            String(galleryItems.length).padStart(2, "0") +
            " · CLICK TO ZOOM</span></figcaption>" +
            "</figure>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="detail-nav-footer">' +
      '<a class="btn-secondary" href="' +
      esc(backAnchor) +
      '">← Return to ' +
      esc(pillarLabel) +
      "</a>" +
      '<div style="display:flex;gap:12px;">' +
      '<a class="btn-secondary" href="detail.html?type=' +
      encodeURIComponent(type) +
      "&id=" +
      encodeURIComponent(prevItem.id) +
      '">← Previous</a>' +
      '<a class="btn-primary" href="detail.html?type=' +
      encodeURIComponent(type) +
      "&id=" +
      encodeURIComponent(nextItem.id) +
      '">Next →</a>' +
      "</div></div>";

    /* Lightbox handler */
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbClose = document.getElementById("lightbox-close");
    if (lb && lbImg && lbClose) {
      detailRoot.addEventListener("click", function (e) {
        const img = e.target.closest("[data-zoom]");
        if (img) {
          lbImg.src = img.dataset.zoom;
          lb.hidden = false;
          document.body.style.overflow = "hidden";
        }
      });
      function closeLb() {
        lb.hidden = true;
        lbImg.src = "";
        document.body.style.overflow = "";
      }
      lbClose.addEventListener("click", closeLb);
      lb.addEventListener("click", function (e) {
        if (e.target === lb) closeLb();
      });
      document.addEventListener("keydown", function (e) {
        if (!lb.hidden && e.key === "Escape") {
          closeLb();
        } else if (lb.hidden && e.key === "ArrowLeft" && prevNavEl) {
          window.location.href = prevNavEl.href;
        } else if (lb.hidden && e.key === "ArrowRight" && nextNavEl) {
          window.location.href = nextNavEl.href;
        }
      });
    }
  }
})();
