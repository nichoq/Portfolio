import { useState, useEffect } from 'react';
import { galleryItems } from '../data/gallery';
import BounceCards from './BounceCards';

export default function BounceGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = galleryItems.map((item) => item.image);

  const transformStyles = isMobile
    ? [
      'rotate(7deg) translate(-104px)',
      'rotate(4deg) translate(-62px)',
      'rotate(-2deg) translate(-20px)',
      'rotate(3deg) translate(20px)',
      'rotate(-6deg) translate(62px)',
      'rotate(4deg) translate(104px)'
    ]
    : [
      'rotate(10deg) translate(-330px)',
      'rotate(5deg) translate(-198px)',
      'rotate(-3deg) translate(-66px)',
      'rotate(4deg) translate(66px)',
      'rotate(-8deg) translate(198px)',
      'rotate(3deg) translate(330px)'
    ];

  const handleCardClick = (idx) => {
    setSelectedItem(galleryItems[idx]);
  };

  return (
    <section id="gallery" className="relative z-10 border-t border-dark-800 bg-dark-900/40">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center sm:text-left">
          <p className="text-aurora-cyan font-mono text-sm mb-2">05 / Gallery</p>
          <h2 className="section-title">
            Life <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle mt-4">
            Visual highlights of my journey, hackathons attended, and community involvements.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-full mt-4 mx-auto sm:mx-0" />
        </div>

        {/* Showcase Container */}
        <div className="mt-6 flex flex-col items-center">
          {/* Interactive Card Fan */}
          <div className="relative flex w-full items-center justify-center min-h-[360px] sm:min-h-[440px]">
            {/* Background Glow */}
            <div className="absolute w-[250px] sm:w-[350px] aspect-square rounded-full bg-aurora-cyan/5 blur-[80px] -z-10" />
            <div className="absolute w-[200px] sm:w-[300px] aspect-square rounded-full bg-aurora-purple/5 blur-[80px] -z-10 delay-1000" />

            <BounceCards
              images={images}
              containerWidth={isMobile ? 410 : 940}
              containerHeight={isMobile ? 330 : 430}
              animationDelay={0.3}
              animationStagger={0.08}
              transformStyles={transformStyles}
              enableHover={true}
              onCardClick={handleCardClick}
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-3xl w-full glass-card p-3 neon-glow relative border-aurora-cyan/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-dark-900/80 border border-glass-border flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="aspect-video bg-dark-800 rounded-xl overflow-hidden flex items-center justify-center relative group">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Caption */}
            <div className="p-5">
              <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-aurora-cyan/10 text-aurora-cyan border border-aurora-cyan/20">
                {selectedItem.category}
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-3">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
