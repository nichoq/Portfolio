import { useEffect, useState } from 'react';

export default function CertificateCard({ certificate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryColors = {
    Academic: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    Networking: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    'AI/ML': 'text-aurora-cyan bg-aurora-cyan/10 border-aurora-cyan/20',
    Competition: 'text-red-400 bg-red-400/10 border-red-400/20',
    Language: 'text-green-400 bg-green-400/10 border-green-400/20',
    Programming: 'text-aurora-purple bg-aurora-purple/10 border-aurora-purple/20',
    'Web Development': 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  };

  const hasCertificateImage =
    certificate.image && !certificate.image.includes('placeholder');

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className="glass-card-hover p-5 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
        id={`certificate-${certificate.id}`}
      >
        {/* Preview Image */}
        <div className="h-36 rounded-xl bg-dark-700 mb-4 overflow-hidden flex items-center justify-center border border-white/5">
          {hasCertificateImage ? (
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-1 text-gray-700 group-hover:text-aurora-cyan/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <p className="text-xs font-mono text-gray-700">Certificate</p>
            </div>
          )}
          </div>

        {/* Category Badge */}
        <span className={`inline-block px-2.5 py-0.5 text-xs font-mono rounded-full border mb-3 ${categoryColors[certificate.category] || categoryColors['Programming']}`}>
          {certificate.category}
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-white group-hover:text-aurora-cyan transition-colors line-clamp-2 mb-2">
          {certificate.title}
        </h3>

        {/* Issuer & Date */}
        <p className="text-xs text-gray-500 font-mono">
          {certificate.issuer}
        </p>
        <p className="text-xs text-gray-600 font-mono mt-1">
          {certificate.date}
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`certificate-title-${certificate.id}`}
        >
          <div
            className="relative max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-dark-900/95 shadow-2xl shadow-black/70"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              type="button"
              className="absolute right-3 top-3 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/75 text-gray-300 shadow-lg shadow-black/40 backdrop-blur hover:border-white/25 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-h-[86vh] overflow-y-auto scrollbar-none p-4 sm:p-5">
              {/* Certificate Image */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/45">
                {hasCertificateImage ? (
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="mx-auto max-h-[58vh] w-auto max-w-full object-contain"
                    decoding="async"
                  />
                ) : (
                  <div className="flex h-72 w-full items-center justify-center">
                    <p className="text-sm font-mono text-gray-600">Certificate Preview</p>
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-5">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full border ${categoryColors[certificate.category] || ''}`}>
                  {certificate.category}
                </span>

                <h3 id={`certificate-title-${certificate.id}`} className="text-xl font-display font-bold text-white">
                  {certificate.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {certificate.description}
                </p>

                <div className="flex items-center justify-between gap-4 text-xs font-mono text-gray-500 pt-4 border-t border-glass-border">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
