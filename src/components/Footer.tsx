'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquareCode, ShieldCheck, FileText, Globe } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ];

  return (
    <footer style={{
      backgroundColor: 'var(--dark-navy)',
      color: 'var(--white)',
      paddingTop: 'clamp(3rem, 7vw, 5rem)',
      paddingBottom: 'clamp(2rem, 5vw, 3rem)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      overflowX: 'hidden',
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              display: 'inline-block',
              padding: '0.55rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.25rem',
              maxWidth: '100%',
            }}>
              <Image
                src="/thegenzlogo-cropped.png"
                alt="TheGenZ AI Hub"
                width={160}
                height={55}
                style={{ height: '42px', width: 'auto', display: 'block', maxWidth: '100%' }}
              />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 800,
              color: 'var(--energy)',
              letterSpacing: '0.08em',
              marginBottom: '0.75rem',
            }}>
              LEARN. BUILD. CONNECT.
            </div>
            <p style={{
              color: 'var(--gray-300)',
              fontSize: 'clamp(0.875rem, 1.8vw, 0.95rem)',
              marginBottom: '1.5rem',
              lineHeight: 1.65,
            }}>
              The African AI venture-building platform turning AI talent, real-world problems and ideas into validated solutions, products, and companies.
            </p>
            <div className="pill-badge pill-gold" style={{ display: 'inline-flex' }}>
              PRE-SEED • 2026
            </div>
          </div>

          {/* Ecosystem Navigation Links */}
          <div>
            <h4 style={{
              color: 'var(--white)',
              fontSize: '0.875rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Learn & Programs', href: '/learn' },
                { label: 'AI Builder Cohort ↗', href: '/cohort', highlight: true },
                { label: 'Venture Pipeline', href: '/build' },
                { label: 'Connect & Network', href: '/connect' },
                { label: 'Insights & Resources', href: '/insights' },
                { label: 'Contact Hub', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: item.highlight ? 'var(--energy)' : 'var(--gray-300)',
                      fontSize: '0.9rem',
                      fontWeight: item.highlight ? 600 : 400,
                      transition: 'color 0.2s ease',
                      display: 'inline-block',
                      minHeight: '28px',
                      lineHeight: '28px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = item.highlight ? 'var(--energy)' : 'var(--gray-300)'; }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participation Paths */}
          <div>
            <h4 style={{
              color: 'var(--white)',
              fontSize: '0.875rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Participate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <Link
                  href="/apply"
                  onClick={() => trackEvent('program_interest', { location: 'footer_apply' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', minHeight: '28px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-300)'; }}
                >
                  <span>Apply as a Builder</span>
                  <ArrowUpRight size={13} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-problem"
                  onClick={() => trackEvent('problem_submission', { location: 'footer_problem' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', minHeight: '28px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-300)'; }}
                >
                  <span>Bring Us a Problem</span>
                  <ArrowUpRight size={13} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/mentor"
                  onClick={() => trackEvent('mentor_application', { location: 'footer_mentor' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', minHeight: '28px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-300)'; }}
                >
                  <span>Become a Mentor</span>
                  <ArrowUpRight size={13} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  onClick={() => trackEvent('partner_inquiry', { location: 'footer_partner' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', minHeight: '28px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-300)'; }}
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight size={13} color="var(--energy)" />
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  onClick={() => trackEvent('community_join', { location: 'footer_whatsapp' })}
                  style={{ color: 'var(--gray-300)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', minHeight: '28px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-300)'; }}
                >
                  <MessageSquareCode size={13} color="var(--gold)" />
                  <span>Join WhatsApp Community</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div>
            <h4 style={{
              color: 'var(--white)',
              fontSize: '0.875rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Connect With Us
            </h4>
            <p style={{
              color: 'var(--gray-300)',
              fontSize: 'clamp(0.825rem, 1.6vw, 0.9rem)',
              marginBottom: '1.25rem',
              lineHeight: 1.55,
            }}>
              Active on the ground across the continent. Join our digital community and ecosystem updates.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('community_join', { location: 'footer_whatsapp_link' })}
                style={{
                  color: 'var(--white)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  padding: '0.65rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <MessageSquareCode size={16} color="var(--energy)" />
                <span>WhatsApp Community Group</span>
              </a>

              {/* Social icon pills — X, LinkedIn, Facebook */}
              <div style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                marginTop: '0.25rem',
              }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      color: 'var(--white)',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      padding: '0.5rem 0.85rem',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.825rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 'clamp(1.25rem, 3vw, 2rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.875rem',
          fontSize: 'clamp(0.8rem, 1.6vw, 0.875rem)',
          color: 'var(--gray-400)',
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--white)' }}>TheGenZ AI Hub</span>{' '}
            © 2026. All rights reserved. Stage: PRE-SEED.
          </div>
          <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2.5vw, 1.5rem)', flexWrap: 'wrap' }}>
            <Link
              href="/privacy"
              style={{ color: 'var(--gray-400)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', minHeight: '32px' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-400)'; }}
            >
              <ShieldCheck size={13} />
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{ color: 'var(--gray-400)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', minHeight: '32px' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-400)'; }}
            >
              <FileText size={13} />
              Terms of Service
            </Link>
            <span style={{ color: 'var(--energy)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Globe size={13} />
              Pan-African Ecosystem
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
