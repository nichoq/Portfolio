import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ProjectCard({ project }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const statusColors = {
    'Completed': 'bg-green-500/10 text-green-400 border-green-500/20',
    'In Development': 'bg-aurora-cyan/10 text-aurora-cyan border-aurora-cyan/20',
    'Planning': 'bg-aurora-purple/10 text-aurora-purple border-aurora-purple/20',
  };

  useEffect(() => {
    if (!isVideoOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoOpen]);

  const videoModal = isVideoOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-video-title-${project.id}`}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-dark-900/95 shadow-2xl shadow-black/70"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/75 text-gray-300 shadow-lg shadow-black/40 backdrop-blur hover:border-white/25 hover:text-white transition-colors"
              aria-label="Close video demo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-4 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                <video
                  src={project.demoVideo}
                  className="max-h-[72vh] w-full"
                  controls
                  autoPlay
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="pt-5">
                <p className="text-xs font-mono text-aurora-cyan mb-2">Project Demo</p>
                <h3 id={`project-video-title-${project.id}`} className="text-xl font-display font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div
        className={`glass-card-hover group overflow-hidden ${
          project.featured ? 'neon-glow' : ''
        }`}
        id={`project-${project.id}`}
      >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 bg-dark-700 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-700 to-dark-800">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-2 text-gray-700 group-hover:text-aurora-cyan/30 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs font-mono text-gray-600">{project.title}</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/5 to-transparent pointer-events-none" />

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 text-xs font-mono rounded-full border ${statusColors[project.status] || statusColors['Planning']}`}>
            {project.status}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-display font-bold text-white group-hover:text-aurora-cyan transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-aurora-purple font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1.5">
          {project.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1 h-1 rounded-full bg-aurora-cyan flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-glass-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-aurora-cyan transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source
          </a>
          {project.demoVideo ? (
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-aurora-purple transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.384v5.232a1 1 0 001.166.866l4.586-2.65a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Live Demo
            </button>
          ) : (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-aurora-purple transition-colors duration-300"
            >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
            </a>
          )}
        </div>
      </div>

      </div>
      {videoModal}
    </>
  );
}
