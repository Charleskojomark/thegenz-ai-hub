'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Users,
  Compass,
  Building2,
  GraduationCap,
  Briefcase,
  ShieldAlert,
  Code2,
  Workflow,
  Search,
  CheckCircle2,
  MessageSquareCode,
  Zap,
  Globe2,
  Flame,
  ChevronRight
} from 'lucide-react';
import EcosystemCanvas from '@/components/EcosystemCanvas';
import PipelineVisual from '@/components/PipelineVisual';
import ProblemBreakdown from '@/components/ProblemBreakdown';
import CohortRoadmap from '@/components/CohortRoadmap';
import FAQAccordion from '@/components/FAQAccordion';
import { trackEvent } from '@/lib/analytics';

export default function HomePage() {
  const audienceCards = [
    {
      title: 'AI TALENT',
      desc: 'People developing AI, machine learning and technical software capabilities looking to transition into products.',
      action: 'Apply to Cohort',
      href: '/apply',
      color: 'var(--primary)',
      icon: Cpu,
    },
    {
      title: 'BUILDERS',
      desc: 'Engineers, product designers and makers ready to execute and turn high-friction problems into working MVPs.',
      action: 'Start Building',
      href: '/apply',
      color: 'var(--energy)',
      icon: Code2,
    },
    {
      title: 'BUSINESSES',
      desc: 'Organizations, enterprises and SMEs with concrete operational bottlenecks that could become AI ventures.',
      action: 'Submit a Problem',
      href: '/submit-problem',
      color: 'var(--primary)',
      icon: Building2,
    },
    {
      title: 'FOUNDERS',
      desc: 'Entrepreneurs developing scalable companies around validated market opportunities and African industry gaps.',
      action: 'Build With Us',
      href: '/build',
      color: 'var(--energy)',
      icon: Compass,
    },
    {
      title: 'MENTORS',
      desc: 'Experienced operators, senior architects and founders looking to advise builder squads and accelerate teams.',
      action: 'Become a Mentor',
      href: '/mentor',
      color: 'var(--gold)',
      icon: GraduationCap,
    },
    {
      title: 'PARTNERS',
      desc: 'Universities, enterprise organizations and innovation ecosystem bodies expanding African AI infrastructure.',
      action: 'Partner With Us',
      href: '/partner',
      color: 'var(--primary)',
      icon: Briefcase,
    },
  ];

  const aiWorkflows = [
    {
      title: 'Accelerated Market Research',
      desc: 'Extracting signals from complex regulatory, competitive and localized trade data across African markets in hours, not weeks.',
      icon: Search,
    },
    {
      title: 'Autonomous Product Prototyping',
      desc: 'Synthesizing backend schemas, API contracts, and user flows to scaffold testable MVPs in days.',
      icon: Workflow,
    },
    {
      title: 'Automated Customer Discovery',
      desc: 'Transcribing, analyzing, and synthesizing qualitative feedback from multi-lingual user interviews.',
      icon: Users,
    },
    {
      title: 'Intelligent Operations & Workflows',
      desc: 'Embedding agentic loops that replace manual multi-step business coordination with self-healing automations.',
      icon: Cpu,
    },
    {
      title: 'Real-Time Telemetry & Analytics',
      desc: 'Continuous monitoring of model latency, hallucination rates, and user drop-off points for tight product iteration.',
      icon: Zap,
    },
    {
      title: 'Investor & Venture Readiness',
      desc: 'Generating diligence decks, financial scenarios, and data room architecture grounded in validated telemetry.',
      icon: Layers,
    },
  ];

  const builderProfiles = [
    {
      title: 'AI Builders',
      desc: 'Developers, AI practitioners and technical talent who want to turn their technical chops into scalable products.',
      badge: 'TECHNICAL'
    },
    {
      title: 'Aspiring Founders',
      desc: 'Visionary operators with deep problem insights and determination to build sustainable African technology companies.',
      badge: 'VENTURE'
    },
    {
      title: 'Domain Experts',
      desc: 'Industry veterans in agriculture, logistics, health, and finance who understand where current systems fail.',
      badge: 'INDUSTRY'
    },
    {
      title: 'Curious AI Talent',
      desc: 'Ambitious engineers serious about moving past passive tutorials and prompt toys into real-world software delivery.',
      badge: 'AMBITION'
    },
  ];

  const problemCategories = [
    'Healthcare',
    'Education',
    'Agriculture',
    'Financial Services',
    'Retail',
    'Logistics & Supply Chain',
    'Professional Services',
    'Government & Civic',
    'Manufacturing',
    'Media & Publishing',
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="section" style={{
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(21, 0, 176, 0.07) 0%, rgba(250, 251, 255, 1) 70%)',
        borderBottom: '1px solid var(--gray-200)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="pill-badge pill-preseed">
                PRE-SEED • 2026
              </span>
              <span className="pill-badge pill-energy">
                AFRICAN AI VENTURE-BUILDING PLATFORM
              </span>
            </div>

            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              Turning AI Talent and Ideas <span style={{ color: 'var(--primary)' }}>Into Companies.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--gray-700)',
              lineHeight: 1.6,
              maxWidth: '820px',
              margin: '0 auto 2.5rem auto'
            }}>
              TheGenZ AI Hub brings together AI talent, real-world problems, ideas, communities and venture resources to help build the next generation of AI-powered companies from Africa.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/apply"
                onClick={() => trackEvent('program_interest', { location: 'hero_primary_build' })}
                className="btn btn-primary btn-lg"
                id="hero-primary-cta"
              >
                <span>BUILD WITH US</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/connect"
                onClick={() => trackEvent('community_join', { location: 'hero_secondary_community' })}
                className="btn btn-secondary btn-lg"
                id="hero-secondary-cta"
              >
                <MessageSquareCode size={18} color="var(--energy)" />
                <span>JOIN THE COMMUNITY</span>
              </Link>
            </div>
          </div>

          {/* Elegant Ecosystem Visualization */}
          <div style={{ marginTop: '2.5rem' }}>
            <EcosystemCanvas />
          </div>
        </div>
      </section>

      {/* 2. "AI SKILLS ARE NOT ENOUGH" SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">THE PROBLEM WE SOLVE</span>
            <h2>Knowing AI Is Not the Same as Building a Company.</h2>
            <p>
              Thousands of ambitious Africans are learning AI models, algorithms, and prompt tools. Yet the journey from an isolated technical idea to an enduring enterprise remains fragmented, lonely, and vulnerable to failure.
            </p>
          </div>

          <ProblemBreakdown />
        </div>
      </section>

      {/* 3. WHAT WE DO (LEARN • BUILD • CONNECT) */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">OUR THREE PILLARS</span>
            <h2>We Build at the Intersection of AI, Talent and Real-World Problems.</h2>
            <p>
              Three unified engines designed to seamlessly guide talent and concepts into validated market solutions.
            </p>
          </div>

          <div className="grid-3">
            {/* LEARN */}
            <div className="hub-card" style={{ borderTop: '5px solid var(--primary)' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <GraduationCap size={26} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>PILLAR 01</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.25rem', marginBottom: '0.85rem' }}>LEARN</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.75rem', flex: 1 }}>
                Build rigorous, production-grade technical, agentic, product, and venture capabilities grounded in real commercial constraints.
              </p>
              <Link
                href="/learn"
                onClick={() => trackEvent('program_interest', { location: 'pillars_learn' })}
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Explore Learning
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* BUILD */}
            <div className="hub-card" style={{ borderTop: '5px solid var(--energy)' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--energy-light)',
                color: 'var(--energy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Code2 size={26} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--energy)', letterSpacing: '0.1em' }}>PILLAR 02</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.25rem', marginBottom: '0.85rem' }}>BUILD</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.75rem', flex: 1 }}>
                Turn real-world African operational bottlenecks and opportunities into validated, user-tested AI products and early-stage ventures.
              </p>
              <Link
                href="/build"
                onClick={() => trackEvent('program_interest', { location: 'pillars_build' })}
                className="btn btn-energy"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start Building
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* CONNECT */}
            <div className="hub-card" style={{ borderTop: '5px solid var(--gold)' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--gold-light)',
                color: 'var(--gold-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Users size={26} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-dark)', letterSpacing: '0.1em' }}>PILLAR 03</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.25rem', marginBottom: '0.85rem' }}>CONNECT</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.75rem', flex: 1 }}>
                Connect builders with dynamic peer communities, seasoned technical mentors, enterprise partners, and capital opportunities.
              </p>
              <Link
                href="/connect"
                onClick={() => trackEvent('community_join', { location: 'pillars_connect' })}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Join the Community
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ECOSYSTEM: MULTIPLE ENTRY POINTS */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">ENTRY CHANNELS</span>
            <h2>One Ecosystem. Multiple Entry Points.</h2>
            <p>
              TheGenZ AI Hub does not impose a single mold. Enter as talent, an established business, a domain expert, or an institutional partner.
            </p>
          </div>

          <div className="grid-3">
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="hub-card">
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
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    marginBottom: '0.5rem',
                    color: 'var(--dark-navy)',
                    letterSpacing: '0.04em'
                  }}>
                    {card.title}
                  </h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {card.desc}
                  </p>
                  <Link
                    href={card.href}
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between', fontSize: '0.875rem' }}
                  >
                    <span>{card.action}</span>
                    <ArrowUpRight size={16} color="var(--energy)" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. THE VENTURE PIPELINE */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">REPEATABLE METHODOLOGY</span>
            <h2>From Problem to Company.</h2>
            <p>
              Our structured six-stage venture-building pipeline transforms early insights into validated, scalable African technology enterprises.
            </p>
          </div>

          <PipelineVisual />
        </div>
      </section>

      {/* 6. AI-POWERED WORKFLOWS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="pill-badge pill-energy" style={{ marginBottom: '1rem' }}>
              VENTURE ACCELERATION ENGINE
            </span>
            <h2 style={{ color: 'var(--white)' }}>AI Should Accelerate the Entire Venture Journey.</h2>
            <p style={{ color: 'var(--gray-300)' }}>
              We do not treat AI as a decorative gimmick or the product itself. In our ecosystem, AI is the engine powering research, development, discovery, and governance.
            </p>
          </div>

          <div className="grid-3">
            {aiWorkflows.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="hub-card-dark">
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(253, 131, 2, 0.15)',
                    color: 'var(--energy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--gray-300)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: '3.5rem',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <p style={{ color: 'var(--white)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', margin: 0 }}>
              "AI does not replace the human builder. It empowers the builder to validate and execute 10x faster."
            </p>
          </div>
        </div>
      </section>

      {/* 7. FIRST PRODUCT — AI BUILDER COHORT */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <div>
              <span className="sub-label">FLAGSHIP VENTURE PROGRAM</span>
              <h2>AI Builder Cohort</h2>
              <p style={{ maxWidth: '680px' }}>
                An intensive 8-week builder experience for people who don't just want to learn AI — they want to use it to build, launch, and validate real software.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/cohort" className="btn btn-outline">
                Learn About the Cohort
              </Link>
              <Link href="/apply" className="btn btn-primary">
                Apply as a Builder
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <CohortRoadmap />
        </div>
      </section>

      {/* 8. WHO SHOULD JOIN? */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">IDEAL CANDIDATES</span>
            <h2>Built for People Who Want to Build.</h2>
            <p>
              You don't need to have a company already. You need the curiosity, commitment and willingness to build.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '3rem' }}>
            {builderProfiles.map((p) => (
              <div key={p.title} className="hub-card" style={{ backgroundColor: 'var(--white)' }}>
                <span className="pill-badge pill-preseed" style={{ width: 'fit-content', marginBottom: '1rem' }}>
                  {p.badge}
                </span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--dark-navy)' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--gray-600)', lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/apply" className="btn btn-primary btn-lg">
              <span>Apply to Build</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. PROBLEM DISCOVERY & FOR BUSINESSES */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            alignItems: 'center'
          }}>
            <div>
              <span className="sub-label">PROBLEM SOURCING</span>
              <h2>Have a Real Problem Worth Solving?</h2>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Meaningful companies are born from real friction, not abstract technology trends. We welcome businesses, organizations, and domain specialists to bring real-world operational challenges into our ecosystem.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                {problemCategories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      padding: '0.4rem 0.8rem',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary-dark)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid rgba(21, 0, 176, 0.12)'
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/submit-problem" className="btn btn-energy">
                  Bring Us a Problem
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Work With Us
                </Link>
              </div>
            </div>

            {/* Business Opportunity Card */}
            <div style={{
              backgroundColor: 'var(--dark-navy)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              color: 'var(--white)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <span className="pill-badge pill-gold" style={{ marginBottom: '1rem' }}>
                ENTERPRISE & SME COLLABORATION
              </span>
              <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Bring Us Problems. Let's Explore What AI Can Do.
              </h3>
              <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Partner with TheGenZ AI Hub to uncover workflow bottlenecks, prototype automated solutions, and tap into dedicated squads of vetted African AI talent.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--gray-200)' }}>
                  <CheckCircle2 size={16} color="var(--energy)" /> Identify high-impact automation opportunities
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--gray-200)' }}>
                  <CheckCircle2 size={16} color="var(--energy)" /> Connect directly with tested AI engineering squads
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--gray-200)' }}>
                  <CheckCircle2 size={16} color="var(--energy)" /> Prototype working proofs of concept before large capital expenditure
                </li>
              </ul>
              <Link href="/submit-problem" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit a Problem Dossier
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. COMMUNITY SECTION */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--primary)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <MessageSquareCode size={22} color="var(--energy)" />
                <span className="pill-badge pill-energy">COMMUNITY LAYER</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
                Don't Build Alone.
              </h2>
              <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Building ambitious technology is hard; doing it in isolation is debilitating. TheGenZ AI Hub connects builders, developers, founders, mentors, and technology enthusiasts across the continent.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-800)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Find co-builders and technical collaborators
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-800)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Share MVPs for early feedback and stress testing
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-800)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Access exclusive workshops, code teardowns, and cohort slots
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://chat.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('community_join', { location: 'home_community_card' })}
                  className="btn btn-energy btn-lg"
                >
                  <MessageSquareCode size={20} />
                  Join WhatsApp Community
                </a>
                <Link href="/connect" className="btn btn-outline">
                  Explore Ecosystem
                </Link>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--primary-light)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              border: '1px solid rgba(21, 0, 176, 0.15)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                INFRASTRUCTURE PHILOSOPHY
              </span>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                Community Is Infrastructure
              </h4>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                While we utilize WhatsApp as our immediate high-bandwidth conversational layer today, TheGenZ AI Hub is built to remain platform-agnostic as we scale into custom builder dashboards, telemetry tracking, and venture tools.
              </p>
              <div className="pill-badge pill-preseed">
                Active Pan-African Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PARTNERS & MENTORS SPLIT */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="grid-2">
            {/* Partners Card */}
            <div className="hub-card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <span className="sub-label">ECOSYSTEM ALLIES</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Build the Ecosystem With Us.</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Universities, tech companies, innovation centers, and capital allocators: collaborate with us on AI adoption, talent pipelines, and venture discovery across Africa.
              </p>
              <Link href="/partner" className="btn btn-primary" style={{ width: 'fit-content' }}>
                Become a Partner
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mentors Card */}
            <div className="hub-card" style={{ borderLeft: '4px solid var(--energy)' }}>
              <span className="sub-label">KNOWLEDGE TRANSFER</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Experience Can Accelerate the Next Builder.</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Senior architects, AI practitioners, product leaders, and seasoned founders: lend your domain wisdom and engineering insights to ambitious African squads.
              </p>
              <Link href="/mentor" className="btn btn-energy" style={{ width: 'fit-content' }}>
                Become a Mentor
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FUTURE VENTURES VISION */}
      <section className="section section-dark">
        <div className="container text-center" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <span className="pill-badge pill-gold" style={{ marginBottom: '1rem' }}>
            LONG-TERM AMBITION
          </span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>
            From Builders to Ventures.
          </h2>
          <p style={{
            color: 'var(--gray-300)',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            "Our long-term ambition is to develop a repeatable venture-building system capable of discovering talent, developing promising ideas and preparing companies for growth and capital."
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'var(--white)',
            fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            maxWidth: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <span>Talent</span> → <span>Problem</span> → <span>Validation</span> → <span>MVP</span> → <span>Users</span> → <span>Venture</span> → <strong style={{ color: 'var(--gold)' }}>Company</strong>
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">CLARITY & HONESTY</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Direct, transparent answers about our mission, stage, cohorts, and how we collaborate.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 14. FINAL HIGH-CONVERTING CTA BANNER */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
        color: 'var(--white)'
      }}>
        <div className="container text-center" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
            START YOUR JOURNEY TODAY
          </span>
          <h2 style={{ color: 'var(--white)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '1.25rem' }}>
            Ready to Build the Next AI Venture From Africa?
          </h2>
          <p style={{ color: 'var(--gray-200)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Whether you are an engineer ready to ship code, an organization facing an operational hurdle, or an aspiring founder, your path into the ecosystem starts here.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/apply"
              onClick={() => trackEvent('program_interest', { location: 'footer_cta_apply' })}
              className="btn btn-energy btn-lg"
            >
              <span>APPLY AS A BUILDER</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/submit-problem"
              onClick={() => trackEvent('problem_submission', { location: 'footer_cta_problem' })}
              className="btn btn-outline-white btn-lg"
            >
              <span>BRING US A PROBLEM</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
