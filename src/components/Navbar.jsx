import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <div className="mx-auto flex max-w-full items-center justify-center gap-1 overflow-x-auto whitespace-nowrap rounded-full border border-white/10 bg-dark-900/80 px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl scrollbar-none">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
              activeSection === link.href.replace('#', '')
                ? 'text-aurora-cyan bg-aurora-cyan/15 shadow-inner font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/8'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
