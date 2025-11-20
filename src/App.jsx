// src/App.jsx
import { useState } from 'react';
import './index.css';

function SectionHeader({ title, pill, subtitle, id }) {
  return (
    <div className="section-header" id={id}>
      <div className="section-title">
        {title} {pill && <span className="section-pill">{pill}</span>}
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(false); // close menu when a link is clicked
  };

  return (
    <div id="top">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#top" className="nav-brand" onClick={handleNavClick}>
            <div className="brand-logo">AM</div>
            <div className="brand-text">
              <span>Adesh Meena</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="nav-links nav-links-desktop">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="nav-toggle"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className={`bar ${navOpen ? 'open' : ''}`}></span>
            <span className={`bar ${navOpen ? 'open' : ''}`}></span>
            <span className={`bar ${navOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile nav menu */}
        <nav className={`nav-links-mobile ${navOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#achievements" onClick={handleNavClick}>Achievements</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="container">
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-text">
            <h2>
              Hi, I&apos;m <span className="highlight">Adesh Meena</span>
            </h2>
            <p className="hero-subtitle">
              Electronics Engineering student at IIT (BHU), Varanasi (2026 batch) with
              a strong focus on software development, full-stack web apps, and competitive
              programming. I love building practical systems that combine clean code,
              intelligent algorithms, and good product thinking.
            </p>

            <div className="hero-badges">
              <span className="badge">
                <span className="badge-dot" /> Open to SDE / Web Dev roles
              </span>
              <span className="badge">450+ LeetCode problems • DSA</span>
              <span className="badge">Next.js • REST APIs • AI + Systems</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects →
              </a>
              <a
                href="/Adesh_Meena_SDE1_Resume.pdf"
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-meta">
              <span className="meta-pill">
                <strong>Electronics @ IIT (BHU)</strong>
              </span>
              <span className="meta-divider" />
              <span className="meta-pill">Software Dev • AI • Web</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="glow-orb" />
              <div className="glow-orb secondary" />
              <div className="card-inner">
                <div className="profile-header">
                  <div className="avatar">A</div>
                  <div className="profile-meta">
                    <strong>Adesh Meena</strong>
                    <span>Student </span>
                  </div>
                  <div className="profile-tags">
                    <span className="tag tag-soft">IIT (BHU), Varanasi</span>
                  </div>
                </div>

                <div className="profile-grid">
                  <div className="profile-stat">
                    <span>Current role</span>
                    <strong>B.Tech Electronics (2022–26)</strong>
                  </div>
                  <div className="profile-stat">
                    <span>Internship</span>
                    <strong>Software Dev Intern @ Bluestock Fintech</strong>
                  </div>
                  <div className="profile-stat">
                    <span>Strengths</span>
                    <strong>DSA, problem solving, systems</strong>
                  </div>
                  <div className="profile-stat">
                    <span>Interests</span>
                    <strong>AI apps, fintech, full-stack</strong>
                  </div>
                </div>

                <div className="profile-footer">
                  <div className="tech-pills">
                    <span className="tech-pill">C++ / STL</span>
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">Next.js</span>
                    <span className="tech-pill">Tailwind CSS</span>
                    <span className="tech-pill">PostgreSQL</span>
                  </div>
                  <div className="status-indicator">
                    <span className="status-dot" />
                    <span>Actively seeking SDE / Intern roles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <SectionHeader
            title="About"
            pill="Who I am"
            subtitle="I bring together electronics fundamentals, strong data structures & algorithms, and modern web development to build reliable, user-focused software."
          />
          <div className="about-grid">
            <article className="card">
              <h3>Short story</h3>
              <p>
                I&apos;m a B.Tech Electronics Engineering student at IIT (BHU) Varanasi (2026 batch).
                My journey started with low-level problem solving in C/C++, and naturally grew into
                building real web applications and AI-powered tools.
              </p>
              <p>
                I enjoy breaking down complex problems, designing clean solutions, and then
                implementing them end-to-end — from database and APIs to responsive UIs.
                Competitive programming has sharpened my thinking, while projects like PREPO
                and IntelliOthello helped me apply those skills to real products.
              </p>
              <ul>
                <li>Comfortable in C++, Python, HTML/CSS, JavaScript</li>
                <li>Hands-on with Next.js, Tailwind CSS, Prisma, PostgreSQL</li>
                <li>Good understanding of game trees, search, recursion &amp; DSA</li>
                <li>Enjoys clean code, debugging and working in teams</li>
              </ul>
            </article>

            <aside className="card" id="experience">
              <h3>Experience</h3>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <span className="timeline-tag">May 2025 – Jun 2025</span>
                  <div>
                    <div className="timeline-role">Software Development Intern</div>
                    <div className="timeline-meta">
                      Bluestock Fintech • IPO Web Application &amp; REST API
                    </div>
                    <p className="timeline-meta">
                      Built a production-ready IPO platform with a secure REST API using
                      Python (Django &amp; DRF) and PostgreSQL. Integrated a responsive
                      Bootstrap + JS frontend and managed team workflow via Notion, GitHub &amp; Figma.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-tag">2023 – 24</span>
                  <div>
                    <div className="timeline-role">SCS Induction Mentor</div>
                    <div className="timeline-meta">
                      Guided first-year students and helped them navigate academics &amp; campus life.
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-tag">Spardha&apos;23 &amp; &apos;24</span>
                  <div>
                    <div className="timeline-role">Events &amp; Operations (Head &amp; Executive)</div>
                    <div className="timeline-meta">
                      Led and managed events for India&apos;s largest Games &amp; Sports
                      festival, handling operations and participant coordination.
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <SectionHeader
            title="Skills"
            pill="What I work with"
            subtitle="Technologies and tools I use regularly for development, problem solving and experimentation."
          />
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-title">Languages</div>
              <div className="skill-tags">
                <span className="skill-tag">C++</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-title">Libraries &amp; Frameworks</div>
              <div className="skill-tags">
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">MediaPipe</span>
                <span className="skill-tag">Django &amp; DRF</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Shadcn UI</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-title">Backend &amp; Databases</div>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">NeonDB</span>
                <span className="skill-tag">Prisma ORM</span>
                <span className="skill-tag">REST API design</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-title">CS Fundamentals</div>
              <div className="skill-tags">
                <span className="skill-tag">Data Structures</span>
                <span className="skill-tag">Algorithms</span>
                <span className="skill-tag">Recursion &amp; game trees</span>
                <span className="skill-tag">Time &amp; space complexity</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-title">Soft Skills</div>
              <div className="skill-tags">
                <span className="skill-tag">Critical thinking</span>
                <span className="skill-tag">Creativity</span>
                <span className="skill-tag">Problem-solving</span>
                <span className="skill-tag">Debugging</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Decision making</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-title">Domains</div>
              <div className="skill-tags">
                <span className="skill-tag">Competitive Programming</span>
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">Embedded &amp; Arduino</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <SectionHeader
            title="Projects"
            pill="Selected work"
            subtitle="A mix of full-stack platforms, AI-powered tools and systems programming that reflects how I like to build."
          />
          <div className="projects-grid">
            {/* PREPO */}
            <article className="project-card">
              <div className="project-thumb" />
              <div className="project-body">
                <h3 className="project-title">PREPO – AI-Powered Career Platform</h3>
                <p>
                  Full-stack AI platform helping users generate resumes, tailored cover letters,
                  and mock quizzes. Serves 100+ active users with personalized, resume-based
                  quiz questions and review tips.
                </p>
                <div className="project-meta">
                  <div className="project-tags">
                    <span className="project-tag">Next.js</span>
                    <span className="project-tag">Gemini AI</span>
                    <span className="project-tag">Prisma • NeonDB</span>
                    <span className="project-tag">Clerk • Inngest</span>
                  </div>
                  <span>Full-stack</span>
                </div>
                <div className="project-links">
                  <a href="#" className="pill-link">Code / Repo</a>
                  <a href="#" className="pill-link">Live demo</a>
                </div>
              </div>
            </article>

            {/* IntelliOthello */}
            <article className="project-card">
              <div className="project-thumb" />
              <div className="project-body">
                <h3 className="project-title">IntelliOthello – Intelligent Game Simulator</h3>
                <p>
                  Othello game AI using k-step look-ahead with MiniMax and α-β pruning.
                  Evaluates board states with a custom scoring function and simulates an
                  intelligent opponent.
                </p>
                <div className="project-meta">
                  <div className="project-tags">
                    <span className="project-tag">C++</span>
                    <span className="project-tag">Game trees</span>
                    <span className="project-tag">Search algorithms</span>
                  </div>
                  <span>Systems / AI</span>
                </div>
                <div className="project-links">
                  <a href="#" className="pill-link">View code</a>
                </div>
              </div>
            </article>

            {/* Gesture Controlled DC Motor */}
            <article className="project-card">
              <div className="project-thumb" />
              <div className="project-body">
                <h3 className="project-title">Hand Gesture Controlled DC Motor</h3>
                <p>
                  Real-time gesture-controlled system using Python, MediaPipe and OpenCV,
                  with safe child-hand detection and Bluetooth communication to Arduino
                  for intelligent device control.
                </p>
                <div className="project-meta">
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">OpenCV</span>
                    <span className="project-tag">MediaPipe</span>
                    <span className="project-tag">Arduino</span>
                  </div>
                  <span>Embedded / CV</span>
                </div>
                <div className="project-links">
                  <a href="#" className="pill-link">View code</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements">
          <SectionHeader
            title="Honours & Achievements"
            pill="What I’m proud of"
            subtitle="A few milestones that reflect my consistency, discipline and technical depth."
          />
          <div className="about-grid">
            <article className="card">
              <h3>Technical</h3>
              <ul>
                <li>Solved 450+ coding problems on LeetCode, strengthening DSA and algorithms.</li>
                <li>Completed PS1 of Digisim&apos;24 – designed a digital circuit for the DES algorithm.</li>
                <li>Regularly practice DSA and competitive programming on online judges.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Sports & Leadership</h3>
              <ul>
                <li>Gold Medal in Powerlifting (83+ kg) at Spardha&apos;24 (IIT BHU&apos;s annual sports fest).</li>
                <li>Events Head, Spardha&apos;24 – led events &amp; operations team.</li>
                <li>Events &amp; Operations Executive, Spardha&apos;23 – managed large-scale sports events.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <SectionHeader
            title="Contact"
            pill="Let’s talk"
            subtitle="Open to SDE, software, AI, and web development internships or projects. Reach out and I’ll respond as soon as I can."
          />
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Quick summary</h3>
              <p>
                I&apos;m looking for roles where I can work on real products, learn from
                experienced engineers, and contribute to clean, reliable systems — especially
                in AI-powered tools, fintech or platform engineering.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 63502 78428</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">
                    <a href="mailto:adeshmeena72@gmail.com">adeshmeena72@gmail.com</a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Varanasi Uttar Pradesh ,221005</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Preferred roles</span>
                  <span className="contact-value">
                    SDE Intern • Web Dev Intern • AI / Platform Engineer
                  </span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/Adeshmeena72" className="social-chip">GitHub</a>
                <a href="https://www.linkedin.com/in/adesh-meena-39020b258/" className="social-chip">LinkedIn</a>
                <a href="https://leetcode.com/u/adeshmeena72/" className="social-chip">LeetCode / Codeforces</a>
                <a
                  href="/Adesh_Meena_SDE1_Resume.pdf"
                  className="social-chip"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span>© 2025 Adesh Meena. All rights reserved.</span>
        </footer>
      </main>
    </div>
  );
}
