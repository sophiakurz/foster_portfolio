document.addEventListener("DOMContentLoaded", () => {
  /* Year in footer */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* Theme toggle */
  const toggle = document.getElementById("theme-toggle");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    document.body.classList.add("light");
  }

  function switchTheme() {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  if (toggle) {
    toggle.addEventListener("click", switchTheme);
  }

  /* Smooth scrolling for internal links (extra smooth on older browsers) */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", targetId);
    });
  });

  /* Scroll-in animations */
  const animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    animated.forEach((el) => observer.observe(el));
  } else {
    // Fallback: make them visible
    animated.forEach((el) => el.classList.add("in-view"));
  }

  /* Project filters */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* Back to top button */
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    const show = window.scrollY > 300;
    backToTop.classList.toggle("show", show);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Project modal details */
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalClose = modal?.querySelector(".modal-close");
  const modalBackdrop = modal?.querySelector(".modal-backdrop");

  const projectCopy = {
    table: {
      title: "Custom Oak Dining Table",
      body:
        "This made-to-measure dining table was built from solid oak boards, " +
        "jointed and planed in the workshop before being finished with a durable " +
        "hardwax oil. The brief was to create a centrepiece that felt warm and " +
        "natural while still fitting a compact open-plan kitchen. The steel " +
        "hairpin legs keep the design light and modern, and a subtle chamfer on " +
        "the edges makes it comfortable to sit at from any side.",
    },
    wardrobes: {
      title: "Fitted Wardrobes & Alcove Units",
      body:
        "This project transformed an unused bedroom and living-room alcoves into " +
        "practical storage. Wardrobes were built with a sturdy MDF carcass, pine " +
        "framing, and shaker-style doors on soft-close hinges. Inside, hanging " +
        "rails, adjustable shelving, and drawers were tailored to the client’s " +
        "everyday use. The alcove units hide cables and media equipment while " +
        "providing display space for books and photos, all spray painted to match " +
        "the existing woodwork.",
    },
    decking: {
      title: "Garden Decking & Pergola",
      body:
        "The garden had an uneven patch of grass that was rarely used. The new " +
        "decking creates a level platform for outdoor dining and a small seating " +
        "area, built with pressure-treated timber fixed to a solid frame. A simple " +
        "pergola adds height and allows for climbing plants and festoon lighting. " +
        "Careful attention was paid to spacing, drainage, and stair treads to " +
        "ensure a safe, long-lasting finish suited to the British weather.",
    },
  };

  function openModal(key) {
    if (!modal || !modalTitle || !modalBody) return;
    const data = projectCopy[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBody.textContent = data.body;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".project-details").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-project");
      if (key) openModal(key);
    });
  });

  modalClose?.addEventListener("click", closeModal);
  modalBackdrop?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeModal();
    }
  });
});
