import './App.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-left">
          <span className="logo-mark">●</span>
          <span className="logo-text">Storyspace</span>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#library">Library</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <button className="btn ghost">Log in</button>
          <button className="btn primary">Sign up</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="pill">Made for creative writers</p>
            <h1>
              Collaborative writing
              <br />
              for bold imaginations.
            </h1>
            <p className="hero-sub">
              Bring drafts, edits, and discussions together in one focused
              workspace—built for world‑builders, novelists, and storytellers.
            </p>
            <div className="hero-cta">
              <button className="btn primary">Join for free</button>
              <button className="btn ghost">Take a quick tour</button>
            </div>
            <p className="hero-footnote">
              Trusted by thousands of writers. Your words stay yours.
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit">
              <div className="hero-device-layer back" />
              <div className="hero-device-layer middle" />
              <div className="hero-device-layer front">
                <div className="device-header">
                  <span className="device-dot red" />
                  <span className="device-dot yellow" />
                  <span className="device-dot green" />
                </div>
                <div className="device-body">
                  <div className="device-sidebar">
                    <div className="device-pill" />
                    <div className="device-item" />
                    <div className="device-item" />
                    <div className="device-item" />
                  </div>
                  <div className="device-main">
                    <div className="device-line wide" />
                    <div className="device-line" />
                    <div className="device-line" />
                    <div className="device-bubbles">
                      <div className="bubble left" />
                      <div className="bubble right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-badge">
              <span className="badge-pill">No generic AI drafts</span>
              <span className="badge-text">You stay in control.</span>
            </div>
          </div>
        </section>

        <section className="grid-section" id="features">
          <div className="section-header">
            <h2>One place for drafts, edits, and feedback.</h2>
            <p>
              Replace the scattered docs, chats, and screenshots with a single
              shared canvas built for deep creative work.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Connected drafts</h3>
              <p>
                Keep every revision, rewrite, and side‑path neatly stacked so
                you never lose a great idea.
              </p>
            </div>
            <div className="feature-card">
              <h3>Focused feedback</h3>
              <p>
                Inline comments and discussion threads stay anchored to the
                exact moment in your story.
              </p>
            </div>
            <div className="feature-card">
              <h3>Creative rituals</h3>
              <p>
                Build sessions, sprints, and scenes that match how you like to
                write—not how office docs expect you to.
              </p>
            </div>
          </div>
        </section>

        <section className="grid-section muted" id="about">
          <div className="section-header">
            <h2>By writers, for world‑builders.</h2>
            <p>
              Storyspace is built with a simple promise: your voice comes
              first. We give you tools, not templates.
            </p>
          </div>
          <div className="two-column">
            <div className="column">
              <h3>Your pages stay yours</h3>
              <p>
                Your drafts are private by default, exportable at any time, and
                never sold as training data.
              </p>
            </div>
            <div className="column">
              <h3>Thoughtful collaboration</h3>
              <p>
                Invite a trusted circle of readers, co‑authors, or editors and
                keep every conversation in context.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <span className="logo-mark">●</span>
              <span className="logo-text">Storyspace</span>
            </div>
            <p className="footer-tagline">
              “Writing is how we make inner worlds shareable.”
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#library">Help center</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">Who we are</a>
              <a href="#about">Our principles</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Storyspace</span>
          <div className="footer-bottom-links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
