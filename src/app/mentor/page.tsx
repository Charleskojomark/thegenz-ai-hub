'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Send,
  CheckCircle2,
  Linkedin,
  Clock,
  Briefcase,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import { trackEvent } from '@/lib/analytics';

export default function MentorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedIn: '',
    areaOfExpertise: 'AI Engineering & Machine Learning',
    yearsOfExperience: '5-10 years',
    expertiseDetails: '',
    mentorshipAreas: [] as string[],
    availability: '1-2 hours / week',
    whyMentor: '',
    additionalInfo: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mentorTopics = [
    'Technical Architecture & AI Engineering',
    'Product Strategy & UX Architecture',
    'Customer Discovery & Problem Validation',
    'Business Modeling & Unit Economics',
    'Growth & Distribution in African Markets',
    'Venture Capital & Investor Readiness',
    'Industry-Specific Domain Insights (Agri, Health, Fin)'
  ];

  const handleTopicToggle = (topic: string) => {
    setFormData((prev) => {
      const exists = prev.mentorshipAreas.includes(topic);
      return {
        ...prev,
        mentorshipAreas: exists
          ? prev.mentorshipAreas.filter((t) => t !== topic)
          : [...prev.mentorshipAreas, topic]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to mentor participation guidelines.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      trackEvent('mentor_application', {
        name: formData.name,
        email: formData.email,
        expertise: formData.areaOfExpertise,
        availability: formData.availability
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
            <span className="pill-badge pill-gold" style={{ marginBottom: '1.25rem' }}>
              MENTOR NETWORK
            </span>
            <h1 style={{ marginBottom: '1.25rem', color: 'var(--dark-navy)' }}>
              Help Build What Comes Next.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Experience can accelerate the next African builder. Lend your technical, product, and entrepreneurial wisdom to active venture-building cohorts.
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
                  1. Mentor Profile
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Tell us who you are and where your professional background lies.
                </p>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="mentorName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="mentorName"
                      type="text"
                      required
                      placeholder="e.g. Dr. Folake Adeleke"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="mentorEmail">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="mentorEmail"
                      type="email"
                      required
                      placeholder="folake@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="mentorLinkedIn">
                      LinkedIn Profile <span className="required">*</span>
                    </label>
                    <input
                      id="mentorLinkedIn"
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      className="form-input"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="experience">
                      Years of Relevant Experience <span className="required">*</span>
                    </label>
                    <select
                      id="experience"
                      className="form-select"
                      value={formData.yearsOfExperience}
                      onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    >
                      <option value="3-5 years">3 – 5 years</option>
                      <option value="5-10 years">5 – 10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="areaOfExpertise">
                    Primary Domain of Expertise <span className="required">*</span>
                  </label>
                  <input
                    id="areaOfExpertise"
                    type="text"
                    required
                    placeholder="e.g. Staff AI Systems Engineer, Ex-Fintech Founder, Head of Product"
                    className="form-input"
                    value={formData.areaOfExpertise}
                    onChange={(e) => setFormData({ ...formData, areaOfExpertise: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="expertiseDetails">
                    Detailed Summary of Technical / Business / Industry Background <span className="required">*</span>
                  </label>
                  <textarea
                    id="expertiseDetails"
                    required
                    rows={3}
                    placeholder="Notable architectures deployed, past companies founded or scaled, products launched..."
                    className="form-textarea"
                    value={formData.expertiseDetails}
                    onChange={(e) => setFormData({ ...formData, expertiseDetails: e.target.value })}
                  />
                </div>
              </div>

              {/* Mentorship Interests & Availability */}
              <div style={{ marginBottom: '2.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  2. Mentorship Areas & Time Commitment
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
                  Select the domains where you can provide the greatest leverage.
                </p>

                <div className="form-group">
                  <label className="form-label">
                    Areas where you can mentor squads (Select all that apply)
                  </label>
                  <div className="form-checkbox-grid">
                    {mentorTopics.map((topic) => {
                      const isSelected = formData.mentorshipAreas.includes(topic);
                      return (
                        <div
                          key={topic}
                          onClick={() => handleTopicToggle(topic)}
                          className={`form-choice-card ${isSelected ? 'selected' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            style={{ accentColor: 'var(--primary)' }}
                          />
                          <span>{topic}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="availability">
                      Estimated Availability <span className="required">*</span>
                    </label>
                    <select
                      id="availability"
                      className="form-select"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    >
                      <option value="1-2 hours / week">1 – 2 hours per week (Office hours)</option>
                      <option value="Bi-weekly office hours">Bi-weekly office hours</option>
                      <option value="Monthly advisory session">Monthly advisory session</option>
                      <option value="Demo Day Juror / Guest Judge">Demo Day Juror / Evaluator</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="whyMentor">
                      Why would you like to mentor at TheGenZ AI Hub? <span className="required">*</span>
                    </label>
                    <textarea
                      id="whyMentor"
                      required
                      rows={2}
                      placeholder="What drives your commitment to accelerating African AI builders?"
                      className="form-textarea"
                      value={formData.whyMentor}
                      onChange={(e) => setFormData({ ...formData, whyMentor: e.target.value })}
                    />
                  </div>
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
                    I confirm my willingness to provide guidance in a pro-bono or advisory mentor capacity for TheGenZ AI Hub builder squads and adhere to community professional standards.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-mentor-btn"
              >
                {isSubmitting ? (
                  <span>Submitting Mentor Profile...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Apply as a Mentor</span>
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
        title="Mentor Application Received!"
        message="Thank you for your generosity in stepping forward to guide African AI builders. Our community leads will reach out with cohort matching details and schedule coordination."
        actionText="Back to Community"
        actionHref="/connect"
        showWhatsAppCta={false}
      />
    </div>
  );
}
