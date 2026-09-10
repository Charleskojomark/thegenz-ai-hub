'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, CheckCircle2, ArrowRight, Zap, Split, Link as LinkIcon } from 'lucide-react';

export default function ProblemBreakdown() {
  const steps = ['Idea', 'Validation', 'Product', 'Customers', 'Growth', 'Investment'];

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
        gap: '2.5rem',
        alignItems: 'stretch'
      }}>
        {/* Left: The Broken / Fragmented Conventional Pathway */}
        <div style={{
          backgroundColor: '#FFF8F8',
          border: '1.5px solid #FFCDD2',
          borderRadius: 'var(--radius-md)',
          padding: '2.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#FFEAEA',
                color: '#D32F2F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Split size={18} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#C62828',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                The Fragmented Reality
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#B71C1C', marginBottom: '1rem' }}>
              Isolated Skills & Disconnected Steps
            </h3>

            <p style={{ color: 'var(--gray-700)', fontSize: '0.975rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Thousands learn AI syntax and prompt engineering in isolation. But without commercial validation, cross-functional teammates, or customer discovery, projects stall out as unlaunched notebooks.
            </p>

            {/* Broken Pathway Visual */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '1.5rem'
            }}>
              {steps.map((step, idx) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 1rem',
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #FFCDD2',
                    fontSize: '0.9rem',
                    color: 'var(--gray-700)'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{step}</span>
                  {idx < steps.length - 1 ? (
                    <span style={{ color: '#D32F2F', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <AlertTriangle size={12} /> Fragmented Gap
                    </span>
                  ) : (
                    <span style={{ color: '#9E9E9E', fontSize: '0.75rem' }}>Rarely Reached</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: '0.85rem',
            backgroundColor: '#FFECEE',
            borderRadius: 'var(--radius-xs)',
            fontSize: '0.85rem',
            color: '#B71C1C',
            fontWeight: 600,
            textAlign: 'center'
          }}>
            Knowing AI ≠ Knowing How To Build A Company
          </div>
        </div>

        {/* Right: TheGenZ AI Hub Integrated Pathway */}
        <div style={{
          backgroundColor: 'var(--white)',
          border: '2px solid var(--primary)',
          borderRadius: 'var(--radius-md)',
          padding: '2.25rem',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <LinkIcon size={18} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                TheGenZ AI Hub Model
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginBottom: '1rem' }}>
              The Continuous Venture Engine
            </h3>

            <p style={{ color: 'var(--gray-700)', fontSize: '0.975rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              We orchestrate the entire pathway under one cohesive roof: pairing top African technical talent with high-impact enterprise problems, rigorous customer validation, MVP sprints, and venture readiness.
            </p>

            {/* Connected Pathway Visual */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '1.5rem'
            }}>
              {steps.map((step) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 1rem',
                    backgroundColor: 'var(--primary-light)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid rgba(21, 0, 176, 0.18)',
                    fontSize: '0.9rem',
                    color: 'var(--dark-navy)'
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{step}</span>
                  <span style={{
                    color: 'var(--primary)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <CheckCircle2 size={13} color="var(--energy)" /> Integrated Support
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)', fontWeight: 600 }}>
              Structured, Guided & Accountable
            </span>
            <Link href="/build" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}>
              See How We Build
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
