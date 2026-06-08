import SplitText from './SplitText';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-light border border-glass-border mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400 font-mono">
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          <SplitText
            text="Nicholas Jere Quizo"
            tag="span"
            className="align-baseline"
            highlightText="Quizo"
            highlightClassName="gradient-text"
            delay={110}
            duration={1.05}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 42, rotateX: -60 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
        </h1>

        {/* Title */}
        <p
          className="flex flex-wrap items-center justify-center gap-x-2 text-lg sm:text-xl md:text-2xl text-gray-400 font-light mb-4"
          style={{ animationDelay: '0.2s' }}
        >
          <SplitText
            text="Computer Science Student"
            tag="span"
            delay={120}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 22 }}
            to={{ opacity: 1, y: 0 }}
          />
          <span className="text-aurora-cyan">/</span>
          <SplitText
            text="Software Developer"
            tag="span"
            delay={120}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 22 }}
            to={{ opacity: 1, y: 0 }}
          />
        </p>

        {/* Tagline */}
        <div
          className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mb-10 font-mono"
          style={{ animationDelay: '0.3s' }}
        >
          <SplitText
            text="Building intelligent web applications, AI-driven systems, and human-centered software solutions."
            tag="p"
            delay={75}
            duration={0.75}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.85s' }}
            id="download-resume-btn"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume</span>
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center gap-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
            id="contact-btn"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/nichoq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-500 hover:text-aurora-cyan hover:bg-glass-light transition-all duration-300"
            aria-label="GitHub"
            id="social-github"
          >
            <svg className="block w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-quizo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-500 hover:text-aurora-cyan hover:bg-glass-light transition-all duration-300"
            aria-label="LinkedIn"
            id="social-linkedin"
          >
            <svg className="block w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
