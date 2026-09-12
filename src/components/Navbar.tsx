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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'var(--white)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(21, 0, 176, 0.12)' : '1px solid var(--gray-200)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all 0.3s ease',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'visible',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '5.25rem',
          gap: '1rem',
        }}>
          {/* Brand Logo — slightly larger */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
            id="nav-brand-logo"
            aria-label="TheGenZ AI Hub — Home"
          >
            <Image
              src="/thegenzlogo.png"
              alt="TheGenZ AI Hub Logo"
              width={180}
              height={60}
              style={{ objectFit: 'contain', height: '48px', width: 'auto', display: 'block' }}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="desktop-nav"
            style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.925rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--primary)' : 'var(--gray-700)',
                    position: 'relative',
                    padding: '0.35rem 0',
                    transition: 'var(--transition)',
                    whiteSpace: 'nowrap',
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
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: 'var(--energy)',
                      borderRadius: '2px',
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div
            className="desktop-actions"
            style={{ display: 'none', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}
          >
            <Link
              href="/connect"
              onClick={() => trackEvent('community_join', { location: 'navbar_desktop' })}
              className="btn btn-secondary"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
            >
              <MessageSquareCode size={15} color="var(--energy)" />
              Join Community
            </Link>
            <Link
              href="/apply"
              onClick={() => trackEvent('program_interest', { location: 'navbar_desktop_build' })}
              className="btn btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
            >
              Build With Us
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: mobileMenuOpen ? 'var(--primary-light)' : 'transparent',
              border: '1.5px solid',
              borderColor: mobileMenuOpen ? 'rgba(21, 0, 176, 0.2)' : 'var(--gray-200)',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--dark-navy)',
              minWidth: '44px',
              minHeight: '44px',
              transition: 'var(--transition)',
              flexShrink: 0,
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Backdrop */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
            style={{
              position: 'fixed',
              top: '5.25rem',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(8, 5, 30, 0.45)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              zIndex: 998,
            }}
          />
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="mobile-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--white)',
              borderBottom: '2px solid var(--primary-light)',
              boxShadow: 'var(--shadow-xl)',
              padding: 'clamp(1.25rem, 4vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              maxHeight: 'calc(100vh - 5.25rem - 2rem)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              zIndex: 999,
            }}
          >
            {/* Nav Links */}
            <nav aria-label="Mobile navigation">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: isActive ? 'var(--primary)' : 'var(--gray-800)',
                          padding: '0.875rem 0',
                          borderBottom: '1px solid var(--gray-100)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          minHeight: '52px',
                        }}
                      >
                        {link.name}
                        {isActive
                          ? <span style={{ color: 'var(--energy)', fontSize: '0.75rem' }}>●</span>
                          : <span style={{ color: 'var(--gray-300)', fontSize: '0.8rem' }}>›</span>
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem' }}>
              <Link
                href="/connect"
                onClick={() => {
                  trackEvent('community_join', { location: 'navbar_mobile' });
                  setMobileMenuOpen(false);
                }}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', minHeight: '52px', fontSize: '1rem' }}
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
                style={{ width: '100%', justifyContent: 'center', minHeight: '52px', fontSize: '1rem' }}
              >
                Build With Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
