const { useState, useEffect } = React;

const PROJECTS = [
  {
    id: "table",
    title: "project 1",
    category: "furniture",
    short:
      "Solid oak dining table with a natural oil finish and modern steel legs.",
    tags: "Furniture · Solid oak · Hand-finished",
    details:
      "This made-to-measure dining table was built from solid oak boards, " +
      "jointed and planed in the workshop before being finished with a durable " +
      "hardwax oil. The brief was to create a centrepiece that felt warm and " +
      "natural while fitting a compact open-plan kitchen. Steel hairpin legs " +
      "keep the design light and modern, and a subtle chamfer on the edges " +
      "makes it comfortable to sit at from any side.",
  },
  {
    id: "wardrobes",
    title: "project 2",
    category: "storage",
    short:
      "Built-in wardrobes and alcove units that turn unused corners into storage.",
    tags: "Storage · MDF & pine · Spray painted",
    details:
      "This project transformed a bedroom and living-room alcoves into " +
      "practical storage. Wardrobes use a sturdy MDF carcass, pine framing, " +
      "and shaker-style doors on soft-close hinges. Inside are hanging rails, " +
      "adjustable shelves, and drawers tailored around the client’s everyday " +
      "use. Alcove units hide cables and media equipment while providing space " +
      "for books and photos, all spray painted to match existing woodwork.",
  },
  {
    id: "decking",
    title: "project 3",
    category: "outdoor",
    short:
      "Level decking and a simple pergola to create a usable outdoor living area.",
    tags: "Outdoor · Decking · Pergola",
    details:
      "The garden had an uneven patch of grass that was rarely used. The new " +
      "decking creates a level platform for outdoor dining and a small seating " +
      "area, built with pressure-treated timber fixed to a solid frame. A " +
      "simple pergola adds height and allows for climbing plants and festoon " +
      "lighting. Careful attention was paid to spacing, drainage, and stair " +
      "treads to ensure a safe, long-lasting finish suited to mixed weather.",
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "furniture", label: "Furniture" },
  { id: "storage", label: "Storage" },
  { id: "outdoor", label: "Outdoor" },
];

function Header({ onNavClick, theme, toggleTheme }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={onNavClick("#top")}>
          Your<span>Workshop</span>
        </a>
        <nav className="nav">
          <a href="#about" onClick={onNavClick("#about")}>
            About
          </a>
          <a href="#projects" onClick={onNavClick("#projects")}>
            Work
          </a>
          <a href="#services" onClick={onNavClick("#services")}>
            Services
          </a>
          <a href="#contact" onClick={onNavClick("#contact")}>
            Contact
          </a>
        </nav>
        <button
          id="theme-toggle"
          aria-label="Toggle dark/light mode"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙" : "🪵"}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <p className="hero-kicker">Carpenter & Woodworker</p>
          <h1>Foster Townsend</h1>
          <p className="hero-subtitle">
            description
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
          </div>
          <p className="hero-note">
            Fully insured · Free site visits · Serving [Your Area]
          </p>
        </div>
        <div className="hero-card">
          <div className="avatar-placeholder">🪚</div>
          <p className="hero-tagline">
            Based in [Your City]. Available for bespoke carpentry, renovations,
            and small commercial projects.
          </p>
          <ul className="hero-badges">
            <li>10+ completed projects</li>
            <li>Made-to-measure designs</li>
            <li>Quality timber & finishes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p>
          I’m a carpenter and woodworker based in New York City
        </p>
      </div>
    </section>
  );
}

function Projects({ filter, setFilter, openProject }) {
  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Recent Work</h2>
          <p>Browse a selection of bespoke pieces and fitted projects.</p>
        </div>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={
                "filter-btn" + (filter === f.id ? " active" : "")
              }
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid">
          {filtered.map((project) => (
            <article className="card project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.short}</p>
              <p className="tags">{project.tags}</p>
              <div className="card-links">
                <button
                  className="btn-link"
                  onClick={() => openProject(project.id)}
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <p>
          I work closely with you from first idea to final installation,
          making sure each project suits your space, budget, and day-to-day
          life.
        </p>
        <div className="skills-grid">
          <div>
            <h3>Carpentry & Joinery</h3>
            <ul>
              <li>Bespoke furniture (tables, desks, shelving)</li>
              <li>Fitted wardrobes & alcove units</li>
              <li>Kitchen fitting & worktops</li>
              <li>Decking, pergolas & exterior timber work</li>
            </ul>
          </div>
          <div>
            <h3>How I Work</h3>
            <ul>
              <li>Site visits & precise measurements</li>
              <li>Design sketches and material advice</li>
              <li>Clear pricing and realistic timelines</li>
              <li>Careful installation and tidy finish</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Have a project in mind? Send a message with a few details about your
          space, budget, and timeline, and I’ll get back to you as soon as I
          can.
        </p>
        <p className="contact-email">
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <div className="socials">
          <a href="tel:+10000000000">Call / WhatsApp</a>
          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Your Name. All rights reserved.</p>
        <p className="small">
          Built with care and hosted on{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener"
          >
            GitHub Pages
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal open" aria-hidden="false">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h3>{project.title}</h3>
        <p>{project.details}</p>
      </div>
    </div>
  );
}

function BackToTop({ visible }) {
  return (
    <button
      id="back-to-top"
      aria-label="Back to top"
      className={visible ? "show" : ""}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      ↑
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Theme
  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("theme");
    const initial =
      saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Modal
  const selectedProject = PROJECTS.find(
    (p) => p.id === selectedProjectId
  );

  function openProject(id) {
    setSelectedProjectId(id);
    document.body.style.overflow = "hidden";
  }

  function closeProject() {
    setSelectedProjectId(null);
    document.body.style.overflow = "";
  }

  // Smooth scroll for header nav
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    }
  };

  return (
    <>
      <Header
        onNavClick={handleNavClick}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Projects
          filter={filter}
          setFilter={setFilter}
          openProject={openProject}
        />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Modal project={selectedProject} onClose={closeProject} />
      <BackToTop visible={showBackToTop} />
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App />);
