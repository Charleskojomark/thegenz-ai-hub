import React from 'react';
import Link from 'next/link';
import {
  Flame,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Rocket,
  ShieldAlert,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Target,
  GraduationCap
} from 'lucide-react';
import CohortRoadmap from '@/components/CohortRoadmap';

export const metadata = {
  title: 'AI Builder Cohort | Flagship Venture Experience | TheGenZ AI Hub',
  description:
    'An intensive 8-week builder experience for people who want to use AI to build validated products and scalable companies from Africa.'
};

export default function CohortPage() {
  const cohortHighlights = [
    {
      title: 'Real Problems Only',
      desc: 'No toy hackathon prompts or generic clone projects. Cohorts build against verified African industry bottlenecks.',
      icon: Target
    },
    {
      title: 'Squad-Based Velocity',
      desc: 'Work in cross-functional pods pairing software engineers, AI practitioners, and commercial operators.',
      icon: Users
    },
    {
      title: 'Production Deployment',
      desc: 'Every team must ship working code to production endpoints with live user onboarding by Week 6.',
      icon: Rocket
    },
    {
      title: 'Active Operator Mentorship',
      desc: 'Direct weekly office hours with engineers and founders who have built and scaled systems.',
      icon: GraduationCap
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--gray-200)',
        paddingTop: 'clamp(4rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5rem)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="pill-badge pill-energy">
                <Flame size={14} />
                FLAGSHIP VENTURE PROGRAM
              </span>
              <span className="pill-badge pill-preseed">
                PRE-SEED • 2026
              </span>
            </div>

            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              AI Builder Cohort
            </h1>

            <p style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
              color: 'var(--gray-700)',
              lineHeight: 1.6,
              marginBottom: '2.5rem'
            }}>
              An intensive builder experience for people who don't just want to learn AI — they want to use it to build, validate, and launch real companies.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/apply" className="btn btn-energy btn-lg">
                Apply as a Builder
                <ArrowRight size={18} />
              </Link>
              <Link href="/submit-problem" className="btn btn-secondary btn-lg">
                Submit an Industry Problem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Key Highlights */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="grid-4">
            {cohortHighlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="hub-card" style={{ backgroundColor: 'var(--white)' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Icon size={20} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8-Week Curriculum Breakdown */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">THE 8-WEEK SPRINT</span>
            <h2>The Venture-Building Journey</h2>
            <p>
              From problem thesis and customer discovery to production MVP deployment and Demo Day presentation.
            </p>
          </div>

          <CohortRoadmap compact={true} />
        </div>
      </section>

      {/* Candidate Criteria & Honesty Standards */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            alignItems: 'center'
          }}>
            <div>
              <span className="sub-label">WHO SHOULD APPLY</span>
              <h2>Built for People Who Want to Build.</h2>
              <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We are not looking for passive spectators or people seeking attendance certificates. We select for high-ownership builders who want to write code, talk to real customers, and endure the messy friction of venture creation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> Minimum 15-20 hours per week commitment
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> Collaborative mindset and willingness to work in assigned squads
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> Demonstrable technical ability (GitHub / portfolio projects)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> Hunger to move past theoretical tutorials into live software
                </div>
              </div>

              <Link href="/apply" className="btn btn-primary btn-lg">
                Submit Builder Application
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{
              backgroundColor: 'var(--dark-navy)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              color: 'var(--white)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span className="pill-badge pill-gold" style={{ marginBottom: '1rem' }}>
                STAGE HONESTY
              </span>
              <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Pre-Seed • 2026 Reality
              </h3>
              <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                TheGenZ AI Hub does not sell guaranteed venture funding or instant unicorn exits. We provide the structured, disciplined environment that turns talent into high-performing founders.
              </p>
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '4px solid var(--energy)',
                fontSize: '0.9rem',
                color: 'var(--gray-200)',
                lineHeight: 1.5
              }}>
                "You don't need to have a company already. You need the curiosity, commitment, and willingness to build."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="section section-dark text-center">
        <div className="container-narrow">
          <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
            NEXT COHORT APPLICATION WINDOW
          </span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>
            Ready to Take the 8-Week Leap?
          </h2>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Applications are reviewed on a rolling basis. Take 10 minutes to share what you’ve built and what you want to solve.
          </p>
          <Link href="/apply" className="btn btn-energy btn-lg">
            Apply as a Builder
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
