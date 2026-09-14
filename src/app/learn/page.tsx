import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Building2,
  Calendar,
  CheckCircle2,
  Flame,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'Learn & Programs | TheGenZ AI Hub',
  description:
    'Learn practical AI capabilities and build real software. Explore our flagship AI Builder Cohort, specialized AI training, enterprise programs, and technical workshops.'
};

export default function LearnPage() {
  const programs = [
    {
      id: 'cohort',
      title: 'AI Builder Cohort',
      badge: 'FLAGSHIP PROGRAM',
      badgeColor: 'pill-energy',
      status: 'Applications Open for Next Cohort',
      desc: 'Our intensive 8-week venture-building experience for engineers, operators, and builders who want to go beyond tutorials and build validated products and early-stage companies.',
      whoFor: 'Technical developers, engineers, data practitioners, aspiring founders, and domain problem owners ready to write code and execute.',
      learn: [
        'End-to-end customer discovery and problem hypothesis validation',
        'AI system architecture (LLM orchestration, agentic workflows, APIs)',
        'Full-stack MVP sprint execution and production deployment',
        'User telemetry logging, feedback loops, and Demo Day venture pitch'
      ],
      outcome: 'A live, working AI-powered MVP tested with real users, customer interview telemetry, and a complete venture deck prepared for partners and capital.',
      ctaText: 'Apply for Cohort',
      ctaHref: '/apply',
      secondaryText: 'Explore Cohort Details',
      secondaryHref: '/cohort',
      isFlagship: true
    },
    {
      id: 'training',
      title: 'Practical AI Training',
      badge: 'SPECIALIZED EDUCATION',
      badgeColor: 'pill-preseed',
      status: 'Coming Soon • 2026',
      desc: 'Modular, hands-on master modules designed to upskill software developers into modern AI engineers capable of building agentic systems, fine-tuning small models, and integrating AI APIs.',
      whoFor: 'Software developers, computer science students, and tech professionals looking to transition their stack to modern AI software engineering.',
      learn: [
        'Foundation model architectures and prompt engineering patterns',
        'Retrieval-Augmented Generation (RAG) with vector databases',
        'Tool-calling, autonomous agent orchestration, and evaluation frameworks',
        'Production safety, guardrails, rate limiting, and cost optimization'
      ],
      outcome: 'Deep practical competence in architecting, testing, and deploying robust AI backend services.',
      ctaText: 'Join Waitlist',
      ctaHref: '/connect',
      isFlagship: false
    },
    {
      id: 'enterprise',
      title: 'Enterprise AI Programs',
      badge: 'ORGANIZATIONAL ADOPTION',
      badgeColor: 'pill-gold',
      status: 'Custom Inquiries Accepted',
      desc: 'Tailored executive and engineering capability programs designed to help businesses, banks, and institutions identify AI use cases, reduce operational overhead, and upskill internal teams.',
      whoFor: 'Enterprise leaders, CTOs, innovation directors, and operational heads seeking pragmatism over AI hype.',
      learn: [
        'Strategic AI opportunity mapping across internal business processes',
        'Data readiness audits and governance guardrails',
        'Internal automation prototyping and vendor evaluation',
        'Upskilling non-technical staff on productivity and agent workflows'
      ],
      outcome: 'An organizational AI roadmap, validated prototype blueprint, and an upskilled internal team capable of managing AI implementations.',
      ctaText: 'Inquire for Enterprise',
      ctaHref: '/contact',
      isFlagship: false
    },
    {
      id: 'workshops',
      title: 'Workshops & Masterclasses',
      badge: 'COMMUNITY SESSIONS',
      badgeColor: 'pill-preseed',
      status: 'Regular Virtual & Hybrid Sessions',
      desc: 'Focused, interactive weekend sessions, code teardowns, and masterclasses hosted by experienced engineers, product leaders, and active founders in our network.',
      whoFor: 'Anyone in our community wanting high-intensity deep dives into specific tools, frameworks, and venture-building tactics.',
      learn: [
        'Live teardowns of real-world AI MVPs and system architectures',
        'Hands-on hack sessions with emerging frameworks and open-source models',
        'Founder interviews on customer discovery and African distribution',
        'Legal, intellectual property, and venture structuring masterclasses'
      ],
      outcome: 'Direct practical skills, code templates, and actionable takeaways from active industry operators.',
      ctaText: 'Join Community for Invites',
      ctaHref: '/connect',
      isFlagship: false
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        position: 'relative',
        borderBottom: '1px solid var(--gray-200)',
        overflow: 'hidden',
      }}>
        {/* Soft Modern Tech Radial Overlay for Pristine Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 15%, rgba(255, 255, 255, 0.88) 0%, rgba(248, 250, 255, 0.93) 55%, rgba(240, 243, 255, 0.98) 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          zIndex: 0,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              LEARN & BUILD
            </span>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              Learn AI. Build With It.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
              We don't believe in passive video courses. We build capability through intensive, project-driven programs designed to take talent directly into real-world venture creation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/apply" className="btn btn-primary">
                Apply for AI Builder Cohort
                <ArrowRight size={16} />
              </Link>
              <Link href="/connect" className="btn btn-secondary">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Catalog */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {programs.map((p) => (
              <div
                key={p.id}
                className="hub-card"
                style={{
                  border: p.isFlagship ? '2.5px solid var(--primary)' : '1px solid var(--gray-200)',
                  boxShadow: p.isFlagship ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  backgroundColor: 'var(--white)',
                  padding: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span className={`pill-badge ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)', fontWeight: 600 }}>
                      ● {p.status}
                    </span>
                  </div>
                  {p.isFlagship && (
                    <span style={{
                      backgroundColor: 'var(--energy-light)',
                      color: 'var(--energy-dark)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <Flame size={14} /> FLAGSHIP PRODUCT
                    </span>
                  )}
                </div>

                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem', color: 'var(--dark-navy)' }}>
                  {p.title}
                </h2>

                <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {p.desc}
                </p>

                {/* Details Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
                  gap: '1.75rem',
                  padding: '1.75rem',
                  backgroundColor: 'var(--gray-50)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '2rem',
                  border: '1px solid var(--gray-200)'
                }}>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                      Who It Is For
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                      {p.whoFor}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                      What You Learn & Build
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {p.learn.map((item) => (
                        <li key={item} style={{ fontSize: '0.9rem', color: 'var(--gray-700)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <CheckCircle2 size={16} color="var(--energy)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                      Expected Outcome
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                      {p.outcome}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href={p.ctaHref}
                    className={p.isFlagship ? 'btn btn-energy btn-lg' : 'btn btn-primary'}
                  >
                    <span>{p.ctaText}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                  {p.secondaryHref && (
                    <Link href={p.secondaryHref} className="btn btn-outline">
                      {p.secondaryText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Program Rule Note */}
      <section className="section" style={{ backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="pill-badge pill-preseed" style={{ marginBottom: '1rem' }}>
            PRE-SEED COMMITMENT
          </span>
          <h3>Transparent & Merit-Driven</h3>
          <p style={{ color: 'var(--gray-600)', marginTop: '0.75rem', lineHeight: 1.7 }}>
            We do not publish speculative fees or arbitrary dates. Cohort sizes are deliberately capped to maintain rigorous hands-on mentorship and accountability. Every applicant is evaluated on technical commitment and drive to ship.
          </p>
        </div>
      </section>
    </div>
  );
}
