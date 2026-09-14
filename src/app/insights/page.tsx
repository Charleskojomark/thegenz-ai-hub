'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Tag, ArrowRight, Clock, User, Sparkles, Filter } from 'lucide-react';

interface InsightArticle {
  id: string;
  title: string;
  category: 'AI' | 'Building' | 'Venture Building' | 'Industry' | 'Community' | 'Opportunities';
  excerpt: string;
  readTime: string;
  date: string;
  badgeColor: string;
}

const INSIGHTS: InsightArticle[] = [
  {
    id: 'ai-tools-vs-companies',
    title: 'Why Prompt Engineering Won’t Save a Speculative Product: The Case for Customer Discovery',
    category: 'Venture Building',
    excerpt: 'Examining why technical founders frequently over-index on LLM latency and prompt optimization while ignoring fundamental market willingness to pay.',
    readTime: '6 min read',
    date: '2026',
    badgeColor: 'pill-energy'
  },
  {
    id: 'african-logistics-ai',
    title: 'Deconstructing Fragmented Supply Chains: Where AI Automation Creates Real Value',
    category: 'Industry',
    excerpt: 'A practical breakdown of logistics friction across West and East African corridors and how deterministic APIs paired with lightweight vision models yield immediate operational ROI.',
    readTime: '8 min read',
    date: '2026',
    badgeColor: 'pill-preseed'
  },
  {
    id: 'mvp-sprint-playbook',
    title: 'The 3-Week AI MVP Sprint: From Problem Dossier to Deployed Production Endpoints',
    category: 'Building',
    excerpt: 'Our architectural blueprint for structuring fast, resilient Next.js frontends, modular agentic backends, and error boundary fallbacks for early pilot tests.',
    readTime: '10 min read',
    date: '2026',
    badgeColor: 'pill-gold'
  },
  {
    id: 'slm-vs-frontier-llm',
    title: 'Small Language Models (SLMs) in Bandwidth-Constrained Environments',
    category: 'AI',
    excerpt: 'Analyzing local inference, quantized models, and edge compute strategies for African applications operating with variable connectivity.',
    readTime: '7 min read',
    date: '2026',
    badgeColor: 'pill-preseed'
  },
  {
    id: 'builder-culture-africa',
    title: 'Why Technical Isolation Is the Single Biggest Bottleneck for African Developers',
    category: 'Community',
    excerpt: 'How structured peer accountability and shared venture pipelines transform solitary coding into collaborative company creation.',
    readTime: '5 min read',
    date: '2026',
    badgeColor: 'pill-energy'
  },
  {
    id: 'cohort-applications-guide',
    title: 'What We Look For in AI Builder Cohort Applications: Commitment Over Speculation',
    category: 'Opportunities',
    excerpt: 'A transparent guide for developers and aspiring founders preparing applications for our upcoming 8-week venture-building cohort.',
    readTime: '4 min read',
    date: '2026',
    badgeColor: 'pill-gold'
  }
];

const CATEGORIES = ['All', 'AI', 'Building', 'Venture Building', 'Industry', 'Community', 'Opportunities'] as const;

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered = selectedCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter((item) => item.category === selectedCategory);

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
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              RESOURCES & PLAYBOOKS
            </span>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              Insights for AI Builders
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Practical thoughts, architectural playbooks, and venture frameworks on building AI-powered companies from Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          {/* Categories Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            overflowX: 'auto',
            paddingBottom: '1.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isSelected ? 'var(--primary)' : 'var(--white)',
                    color: isSelected ? 'var(--white)' : 'var(--gray-700)',
                    border: isSelected ? '1.5px solid var(--primary)' : '1.5px solid var(--gray-200)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.875rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    boxShadow: isSelected ? '0 2px 8px rgba(21,0,176,0.2)' : 'none'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="hub-card"
                style={{
                  backgroundColor: 'var(--white)',
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <span className={`pill-badge ${item.badgeColor}`} style={{ fontSize: '0.75rem', padding: '0.2rem 0.65rem' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    color: 'var(--dark-navy)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.4
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: 'var(--gray-600)',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {item.excerpt}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid var(--gray-100)',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem'
                }}>
                  <span style={{ color: 'var(--gray-500)', fontWeight: 600 }}>TheGenZ Hub Playbook</span>
                  <span style={{
                    color: 'var(--primary)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    Read Article
                    <ArrowRight size={14} color="var(--energy)" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Contribution Callout */}
      <section className="section" style={{ backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="pill-badge pill-preseed" style={{ marginBottom: '1rem' }}>
            WRITE WITH US
          </span>
          <h2>Have Insights From Building Real AI Systems?</h2>
          <p style={{ color: 'var(--gray-600)', marginTop: '0.75rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            We regularly publish field notes, technical teardowns, and customer validation findings authored by engineers and domain operators in our ecosystem.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Submit a Technical Article Proposal
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
