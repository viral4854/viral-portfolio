"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";

const RESUME_URL = "/resume.pdf";

const DATA = {
  name: "Viral Dedaniya",
  title: "Full Stack Developer",
  tagline: "Building exceptional digital experiences",
  summary:
    "Software engineer specializing in robust, scalable web applications with modern stacks. Comfortable across frontend, backend, and cloud.",
  email: "viraldedaniya10@gmail.com",
  phone: "(682) 560-6080",
  location: "Arlington, TX, USA",
  socials: [
    { label: "GitHub", href: "https://github.com/viral4854" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/viral-dedaniya-6998452a6/" },
    { label: "Email", href: "mailto:viraldedaniya10@gmail.com" },
  ],
  skills: {
    Languages: ["Python", "C++", "SQL", "C", "JavaScript", "Java"],
    "Frameworks & Tools": [
      "React.js",
      "Node.js",
      "Django",
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3, Lambda, RDS)",
      "REST APIs",
      "GitHub Actions (CI/CD)",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  experience: [
    {
      company: "Brandikonic",
      role: "Web Development Intern",
      start: "Jan 2024",
      end: "Jun 2024",
      points: [
        "Improved REST API performance by ~30% via query optimization and caching.",
        "Designed responsive React UI, lifting mobile engagement by ~40%.",
        "Reduced page load time by ~20% through image compression and caching.",
        "Scaled relational DB to 100k+ records with indexing strategies.",
      ],
      tech: ["React", "REST", "Performance", "SQL"],
    },
    {
      company: "Durian",
      role: "AI Engineer Intern",
      start: "Jul 2023",
      end: "Aug 2023",
      points: [
        "Processed 100k+ customer records with Python & SQL for behavioral insights.",
        "Built ML models (Random Forest, XGBoost) with ~15% higher predictive accuracy.",
        "Automated preprocessing pipeline to cut training cycles by ~25%.",
      ],
      tech: ["Python", "SQL", "ML", "XGBoost", "RandomForest"],
    },
    {
      company: "Radhey Sarees",
      role: "Freelance Web Developer",
      start: "Oct 2022",
      end: "Oct 2022",
      points: [
        "Built secure e‑commerce site with auth and payment integration.",
        "Deployed responsive catalog for 1,500+ products and improved SEO.",
      ],
      tech: ["E‑commerce", "Auth", "Payments", "SEO"],
    },
  ],
  projects: [
    {
      name: "MeetHim — AI Virtual Meeting Assistant",
      summary:
        "One‑on‑one AI sessions on any topic with transcripts and post‑meeting chat support.",
      impact:
        "4‑step flow: topic selection → AI interaction → transcript delivery → continuous chat support.",
      tech: ["React", "Node.js", "NLP/AI APIs"],
      code: "#",
      demo: "#",
    },
    {
      name: "Byte Warriors — 2‑Player Fighting Game",
      summary:
        "Physics‑based 2D fighter with frame‑perfect collisions and smooth animations.",
      impact:
        "60 FPS across modern browsers; modular architecture for new characters & multiplayer.",
      tech: ["JavaScript", "HTML Canvas"],
      code: "#",
      demo: "#",
    },
    {
      name: "1StopStore — E‑Commerce Platform",
      summary:
        "Scalable full‑stack e‑commerce with PayPal, JWT auth, and dynamic product management.",
      impact: "Dockerized deploy on AWS EC2; staging uptime ~99.9%.",
      tech: ["Django", "PayPal API", "JWT", "AWS", "Docker"],
      code: "#",
      demo: "#",
    },
  ],
  education: {
    school: "University of Texas at Arlington",
    degree: "M.S. in Computer Science",
    duration: "Aug 2024 – Jun 2026",
    gpa: "3.85",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Distributed Systems",
      "Database Systems",
      "Computer Vision",
      "Data Structures & Algorithms",
    ],
  },
} as const;

const Container = ({ children, className = "" }: any) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <Container>
      {title && (
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-zinc-600 dark:text-zinc-300">{subtitle}</p>}
        </div>
      )}
      {children}
    </Container>
  </section>
);

const Badge = ({ children }: any) => (
  <span className="rounded-full border px-3 py-1 text-xs sm:text-sm">{children}</span>
);

const Card = ({ children }: any) => (
  <div className="rounded-2xl border p-6 shadow-sm bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
    {children}
  </div>
);

const IconGitHub = (props: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.31-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.61-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
);
const IconLinkedIn = (props: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
);
const IconMail = (props: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
);

const Navbar = ({ onToggleTheme, theme }: any) => (
  <div className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-zinc-950/60 border-b">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
      <a href="#home" className="font-semibold">Portfolio</a>
      <nav className="hidden sm:flex gap-1">
        {["Home","Skills","Projects","Experience","Contact"].map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="px-3 py-2 text-sm hover:opacity-80">{label}</a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <a href={RESUME_URL} className="px-3 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700">Resume</a>
        <button aria-label="Toggle theme" onClick={onToggleTheme} className="px-3 py-1.5 text-sm rounded-full border">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <Section id="home">
    <div className="text-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {DATA.title}
      </h1>
      <p className="mt-3 text-2xl font-semibold">{DATA.tagline}</p>
      <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-300">{DATA.summary}</p>
      <div className="mt-8 flex justify-center gap-3">
        <a href="#projects" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">View My Work</a>
        <a href="#contact" className="px-4 py-2 rounded-xl border hover:bg-zinc-50 dark:hover:bg-zinc-900">Get In Touch</a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-5 text-zinc-600 dark:text-zinc-300">
        <a href={DATA.socials[0].href} aria-label="GitHub" className="hover:opacity-80"><IconGitHub/></a>
        <a href={DATA.socials[1].href} aria-label="LinkedIn" className="hover:opacity-80"><IconLinkedIn/></a>
        <a href={DATA.socials[2].href} aria-label="Email" className="hover:opacity-80"><IconMail/></a>
      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Technical Expertise" subtitle="Proficient in modern technologies and frameworks to deliver reliable apps.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(DATA.skills).map(([group, items]) => (
        <Card key={group}>
          <div className="flex items-start gap-3">
            <div className="text-2xl">💻</div>
            <div>
              <h3 className="font-semibold text-lg">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(items as string[]).map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Featured Projects" subtitle="Recent work demonstrating full‑stack capability.">
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {DATA.projects.map((p, idx) => (
        <Card key={idx}>
          <div className="h-28 w-full rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-4" />
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.summary}</p>
          {p.impact && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.impact}</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
          <div className="mt-4 flex gap-2">
            <a href={p.code} className="px-3 py-1.5 text-sm rounded-xl border">Code</a>
            <a href={p.demo} className="px-3 py-1.5 text-sm rounded-xl border bg-blue-600 text-white hover:bg-blue-700">Demo</a>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-6">
      {DATA.experience.map((e, i) => (
        <Card key={i}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.start} – {e.end}</p>
            </div>
            <div className="flex flex-wrap gap-2">{e.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
            {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education">
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{DATA.education.school}</h3>
          <p className="text-sm">{DATA.education.degree}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{DATA.education.duration} · GPA {DATA.education.gpa}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {DATA.education.coursework.map((c) => <Badge key={c}>{c}</Badge>)}
      </div>
    </Card>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Let's Work Together" subtitle="Have a project in mind? Open to internships and SWE roles.">
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <div className="text-center">
          <div className="text-3xl">📧</div>
          <p className="mt-2 font-medium">Email</p>
          <a className="underline underline-offset-4 decoration-dotted hover:decoration-solid" href={`mailto:${DATA.email}`}>{DATA.email}</a>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <div className="text-3xl">📍</div>
          <p className="mt-2 font-medium">Location</p>
          <p className="text-zinc-600 dark:text-zinc-300">{DATA.location}</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <div className="text-3xl">📞</div>
          <p className="mt-2 font-medium">Phone</p>
          <p className="text-zinc-600 dark:text-zinc-300">{DATA.phone}</p>
        </div>
      </Card>
    </div>

    <div className="mt-8 text-center">
      <div className="inline-flex gap-4 items-center text-zinc-600 dark:text-zinc-300">
        <a className="hover:opacity-80 flex items-center gap-2" href={DATA.socials[0].href}><IconGitHub/> GitHub</a>
        <a className="hover:opacity-80 flex items-center gap-2" href={DATA.socials[1].href}><IconLinkedIn/> LinkedIn</a>
        <a className="hover:opacity-80 flex items-center gap-2" href={DATA.socials[2].href}><IconMail/> Email</a>
      </div>
    </div>
  </Section>
);

export default function Page() {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = mq?.matches;
    setIsDark(theme === "dark" || (theme === "system" && prefersDark));
  }, [theme]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Navbar theme={isDark ? "dark" : "light"} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <footer className="py-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Viral Dedaniya. Built with Next.js & Tailwind.
        </footer>
      </div>
    </div>
  );
}
