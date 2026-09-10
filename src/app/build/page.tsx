import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Rocket,
  Search,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  Layers,
  Zap,
  Users,
  Terminal,
  Cpu,
  Workflow
} from 'lucide-react';
import PipelineVisual from '@/components/PipelineVisual';

export const metadata = {
  title: 'Build & Venture Pipeline | TheGenZ AI Hub',
  description:
    'Have an idea? Let’s build it. Explore our rigorous six-stage venture-building methodology: Discover, Validate, Build, Launch, Grow, and Investor Ready.'
};

export default function BuildPage() {
  const deepPhases = [
    {
      title: 'Problem Discovery',
      step: 'PHASE 01',
      summary: 'Scouting unaddressed high-friction bottlenecks across key African economic sectors.',
      bullets: [
        'Mining operational friction across logistics, agriculture, healthcare, and trade',
        'Distinguishing between mild inconveniences and existential business pain',
        'Mapping the competitive landscape and quantifying economic loss from current bottlenecks'
      ]
    },
    {
      title: 'Customer Discovery & Validation',
      step: 'PHASE 02',
      summary: 'Engaging real domain operators, users, and buyers to pressure-test the problem thesis.',
      bullets: [
        'Conducting structured user discovery interviews without leading the witness',
        'Testing willingness to pay, switch, or reconfigure workflows',
        'Establishing clear validation thresholds before writing production code'
      ]
    },
    {
      title: 'AI Solution Architecture',
      step: 'PHASE 03',
      summary: 'Selecting optimal AI primitives rather than forcing complexity where deterministic code suffices.',
      bullets: [
        'Evaluating frontier models vs. specialized small language models (SLMs)',
        'Designing agentic workflows, deterministic fallbacks, and human-in-the-loop triggers',
        'Drafting robust API contracts and vector storage architectures'
      ]
    },
    {
      title: 'MVP Sprint & Production Engineering',
      step: 'PHASE 04',
      summary: 'Rapid 3-week coding sprint to ship functional, testable software to production.',
      bullets: [
        'Building responsive, accessible web interfaces (Next.js, modern CSS)',
        'Connecting model APIs with resilient streaming, caching, and error handling',
        'Implementing user auth, database persistence, and telemetry logs'
      ]
    },
    {
      title: 'Live Launch & Pilot Deployment',
      step: 'PHASE 05',
      summary: 'Putting functional software directly into the hands of target operators and pilot groups.',
      bullets: [
        'Onboarding a closed pilot cohort of 10–50 actual end-users',
        'Observing real session recordings and task completion telemetry',
        'Eliminating user interface friction and measuring turnaround acceleration'
      ]
    },
    {
      title: 'Telemetry, Feedback & Growth Loops',
      step: 'PHASE 06',
      summary: 'Analyzing quantitative usage metrics, iterating features, and hardening unit economics.',
      bullets: [
        'Monitoring model latency, token cost efficiency, and accuracy rates',
        'Refining core value propositions based on user retention and engagement',
        'Packaging the validated system into an investor-ready venture deck and data room'
      ]
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
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              VENTURE-BUILDING METHODOLOGY
            </span>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              Have an Idea? Let's Build It.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
              We provide the structured, repeatable venture-building system that takes ambitious African builders from an initial spark through validation, MVP code, launch, and investor readiness.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/apply" className="btn btn-primary btn-lg">
                Build With Us
                <ArrowRight size={18} />
              </Link>
              <Link href="/submit-problem" className="btn btn-secondary btn-lg">
                Bring Us a Problem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Pipeline Interactive Section */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">THE 6 STAGES</span>
            <h2>From Problem to Company</h2>
            <p>
              Explore our six sequential venture development milestones designed to eliminate guesswork and maximize execution certainty.
            </p>
          </div>

          <PipelineVisual />
        </div>
      </section>

      {/* Deep Dive into Build Phases */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">DETAILED ARCHITECTURE</span>
            <h2>How the Venture Engine Operates</h2>
            <p>
              A systematic breakdown of each operational layer inside TheGenZ AI Hub venture-building sprints.
            </p>
          </div>

          <div className="grid-2">
            {deepPhases.map((phase) => (
              <div key={phase.title} className="hub-card" style={{ borderTop: '4px solid var(--primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--energy)', letterSpacing: '0.08em' }}>
                    {phase.step}
                  </span>
                  <Cpu size={18} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: 'var(--dark-navy)' }}>
                  {phase.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {phase.summary}
                </p>
                <div style={{
                  borderTop: '1px solid var(--gray-100)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {phase.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)' }}>
                      <CheckCircle2 size={15} color="var(--energy)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Build Callout */}
      <section className="section section-dark text-center">
        <div className="container-narrow">
          <span className="pill-badge pill-gold" style={{ marginBottom: '1rem' }}>
            BECOME A COHORT BUILDER
          </span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>
            Stop Building in the Dark.
          </h2>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Join our curated squad of technical builders, get paired with validated problems, and ship production software that matters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apply" className="btn btn-energy btn-lg">
              Apply as a Builder
              <ArrowRight size={18} />
            </Link>
            <Link href="/cohort" className="btn btn-outline-white btn-lg">
              Explore Cohort Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
