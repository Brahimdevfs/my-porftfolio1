import React from "react";
import { ME, PROJECTS, EXPERIENCE, EDUCATION } from "./Data";
import { Github, Linkedin, Mail, MapPin, Phone, Globe, Code2, Building2, GraduationCap, Download, ExternalLink } from "lucide-react";
import "./Portfolio.css";

export default function Portfolio() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent("New project inquiry");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#top" className="logo">{ME.name}</a>
        <div className="nav-buttons">
          <a className="btn btn-outline" href={ME.resumeUrl} target="_blank">
            <Download className="icon"/> Download CV
          </a>
          <a className="btn btn-primary" href="#contact">Hire me</a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="hero">
        <div className="hero-card">
          <h1>Hi, I'm {ME.name} 👋</h1>
          <p className="role">{ME.role}</p>
          <p className="about">{ME.about}</p>
          <div className="skills">
            {ME.skills.slice(0,8).map((s)=> <span key={s} className="chip">{s}</span>)}
            {ME.skills.length > 8 && <span className="chip">+{ME.skills.length - 8} more</span>}
          </div>
          <div className="hero-buttons">
            <a className="btn btn-secondary" href={ME.socials.github} target="_blank"><Github className="icon"/> GitHub</a>
            <a className="btn btn-secondary" href={ME.socials.linkedin} target="_blank"><Linkedin className="icon"/> LinkedIn</a>
            <a className="btn btn-outline" href={`mailto:${ME.email}`}><Mail className="icon"/> Email</a>
          </div>
        </div>

        <div className="hero-cardn contact-info">
          <div><MapPin className="icon"/> {ME.location}</div>
          <div><Phone className="icon"/> {ME.phone}</div>
          <div><Globe className="icon"/> <a href={ME.website} target="_blank">{ME.website.replace("https://","")}</a></div>
          <p>Available for freelance & full‑time.</p>
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2><Code2 className="icon"/> Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p)=>(
            <div key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="skills">
                {p.stack.map((s)=> <span key={s} className="chip">{s}</span>)}
              </div>
              <ul>
                {p.highlights.map((h)=> <li key={h}>{h}</li>)}
              </ul>
              <div className="hero-buttons">
                <a className="btn btn-outline" href={p.repo} target="_blank"><Github className="icon"/> Repo</a>
                <a className="btn btn-secondary" href={p.demo} target="_blank"><ExternalLink className="icon"/> Live</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* EXPERIENCE & EDUCATION */}
      <section id="experience" className="experience-section">
        <h2><Building2 className="icon"/> Experience</h2>
        <div className="section-grid">
          <div className="experience-card">
            {EXPERIENCE.map((x)=>(
              <div key={x.org} className="timeline-item">
                <span className="timeline-dot"></span>
                <h3>{x.role} · <span>{x.org}</span></h3>
                <p className="date">{x.date}</p>
                <ul>{x.points.map((pt)=> <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
          </div>

          <div className="education-skills">
            <div className="education-card">
              <h3><GraduationCap className="icon"/> Education</h3>
              {EDUCATION.map((e)=>(
                <div key={e.place} className="edu-item">
                  <span>{e.place}</span>
                  <span className="date">{e.date}</span>
                </div>
              ))}
            </div>

            <div className="skills-card">
              <h3>Core Skills</h3>
              <div className="skills">
                {ME.skills.map((s)=> <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <h2><Mail className="icon"/> Contact</h2>
        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your name</label>
              <input name="name" placeholder="Your name" required />
            </div>
            <div>
              <label>Your email</label>
              <input name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" placeholder="Tell me about your project..." required rows={5}/>
            </div>
            <button type="submit">Send message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} {ME.name}. All rights reserved.</p>
        <div className="footer-links">
          <a href={ME.socials.github} target="_blank"><Github className="icon"/> GitHub</a>
          <a href={ME.socials.linkedin} target="_blank"><Linkedin className="icon"/> LinkedIn</a>
          <a href={`mailto:${ME.email}`}><Mail className="icon"/> Email</a>
        </div>
      </footer>
    </div>
  );
}
