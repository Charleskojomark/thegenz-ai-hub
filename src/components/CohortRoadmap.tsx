'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, CheckCircle, ArrowUpRight, Flame, Cpu, Users, Eye, Target } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface WeekItem {
  week: number;
  title: string;
  focus: string;
  description: string;
  deliverable: string;
  tag: string;
}

const WEEKS: WeekItem[] = [
  {
    week: 1,
    title: 'AI + Problem Discovery',
    focus: 'Deconstructing African Industry Bottlenecks',
    description: 'Explore high-friction real-world problems in agriculture, healthcare, logistics, and fintech. Match with builder squad and define the problem thesis.',
    deliverable: 'Problem Hypothesis Document',
    tag: 'EXPLORATION'
  },
  {
    week: 2,
    title: 'Customer Discovery',
    focus: 'Talking to Stakeholders & Operators',
    description: 'Conduct at least 15 structured interviews with domain operators to confirm if the problem is painful enough to command adoption.',
    deliverable: 'Interview Synthesis & Persona Map',
    tag: 'FIELD RESEARCH'
  },
  {
    week: 3,
    title: 'Problem Validation',
    focus: 'Testing Commercial Viability',
    description: 'Validate willingness to pay or engage. Identify current manual workarounds and calculate economic leakage caused by the bottleneck.',
    deliverable: 'Validated Problem Dossier',
    tag: 'FEASIBILITY'
  },
  {
    week: 4,
    title: 'AI Solution Design',
    focus: 'Architecture & Agentic Workflow Design',
    description: 'Architect the AI system. Decide where LLMs, computer vision, specialized small models, or deterministic code deliver the highest ROI.',
    deliverable: 'System Architecture & Wireframes',
    tag: 'ARCHITECTURE'
  },
  {
    week: 5,
    title: 'MVP Development',
    focus: 'Rapid Production Prototyping',
    description: 'Intensive code sprint. Connect models, orchestrate prompts and agents, build responsive frontends, and implement error boundaries.',
    deliverable: 'Functional Working Software (V0.1)',
    tag: 'SPRINT'
  },
  {
    week: 6,
    title: 'Launch',
    focus: 'Deploying into User Hands',
    description: 'Deploy product to production. Onboard early pilot users and capture initial transaction and interaction telemetry.',
    deliverable: 'Public/Closed Pilot Deployment',
    tag: 'GO LIVE'
  },
  {
    week: 7,
    title: 'User Feedback',
    focus: 'Telemetry & Rapid Iteration',
    description: 'Analyze real user interaction logs, identify where AI hallucinations or UI friction occur, and execute tight iteration cycles.',
    deliverable: 'Retention & Usability Report',
    tag: 'ITERATION'
  },
  {
    week: 8,
    title: 'Demo Day',
    focus: 'Showcase to Mentors, Partners & Investors',
    description: 'Pitch functional AI products, demonstrate real user traction, and present venture roadmaps to our curated ecosystem network.',
    deliverable: 'Live Demo & Venture Deck',
    tag: 'FINALE'
  }
];

export default function CohortRoadmap({ compact = false }: { compact?: boolean }) {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const current = WEEKS.find((w) => w.week === activeWeek) || WEEKS[0];

  return (
    <div style={{ width: '100%' }}>
      {/* 8-Week Navigation Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
        gap: '0.65rem',
        marginBottom: '2rem'
      }}>
        {WEEKS.map((item) => {
          const isActive = item.week === activeWeek;
          return (
            <button
              key={item.week}
              onClick={() => setActiveWeek(item.week)}
              style={{
                backgroundColor: isActive ? 'var(--primary)' : 'var(--white)',
                color: isActive ? 'var(--white)' : 'var(--gray-800)',
                border: isActive ? '2px solid var(--primary)' : '1.5px solid var(--gray-200)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.85rem 0.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'var(--transition)',
                boxShadow: isActive ? '0 4px 14px rgba(21,0,176,0.25)' : 'none',
              }}
            >
              <div style={{
                fontSize: '0.725rem',
                fontWeight: 800,
                color: isActive ? 'var(--energy)' : 'var(--gray-500)',
                letterSpacing: '0.05em'
              }}>
                WEEK {item.week}
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.825rem',
                fontWeight: 700,
                marginTop: '0.2rem',
                lineHeight: 1.25,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
              </div>
            </button>
          );
        })}
      </div>

      {/* Week Focus Showcase Box */}
      <div style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        border: '2px solid var(--primary)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        boxShadow: 'var(--shadow-lg)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="pill-badge pill-energy">
              WEEK 0{current.week}
            </span>
            <span className="pill-badge pill-preseed">
              {current.tag}
            </span>
          </div>

          <h3 style={{ fontSize: '1.75rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
            {current.title}
          </h3>

          <h4 style={{ fontSize: '1.05rem', color: 'var(--energy)', fontWeight: 700, marginBottom: '1rem' }}>
            {current.focus}
          </h4>

          <p style={{ color: 'var(--gray-700)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {current.description}
          </p>

          <div style={{
            backgroundColor: 'var(--gray-50)',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            borderLeft: '4px solid var(--energy)',
            fontSize: '0.925rem',
            fontWeight: 600,
            color: 'var(--gray-800)'
          }}>
            🎯 <strong style={{ color: 'var(--primary)' }}>Key Deliverable:</strong> {current.deliverable}
          </div>
        </div>

        {/* Right Action & Value Callout */}
        <div style={{
          backgroundColor: 'var(--primary-light)',
          padding: 'clamp(1.25rem, 4vw, 2rem)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(21, 0, 176, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--primary-dark)',
              fontWeight: 800,
              fontSize: 'clamp(0.75rem, 2vw, 0.825rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <Flame size={15} color="var(--energy)" style={{ flexShrink: 0 }} />
              <span>Flagship Experience</span>
            </div>
            <h4 style={{
              fontSize: 'clamp(1.1rem, 3.5vw, 1.25rem)',
              color: 'var(--dark-navy)',
              marginBottom: '0.5rem',
              lineHeight: 1.3
            }}>
              From First Line of Code to Tested Product
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>
              Cohorts are intensive, peer-driven, and mentored by active African and global operators. We filter strictly for builders ready to execute.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <Link
              href="/apply"
              onClick={() => trackEvent('program_interest', { location: 'cohort_roadmap_apply', week: current.week })}
              className="btn btn-primary"
              style={{
                justifyContent: 'center',
                padding: '0.75rem 1rem',
                fontSize: 'clamp(0.875rem, 2vw, 0.95rem)'
              }}
            >
              Apply as a Builder
              <ArrowUpRight size={16} />
            </Link>
            {!compact && (
              <Link
                href="/cohort"
                className="btn btn-outline"
                style={{
                  justifyContent: 'center',
                  backgroundColor: 'var(--white)',
                  whiteSpace: 'normal',
                  lineHeight: 1.3,
                  textAlign: 'center',
                  padding: '0.75rem 1rem',
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                }}
              >
                Full Cohort Syllabus & Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
