"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

type StackGroup = {
  title: string;
  items: string[];
};

const quickStats = [
  { label: "Years Experience", value: "5+" },
  { label: "Core Domains", value: "Frontend, Mobile, Fullstack" },
  { label: "Main Focus", value: "Scalable UI + Reliable Delivery" },
];

const experiences: Experience[] = [
  {
    role: "Freelance Software Engineer",
    company: "Freelance",
    period: "December 2020 - Present",
    highlights: [
      "Delivered software projects on time with quality-first execution and close client collaboration.",
      "Worked across React, Vue, Angular, Next.js, Nuxt, React Native, Flutter, and multiple database systems.",
      "Optimized existing codebases and development workflows, improving project speed and app performance.",
    ],
  },
  {
    role: "Front End / Mobile Engineer",
    company: "PT Roketin",
    period: "March 2023 - January 2026",
    highlights: [
      "Contributed to frontend architecture initiatives using Domain-Driven Design, project skeletons, and shared tooling.",
      "Built enterprise systems including CMS, reinsurance, loan management, and real-time applications with websocket/socket.io.",
      "Established reusable UI components, supported code reviews and deployments, and mentored engineers.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Pajakku",
    period: "May 2022 - February 2023",
    highlights: [
      "Implemented modern frontend patterns and accelerated development speed through reusable structure.",
      "Integrated APIs to improve functionality and user interaction across key product workflows.",
      "Improved page performance and refreshed mobile modules with React Native.",
    ],
  },
  {
    role: "Front End Engineer / Lead Frontend Engineer",
    company: "INAGRI",
    period: "June 2021 - June 2022",
    highlights: [
      "Led frontend delivery and coordinated team execution for high-quality web applications.",
      "Improved load performance and user experience through iterative optimization.",
      "Collaborated cross-functionally to keep product integration smooth from development to release.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Purwadhika Digital Technology School",
    period: "April 2021 - June 2021",
    highlights: [
      "Developed fullstack product features and integrated third-party APIs to expand application capability.",
      "Built responsive interfaces that improved usability on mobile devices.",
      "Improved delivery speed by collaborating tightly with cross-functional teams.",
    ],
  },
];

const stackGroups: StackGroup[] = [
  {
    title: "Language",
    items: ["TypeScript", "JavaScript", "GO", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Angular TS",
      "WebSocket/Socket.IO",
    ],
  },
  {
    title: "Backend",
    items: ["Golang", "Node.js", "Express", "NestJS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -12% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const heroParallax = Math.min(scrollY * 0.22, 140);
  const orbParallax = Math.min(scrollY * 0.12, 120);
  const stackSpotParallax = Math.min(scrollY * 0.08, 80);
  const stackCardParallax = Math.min(scrollY * 0.018, 12);

  return (
    <main className="portfolio-shell min-h-screen text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div
          className="parallax-mesh"
          style={{ transform: `translate3d(0, ${orbParallax * -0.7}px, 0)` }}
        />
        <div
          className="orb orb-cyan"
          style={{ transform: `translate3d(0, ${orbParallax}px, 0)` }}
        />
        <div
          className="orb orb-warm"
          style={{ transform: `translate3d(0, ${orbParallax * -0.45}px, 0)` }}
        />
        <div
          className="orb orb-small"
          style={{ transform: `translate3d(0, ${orbParallax * 0.6}px, 0)` }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070f1c]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="font-display text-base font-bold tracking-[0.2em] text-[#f6dfc6]"
          >
            NAUFAL
          </a>
          <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.16em] text-[#c9d3e4] md:text-sm">
            <a href="#experience" className="transition hover:text-[#39d9d3]">
              Experience
            </a>
            <a href="#stack" className="transition hover:text-[#39d9d3]">
              Tech Stack
            </a>
            <a href="#contact" className="transition hover:text-[#39d9d3]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.2fr_0.8fr] md:pt-24"
      >
        <div data-reveal className="reveal">
          <p className="inline-flex rounded-full border border-[#39d9d3]/40 bg-[#39d9d3]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#b9fffd]">
            Frontend, Mobile, & Fullstack Developer
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-[#fff7ef] sm:text-5xl md:text-6xl">
            Naufal Algiffary
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Software Engineer with 5+ years of experience architecting and
            delivering high-performance applications across web, mobile, and
            backend platforms. Focused on reusable UI architecture, clean
            engineering process, and high-impact product delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:naufalgiffary@gmail.com"
              className="rounded-full bg-[#ff7f43] px-6 py-3 text-sm font-semibold text-[#1f0f06] transition hover:-translate-y-0.5 hover:bg-[#ff915f]"
            >
              naufalgiffary@gmail.com
            </a>
            <a
              href="/Naufal-Algiffary-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-[#0d1b2f]/80 px-6 py-3 text-sm font-semibold text-[#dbe9ff] transition hover:-translate-y-0.5 hover:border-[#39d9d3]/70"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickStats.map((stat, index) => (
              <article
                key={stat.label}
                data-reveal
                className="reveal glass-panel glow-card rounded-2xl p-4"
                style={{ "--delay": `${140 + index * 80}ms` } as CSSProperties}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#9eb0ca]">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#f7f2ea]">
                  {stat.value}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div data-reveal className="reveal md:justify-self-end">
          <div
            className="glass-panel glow-card relative mx-auto w-full max-w-sm rounded-[2rem] p-4"
            style={{
              transform: `translate3d(0, ${heroParallax * -0.35}px, 0)`,
            }}
          >
            <div className="absolute inset-x-6 top-6 h-36 rounded-full bg-[#39d9d3]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/15">
              <Image
                src="/profile.jpg"
                alt="Foto profil Naufal Algiffary"
                width={520}
                height={720}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="mt-4 space-y-1 px-1 pb-2 text-sm">
              <p className="font-semibold tracking-wide text-[#ffe5cf]">
                Based in Indonesia
              </p>
              <a
                href="https://www.linkedin.com/in/naufalgiffary"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--muted)] transition hover:text-[#39d9d3]"
              >
                LinkedIn: linkedin.com/in/naufalgiffary
              </a>
              <a
                href="https://github.com/naufalgiffary"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--muted)] transition hover:text-[#39d9d3]"
              >
                GitHub: github.com/naufalgiffary
              </a>
              <p className="text-[var(--muted)]">Phone: 082119620272</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="section-shell mx-auto w-full max-w-6xl px-6 py-16 md:py-20"
      >
        <div
          data-reveal
          className="reveal flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8eb1d4]">
              Career Journey
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#fff4e6] sm:text-4xl">
              Experience Timeline
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Experienced in leading delivery, building scalable frontend systems,
            and shipping mobile-web products in fast-moving teams.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              data-reveal
              className="reveal glass-panel glow-card rounded-3xl p-6 md:p-8"
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8eb1d4]">
                    {experience.company}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#fff6ec]">
                    {experience.role}
                  </h3>
                </div>
                <p className="rounded-full border border-[#ff7f43]/50 bg-[#ff7f43]/15 px-4 py-1 text-xs font-semibold tracking-wide text-[#ffd4bc]">
                  {experience.period}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-[#d3def0]">
                {experience.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#39d9d3]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="stack"
        className="section-shell mx-auto w-full max-w-6xl px-6 py-16 md:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div
            className="stack-spot stack-spot-left"
            style={{
              transform: `translate3d(0, ${stackSpotParallax * -0.4}px, 0)`,
            }}
          />
          <div
            className="stack-spot stack-spot-right"
            style={{
              transform: `translate3d(0, ${stackSpotParallax * 0.55}px, 0)`,
            }}
          />
        </div>

        <div data-reveal className="reveal relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8eb1d4]">
            Tools of Choice
          </p>
          <h2 className="mt-3 font-display text-3xl text-[#fff4e6] sm:text-4xl">
            Core Tech Stack
          </h2>
        </div>

        <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <article
              key={group.title}
              data-reveal
              className="reveal glass-panel glow-card rounded-2xl p-5"
              style={{ "--delay": `${index * 90}ms` } as CSSProperties}
            >
              <div
                className="stack-card-parallax"
                style={{
                  transform: `translate3d(0, ${((index % 3) - 1) * stackCardParallax}px, 0)`,
                }}
              >
                <h3 className="font-display text-xl text-[#ffe9d5]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="stack-badge rounded-full px-3 py-1.5 text-xs font-semibold text-[#dce8fb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="section-shell mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:pt-20"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article
            data-reveal
            className="reveal glass-panel glow-card rounded-3xl p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8eb1d4]">
              Education
            </p>
            <h3 className="mt-3 font-display text-2xl text-[#fff4e6]">
              Purwadhika Digital Technology School
            </h3>
            <p className="mt-2 text-sm text-[#d3def0]">
              Fullstack Web & Mobile Development • 2020
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#d3def0]">
              <li>
                Fundamental of JavaScript, HTML, CSS, ReactJS, and React Native.
              </li>
              <li>
                Backend development with Node.js, Express.js, MySQL, and
                MongoDB.
              </li>
            </ul>

            <h4 className="mt-6 text-base font-semibold text-[#ffe9d5]">
              Universitas Padjadjaran
            </h4>
            <p className="mt-1 text-sm text-[#d3def0]">
              Bachelor&apos;s Degree, Agribusiness/Agricultural Business
              Operation • 2019 • GPA 3.53
            </p>
          </article>

          <article
            data-reveal
            className="reveal glass-panel glow-card rounded-3xl p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8eb1d4]">
              Let&apos;s Build Something
            </p>
            <h3 className="mt-3 font-display text-2xl text-[#fff4e6]">
              Available for Collaboration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#d3def0]">
              Open to frontend, mobile, and fullstack opportunities. I enjoy
              helping teams deliver performant, maintainable products with
              strong engineering quality.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:naufalgiffary@gmail.com"
                className="block text-[#b9fffd] transition hover:text-[#39d9d3]"
              >
                naufalgiffary@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/naufalgiffary"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#ffe0c8] transition hover:text-[#ff7f43]"
              >
                linkedin.com/in/naufalgiffary
              </a>
              <a
                href="https://github.com/naufalgiffary"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#ffe0c8] transition hover:text-[#ff7f43]"
              >
                github.com/naufalgiffary
              </a>
              <p className="text-[var(--muted)]">Phone: 082119620272</p>
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs tracking-[0.18em] text-[#8ea3bf]">
        NAUFAL ALGIFFARY • SOFTWARE ENGINEER
      </footer>
    </main>
  );
}
