'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Send,
  MessageSquareCode,
  Globe2,
  Building2,
  CheckCircle2,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import { trackEvent } from '@/lib/analytics';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('General Enquiries');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'General Enquiries',
    'Partnerships',
    'Programs & Cohorts',
    'Community',
    'Media / Speaking'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the contact policy consent.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      trackEvent('partner_inquiry', {
        name: formData.name,
        email: formData.email,
        type: inquiryType,
        subject: formData.subject
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--gray-200)',
        paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              GET IN TOUCH
            </span>
            <h1 style={{ marginBottom: '1.25rem', color: 'var(--dark-navy)' }}>
              Let's Build Something.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Have questions about our venture sprints, problem submissions, or ecosystem partnerships? Select a channel below and reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'flex-start'
          }}>
            {/* Contact Channels Info */}
            <div>
              <div className="hub-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginBottom: '1rem' }}>
                  Direct Ecosystem Hubs
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Depending on your objective, these specialized pathways ensure your inquiry reaches the correct team immediately:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Link
                    href="/apply"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between', fontSize: '0.9rem' }}
                  >
                    <span>Builder Admissions</span>
                    <ArrowRight size={15} color="var(--primary)" />
                  </Link>

                  <Link
                    href="/submit-problem"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between', fontSize: '0.9rem' }}
                  >
                    <span>Submit an Industry Problem</span>
                    <ArrowRight size={15} color="var(--energy)" />
                  </Link>

                  <Link
                    href="/partner"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between', fontSize: '0.9rem' }}
                  >
                    <span>Institutional Partnerships</span>
                    <ArrowRight size={15} color="var(--primary)" />
                  </Link>

                  <Link
                    href="/mentor"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between', fontSize: '0.9rem' }}
                  >
                    <span>Mentor Network Application</span>
                    <ArrowRight size={15} color="var(--gold)" />
                  </Link>
                </div>
              </div>

              {/* WhatsApp Quick Join */}
              <div style={{
                backgroundColor: 'var(--dark-navy)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                color: 'var(--white)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <MessageSquareCode size={20} color="var(--energy)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--energy)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    FASTEST RESPONSE
                  </span>
                </div>
                <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  WhatsApp Community Layer
                </h4>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  For quick community questions, peer discussions, and immediate notifications, connect with us inside our WhatsApp group.
                </p>
                <a
                  href="https://chat.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-energy"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquareCode size={16} />
                  <span>Join Official WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--gray-200)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Please select your inquiry category below so we can route your note accurately.
              </p>

              {/* Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {categories.map((cat) => {
                  const isSelected = inquiryType === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setInquiryType(cat)}
                      style={{
                        padding: '0.45rem 0.95rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--gray-200)',
                        backgroundColor: isSelected ? 'var(--primary-light)' : 'var(--white)',
                        color: isSelected ? 'var(--primary-dark)' : 'var(--gray-700)',
                        cursor: 'pointer',
                        transition: 'var(--transition)'
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      placeholder="e.g. Chinelo Eze"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactEmail">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="chinelo@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactOrg">
                      Organization / Affiliation
                    </label>
                    <input
                      id="contactOrg"
                      type="text"
                      placeholder="Optional"
                      className="form-input"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactSubject">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      id="contactSubject"
                      type="text"
                      required
                      placeholder="Brief topic of your message"
                      className="form-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={4}
                    placeholder="How can we assist you or collaborate?"
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div style={{
                  backgroundColor: 'var(--gray-50)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--gray-200)'
                }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--gray-700)' }}>
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ accentColor: 'var(--primary)', marginTop: '2px' }}
                    />
                    <span>
                      I consent to TheGenZ AI Hub processing my message to coordinate a response.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="submit-contact-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Dispatch...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Message Dispatched!"
        message="Thank you for reaching out to TheGenZ AI Hub. We have routed your inquiry to our operations team and will respond promptly."
        actionText="Return to Home"
        actionHref="/"
        showWhatsAppCta={true}
      />
    </div>
  );
}
