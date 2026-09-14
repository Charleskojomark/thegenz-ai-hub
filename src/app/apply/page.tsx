'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Cpu,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle2,
  Flame,
  ArrowRight
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import { trackEvent } from '@/lib/analytics';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    portfolio: '',
    currentRole: '',
    technicalSkills: '',
    aiSkills: '',
    whatBuilt: '',
    whatCurrentlyBuilding: '',
    industriesOfInterest: [] as string[],
    problemsToSolve: '',
    whyJoin: '',
    hoursPerWeek: '15-20 hours',
    comfortableInTeam: 'yes',
    hopeToBuild: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableIndustries = [
    'Agriculture',
    'Financial Services / Fintech',
    'Healthcare',
    'Logistics & Supply Chain',
    'Education & EdTech',
    'Retail & Commerce',
    'Professional Services',
    'Government & Civic Tech',
    'Media & Entertainment',
    'Other'
  ];

  const handleIndustryToggle = (ind: string) => {
    setFormData((prev) => {
      const exists = prev.industriesOfInterest.includes(ind);
      return {
        ...prev,
        industriesOfInterest: exists
          ? prev.industriesOfInterest.filter((i) => i !== ind)
          : [...prev.industriesOfInterest, ind]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the application privacy consent to continue.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      trackEvent('builder_application', {
        name: formData.fullName,
        email: formData.email,
        role: formData.currentRole,
        hours: formData.hoursPerWeek,
        industries: formData.industriesOfInterest
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
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
              <Flame size={14} />
              COHORT ADMISSIONS
            </span>
            <h1 style={{ marginBottom: '1.25rem', color: 'var(--dark-navy)' }}>
              Apply as a Builder
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We are not looking for people who simply want to learn AI. We are looking for people who want to use AI to build.
            </p>
            <div style={{
              backgroundColor: 'var(--primary-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem 1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              border: '1px solid rgba(21, 0, 176, 0.15)',
              color: 'var(--primary-dark)',
              fontSize: '0.925rem',
              fontWeight: 600
            }}>
              <CheckCircle2 size={18} color="var(--energy)" />
              <span>Next Cohort: 8-Week Venture Building Sprint • Stage: PRE-SEED • 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
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
              {/* Section 1: Personal & Links */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  1. Contact & Identity
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Help us get to know who you are and where you are located.
                </p>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Amara Okafor"
                      className="form-input"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="amara@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone / WhatsApp <span className="required">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+234 / +254 / +233..."
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="location">
                      Location (City, Country) <span className="required">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      required
                      placeholder="e.g. Lagos, Nigeria or Nairobi, Kenya"
                      className="form-input"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="linkedIn">
                      LinkedIn Profile URL
                    </label>
                    <input
                      id="linkedIn"
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      className="form-input"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="portfolio">
                      GitHub / Portfolio / Project URL <span className="required">*</span>
                    </label>
                    <input
                      id="portfolio"
                      type="url"
                      required
                      placeholder="https://github.com/username or portfolio link"
                      className="form-input"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="currentRole">
                    Current Role & Experience Level <span className="required">*</span>
                  </label>
                  <input
                    id="currentRole"
                    type="text"
                    required
                    placeholder="e.g. Full-Stack Engineer (3 yrs), Student, Machine Learning Practitioner"
                    className="form-input"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 2: Technical & AI Stack */}
              <div style={{ marginBottom: '2.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  2. Technical & AI Background
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Tell us about the programming languages, frameworks, and AI workflows you work with.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="technicalSkills">
                    Core Technical Skills & Languages <span className="required">*</span>
                  </label>
                  <input
                    id="technicalSkills"
                    type="text"
                    required
                    placeholder="e.g. Python, TypeScript, React, Next.js, Node.js, PostgreSQL, Docker"
                    className="form-input"
                    value={formData.technicalSkills}
                    onChange={(e) => setFormData({ ...formData, technicalSkills: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="aiSkills">
                    AI & Machine Learning Capabilities <span className="required">*</span>
                  </label>
                  <input
                    id="aiSkills"
                    type="text"
                    required
                    placeholder="e.g. OpenAI/Anthropic APIs, LangChain, LlamaIndex, PyTorch, RAG architectures, local SLMs"
                    className="form-input"
                    value={formData.aiSkills}
                    onChange={(e) => setFormData({ ...formData, aiSkills: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="whatBuilt">
                    What have you built in the past? <span className="required">*</span>
                  </label>
                  <textarea
                    id="whatBuilt"
                    required
                    rows={3}
                    placeholder="Describe any application, API, hackathon prototype, or production project you have authored or contributed to..."
                    className="form-textarea"
                    value={formData.whatBuilt}
                    onChange={(e) => setFormData({ ...formData, whatBuilt: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="whatCurrentlyBuilding">
                    What are you currently building or experimenting with?
                  </label>
                  <textarea
                    id="whatCurrentlyBuilding"
                    rows={2}
                    placeholder="Side projects, open-source repos, or exploratory notebooks you are actively tinkering with..."
                    className="form-textarea"
                    value={formData.whatCurrentlyBuilding}
                    onChange={(e) => setFormData({ ...formData, whatCurrentlyBuilding: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 3: Problem Interests & Commitment */}
              <div style={{ marginBottom: '2.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  3. Problem Interests & Venture Intent
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  We prioritize builders driven by real-world friction rather than theoretical tools.
                </p>

                <div className="form-group">
                  <label className="form-label">
                    Industries of Interest (Select all that apply)
                  </label>
                  <div className="form-checkbox-grid">
                    {availableIndustries.map((ind) => {
                      const isSelected = formData.industriesOfInterest.includes(ind);
                      return (
                        <div
                          key={ind}
                          onClick={() => handleIndustryToggle(ind)}
                          className={`form-choice-card ${isSelected ? 'selected' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            style={{ accentColor: 'var(--primary)' }}
                          />
                          <span>{ind}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="problemsToSolve">
                    What real-world problems or bottlenecks are you interested in solving? <span className="required">*</span>
                  </label>
                  <textarea
                    id="problemsToSolve"
                    required
                    rows={3}
                    placeholder="Explain the industry inefficiencies, repetitive tasks, or economic friction you want to dismantle..."
                    className="form-textarea"
                    value={formData.problemsToSolve}
                    onChange={(e) => setFormData({ ...formData, problemsToSolve: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="hopeToBuild">
                    What do you hope to build during the 8-week cohort? <span className="required">*</span>
                  </label>
                  <textarea
                    id="hopeToBuild"
                    required
                    rows={3}
                    placeholder="Describe your ideal MVP outcome or venture direction..."
                    className="form-textarea"
                    value={formData.hopeToBuild}
                    onChange={(e) => setFormData({ ...formData, hopeToBuild: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="whyJoin">
                    Why do you want to join TheGenZ AI Hub? <span className="required">*</span>
                  </label>
                  <textarea
                    id="whyJoin"
                    required
                    rows={2}
                    placeholder="What specifically makes this venture-building ecosystem the right environment for you?"
                    className="form-textarea"
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="hoursPerWeek">
                      Weekly Hours Commitment <span className="required">*</span>
                    </label>
                    <select
                      id="hoursPerWeek"
                      className="form-select"
                      value={formData.hoursPerWeek}
                      onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                    >
                      <option value="15-20 hours">15 – 20 hours / week (Minimum requirement)</option>
                      <option value="20-30 hours">20 – 30 hours / week</option>
                      <option value="30+ hours">30+ hours / week (Full-time focus)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="comfortableInTeam">
                      Are you comfortable working in a cross-functional squad? <span className="required">*</span>
                    </label>
                    <select
                      id="comfortableInTeam"
                      className="form-select"
                      value={formData.comfortableInTeam}
                      onChange={(e) => setFormData({ ...formData, comfortableInTeam: e.target.value })}
                    >
                      <option value="yes">Yes, excited to collaborate in a team</option>
                      <option value="solo_preferred">Prefer solo, but open to squads</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Privacy Consent */}
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
                    I confirm that the details provided are accurate and that I understand TheGenZ AI Hub is a pre-seed venture-building foundry requiring active collaboration and commitment. I consent to my application information being reviewed in accordance with the{' '}
                    <Link href="/privacy" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                      Privacy Policy
                    </Link>.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-builder-app-btn"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Application</span>
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
        title="Application Received!"
        message="Thank you for applying to TheGenZ AI Hub Builder Cohort. Our admissions committee reviews applications on a rolling basis. Join our official WhatsApp community layer to stay updated on notifications."
        actionText="Back to Cohort Overview"
        actionHref="/cohort"
        showWhatsAppCta={true}
      />
    </div>
  );
}
