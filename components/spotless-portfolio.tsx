"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FormEvent } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { projects, type Project } from "@/config/projects";
import { siteConfig } from "@/config/site";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <button
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className="sp-icon-button"
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

function Header() {
  return (
    <header className="sp-header">
      <Link className="sp-wordmark" href="/?param=toto">
        <span>SL</span>
        <span>Samy Layaida</span>
      </Link>
      <nav aria-label="Main navigation" className="sp-nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeButton />
    </header>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="sp-project" href={`/projects/${project.slug}?param=toto`}>
      <span aria-hidden="true" className="sp-wipe" />
      <div className="sp-project-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.status}</span>
        <span>{project.year}</span>
      </div>
      <div className="sp-project-body">
        <div>
          <p className="sp-kicker">{project.tagline}</p>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="sp-project-foot">
        <div>
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <FiArrowUpRight aria-hidden="true" />
      </div>
    </Link>
  );
}

function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    window.location.href = `mailto:layaida.samy@gmail.com?subject=${encodeURIComponent(`Hello from ${name}`)}&body=${encodeURIComponent(`${message}\n\n${name} (${email})`)}`;
  }

  return (
    <form className="sp-form" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input required autoComplete="name" name="name" />
      </label>
      <label>
        <span>Email</span>
        <input required autoComplete="email" name="email" type="email" />
      </label>
      <label className="sp-form-wide">
        <span>What are we making?</span>
        <textarea required minLength={25} name="message" rows={4} />
      </label>
      <button className="sp-button sp-form-wide" type="submit">
        Send the good stuff <FiArrowUpRight />
      </button>
    </form>
  );
}

export function SpotlessPortfolio() {
  return (
    <div className="spotless-shell">
      <Header />
      <main>
        <section className="sp-hero" id="top">
          <div className="sp-hero-copy">
            <p className="sp-overline">
              <span className="sp-status" /> Software engineer, Paris
            </p>
            <h1>
              I build tidy systems for <em>messy ideas.</em>
            </h1>
            <p className="sp-intro">
              Full-stack engineer, agent tinkerer, and the person who will clean
              your screen before the meeting starts.
            </p>
            <div className="sp-actions">
              <a className="sp-button" href="#work">
                See what I build <FiArrowUpRight />
              </a>
              <a className="sp-text-link" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>
          <div className="sp-portrait-wrap">
            <div className="sp-note sp-note-top">
              pure matcha
              <br />
              no milk. obviously.
            </div>
            <div className="sp-portrait">
              <Image
                fill
                priority
                alt="Samy Layaida"
                sizes="(max-width: 700px) 72vw, 360px"
                src="/images/my_image.jpg"
              />
              <span aria-hidden="true" className="sp-portrait-wipe" />
            </div>
            <div className="sp-note sp-note-bottom">
              <FiCheck /> screen inspected
            </div>
          </div>
        </section>

        <section className="sp-about" id="about">
          <p className="sp-section-label">The operating manual</p>
          <div>
            <h2>
              Precision where it matters.
              <br />
              <em>Curiosity everywhere else.</em>
            </h2>
            <p>
              I like clean interfaces, aligned edges, and systems that explain
              themselves. My attention may take the scenic route, but the
              details arrive spotless.
            </p>
          </div>
          <ul>
            <li>
              <span>01</span> Full-stack development
            </li>
            <li>
              <span>02</span> AI agents and tooling
            </li>
            <li>
              <span>03</span> Self-hosted everything
            </li>
            <li>
              <span>04</span> One microfiber, always nearby
            </li>
          </ul>
        </section>

        <section className="sp-work" id="work">
          <div className="sp-section-head">
            <div>
              <p className="sp-section-label">Selected work</p>
              <h2>
                Things I cared enough
                <br />
                to make <em>properly.</em>
              </h2>
            </div>
            <p>Built, broken, cleaned up, and shipped.</p>
          </div>
          <div className="sp-projects">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} index={index} project={project} />
            ))}
          </div>
        </section>

        <section className="sp-contact" id="contact">
          <div>
            <p className="sp-section-label">Contact</p>
            <h2>
              Got a messy problem?
              <br />
              <em>Perfect.</em>
            </h2>
            <p>
              Tell me what is refusing to behave. I like a challenge with
              fingerprints on it.
            </p>
            <div className="sp-socials">
              <a
                href={siteConfig.links.github}
                rel="noreferrer"
                target="_blank"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <footer className="sp-footer">
        <span>Samy Layaida, {new Date().getFullYear()}</span>
        <span>Wiped clean before shipping.</span>
      </footer>
    </div>
  );
}

export function SpotlessProjectDetail({ project }: { project: Project }) {
  return (
    <div className="spotless-shell">
      <Header />
      <main className="sp-detail">
        <Link className="sp-text-link" href="/?param=toto#work">
          Back to work
        </Link>
        <div className="sp-detail-head">
          <div>
            <p className="sp-overline">
              {project.status} · {project.year}
            </p>
            <h1>{project.title}</h1>
            <p className="sp-detail-tagline">{project.tagline}</p>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="sp-detail-grid">
          <section>
            <p className="sp-section-label">What it does</p>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>
                  <FiCheck /> {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <p className="sp-section-label">Built with</p>
            <div className="sp-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        </div>
        {(project.github || project.live) && (
          <div className="sp-detail-actions">
            {project.github && (
              <a
                className="sp-button"
                href={project.github}
                rel="noreferrer"
                target="_blank"
              >
                View code <FiGithub />
              </a>
            )}
            {project.live && (
              <a
                className="sp-button sp-button-secondary"
                href={project.live}
                rel="noreferrer"
                target="_blank"
              >
                Open project <FiArrowUpRight />
              </a>
            )}
          </div>
        )}
      </main>
      <footer className="sp-footer">
        <span>Samy Layaida, {new Date().getFullYear()}</span>
        <span>Wiped clean before shipping.</span>
      </footer>
    </div>
  );
}
