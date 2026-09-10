'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is TheGenZ AI Hub?',
    answer: 'TheGenZ AI Hub is an African AI venture-building platform. We are building a repeatable system to connect AI talent, real-world problems, and founders to develop validated solutions into scalable products and companies.'
  },
  {
    question: 'Who is TheGenZ AI Hub for?',
    answer: 'The platform is built for four key audiences: AI and technical builders who want to build products, aspiring founders with problem insights, domain experts with industry bottlenecks, and organizations seeking to explore AI solutions.'
  },
  {
    question: 'Is this an AI training organization?',
    answer: 'No. While we have practical learning programs to build technical capabilities, learning is merely our entry point. Our core mission is venture building—taking talent through validation, MVP development, launch, and company creation.'
  },
  {
    question: 'What does venture building mean here?',
    answer: 'Venture building means we do not stop at theoretical code or hackathon demos. We systematically take high-potential AI solutions through customer discovery, business model validation, pilot deployments, and investment readiness.'
  },
  {
    question: 'Who can become a builder?',
    answer: 'Developers, software engineers, data scientists, and technical practitioners with curiosity, commitment, and a strong drive to build. You do not need years of machine learning research experience, but you must be ready to write code and ship products.'
  },
  {
    question: 'Do I need to already have an AI startup?',
    answer: 'No. You do not need to have a registered company or an existing product. We help you find or validate a high-impact problem, form a builder squad, and develop the product from scratch.'
  },
  {
    question: 'Can businesses bring problems?',
    answer: (
      <span>
        Yes! Organizations, SMEs, and industry operators can submit real-world bottlenecks via our{' '}
        <Link href="/submit-problem" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
          Problem Submission Portal
        </Link>. We analyze whether AI is a viable solution and match problems with builder cohorts.
      </span>
    )
  },
  {
    question: 'How can I become a mentor?',
    answer: (
      <span>
        Experienced software engineers, AI researchers, product managers, and founders can apply through our{' '}
        <Link href="/mentor" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
          Mentor Application Page
        </Link>{' '}
        to advise builder cohorts on architecture, customer discovery, or venture strategy.
      </span>
    )
  },
  {
    question: 'How can organizations partner with TheGenZ AI Hub?',
    answer: (
      <span>
        Universities, tech companies, innovation hubs, and capital allocators can collaborate on talent pipelines, program sponsorships, or pilot deployments. Visit our{' '}
        <Link href="/partner" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
          Partner Page
        </Link>{' '}
        to start a conversation.
      </span>
    )
  },
  {
    question: 'How do I join the community?',
    answer: (
      <span>
        You can join our active WhatsApp community immediately by visiting the{' '}
        <Link href="/connect" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
          Connect Page
        </Link>. This serves as our immediate conversational layer while we expand broader platform features.
      </span>
    )
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.question}
            className={`accordion-item ${isOpen ? 'active' : ''}`}
            style={{
              borderColor: isOpen ? 'var(--primary)' : 'var(--gray-200)',
              boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
            }}
          >
            <div
              className="accordion-header"
              onClick={() => toggle(idx)}
              style={{
                backgroundColor: isOpen ? 'var(--primary-light)' : 'var(--white)',
                transition: 'var(--transition)'
              }}
            >
              <h4 style={{
                color: isOpen ? 'var(--primary-dark)' : 'var(--dark-navy)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <HelpCircle size={18} color={isOpen ? 'var(--energy)' : 'var(--primary)'} />
                {faq.question}
              </h4>
              <ChevronDown
                size={20}
                style={{
                  color: isOpen ? 'var(--primary)' : 'var(--gray-500)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease'
                }}
              />
            </div>
            {isOpen && (
              <div className="accordion-body" style={{ backgroundColor: isOpen ? 'var(--white)' : 'transparent', paddingTop: '1.25rem' }}>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.985rem', margin: 0, lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
