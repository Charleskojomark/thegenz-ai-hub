import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Globe2,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'About Us | TheGenZ AI Hub',
  description:
    'Building the infrastructure for the next generation of AI companies from Africa. Learn why we exist, what we believe, and how our repeatable venture-building system works.'
};

export default function AboutPage() {
  const beliefs = [
    {
      title: 'AI should be practical.',
      desc: 'Theoretical models and prompt experimentation are useless unless applied to tangible economic workflows and real pain points.'
    },
    {
      title: 'Talent should have opportunities to build.',
      desc: 'Africa possesses an unprecedented demographic advantage of technical talent that simply lacks institutional venture scaffolding.'
    },
    {
      title: 'Real problems create meaningful companies.',
      desc: 'We do not build speculative tech toys. True enterprise value stems from solving acute bottlenecks in high-friction industries.'
    },
    {
      title: 'Builders should not have to build alone.',
      desc: 'Venture isolation kills momentum. Co-builders, peer critique, and dedicated mentorship multiply execution velocity.'
    },
    {
      title: 'Africa can produce globally relevant AI companies.',
      desc: 'Solving high-complexity logistical, agricultural, and financial bottlenecks in Africa yields solutions adaptable anywhere in the world.'
    },
    {
      title: 'Communities can become engines of innovation.',
      desc: 'A connected, transparent, and collaborative network of practitioners transforms latent talent into organized economic power.'
    }
  ];

  const workflowSteps = [
    { num: '01', name: 'Learn', desc: 'Practical AI, technical architecture, and entrepreneurial capability development.' },
    { num: '02', name: 'Discover', desc: 'Rigorous scouting of high-friction industry bottlenecks and enterprise challenges.' },
    { num: '03', name: 'Validate', desc: 'Direct customer discovery interviews and willingness-to-pay assumption testing.' },
    { num: '04', name: 'Build', desc: 'Sprint-based engineering of functional AI-powered minimum viable products.' },
    { num: '05', name: 'Launch', desc: 'Deploying into live production environments and onboarding pilot cohorts.' },
    { num: '06', name: 'Grow', desc: 'Telemetry analysis, tight iteration cycles, and venture readiness for capital and scale.' }
  ];

  return (
    <div>
      {/* Hero Section */}
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
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              OUR MISSION & PURPOSE
            </span>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              Building the Infrastructure for the Next Generation of AI Companies.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
              TheGenZ AI Hub exists to bridge the massive gap between learning AI syntax and building scalable, commercially enduring technology companies from Africa.
            </p>
            <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/apply" className="btn btn-primary">
                Build With Us
                <ArrowRight size={16} />
              </Link>
              <Link href="/connect" className="btn btn-secondary">
                Join Community Layer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Why We Exist */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            {/* Who We Are */}
            <div className="hub-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.5rem)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Compass size={24} />
              </div>
              <span className="sub-label">WHO WE ARE</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>An African AI Venture-Building Platform</h2>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                TheGenZ AI Hub is an institutional venture-building ecosystem. We are not a coding bootcamp, a passive consultancy, a generic meetup group, or an AI news aggregator.
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.7 }}>
                We operate as a repeatable foundry that brings together ambitious developers, verified real-world problems, rigorous validation methodologies, and venture resources so that promising ideas turn into enduring companies.
              </p>
            </div>

            {/* Why We Exist */}
            <div className="hub-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.5rem)', borderLeft: '5px solid var(--energy)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--energy-light)',
                color: 'var(--energy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Zap size={24} />
              </div>
              <span className="sub-label">WHY WE EXIST</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Missing Bridge</h2>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Knowing how to train an AI model or prompt an LLM is radically different from knowing how to establish unit economics, discover customer friction, conduct discovery interviews, and structure a viable corporate entity.
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.7 }}>
                Without a structured ecosystem, Africa's brightest technical minds remain trapped doing repetitive outsourcing or isolated hobby projects. TheGenZ AI Hub provides the structured pipeline from line of code to commercial venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2.5rem)'
          }}>
            <div style={{
              backgroundColor: 'var(--primary-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1.5px solid rgba(21, 0, 176, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Target size={28} color="var(--primary)" />
                <span className="pill-badge pill-preseed">OUR MISSION</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--dark-navy)', marginBottom: '1rem' }}>
                Turning Talent and Ideas into Enduring Companies.
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                "To help transform AI talent, ideas and real-world problems into products and companies."
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--dark-navy)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              color: 'var(--white)',
              border: '1.5px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Eye size={28} color="var(--energy)" />
                <span className="pill-badge pill-energy">OUR VISION</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--white)', marginBottom: '1rem' }}>
                A Continent Empowered by Venture Infrastructure.
              </h3>
              <p style={{ color: 'var(--gray-300)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                "A world where AI talent has the infrastructure, community and opportunities needed to build meaningful companies."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe (6 core tenets) */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">CORE TENETS</span>
            <h2>What We Believe</h2>
            <p>
              Six foundational principles that govern every cohort, partnership, and venture that passes through TheGenZ AI Hub.
            </p>
          </div>

          <div className="grid-3">
            {beliefs.map((b, idx) => (
              <div key={b.title} className="hub-card" style={{ backgroundColor: 'var(--white)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: 'var(--energy)',
                    letterSpacing: '0.08em'
                  }}>
                    BELIEF 0{idx + 1}
                  </span>
                  <CheckCircle2 size={20} color="var(--primary)" />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--dark-navy)' }}>
                  {b.title}
                </h4>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work: Learn -> Discover -> Validate -> Build -> Launch -> Grow */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">THE LIFECYCLE</span>
            <h2>How We Work</h2>
            <p>
              A systematic progression that guides raw talent and unvetted concepts into validated market solutions.
            </p>
          </div>

          <div className="grid-6">
            {workflowSteps.map((step) => (
              <div key={step.num} className="hub-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  {step.num}
                </span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--dark-navy)' }}>
                  {step.name}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="section section-dark text-center">
        <div className="container-narrow">
          <span className="pill-badge pill-gold" style={{ marginBottom: '1rem' }}>
            BECOME PART OF OUR STORY
          </span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Join the Next Generation of African AI Founders
          </h2>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            We are actively reviewing applications for upcoming cohorts and problem submissions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apply" className="btn btn-energy btn-lg">
              Apply as a Builder
            </Link>
            <Link href="/partner" className="btn btn-outline-white btn-lg">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
