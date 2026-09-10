'use client';

import React from 'react';
import { CheckCircle2, X, MessageSquareCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  actionText?: string;
  actionHref?: string;
  showWhatsAppCta?: boolean;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
  actionText = 'Return to Home',
  actionHref = '/',
  showWhatsAppCta = true,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(8, 5, 30, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1.5rem',
    }}>
      <div style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '520px',
        width: '100%',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-xl)',
        textAlign: 'center',
        position: 'relative',
        animation: 'pulseSubtle 0.3s ease-out'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--gray-400)',
          }}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div style={{
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto',
          border: '2px solid rgba(21, 0, 176, 0.2)'
        }}>
          <CheckCircle2 size={38} color="var(--energy)" />
        </div>

        <h3 style={{ fontSize: '1.6rem', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
          {title}
        </h3>

        <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          {message}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {showWhatsAppCta && (
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-energy"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquareCode size={18} />
              Join WhatsApp Community Layer
            </a>
          )}

          <Link
            href={actionHref}
            onClick={onClose}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {actionText}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
