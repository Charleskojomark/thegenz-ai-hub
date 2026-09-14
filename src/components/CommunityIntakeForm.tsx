'use client';

import React, { useState, useEffect } from 'react';
import {
  MessageSquareCode,
  User,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const ROLES = [
  'Technical / AI Engineer',
  'Software Developer (Frontend / Backend / Fullstack)',
  'Product & UI/UX Designer',
  'Domain Problem Owner (Fintech, Agri, Health, Logistics)',
  'Student & Aspiring Builder'
];

interface CommunityIntakeFormProps {
  id?: string;
}

export default function CommunityIntakeForm({ id = 'join-form' }: CommunityIntakeFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    city: '',
    role: 'Technical / AI Engineer',
    projectIntent: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('https://chat.whatsapp.com/');
  const [countdown, setCountdown] = useState(4);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim() || !formData.country.trim()) {
      setError('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/community/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit registration. Please try again.');
      }

      trackEvent('community_form_completed', {
        role: formData.role,
        country: formData.country
      });

      if (data.redirectUrl) {
        setWhatsappLink(data.redirectUrl);
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-redirect to WhatsApp countdown after successful submission
  useEffect(() => {
    if (!submitted) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    }
  }, [submitted, countdown, whatsappLink]);

  return (
    <div
      id={id}
      style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        border: '1.5px solid rgba(21, 0, 176, 0.15)',
        boxShadow: '0 20px 40px -15px rgba(8, 5, 30, 0.08), 0 0 0 1px rgba(21, 0, 176, 0.05)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Top Accent Strip */}
      <div style={{
        height: '5px',
        background: 'linear-gradient(90deg, var(--primary) 0%, var(--energy) 100%)'
      }} />

      <div style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
        {!submitted ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="pill-badge pill-energy">
                  <Sparkles size={13} />
                  COMMUNITY INTAKE • 60 SECONDS
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', color: 'var(--dark-navy)', marginBottom: '0.65rem' }}>
                Join TheGenZ AI Hub Community
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.975rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
                Connect with serious AI engineers, developers, and industry problem owners across Africa. Tell us briefly about yourself to receive instant access to our official WhatsApp layer.
              </p>
            </div>

            {error && (
              <div style={{
                backgroundColor: '#FEF2F2',
                border: '1px solid #F87171',
                borderRadius: 'var(--radius-md)',
                color: '#991B1B',
                padding: '0.875rem 1.25rem',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1: Name & Email */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}>
                <div>
                  <label htmlFor="intake-name" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--dark-navy)',
                    marginBottom: '0.45rem'
                  }}>
                    <User size={15} color="var(--primary)" />
                    Full Name <span style={{ color: 'var(--energy)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="intake-name"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Kwame Mensah"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--gray-200)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
                  />
                </div>

                <div>
                  <label htmlFor="intake-email" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--dark-navy)',
                    marginBottom: '0.45rem'
                  }}>
                    <Mail size={15} color="var(--primary)" />
                    Email Address <span style={{ color: 'var(--energy)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="intake-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="kwame@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--gray-200)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp Phone & Location */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}>
                <div>
                  <label htmlFor="intake-whatsapp" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--dark-navy)',
                    marginBottom: '0.45rem'
                  }}>
                    <Phone size={15} color="#25D366" />
                    WhatsApp Number (with Country Code) <span style={{ color: 'var(--energy)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="intake-whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+233 50 123 4567 or +234 801..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--gray-200)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.2rem', display: 'block' }}>
                    Used solely for community channel admission & announcements
                  </span>
                </div>

                <div>
                  <label htmlFor="intake-country" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--dark-navy)',
                    marginBottom: '0.45rem'
                  }}>
                    <Globe size={15} color="var(--primary)" />
                    Country & City <span style={{ color: 'var(--energy)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="intake-country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Ghana, Accra or Nigeria, Lagos"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--gray-200)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
                  />
                </div>
              </div>

              {/* Row 3: Role / Background */}
              <div>
                <label htmlFor="intake-role" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--dark-navy)',
                  marginBottom: '0.45rem'
                }}>
                  <Briefcase size={15} color="var(--primary)" />
                  Primary Background / Role <span style={{ color: 'var(--energy)' }}>*</span>
                </label>
                <select
                  id="intake-role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--gray-200)',
                    fontSize: '0.95rem',
                    backgroundColor: 'var(--white)',
                    outline: 'none',
                    transition: 'var(--transition)',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Project Intent / Problem */}
              <div>
                <label htmlFor="intake-intent" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--dark-navy)',
                  marginBottom: '0.45rem'
                }}>
                  <Lightbulb size={15} color="var(--energy)" />
                  What problem or AI project are you hoping to build? <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)', fontWeight: 400 }}>(1–2 sentences)</span>
                </label>
                <textarea
                  id="intake-intent"
                  name="projectIntent"
                  rows={3}
                  value={formData.projectIntent}
                  onChange={handleChange}
                  placeholder="e.g. Building an automated WhatsApp sales and credit assistant for micro-merchants in West Africa..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--gray-200)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'var(--transition)'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.9rem',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginTop: '0.5rem',
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Registering Your Profile...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Get WhatsApp Community Link</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--gray-500)' }}>
                🔒 Zero spam guaranteed. Your contact details are stored securely and never shared.
              </div>
            </form>
          </>
        ) : (
          /* Submission Celebration & WhatsApp CTA State */
          <div style={{
            textAlign: 'center',
            padding: '1.5rem 0'
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: '#DCFCE7',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 0 10px rgba(220, 252, 231, 0.4)'
            }}>
              <CheckCircle2 size={40} />
            </div>

            <span className="pill-badge pill-preseed" style={{ marginBottom: '1rem' }}>
              PROFILE CONFIRMED
            </span>

            <h3 style={{ fontSize: '1.85rem', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
              Welcome to TheGenZ AI Hub, {formData.fullName.split(' ')[0]}! 🚀
            </h3>

            <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
              Your profile is registered in our database. Tap the button below to enter our official WhatsApp Community Layer right now.
            </p>

            <div style={{
              backgroundColor: 'var(--gray-50)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              maxWidth: '500px',
              margin: '0 auto 2rem auto',
              border: '1px solid var(--gray-200)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-energy btn-lg"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  padding: '1rem',
                  boxShadow: '0 8px 20px -4px rgba(255, 92, 0, 0.35)'
                }}
              >
                <MessageSquareCode size={22} />
                <span>Join WhatsApp Community Now</span>
                <ExternalLink size={18} />
              </a>

              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', margin: 0 }}>
                Auto-opening WhatsApp in <strong>{countdown}</strong> second{countdown === 1 ? '' : 's'}...
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  whatsapp: '',
                  country: '',
                  city: '',
                  role: 'Technical / AI Engineer',
                  projectIntent: ''
                });
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gray-500)',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Register another member
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
