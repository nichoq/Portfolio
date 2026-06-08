import CertificateCard from './CertificateCard';
import { certificates } from '../data/certificates';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative z-10">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <p className="text-aurora-cyan font-mono text-sm mb-2">04 / Achievements</p>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mt-4">
            Academic honors, industry certifications, and competition experiences.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-full mt-4" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
