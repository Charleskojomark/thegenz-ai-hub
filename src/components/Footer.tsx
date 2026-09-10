'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquareCode, ShieldCheck, FileText, Globe } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--dark-navy)',
      color: 'var(--white)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              display: 'inline-block',
              padding: '0.6rem 1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.25rem'
            }}>
              <Image
                src="/thegenzlogo.png"
                alt="TheGenZ AI Hub"
                width={150}
                height={50}
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 800,
              color: 'var(--energy)',
              letterSpacing: '0.08em',
              marginBottom: '0.75rem'
            }}>
              LEARN. BUILD. CONNECT.
            </div>
            <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              The African AI venture-building platform turning AI talent, real-world problems and ideas into validated solutions, products, and companies.
            </p>
            <div className="pill-badge pill-gold" style={{ display: 'inline-flex' }}>
              PRE-SEED • 2026
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{
              color: 'var(--white)',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/learn" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  Learn & Programs
                </Link>
              </li>
              <li>
                <Link href="/cohort" style={{ color: 'var(--energy)', fontSize: '0.925rem', fontWeight: 600 }}>
                  AI Builder Cohort ↗
                </Link>
              </li>
              <li>
                <Link href="/build" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  Venture Pipeline
                </Link>
              </li>
              <li>
                <Link href="/connect" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  Connect & Network
                </Link>
              </li>
              <li>
                <Link href="/insights" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  Insights & Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--gray-300)', fontSize: '0.925rem' }}>
                  Contact Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Participation Paths */}
          <div>
            <h4 style={{
              color: 'var(--white)',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              Participate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link
                  href="/apply"
                  onClick={() => trackEvent('program_interest', { location: 'footer_apply' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Apply as a Builder</span>
                  <ArrowUpRight size={14} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-problem"
                  onClick={() => trackEvent('problem_submission', { location: 'footer_problem' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Bring Us a Problem</span>
                  <ArrowUpRight size={14} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/mentor"
                  onClick={() => trackEvent('mentor_application', { location: 'footer_mentor' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Become a Mentor</span>
                  <ArrowUpRight size={14} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  onClick={() => trackEvent('partner_inquiry', { location: 'footer_partner' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight size={14} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  onClick={() => trackEvent('community_join', { location: 'footer_whatsapp' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <MessageSquareCode size={14} color="var(--gold)" />
                  <span>Join WhatsApp Community</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div>
            <h4 style={{
              color: 'var(--white)',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              Connect With Us
            </h4>
            <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Active on the ground across the continent. Join our digital community layers and ecosystem updates.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('community_join', { location: 'footer_whatsapp_link' })}
                style={{
                  color: 'var(--white)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <MessageSquareCode size={16} color="var(--energy)" />
                <span>WhatsApp Community Group</span>
              </a>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    color: 'var(--white)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.825rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  style={{
                    color: 'var(--white)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.825rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  X (Twitter)
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    color: 'var(--white)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.825rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.875rem',
          color: 'var(--gray-400)'
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--white)' }}>TheGenZ AI Hub</span> © 2026. All rights reserved. Stage: PRE-SEED • 2026.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'var(--gray-400)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} />
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: 'var(--gray-400)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <FileText size={14} />
              Terms of Service
            </Link>
            <span style={{ color: 'var(--energy)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Globe size={14} />
              Pan-African Ecosystem
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
