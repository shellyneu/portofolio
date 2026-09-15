'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <>
      <div className="fixed -top-36 right-0 w-[550px] h-[550px] bg-blush-soft/60 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="fixed top-[45%] -left-36 w-[450px] h-[450px] bg-stone-200/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      {/*  NAVIGATION: Architectural Minimalist Glass Header  */}
      <header className="fixed top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-border-fine transition-all duration-300">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10 min-h-20 py-4 flex items-center justify-between relative">
          {/*  Brand & Identity Monogram  */}
          <a className="flex items-center gap-3.5 group" href="#">
            <div className="flex flex-col">
              <span className="font-display font-bold text-[15px] tracking-tight text-ink-primary flex items-center gap-1.5">
                Shellyn Euriska Putri
                <span className="w-1.5 h-1.5 rounded-full bg-blush-accent inline-block"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                Software Engineer &amp; Student
              </span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-ink-secondary">
            <a className="hover:text-ink-primary transition-colors" href="#about">
              About me
            </a>
            <a className="hover:text-ink-primary transition-colors" href="#stack">
              Skills
            </a>
            <a className="hover:text-ink-primary transition-colors" href="#works">
              Projects
            </a>
            <a className="hover:text-ink-primary transition-colors" href="#experience">
              Experience
            </a>
            <a className="hover:text-ink-primary transition-colors" href="#contact">
              Contact
            </a>
          </nav>
          {/*  Desktop CTA and mobile menu trigger  */}
          <div className="flex items-center gap-2">
            <a
              className="hidden lg:flex px-4 py-2 rounded-md bg-charcoal text-white font-mono text-[11px] tracking-wider uppercase hover:bg-black transition-all duration-300 hover:shadow-md items-center gap-2"
              href="#contact"
            >
              <span>Contact</span>
              <span className="material-symbols-outlined text-[15px]">north_east</span>
            </a>
            <a
              className="lg:hidden w-10 h-10 rounded-md bg-charcoal text-white flex items-center justify-center hover:bg-black transition"
              href="#contact"
              aria-label="Go to contact"
            >
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
            <button
              className="lg:hidden w-10 h-10 rounded-md border border-border-fine bg-surface-pure text-ink-primary flex items-center justify-center hover:border-blush-accent transition"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
          {isMenuOpen && (
            <nav className="lg:hidden absolute top-full right-5 left-5 mt-2 p-3 rounded-xl bg-surface-pure border-2 border-blush-accent/55 shadow-[0_12px_28px_rgba(212,165,165,0.22)] flex flex-col gap-1 font-mono text-xs uppercase tracking-wider text-ink-secondary">
              <a
                className="px-3 py-3 rounded hover:bg-blush-soft hover:text-ink-primary transition"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About me
              </a>
              <a
                className="px-3 py-3 rounded hover:bg-blush-soft hover:text-ink-primary transition"
                href="#stack"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                className="px-3 py-3 rounded hover:bg-blush-soft hover:text-ink-primary transition"
                href="#works"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                className="px-3 py-3 rounded hover:bg-blush-soft hover:text-ink-primary transition"
                href="#experience"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                className="px-3 py-3 rounded hover:bg-blush-soft hover:text-ink-primary transition"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>
      <main className="w-full pt-20">
        {/*  HERO SECTION: Dramatic Typography & Interactive Code Architecture  */}
        <section
          data-aos="fade-up"
          className="min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-12 pb-16 border-b border-border-fine relative"
          id="about"
        >
          <div className="max-w-[1360px] mx-auto px-5 lg:px-10 w-full flex flex-col justify-between h-full">
            {/*  Top Status Coordinate Bar  */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-border-fine font-mono text-xs text-ink-muted">
              <div className="flex items-center gap-3">
                <span className="text-charcoal font-semibold">LOC:</span>
                <span>Purwokerto, Central Java, ID [7.4243° S, 109.2302° E]</span>
              </div>
              <div className="flex items-center gap-4">
                <span>DEPT: INFORMATICS ENGINEERING</span>
                <span className="text-neutral-300">•</span>
                <span>TELKOM UNIVERSITY &lsquo;24</span>
              </div>
            </div>
            {/*  Dramatic Oversized Display Headline  */}
            <div className="my-8 md:my-12">
              <div className="flex items-baseline justify-between mb-2">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
                  PORTFOLIO / 2026
                </p>
                <p className="hidden sm:block font-mono text-xs text-ink-muted">
                  FRONT-END EXPERIENCES &amp; HUMAN-CENTERED DESIGN
                </p>
              </div>
              <h1 className="font-display font-extrabold text-[12vw] lg:text-[7.8rem] leading-[0.88] tracking-[-0.045em] text-ink-primary uppercase select-none break-words">
                Shellyn{' '}
                <span className="font-serif italic font-light tracking-tight text-neutral-600 lowercase text-[11vw] lg:text-[7.2rem]">
                  euriska
                </span>{' '}
                Putri
              </h1>
            </div>
            {/*  Asymmetrical Hero Grid: Bio, Terminal Snippet & Portrait  */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
              {/*  Col 1: Editorial Manifesto & Quick Action Buttons  */}
              <div
                className="lg:col-span-4 flex flex-col justify-between bg-surface-pure p-7 rounded-xl border border-border-fine shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(212,165,165,0.28)]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-canvas font-mono text-[10px] text-ink-muted uppercase border border-border-fine">
                    <span className="w-1.5 h-1.5 rounded-full bg-blush-accent"></span>
                    Software Craftsmanship
                  </div>
                  <p className="font-serif text-2xl lg:text-[23px] text-ink-primary italic leading-snug">
                    &ldquo;I build reliable systems with a human edge.&ldquo;
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    Informatics student focused on <strong>Go, distributed systems,</strong> and
                    thoughtful React interfaces.
                  </p>
                </div>
                {/*  Minimalist Action CTAs  */}
                <div className="pt-6 border-t border-border-fine mt-6 flex flex-wrap gap-2.5">
                  <a
                    className="px-4 py-2.5 rounded bg-charcoal text-white font-mono text-[11px] uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-1.5"
                    href="#works"
                  >
                    <span>View work</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                  </a>
                  <a
                    className="px-4 py-2.5 rounded bg-canvas text-ink-primary border border-border-fine font-mono text-[11px] uppercase tracking-wider hover:bg-canvas-alt transition flex items-center gap-1.5"
                    href="https://github.com/shellyneu"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[14px]">code</span>
                    <span>GitHub</span>
                  </a>
                  <a
                    className="px-3 py-2.5 rounded bg-blush-soft text-charcoal font-mono text-[11px] tracking-wider uppercase hover:bg-blush-accent/30 transition flex items-center gap-1"
                    href="/Shellyn_Euriska_Putri_Claude_Campus_Ambassador_Resume.pdf"
                    download
                  >
                    <span className="material-symbols-outlined text-[14px]">download</span>
                    <span>CV.PDF</span>
                  </a>
                </div>
              </div>
              {/*  Col 2: High-End Live Interactive Go Goroutine Terminal Window  */}
              <div className="lg:col-span-4 flex flex-col rounded-xl bg-terminal-bg text-neutral-300 font-mono text-xs overflow-hidden shadow-2xl border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(212,165,165,0.28)]">
                {/*  Terminal Chrome Header  */}
                <div className="bg-neutral-900/90 px-4 py-3 flex items-center justify-between border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-[11px] text-neutral-400">
                      shellyn@worker-node-01: ~/engine
                    </span>
                  </div>
                  <span className="text-[10px] uppercase text-blush-accent bg-neutral-800/80 px-2 py-0.5 rounded">
                    go1.22 runtime
                  </span>
                </div>
                {/*  Code Body  */}
                <div className="p-4 flex-1 flex flex-col justify-between font-mono text-[12px] leading-relaxed">
                  <div className="space-y-3 text-neutral-400">
                    <p>
                      <span className="text-rose-400">focus:</span>{' '}
                      <span className="text-neutral-200">front-end development</span>
                    </p>
                    <p>
                      <span className="text-rose-400">build:</span>{' '}
                      <span className="text-neutral-200">clear, responsive interfaces</span>
                    </p>
                    <p>
                      <span className="text-rose-400">care:</span>{' '}
                      <span className="text-neutral-200">accessible details and smooth flows</span>
                    </p>
                    <p className="pt-3 text-neutral-500">
                      Turning ideas into interfaces people enjoy using.
                    </p>
                  </div>
                  {/*  Simulated Log Stream  */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">● 200 OK</span>
                      <span>HealthCheck: [Informatics-Telkom &lsquo;24]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blush-accent">↳ GDGoC Campus:</span>
                      <span className="text-neutral-300">Budget audit completed (100%)</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Col 3: Shellyn Portrait with Asymmetrical Editorial Badge  */}
              <div className="lg:col-span-4 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(212,165,165,0.28)] rounded-xl">
                <div className="w-full h-full min-h-[360px] rounded-xl overflow-hidden bg-surface-pure border border-border-fine relative p-2 shadow-sm">
                  <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img
                      alt="Shellyn Euriska Putri Portrait"
                      className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      src="/images/profile.JPG"
                    />
                    {/*  Gradient Vignette  */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent"></div>
                    {/*  Floating Editorial Meta Tag  */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-surface-pure/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-xs tracking-tight text-ink-primary">
                          Shellyn E. Putri
                        </h3>
                        <p className="font-mono text-[10px] text-ink-muted">
                          Lab Assistant • GDGoC Core Treasurer
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded bg-canvas flex items-center justify-center text-charcoal border border-border-fine font-mono text-xs font-semibold">
                        &lsquo;24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  CONTINUOUS MARQUEE: TECH ARSENAL STRIP  */}
        <section
          data-aos="fade-up"
          className="py-6 border-b border-border-fine bg-surface-pure overflow-hidden relative"
          id="stack"
        >
          <div className="max-w-[1360px] mx-auto px-5 lg:px-10 mb-3 flex items-center justify-between font-mono text-[11px] text-ink-muted uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blush-accent"></span>
              Tools I work with
            </span>
            <span>Selected stack</span>
          </div>
          {/*  Marquee Track A (Forward)  */}
          <div className="flex whitespace-nowrap overflow-hidden border-y border-border-fine/60 py-3 bg-canvas/60">
            <div className="flex items-center gap-8 animate-marquee-slow font-mono text-sm tracking-wider uppercase text-ink-primary">
              <span className="flex items-center gap-2 font-semibold">
                Go (Golang) <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                C++ Concurrency <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Python Automation <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                React.js &amp; Next.js <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                PostgreSQL &amp; MySQL <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Docker &amp; Microservices <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Tailwind CSS <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Google Teachable Machine <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                AWS Cloud <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Wireshark Network Analysis <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Figma &amp; Systems Design <span className="text-neutral-300">/</span>
              </span>
              {/*  Duplicate for seamless looping  */}
              <span className="flex items-center gap-2 font-semibold">
                Go (Golang) <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                C++ Concurrency <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Python Automation <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                React.js &amp; Next.js <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                PostgreSQL &amp; MySQL <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Docker &amp; Microservices <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Tailwind CSS <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Google Teachable Machine <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                AWS Cloud <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Wireshark Network Analysis <span className="text-neutral-300">/</span>
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Figma &amp; Systems Design <span className="text-neutral-300">/</span>
              </span>
            </div>
          </div>
        </section>
        {/*  EDITORIAL CATEGORY INDEX & VERIFIED CREDENTIALS  */}
        <section data-aos="fade-up" className="py-20 border-b border-border-fine">
          <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border-fine">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blush-accent font-semibold">
                  Capability Matrix
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-ink-primary mt-1">
                  Skills &amp; credentials
                </h2>
              </div>
              <p className="font-mono text-xs text-ink-muted max-w-sm mt-3 md:mt-0">
                Built through study, labs, and real projects.
              </p>
            </div>
            {/*  3-Column Architectural Breakdown  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/*  Category 01  */}
              <div
                className="p-8 rounded-xl bg-surface-pure border-2 border-blush-accent/60 shadow-[0_4px_20px_rgba(212,165,165,0.14)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(212,165,165,0.28)]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <div className="flex items-center justify-between text-ink-muted font-mono text-xs pb-4 border-b border-border-fine mb-6">
                    <span>CAT // 01</span>
                    <span>PRIMARY FOCUS</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink-primary mb-3">
                    Front-end &amp; Interface Design
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6 font-sans">
                    Creating clear, responsive interfaces that feel natural to use across every
                    screen.
                  </p>
                  <ul className="space-y-2.5 font-mono text-xs text-ink-primary">
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>React.js &amp; Next.js</span>
                      <span className="text-blush-accent font-semibold">90%</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>Tailwind CSS Systems</span>
                      <span className="text-blush-accent font-semibold">95%</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>TypeScript</span>
                      <span className="text-blush-accent font-semibold">84%</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>Figma &amp; Component Systems</span>
                      <span className="text-blush-accent font-semibold">88%</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-border-fine flex items-center gap-2 text-xs font-mono text-ink-muted">
                  <span className="material-symbols-outlined text-[16px] text-blush-accent">
                    check_circle
                  </span>
                  <span>Designed for real people and real screens</span>
                </div>
              </div>
              {/*  Category 02  */}
              <div
                className="p-8 rounded-xl bg-surface-pure border-2 border-blush-accent/60 shadow-[0_2px_12px_rgba(212,165,165,0.14)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(212,165,165,0.28)]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                  <div className="flex items-center justify-between text-ink-muted font-mono text-xs pb-4 border-b border-border-fine mb-6">
                    <span>CAT // 02</span>
                    <span>SUPPORTING SKILLS</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink-primary mb-3">
                    Engineering Foundations
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6 font-sans">
                    Technical foundations that help me build stable, thoughtful products from end to
                    end.
                  </p>
                  <ul className="space-y-2.5 font-mono text-xs text-ink-primary">
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>Go &amp; REST APIs</span>
                      <span className="text-blush-accent font-semibold">88%</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>PostgreSQL &amp; Data Modeling</span>
                      <span className="text-blush-accent font-semibold">88%</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>Python Automation</span>
                      <span className="text-blush-accent font-semibold">85%</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-canvas">
                      <span>C++ Algorithms</span>
                      <span className="text-blush-accent font-semibold">90%</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-border-fine flex items-center gap-2 text-xs font-mono text-ink-muted">
                  <span className="material-symbols-outlined text-[16px] text-blush-accent">
                    check_circle
                  </span>
                  <span>Reliable structure behind the interface</span>
                </div>
              </div>
              {/*  Category 03: Verified Certifications  */}
              <div
                className="p-8 rounded-xl bg-surface-pure border-2 border-blush-accent/60 shadow-[0_2px_12px_rgba(212,165,165,0.14)] flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(212,165,165,0.28)]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-blush-soft/70 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between text-ink-muted font-mono text-xs pb-4 border-b border-border-fine mb-6">
                    <span>CAT // 03</span>
                    <span>CREDENTIALS</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink-primary mb-2">
                    Certificates &amp; Learning
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6 font-sans">
                    A selection of programs that shaped my technical and product perspective.
                  </p>
                  <div className="space-y-3">
                    <a
                      className="block p-3 rounded-lg bg-canvas border border-border-fine hover:border-blush-accent/50 transition"
                      href="https://drive.google.com/file/d/1GpGRwH05a0Rwj4pxjccoEM4axvo-If3O/view?usp=drive_link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-blush-accent">
                        <span>AWS ACADEMY</span>
                        <span>CLOUD FOUNDATION</span>
                      </div>
                      <p className="text-xs text-ink-primary font-medium mt-0.5">
                        AWS Cloud Architecture &amp; Infrastructure
                      </p>
                    </a>
                    <a
                      className="block p-3 rounded-lg bg-canvas border border-border-fine hover:border-blush-accent/50 transition"
                      href="https://drive.google.com/file/d/1U6_xAwJs8zFc-2bJV9ZVkoDQIjs7Bkhv/view?usp=sharing"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-blush-accent">
                        <span>ASEAN FOUNDATION</span>
                        <span>AI READY SCHOLAR</span>
                      </div>
                      <p className="text-xs text-ink-primary font-medium mt-0.5">
                        Applied Artificial Intelligence &amp; Ethics
                      </p>
                    </a>
                    <a
                      className="block p-3 rounded-lg bg-canvas border border-border-fine hover:border-blush-accent/50 transition"
                      href="https://drive.google.com/file/d/1i4rZpab4U5p0lA7YfSRg6yXdM4S2SZ0h/view?usp=drive_link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-blush-accent">
                        <span>HUAWEI ICT ACADEMY</span>
                        <span>HCIA V3.5</span>
                      </div>
                      <p className="text-xs text-ink-primary font-medium mt-0.5">
                        HCIA-Big Data Distributed Ingestion
                      </p>
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-border-fine flex items-center justify-between font-mono text-[11px] text-ink-muted">
                  <span>Selected learning milestones</span>
                  <span className="text-blush-accent">Verified ✓</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SECTION: FEATURED WORKS & CASE STUDIES (Awwwards Staggered Editorial Format)  */}
        <section data-aos="fade-up" className="py-24" id="works">
          <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
            {/*  Section Header  */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border-fine">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blush-accent font-semibold">
                  Selected Works
                </span>
                <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight text-ink-primary mt-1">
                  Selected work
                </h2>
              </div>
              <div className="font-mono text-xs text-ink-muted mt-4 md:mt-0 flex items-center gap-2">
                <span>INDEX: 01 — 03</span>
                <span className="text-neutral-300">/</span>
                <span>PRODUCTION DEPLOYED</span>
              </div>
            </div>
            {/*  STAGGERED SHOWCASE 01: Trashlinkpro (Full Width Split Hero Feature)  */}
            <div className="mb-24 bg-surface-pure rounded-2xl border-2 border-blush-accent/55 p-8 lg:p-12 shadow-[0_4px_30px_rgba(212,165,165,0.12)] group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/*  Left Narrative & Architectural Specs  */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-charcoal text-white">
                      01
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-blush-accent font-semibold">
                      IoT &amp; Team Project
                    </span>
                    <span className="text-xs font-mono text-ink-muted">Software Lead</span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-primary tracking-tight group-hover:text-charcoal transition-colors">
                      Trashlinkpro
                    </h3>
                    <p className="font-serif italic text-lg text-ink-secondary mt-1">
                      Smart Bottle Collection with Raspberry Pi
                    </p>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    A smart recycling machine shaped like an ATM, with a touchscreen Raspberry Pi
                    interface for collecting plastic bottles. I handled the software and database
                    connection as part of a team project.
                  </p>
                  {/*  Technical Architecture Grid  */}
                  <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">MY ROLE</span>
                      <span className="font-medium text-ink-primary">Software Developer</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">PLATFORM</span>
                      <span className="font-medium text-ink-primary">
                        Raspberry Pi + Touchscreen
                      </span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">SOFTWARE</span>
                      <span className="font-medium text-ink-primary">Python</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">CONNECTION</span>
                      <span className="font-medium text-ink-primary">Database Integration</span>
                    </div>
                  </div>
                  {/*  Links  */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      className="px-5 py-2.5 rounded bg-charcoal text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-2"
                      href="https://www.instagram.com/trashlinkpro.telupwt/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>View project</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                    <a
                      className="font-mono text-xs text-ink-secondary hover:text-ink-primary transition flex items-center gap-1"
                      href="https://github.com/shellyneu/trashlink-pro"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">code</span>
                      <span>Source Architecture</span>
                    </a>
                  </div>
                </div>
                {/*  Right Visual Mockup with Device Backdrop  */}
                <div className="lg:col-span-7 relative">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700/60 shadow-2xl relative">
                    <img
                      alt="Trashlinkpro smart recycling machine"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src="/images/trashlink.jpeg"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md px-3 py-1 rounded text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>IoT Prototype • Team Project</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  STAGGERED SHOWCASE 02: StoryScan AI (Inverted Layout)  */}
            <div className="mb-24 bg-surface-pure rounded-2xl border-2 border-blush-accent/55 p-8 lg:p-12 shadow-[0_4px_30px_rgba(212,165,165,0.12)] group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/*  Left Visual Mockup  */}
                <div className="lg:col-span-7 order-2 lg:order-1 relative">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700/60 shadow-2xl relative">
                    <img
                      alt="StoryScan AI storytelling interface"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src="/images/storyscan.jpeg"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[calc(100%-1.5rem)] sm:max-w-none bg-charcoal/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-1 rounded text-white font-mono text-[9px] sm:text-[10px] leading-tight uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blush-accent shrink-0"></span>
                      <span className="sm:hidden">StoryScan AI</span>
                      <span className="hidden sm:inline">
                        Interactive Story • Teachable Machine
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Right Narrative & Architectural Specs  */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-charcoal text-white">
                      02
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-blush-accent font-semibold">
                      Team Project • Product Idea
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-primary tracking-tight group-hover:text-charcoal transition-colors">
                      StoryScan AI
                    </h3>
                    <p className="font-serif italic text-lg text-ink-secondary mt-1">
                      Interactive Stories with Image Recognition
                    </p>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    A web-based storytelling experience for children. The story pauses for image
                    recognition, then continues with a playful narrative. I shaped the idea and led
                    the project direction as PM.
                  </p>
                  {/*  Technical Architecture Grid  */}
                  <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">MY ROLE</span>
                      <span className="font-medium text-ink-primary">PM &amp; Idea Creator</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">VISION PIPELINE</span>
                      <span className="font-medium text-ink-primary">Teachable Machine</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">FRAMEWORK</span>
                      <span className="font-medium text-ink-primary">
                        HTML, CSS &amp; JavaScript
                      </span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">AUDIENCE</span>
                      <span className="font-medium text-ink-primary">Children &amp; Families</span>
                    </div>
                  </div>
                  {/*  Links  */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      className="px-5 py-2.5 rounded bg-charcoal text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-2"
                      href="https://itsmenanda.github.io/StroryScanAI/landing.html"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Try the story</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  STAGGERED SHOWCASE 03: Polished  */}
            <div className="bg-surface-pure rounded-2xl border-2 border-blush-accent/55 p-8 lg:p-12 shadow-[0_4px_30px_rgba(212,165,165,0.12)] group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/*  Left Narrative & Architectural Specs  */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-charcoal text-white">
                      03
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-blush-accent font-semibold">
                      Front-end Development
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-primary tracking-tight group-hover:text-charcoal transition-colors">
                      Polished
                    </h3>
                    <p className="font-serif italic text-lg text-ink-secondary mt-1">
                      Nail Salon Booking Platform
                    </p>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    A booking website that helps customers schedule nail appointments and lets
                    admins manage services and bookings. I worked on the front end using Laravel,
                    PHP, and Tailwind CSS.
                  </p>
                  {/*  Technical Architecture Grid  */}
                  <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">MY ROLE</span>
                      <span className="font-medium text-ink-primary">Front-end Developer</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">STACK</span>
                      <span className="font-medium text-ink-primary">Laravel + PHP</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">STYLING</span>
                      <span className="font-medium text-ink-primary">Tailwind CSS</span>
                    </div>
                    <div className="p-3 rounded bg-canvas border border-border-fine">
                      <span className="text-ink-muted text-[10px] block">PRODUCT</span>
                      <span className="font-medium text-ink-primary">Online Booking</span>
                    </div>
                  </div>
                  {/*  Links  */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      className="px-5 py-2.5 rounded bg-charcoal text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-2"
                      href="https://github.com/bagasalfanto/laravel-nailart-booking"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>View source</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
                {/*  Right Visual Mockup with Device Backdrop  */}
                <div className="lg:col-span-7 relative">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700/60 shadow-2xl relative">
                    <img
                      alt="Polished nail salon booking interface"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src="/images/polished.jpeg"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md px-3 py-1 rounded text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blush-accent"></span>
                      <span>Laravel Booking System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SECTION: EXPERIENCE & LEADERSHIP  */}
        <section data-aos="fade-up" className="py-24" id="experience">
          <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border-fine">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blush-accent font-semibold">
                  Experience &amp; leadership
                </span>
                <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight text-ink-primary mt-1">
                  Where I have worked
                </h2>
              </div>
              <p className="font-mono text-xs text-ink-muted mt-3 md:mt-0">
                Selected roles and practical experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <div
                className="group border-2 border-blush-accent/55 rounded-xl bg-surface-pure p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blush-accent hover:shadow-[0_12px_28px_rgba(212,165,165,0.22)]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-ink-primary">
                        Practicum Assistant
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-blush-soft text-charcoal font-mono text-[10px] uppercase font-semibold">
                        Teaching
                      </span>
                    </div>
                    <p className="text-sm text-ink-secondary mt-1">
                      Telkom University · Data Structure &amp; Programming Algorithms 1–2
                    </p>
                  </div>
                  <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                    Sep 2025 — Present
                  </span>
                </div>
                <p className="mt-4 pt-4 border-t border-border-fine/60 text-sm text-ink-secondary leading-relaxed">
                  Facilitating practical sessions across data structures and programming algorithms,
                  from fundamentals and exercises to presentations, quizzes, and student feedback.
                </p>
              </div>
              <div
                className="group border-2 border-blush-accent/55 rounded-xl bg-surface-pure p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blush-accent hover:shadow-[0_12px_28px_rgba(212,165,165,0.22)]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-ink-primary">
                        Core Team Internal Treasurer
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-blush-soft text-charcoal font-mono text-[10px] uppercase font-semibold">
                        Leadership
                      </span>
                    </div>
                    <p className="text-sm text-ink-secondary mt-1">
                      Google Developer Groups on Campus, Telkom University Purwokerto
                    </p>
                  </div>
                  <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                    Oct 2025 — Sep 2026
                  </span>
                </div>
                <p className="mt-4 pt-4 border-t border-border-fine/60 text-sm text-ink-secondary leading-relaxed">
                  Managed cash flow, operational spending, financial records, and internal controls
                  for the campus developer community.
                </p>
              </div>
              <div
                className="group border-2 border-blush-accent/55 rounded-xl bg-surface-pure p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blush-accent hover:shadow-[0_12px_28px_rgba(212,165,165,0.22)]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-ink-primary">
                        Front-End Web Developer
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-blush-soft text-charcoal font-mono text-[10px] uppercase font-semibold">
                        Freelance
                      </span>
                    </div>
                    <p className="text-sm text-ink-secondary mt-1">PT Krisna Ardhi Tama</p>
                  </div>
                  <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                    May 2025 — Oct 2025
                  </span>
                </div>
                <p className="mt-4 pt-4 border-t border-border-fine/60 text-sm text-ink-secondary leading-relaxed">
                  Built and maintained responsive ERP interfaces with React, TanStack, and Tailwind
                  CSS, integrating front-end components with backend APIs.
                </p>
              </div>
            </div>

            <div
              className="mt-20 pt-12 border-t-2 border-blush-accent/35"
              data-aos="fade-up"
              data-aos-delay="150"
              id="education"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-blush-accent font-semibold">
                    Education
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-primary mt-1">
                    Academic foundation
                  </h2>
                </div>
                <p className="font-mono text-xs text-ink-muted mt-3 md:mt-0">
                  The path behind the work.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group border-2 border-blush-accent/55 rounded-xl bg-surface-pure p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(212,165,165,0.22)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-ink-primary">
                        Telkom University
                      </h3>
                      <p className="text-sm text-ink-secondary mt-1">
                        Undergraduate Student, Informatics Engineering
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                      Sep 2024 — Present
                    </span>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border-fine/60 flex flex-wrap gap-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-blush-soft text-charcoal">
                      GPA 3.9+
                    </span>
                    <span className="px-2.5 py-1 rounded bg-canvas border border-border-fine">
                      Informatics
                    </span>
                  </div>
                </div>
                <div className="group border-2 border-blush-accent/55 rounded-xl bg-surface-pure p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(212,165,165,0.22)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-ink-primary">
                        SMK Telkom Purwokerto
                      </h3>
                      <p className="text-sm text-ink-secondary mt-1">
                        Computer Software Engineering
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink-muted whitespace-nowrap">
                      Jun 2021 — Jun 2024
                    </span>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border-fine/60 flex flex-wrap gap-2 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-canvas border border-border-fine">
                      Software Engineering
                    </span>
                    <span className="px-2.5 py-1 rounded bg-canvas border border-border-fine">
                      RPL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SECTION: TERMINAL CONTACT & DIRECT INQUIRY  */}
        <section data-aos="fade-up" className="py-24 bg-blush-soft/25" id="contact">
          <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
            {/*  Dramatic Architectural Callout  */}
            <div className="mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blush-accent font-semibold">
                Transmission / Connect
              </span>
              <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tight text-ink-primary mt-2 max-w-3xl">
                Let&lsquo;s build reliable, elegant software together.
              </h2>
              <p className="font-serif italic text-xl text-ink-secondary mt-3 max-w-xl">
                Open to thoughtful teams, internships, and collaborative projects.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/*  Col Left: Interactive Direct Dispatcher & Socials  */}
              <div className="lg:col-span-5 space-y-6">
                {/*  Direct Copyable Email Box  */}
                <div className="p-6 rounded-xl bg-surface-pure border-2 border-blush-accent/55 shadow-[0_6px_20px_rgba(212,165,165,0.12)]">
                  <span className="font-mono text-xs text-ink-muted uppercase block mb-1">
                    Direct Electronic Mail
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <a
                      className="font-mono text-base font-semibold text-charcoal hover:text-blush-accent transition"
                      href="mailto:shellyneuriska@gmail.com"
                    >
                      shellyneuriska@gmail.com
                    </a>
                    <button
                      className="p-2 rounded bg-canvas hover:bg-canvas-alt border border-border-fine text-ink-secondary hover:text-charcoal transition"
                      onClick={() => {
                        navigator.clipboard.writeText('shellyneuriska@gmail.com');
                        alert('Email address copied to clipboard: shellyneuriska@gmail.com');
                      }}
                      title="Copy email to clipboard"
                    >
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                </div>
                {/*  Channels & Verification Grid  */}
                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                  <a
                    className="p-4 rounded-xl bg-surface-pure border-2 border-blush-accent/55 hover:border-blush-accent transition flex items-center justify-between group"
                    href="https://www.linkedin.com/in/shellyn-euriska-putri/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">LINKEDIN</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-ink-muted group-hover:translate-x-0.5 transition">
                      north_east
                    </span>
                  </a>
                  <a
                    className="p-4 rounded-xl bg-surface-pure border-2 border-blush-accent/55 hover:border-blush-accent transition flex items-center justify-between group"
                    href="https://github.com/shellyneu"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">GITHUB</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-ink-muted group-hover:translate-x-0.5 transition">
                      north_east
                    </span>
                  </a>
                </div>
                {/*  Geographic Base Card  */}
                <div className="p-6 rounded-xl bg-surface-pure border-2 border-blush-accent/55 flex items-start gap-4 shadow-[0_6px_20px_rgba(212,165,165,0.12)]">
                  <div className="w-10 h-10 rounded bg-canvas border border-border-fine flex items-center justify-center text-charcoal shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-ink-muted block">
                      Academic Base &amp; Relocation
                    </span>
                    <p className="font-medium text-ink-primary text-sm mt-0.5">
                      Purwokerto, Indonesia
                    </p>
                    <p className="text-xs text-ink-muted mt-1 font-sans">
                      Open to on-site and remote worldwide internships.
                    </p>
                  </div>
                </div>
              </div>
              {/*  Col Right: Modern High-End Architectural Terminal Form  */}
              <div className="lg:col-span-7 bg-surface-pure p-8 lg:p-10 rounded-2xl border-2 border-blush-accent/55 shadow-[0_8px_28px_rgba(212,165,165,0.14)]">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const subject = String(formData.get('subject') || 'Portfolio inquiry');
                    const body = [
                      `Name: ${formData.get('name') || ''}`,
                      `Email: ${formData.get('email') || ''}`,
                      '',
                      String(formData.get('message') || ''),
                    ].join('\n');
                    window.location.href = `mailto:shellyneuriska@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                        htmlFor="name"
                      >
                        01 // Your Name
                      </label>
                      <input
                        className="w-full bg-canvas border border-border-fine rounded-lg px-4 py-3 text-sm text-ink-primary font-sans focus:ring-1 focus:ring-charcoal focus:border-charcoal transition outline-none"
                        id="name"
                        name="name"
                        placeholder="e.g. Elena Rostova"
                        required
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                        htmlFor="email"
                      >
                        02 // Return Email
                      </label>
                      <input
                        className="w-full bg-canvas border border-border-fine rounded-lg px-4 py-3 text-sm text-ink-primary font-sans focus:ring-1 focus:ring-charcoal focus:border-charcoal transition outline-none"
                        id="email"
                        name="email"
                        placeholder="elena@company.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                      htmlFor="subject"
                    >
                      03 // Collaboration Context
                    </label>
                    <input
                      className="w-full bg-canvas border border-border-fine rounded-lg px-4 py-3 text-sm text-ink-primary font-sans focus:ring-1 focus:ring-charcoal focus:border-charcoal transition outline-none"
                      id="subject"
                      name="subject"
                      placeholder="Summer 2026 Internship / Front-End Role"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                      htmlFor="message"
                    >
                      04 // Project Scope or Message
                    </label>
                    <textarea
                      className="w-full bg-canvas border border-border-fine rounded-lg px-4 py-3 text-sm text-ink-primary font-sans focus:ring-1 focus:ring-charcoal focus:border-charcoal transition outline-none resize-none"
                      id="message"
                      name="message"
                      placeholder="Elaborate on the opportunity, engineering challenges, or meeting schedule..."
                      required
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full py-4 rounded-lg bg-charcoal text-white font-mono text-xs uppercase tracking-[0.18em] hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    type="submit"
                  >
                    <span>Send</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                  {/*  Success Simulation Feedback  */}
                  <div
                    className="hidden p-4 rounded-lg bg-blush-soft border border-blush-accent/40 font-mono text-xs text-charcoal flex items-center gap-3"
                    id="terminal-feedback"
                  >
                    <span className="material-symbols-outlined text-blush-accent text-[18px]">
                      verified
                    </span>
                    <span>
                      Signal acknowledged. Transmission recorded successfully. Response window: 24h.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  COLOPHON & FOOTER: Minimalist Architectural Closure  */}
      <footer className="border-t border-border-fine bg-surface-pure py-12">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/*  Brand & Copyright  */}
          <div className="w-full md:w-auto text-center md:text-left">
            <span className="font-mono text-xs leading-relaxed text-ink-muted">
              © 2026 SHELLYN EURISKA PUTRI. ARCHITECTED WITH CARE.
            </span>
          </div>
          {/*  Navigation Archive  */}
          <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-3 font-mono text-xs text-ink-muted">
            <a className="hover:text-charcoal transition" href="#about">
              About me
            </a>
            <a className="hover:text-charcoal transition" href="#stack">
              Skills
            </a>
            <a className="hover:text-charcoal transition" href="#works">
              Projects
            </a>
            <a className="hover:text-charcoal transition" href="#experience">
              Experience
            </a>
            <a className="hover:text-charcoal transition" href="#contact">
              Contact
            </a>
            <a
              className="text-charcoal font-semibold hover:text-blush-accent transition flex items-center gap-1"
              href="#"
            >
              <span>Top</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
