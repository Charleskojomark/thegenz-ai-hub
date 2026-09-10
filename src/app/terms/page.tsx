import React from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, ArrowLeft, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | TheGenZ AI Hub',
  description:
    'Terms of Service governing participation in TheGenZ AI Hub venture-building platform, builder cohorts, problem submissions, and community layers.'
};

export default function TermsPage() {
  return (
    <div>
      {/* Header */}
      <section className="section" style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--gray-200)',
        paddingTop: 'clamp(3.5rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 4rem)'
      }}>
        <div className="container-narrow">
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--primary)',
            fontSize: '0.9rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <FileText size={24} color="var(--primary)" />
            <span className="pill-badge pill-preseed">LEGAL TERMS</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>
            Effective Date: 2026 • Stage: PRE-SEED
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section section-light-blue">
        <div className="container-narrow">
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gray-200)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            boxShadow: 'var(--shadow-sm)',
            lineHeight: 1.8,
            color: 'var(--gray-700)'
          }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: 0, marginBottom: '1rem' }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              By accessing, browsing, or submitting applications to TheGenZ AI Hub ("the Platform", "we", or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services, apply to cohorts, or participate in our community groups.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              2. Pre-Seed Ecosystem Nature
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              TheGenZ AI Hub operates in a pre-seed stage (2026). The platform provides structured venture-building frameworks, mentorship connections, and educational environments. TheGenZ AI Hub is not an accredited degree-granting academic institution, a registered investment broker-dealer, or a guaranteed venture capital fund. Participation in any cohort does not guarantee commercial success, venture funding, or employment.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              3. Builder Cohort Participation & Conduct
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Participants admitted into the AI Builder Cohort agree to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Dedicate the minimum required hours (15–20 hours/week) to their project and team squad.</li>
              <li>Maintain respectful, constructive, and professional collaboration with co-builders, mentors, and partners.</li>
              <li>Refrain from plagiarism, software piracy, unauthorized data harvesting, or violating third-party API licenses.</li>
              <li>Acknowledge that failure to contribute or engage constructively may result in removal from the cohort.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              4. Intellectual Property & Ownership
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Unless explicitly agreed upon through a formal venture-foundry agreement, <strong>builders retain ownership of the software, code, and intellectual property they author during open cohort sprints</strong>. TheGenZ AI Hub claims no proprietary claim over independent student/builder codebase created outside of specific funded venture-foundry arrangements.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              5. Problem Submission Disclaimers
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Submitting an industry problem or enterprise bottleneck through our portal does not create an agency, fiduciary, or client-consultant relationship. TheGenZ AI Hub reserves sole discretion in selecting which problem briefs to present to cohort squads for discovery sprints.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              6. Community Code of Conduct
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our WhatsApp and digital community channels exist strictly for technical collaboration, constructive feedback, and venture creation. We strictly prohibit harassment, hate speech, speculative token/crypto shilling, commercial spam, and unsolicited direct-message solicitations. Violators will be removed immediately.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              7. Limitation of Liability
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              To the maximum extent permitted by law, TheGenZ AI Hub, its founders, and advisors shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our platform, code repositories, or programs.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              8. Modifications to Terms
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We may revise these Terms from time to time as our ecosystem grows and new platform features are deployed. Continued use of the website following published updates constitutes acceptance of the modified Terms.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              9. Contact
            </h2>
            <p style={{ marginBottom: 0 }}>
              Questions regarding these Terms of Service may be directed to us via the{' '}
              <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                Contact Page
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
