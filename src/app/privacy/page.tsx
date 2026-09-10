import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | TheGenZ AI Hub',
  description:
    'Privacy Policy and data governance principles for TheGenZ AI Hub builder applications, problem submissions, and community members.'
};

export default function PrivacyPage() {
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
            <ShieldCheck size={24} color="var(--primary)" />
            <span className="pill-badge pill-preseed">LEGAL & TRUST</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
            Privacy Policy
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
              1. Overview & Commitment
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              TheGenZ AI Hub ("we", "our", or "the Platform") respects the intellectual property, privacy, and personal data of builders, founders, organizations, and mentors participating in our venture-building ecosystem. This policy outlines how information submitted across our applications, forms, and digital community layers is collected, stored, and protected.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We collect information provided directly through our website forms:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li><strong>Builder Applications:</strong> Contact details (Name, Email, WhatsApp number, City, Country), portfolio/GitHub links, technical and AI skills, past project descriptions, and cohort commitment availability.</li>
              <li><strong>Problem Dossiers:</strong> Submitter contact details, organization name, industry classification, qualitative description of business bottlenecks, impact metrics, and current workarounds.</li>
              <li><strong>Mentor & Partner Inquiries:</strong> Professional bios, LinkedIn profiles, institutional designations, and collaboration preferences.</li>
              <li><strong>Anonymous Telemetry:</strong> Aggregated interaction metrics (page navigation, CTA engagements) used solely to optimize website usability.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              3. How Information Is Used
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              The information you supply is utilized strictly for ecosystem operations:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>To evaluate builder applications for admissions into AI Builder Cohorts.</li>
              <li>To evaluate problem dossiers for venture feasibility and match problems with cohort squads.</li>
              <li>To coordinate mentorship office hours and partnership alignment conversations.</li>
              <li>To invite verified participants to our community layers and virtual masterclasses.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              4. Problem Confidentiality & Intellectual Property
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We recognize that enterprise bottlenecks and proprietary workflows carry strategic sensitivity. Problem dossiers submitted to TheGenZ AI Hub are treated with strict professional confidentiality. We do not sell, broadcast, or publicly expose private organizational data without prior written authorization.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              5. Community Channels (WhatsApp)
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our active community operates via WhatsApp groups as a conversational layer. By voluntarily joining our WhatsApp groups, your visible telephone number and profile name will be visible to fellow group members in accordance with WhatsApp’s default privacy settings. We encourage builders to exercise standard digital discretion.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              6. Data Security & Retention
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We maintain technical safeguards designed to protect submitted information from unauthorized access, loss, or disclosure. Application data is retained for the duration of the review cycle and relevant cohort operations, after which participants may request data redaction or removal at any time.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
              7. Contact Us
            </h2>
            <p style={{ marginBottom: 0 }}>
              For any questions regarding this Privacy Policy or your data rights, please contact our team via the{' '}
              <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                Contact Portal
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
