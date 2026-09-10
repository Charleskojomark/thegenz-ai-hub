'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Building2,
  GraduationCap,
  Globe2,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import { trackEvent } from '@/lib/analytics';

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    organizationType: 'Technology Company',
    partnershipInterest: 'Talent & Hiring Pipeline',
    contribution: '',
    goals: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const orgTypes = [
    'University / Academic Institution',
    'Technology Company / Cloud Provider',
    'Innovation Hub / Incubator',
    'Venture Capital / Angel Syndicate',
    'Enterprise / Corporation',
    'Government / Development Agency',
    'Industry Body / Trade Association'
  ];

  const partnershipInterests = [
    'Talent & Engineering Squad Pipeline',
    'Enterprise Problem Sourcing & Prototyping',
    'Program Sponsorship & Compute Grants',
    'Curriculum & Academic Joint Programs',
    'Venture Deal Flow & Investor Access',
    'Community Co-Hosting & Hackathons'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the partnership inquiry consent.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      trackEvent('partner_inquiry', {
        name: formData.name,
        org: formData.organization,
        type: formData.organizationType,
        interest: formData.partnershipInterest
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
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
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              COLLABORATION & INFRASTRUCTURE
            </span>
            <h1 style={{ marginBottom: '1.25rem', color: 'var(--dark-navy)' }}>
              Let's Build the AI Ecosystem Together.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We collaborate with universities, technology providers, corporations, and capital allocators to construct a durable, repeatable venture foundry across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section section-light-blue" style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container-narrow">
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--gray-200)',
            boxShadow: 'var(--shadow-lg)',
            padding: 'clamp(2rem, 5vw, 3.5rem)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  1. Organization & Representative Details
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Provide contact details for your institutional liaison.
                </p>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="partnerName">
                      Contact Name <span className="required">*</span>
                    </label>
                    <input
                      id="partnerName"
                      type="text"
                      required
                      placeholder="e.g. Samuel Osei"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="partnerOrg">
                      Organization Name <span className="required">*</span>
                    </label>
                    <input
                      id="partnerOrg"
                      type="text"
                      required
                      placeholder="e.g. Pan-African Innovation Foundation"
                      className="form-input"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="partnerEmail">
                      Official Work Email <span className="required">*</span>
                    </label>
                    <input
                      id="partnerEmail"
                      type="email"
                      required
                      placeholder="samuel@foundation.org"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="partnerPhone">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      id="partnerPhone"
                      type="tel"
                      placeholder="+233..."
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="orgType">
                      Organization Category <span className="required">*</span>
                    </label>
                    <select
                      id="orgType"
                      className="form-select"
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                    >
                      {orgTypes.map((ot) => (
                        <option key={ot} value={ot}>{ot}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="partnerInterest">
                      Primary Partnership Focus <span className="required">*</span>
                    </label>
                    <select
                      id="partnerInterest"
                      className="form-select"
                      value={formData.partnershipInterest}
                      onChange={(e) => setFormData({ ...formData, partnershipInterest: e.target.value })}
                    >
                      {partnershipInterests.map((pi) => (
                        <option key={pi} value={pi}>{pi}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Value Exchange */}
              <div style={{ marginBottom: '2.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  2. Collaboration Alignment
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Define what you bring to the ecosystem and what success looks like for your organization.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="contribution">
                    What would you like to contribute to TheGenZ AI Hub? <span className="required">*</span>
                  </label>
                  <textarea
                    id="contribution"
                    required
                    rows={3}
                    placeholder="e.g. Cloud compute credits, student pipeline access, enterprise problem briefs, grant funding..."
                    className="form-textarea"
                    value={formData.contribution}
                    onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="goals">
                    What would your organization like to achieve through this partnership? <span className="required">*</span>
                  </label>
                  <textarea
                    id="goals"
                    required
                    rows={3}
                    placeholder="e.g. Accelerate our internal AI capabilities, discover seed-stage investment opportunities, upskill students..."
                    className="form-textarea"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Additional Context or Proposal Message
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Any specific timelines, upcoming events, or reference projects..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              {/* Consent */}
              <div style={{
                backgroundColor: 'var(--gray-50)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '2rem',
                border: '1px solid var(--gray-200)'
              }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--gray-700)' }}>
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    style={{ accentColor: 'var(--primary)', marginTop: '3px' }}
                  />
                  <span>
                    I confirm that I am authorized to initiate exploratory discussions on behalf of this organization.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-partner-btn"
              >
                {isSubmitting ? (
                  <span>Initiating Conversation...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Start a Partnership Conversation</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Partnership Inquiry Received!"
        message="Thank you for reaching out to collaborate with TheGenZ AI Hub. Our leadership team will review your partnership alignment and schedule an introductory alignment call."
        actionText="Return to Ecosystem"
        actionHref="/connect"
        showWhatsAppCta={false}
      />
    </div>
  );
}
