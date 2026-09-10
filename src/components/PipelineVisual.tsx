'use client';

import React, { useState } from 'react';
import { Search, CheckCircle2, Code2, Rocket, TrendingUp, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PipelineStage {
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  icon: any;
  deliverables: string[];
  color: string;
}

const STAGES: PipelineStage[] = [
  {
    number: '01',
    title: 'DISCOVER',
    shortDesc: 'Find meaningful problems, opportunities and talent.',
    detail: 'Uncovering unaddressed African business bottlenecks, domain friction, and passionate builders with technical aptitude.',
    icon: Search,
    deliverables: ['Problem Dossier', 'Builder Squad Formation', 'Opportunity Sizing'],
    color: '#1500B0'
  },
  {
    number: '02',
    title: 'VALIDATE',
    shortDesc: 'Talk to users, understand the problem and test assumptions.',
    detail: 'Engaging real target users and stakeholders to confirm economic urgency and willingness to adopt before writing a single line of code.',
    icon: CheckCircle2,
    deliverables: ['Customer Discovery Interviews', 'Value Proposition Matrix', 'Assumption Testing'],
    color: '#FD8302'
  },
  {
    number: '03',
    title: 'BUILD',
    shortDesc: 'Design and develop an AI-powered solution.',
    detail: 'Rapid sprint cycles using modern AI foundation models, agentic workflows, clean APIs, and modern web application stacks.',
    icon: Code2,
    deliverables: ['Functional MVP', 'AI Pipeline Architecture', 'Production Deployment'],
    color: '#1500B0'
  },
  {
    number: '04',
    title: 'LAUNCH',
    shortDesc: 'Put the product in the hands of real users.',
    detail: 'Deploying solution to closed pilot groups and early adopter communities for active telemetry, usage patterns, and feedback.',
    icon: Rocket,
    deliverables: ['Pilot Cohort Onboarding', 'Telemetry Dashboards', 'Live Feedback Loops'],
    color: '#FD8302'
  },
  {
    number: '05',
    title: 'GROW',
    shortDesc: 'Measure, learn, iterate and develop traction.',
    detail: 'Refining core workflows based on user retention, workflow completion metrics, and initial recurring utility.',
    icon: TrendingUp,
    deliverables: ['Retention Analysis', 'Feature Iterations', 'Unit Economics Framing'],
    color: '#1500B0'
  },
  {
    number: '06',
    title: 'INVESTOR READY',
    shortDesc: 'Prepare promising ventures for capital, partnerships and scale.',
    detail: 'Equipping validated ventures with governance structures, partnership pipelines, and institutional pitch artifacts.',
    icon: Award,
    deliverables: ['Venture Data Room', 'Demo Day Showcase', 'Strategic Partner Introductions'],
    color: '#D4AF37'
  }
];

export default function PipelineVisual() {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  return (
    <div style={{ width: '100%' }}>
      {/* 6 Stage Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem'
      }}>
        {STAGES.map((stage, idx) => {
          const isSelected = selectedStage === idx;
          const Icon = stage.icon;

          return (
            <div
              key={stage.number}
              onClick={() => setSelectedStage(idx)}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                border: isSelected ? `2px solid ${stage.color}` : '1.5px solid var(--gray-200)',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                transform: isSelected ? 'translateY(-3px)' : 'none',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: stage.color,
                    letterSpacing: '-0.02em'
                  }}>
                    {stage.number}
                  </span>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? stage.color : 'var(--gray-100)',
                    color: isSelected ? 'var(--white)' : stage.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition)'
                  }}>
                    <Icon size={18} />
                  </div>
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: 'var(--dark-navy)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.04em'
                }}>
                  {stage.title}
                </h4>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--gray-600)',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>
                  {stage.shortDesc}
                </p>
              </div>

              <div style={{
                borderTop: '1px dashed var(--gray-200)',
                paddingTop: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: stage.color
              }}>
                <span>{isSelected ? 'ACTIVE VIEW' : 'CLICK FOR DETAILS'}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Stage Inspection Box */}
      <div style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        border: `2px solid ${STAGES[selectedStage].color}`,
        padding: '2rem 2.25rem',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span className="pill-badge" style={{
              backgroundColor: `${STAGES[selectedStage].color}15`,
              color: STAGES[selectedStage].color,
              fontWeight: 800
            }}>
              PHASE {STAGES[selectedStage].number} DEEP DIVE
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>
              Repeatable Venture Building
            </span>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--dark-navy)' }}>
            Stage {STAGES[selectedStage].number}: {STAGES[selectedStage].title}
          </h3>

          <p style={{ color: 'var(--gray-700)', fontSize: '1.025rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            {STAGES[selectedStage].detail}
          </p>

          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gray-500)', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
              Core Milestones & Outputs:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {STAGES[selectedStage].deliverables.map((item) => (
                <span
                  key={item}
                  style={{
                    backgroundColor: 'var(--gray-100)',
                    color: 'var(--gray-800)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    border: '1px solid var(--gray-200)'
                  }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
          <Link href="/cohort" className="btn btn-primary">
            Experience In Cohort
            <ArrowRight size={16} />
          </Link>
          <Link href="/build" className="btn btn-outline" style={{ border: `1.5px solid ${STAGES[selectedStage].color}`, color: STAGES[selectedStage].color }}>
            Read Pipeline Specs
          </Link>
        </div>
      </div>

      {/* Supporting Repeatable System Statement */}
      <div style={{
        marginTop: '2rem',
        textAlign: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(21, 0, 176, 0.04)',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid rgba(21, 0, 176, 0.1)'
      }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--primary-dark)',
          margin: 0
        }}>
          "We are building a repeatable system for turning AI opportunities into companies."
        </p>
      </div>
    </div>
  );
}
