'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Send,
  Building2,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import { trackEvent } from '@/lib/analytics';

export default function SubmitProblemPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    industry: 'Financial Services',
    problemTitle: '',
    problemDescription: '',
    whoExperiences: '',
    currentSolution: '',
    frequency: 'Daily / Continuous',
    impactDescription: '',
    alreadyTried: '',
    aiOpportunityHypothesis: '',
    additionalInfo: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    'Financial Services / Fintech',
    'Agriculture & Agritech',
    'Healthcare & Diagnostics',
    'Logistics & Freight Coordination',
    'Retail, FMCG & Distribution',
    'Education & Workforce Development',
    'Professional & Legal Services',
    'Manufacturing & Industrial Operations',
    'Government & Public Sector Administration',
    'Media, Entertainment & Creative Industries',
    'Other Industry Sector'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please acknowledge the problem submission guidelines to proceed.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      trackEvent('problem_submission', {
        name: formData.name,
        org: formData.organization,
        industry: formData.industry,
        title: formData.problemTitle
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        position: 'relative',
        borderBottom: '1px solid var(--gray-200)',
        overflow: 'hidden',
      }}>
        {/* Soft Modern Tech Radial Overlay for Pristine Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 15%, rgba(255, 255, 255, 0.88) 0%, rgba(248, 250, 255, 0.93) 55%, rgba(240, 243, 255, 0.98) 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          zIndex: 0,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="pill-badge pill-energy" style={{ marginBottom: '1.25rem' }}>
              PROBLEM SOURCING
            </span>
            <h1 style={{ marginBottom: '1.25rem', color: 'var(--dark-navy)' }}>
              Bring Us a Problem.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Meaningful companies solve real friction. If your organization, industry, or customer base suffers from an acute bottleneck, submit it to our venture-building pipeline.
            </p>
            <div style={{
              backgroundColor: 'var(--gray-50)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              border: '1px solid var(--gray-200)',
              color: 'var(--gray-700)',
              fontSize: '0.9rem'
            }}>
              <AlertCircle size={16} color="var(--energy)" />
              <span>Note: Submitting a problem initiates discovery. Not every problem warrants an AI venture.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
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
              {/* Section 1: Submitter Info */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  1. Submitter & Organization
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Who is submitting this problem on behalf of which business or domain?
                </p>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Kwesi Mensah"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="organization">
                      Organization / Business Name <span className="required">*</span>
                    </label>
                    <input
                      id="organization"
                      type="text"
                      required
                      placeholder="e.g. Atlantic Agritech Ltd / Independent Operator"
                      className="form-input"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Official Email <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="kwesi@organization.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone / WhatsApp <span className="required">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+233 / +234 / +254..."
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="industry">
                    Primary Industry Sector <span className="required">*</span>
                  </label>
                  <select
                    id="industry"
                    className="form-select"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Section 2: Problem Dossier */}
              <div style={{ marginBottom: '2.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  2. Problem Characterization
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Describe the actual bottleneck, who endures it, and how it is currently handled.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="problemTitle">
                    Problem Title / Brief Headline <span className="required">*</span>
                  </label>
                  <input
                    id="problemTitle"
                    type="text"
                    required
                    placeholder="e.g. Manual Reconciliation Delays for Cross-Border Cargo Manifests"
                    className="form-input"
                    value={formData.problemTitle}
                    onChange={(e) => setFormData({ ...formData, problemTitle: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="problemDescription">
                    Describe the problem in detail <span className="required">*</span>
                  </label>
                  <textarea
                    id="problemDescription"
                    required
                    rows={4}
                    placeholder="What actually happens? What breaks down? Where does manual human effort get stuck or delayed?"
                    className="form-textarea"
                    value={formData.problemDescription}
                    onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="whoExperiences">
                      Who experiences this problem? <span className="required">*</span>
                    </label>
                    <input
                      id="whoExperiences"
                      type="text"
                      required
                      placeholder="e.g. Operations clerks, farmers, bank compliance officers"
                      className="form-input"
                      value={formData.whoExperiences}
                      onChange={(e) => setFormData({ ...formData, whoExperiences: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="frequency">
                      How frequently does it occur? <span className="required">*</span>
                    </label>
                    <select
                      id="frequency"
                      className="form-select"
                      value={formData.frequency}
                      onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    >
                      <option value="Daily / Continuous">Daily / Continuous operational friction</option>
                      <option value="Weekly / Periodic">Weekly or periodic cycle</option>
                      <option value="Monthly / End-of-period">Monthly / End-of-quarter crunch</option>
                      <option value="Occasional">Occasional, but high-consequence</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="currentSolution">
                    How is it currently solved or worked around today? <span className="required">*</span>
                  </label>
                  <textarea
                    id="currentSolution"
                    required
                    rows={3}
                    placeholder="Spreadsheets, WhatsApp messages, paper records, manual phone calls, outsourced data entry..."
                    className="form-textarea"
                    value={formData.currentSolution}
                    onChange={(e) => setFormData({ ...formData, currentSolution: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="impactDescription">
                    What economic or operational impact does it have? <span className="required">*</span>
                  </label>
                  <textarea
                    id="impactDescription"
                    required
                    rows={3}
                    placeholder="Lost revenue, hours wasted per week, compliance fines, customer churn, slowed inventory turn..."
                    className="form-textarea"
                    value={formData.impactDescription}
                    onChange={(e) => setFormData({ ...formData, impactDescription: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="alreadyTried">
                    What have you or others already tried to fix this?
                  </label>
                  <textarea
                    id="alreadyTried"
                    rows={2}
                    placeholder="Off-the-shelf software that failed, custom internal scripts, consulting audits..."
                    className="form-textarea"
                    value={formData.alreadyTried}
                    onChange={(e) => setFormData({ ...formData, alreadyTried: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 3: AI Opportunity Hypothesis */}
              <div style={{ marginBottom: '2.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  3. AI Hypothesis & Collaboration
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  What kind of intelligent automation or capability do you envision?
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="aiOpportunityHypothesis">
                    What kind of AI opportunity do you think might exist? <span className="required">*</span>
                  </label>
                  <textarea
                    id="aiOpportunityHypothesis"
                    required
                    rows={3}
                    placeholder="e.g. An autonomous agent that reads photographed invoices in local languages, extracts tabular items, and auto-submits via API..."
                    className="form-textarea"
                    value={formData.aiOpportunityHypothesis}
                    onChange={(e) => setFormData({ ...formData, aiOpportunityHypothesis: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="additionalInfo">
                    Additional Context or Relevant Files
                  </label>
                  <textarea
                    id="additionalInfo"
                    rows={2}
                    placeholder="Links to public documentation, sample redacted data schemas, or timeline requirements..."
                    className="form-textarea"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
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
                    I understand that submitting a problem does not guarantee a commercial venture will be built. TheGenZ AI Hub will review this dossier to evaluate feasibility and may contact us for a discovery interview under mutual non-disclosure principles.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-energy btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-problem-btn"
              >
                {isSubmitting ? (
                  <span>Recording Problem Dossier...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Problem</span>
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
        title="Problem Dossier Submitted!"
        message="Thank you for bringing this challenge to TheGenZ AI Hub. Our venture research squad evaluates submitted problems against feasibility and customer validation metrics. We will reach out if selected for discovery mapping."
        actionText="Return to Ecosystem"
        actionHref="/build"
        showWhatsAppCta={false}
      />
    </div>
  );
}
