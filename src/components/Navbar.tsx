'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Learn', href: '/learn' },
    { name: 'Build', href: '/build' },
    { name: 'Connect', href: '/connect' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <>
      {/* Top Pre-seed Announcement Bar */}
      <div style={{
        backgroundColor: 'var(--dark-navy)',
        color: 'var(--white)',
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        padding: '0.45rem 1rem',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <span style={{
            backgroundColor: 'var(--energy)',
            color: 'var(--white)',
            padding: '0.15rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.08em'
          }}>PRE-SEED • 2026</span>
          <span>African AI Venture-Building Platform — Turning AI Talent and Ideas Into Companies.</span>
          <Link href="/cohort" style={{ color: 'var(--energy)', textDecoration: 'underline', marginLeft: '0.25rem' }}>
            AI Builder Cohort Applications Open →
          </Link>
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'var(--white)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(21, 0, 176, 0.12)' : '1px solid var(--gray-200)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem',
        }}>
          {/* Brand Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} id="nav-brand-logo">
            <Image
              src="/thegenzlogo.png"
              alt="TheGenZ AI Hub Logo"
              width={160}
              height={55}
              style={{ objectFit: 'contain', height: '42px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--primary)' : 'var(--gray-700)',
                    position: 'relative',
                    padding: '0.25rem 0',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--gray-700)';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: 'var(--energy)',
                      borderRadius: '2px'
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
            <Link
              href="/connect"
              onClick={() => trackEvent('community_join', { location: 'navbar_desktop' })}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
            >
              <MessageSquareCode size={16} color="var(--energy)" />
              Join Community
            </Link>
            <Link
              href="/apply"
              onClick={() => trackEvent('program_interest', { location: 'navbar_desktop_build' })}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem' }}
            >
              Build With Us
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--dark-navy)'
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--white)',
            borderBottom: '2px solid var(--primary-light)',
            boxShadow: 'var(--shadow-xl)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--primary)' : 'var(--gray-800)',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--gray-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {link.name}
                    {isActive && <span style={{ color: 'var(--energy)', fontSize: '0.85rem' }}>●</span>}
                  </Link>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <Link
                href="/connect"
                onClick={() => {
                  trackEvent('community_join', { location: 'navbar_mobile' });
                  setMobileMenuOpen(false);
                }}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageSquareCode size={18} color="var(--energy)" />
                Join Community
              </Link>
              <Link
                href="/apply"
                onClick={() => {
                  trackEvent('program_interest', { location: 'navbar_mobile_build' });
                  setMobileMenuOpen(false);
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Build With Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Media Query Helpers for Desktop vs Mobile Header */}
      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
