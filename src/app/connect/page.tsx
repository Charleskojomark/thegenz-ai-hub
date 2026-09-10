import React from 'react';
import Link from 'next/link';
import {
  MessageSquareCode,
  Users,
  GraduationCap,
  Briefcase,
  Building2,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  CheckCircle2,
  Share2
} from 'lucide-react';

export const metadata = {
  title: 'Connect & Ecosystem | TheGenZ AI Hub',
  description:
    'Connection is infrastructure. Join the active TheGenZ AI Hub WhatsApp community, mentor network, enterprise partnerships, and builder ecosystem across Africa.'
};

export default function ConnectPage() {
  const channels = [
    {
      title: 'WhatsApp Community Layer',
      badge: 'IMMEDIATE ACCESS',
      badgeColor: 'pill-energy',
      desc: 'Our real-time conversational space where builders exchange code, discuss latest AI releases, form hack squads, and receive instant announcements.',
      action: 'Join WhatsApp Group',
      href: 'https://chat.whatsapp.com/',
      isExternal: true,
      icon: MessageSquareCode,
      highlight: true
    },
    {
      title: 'Mentor Network',
      badge: 'EXPERTS & FOUNDERS',
      badgeColor: 'pill-gold',
      desc: 'Connect with seasoned software architects, product directors, and venture operators offering direct office hours to cohort squads.',
      action: 'Become a Mentor',
      href: '/mentor',
      isExternal: false,
      icon: GraduationCap,
      highlight: false
    },
    {
      title: 'Ecosystem Partners',
      badge: 'INSTITUTIONS & HUBS',
      badgeColor: 'pill-preseed',
      desc: 'Universities, technology companies, innovation spaces, and venture funds collaborating on talent pipelines and infrastructure support.',
      action: 'Partner With Us',
      href: '/partner',
      isExternal: false,
      icon: Briefcase,
      highlight: false
    },
    {
      title: 'Business Problem Sourcing',
      badge: 'ENTERPRISES & SMES',
      badgeColor: 'pill-energy',
      desc: 'Organizations submitting operational bottlenecks and looking for vetted AI development squads to prototype automated solutions.',
      action: 'Submit a Problem',
      href: '/submit-problem',
      isExternal: false,
      icon: Building2,
      highlight: false
    },
    {
      title: 'Builder Squads',
      badge: 'TECHNICAL CO-BUILDERS',
      badgeColor: 'pill-preseed',
      desc: 'Developers, prompt engineers, UI designers, and domain analysts actively collaborating on production projects and applications.',
      action: 'Apply as a Builder',
      href: '/apply',
      isExternal: false,
      icon: Users,
      highlight: false
    },
    {
      title: 'Ecosystem Events & Teardowns',
      badge: 'VIRTUAL & HYBRID',
      badgeColor: 'pill-gold',
      desc: 'Bi-weekly system architecture breakdowns, code teardowns, guest founder sessions, and cohort demo day showcases.',
      action: 'Explore Calendar',
      href: '#events',
      isExternal: false,
      icon: Calendar,
      highlight: false
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--gray-200)',
        paddingTop: 'clamp(4rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5rem)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              PAN-AFRICAN AI NETWORK
            </span>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>
              Connection Is Infrastructure.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
              We do not treat community as passive networking or casual chat. Connection is the fundamental scaffolding that pairs isolated talent with real-world problems, rigorous mentors, and capital.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-energy btn-lg"
              >
                <MessageSquareCode size={20} />
                <span>Join WhatsApp Community</span>
              </a>
              <Link href="/partner" className="btn btn-secondary btn-lg">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Banner */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--primary)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="pill-badge pill-energy" style={{ marginBottom: '1rem' }}>
                PRIMARY CONVERSATIONAL LAYER
              </span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>
                TheGenZ AI Hub WhatsApp Community
              </h2>
              <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Our WhatsApp community is the heartbeat of our day-to-day interactions. Here, builders collaborate across borders, share debugging insights, discuss new research models, and form teams for the AI Builder Cohort.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Zero spam or generic promo—strictly technical and venture-focused
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Direct access to cohort announcements and problem briefs
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--gray-800)' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Peer code reviews and feedback on work-in-progress MVPs
                </div>
              </div>

              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-energy btn-lg"
              >
                <MessageSquareCode size={20} />
                <span>Join Official WhatsApp Layer</span>
              </a>
            </div>

            <div style={{
              backgroundColor: 'var(--dark-navy)',
              borderRadius: 'var(--radius-md)',
              padding: '2.25rem',
              color: 'var(--white)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                PLATFORM-AGNOSTIC ROADMAP
              </span>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                Expanding Into Custom Ecosystem Tools
              </h3>
              <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                WhatsApp serves as our initial, zero-friction communication bridge. As cohorts expand, we are engineering custom telemetry trackers, problem registries, and venture dashboards for verified builders.
              </p>
              <div className="pill-badge pill-preseed">
                Pre-Seed • 2026 Ecosystem Core
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Entry Points Grid */}
      <section className="section" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">CONNECTED INFRASTRUCTURE</span>
            <h2>Six Pillars of Ecosystem Collaboration</h2>
            <p>
              Engage with our ecosystem across your specific domain of strength and strategic interest.
            </p>
          </div>

          <div className="grid-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="hub-card"
                  style={{
                    border: c.highlight ? '2px solid var(--primary)' : '1px solid var(--gray-200)',
                    boxShadow: c.highlight ? 'var(--shadow-md)' : 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={20} />
                    </div>
                    <span className={`pill-badge ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--dark-navy)' }}>
                    {c.title}
                  </h3>

                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {c.desc}
                  </p>

                  {c.isExternal ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ justifyContent: 'space-between', fontSize: '0.875rem' }}
                    >
                      <span>{c.action}</span>
                      <ArrowUpRight size={15} color="var(--energy)" />
                    </a>
                  ) : (
                    <Link
                      href={c.href}
                      className="btn btn-secondary"
                      style={{ justifyContent: 'space-between', fontSize: '0.875rem' }}
                    >
                      <span>{c.action}</span>
                      <ArrowRight size={15} color="var(--primary)" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Placeholder Section */}
      <section id="events" className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-label">ECOSYSTEM GATHERINGS</span>
            <h2>Upcoming Sessions & Programs</h2>
            <p>
              Transparently published as scheduled. Join the community to receive direct calendar invites and registration links.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--gray-200)',
            padding: '2.5rem',
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            <Calendar size={36} color="var(--energy)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
              Virtual & In-Person Masterclasses
            </h3>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We regularly organize deep-dive code teardowns, AI customer discovery workshops, and founder firesides. All upcoming dates are published directly to community members.
            </p>
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Event Invites on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
