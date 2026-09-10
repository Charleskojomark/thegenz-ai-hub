'use client';

import React, { useState } from 'react';
import { UserCheck, HelpCircle, Lightbulb, Hammer, Box, Users, Rocket, ArrowRight } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  icon: any;
  role: string;
  description: string;
  color: string;
  badge: string;
}

const NODES: NodeData[] = [
  {
    id: 'talent',
    label: 'AI Talent',
    icon: UserCheck,
    role: 'Stage 01',
    description: 'Technical developers, data practitioners, and curious minds with AI capabilities.',
    color: '#1500B0',
    badge: 'CAPABILITY'
  },
  {
    id: 'problems',
    label: 'Real Problems',
    icon: HelpCircle,
    role: 'Stage 02',
    description: 'High-friction industry bottlenecks and enterprise inefficiencies across Africa.',
    color: '#FD8302',
    badge: 'OPPORTUNITY'
  },
  {
    id: 'ideas',
    label: 'Validated Ideas',
    icon: Lightbulb,
    role: 'Stage 03',
    description: 'Data-grounded hypotheses vetted for actual market demand before writing code.',
    color: '#D4AF37',
    badge: 'HYPOTHESIS'
  },
  {
    id: 'builders',
    label: 'Builders',
    icon: Hammer,
    role: 'Stage 04',
    description: 'Cross-functional teams fusing engineering, UX, and domain insight to craft solutions.',
    color: '#1500B0',
    badge: 'EXECUTION'
  },
  {
    id: 'products',
    label: 'AI Products',
    icon: Box,
    role: 'Stage 05',
    description: 'Functional MVPs deployed to production with intelligent automation and workflows.',
    color: '#FD8302',
    badge: 'SOLUTION'
  },
  {
    id: 'users',
    label: 'Real Users',
    icon: Users,
    role: 'Stage 06',
    description: 'Early adopters providing active telemetry, qualitative feedback, and retention data.',
    color: '#1500B0',
    badge: 'TRACTION'
  },
  {
    id: 'ventures',
    label: 'AI Ventures',
    icon: Rocket,
    role: 'Stage 07',
    description: 'Independent, repeatable companies with business models ready for scale and capital.',
    color: '#D4AF37',
    badge: 'COMPANY'
  }
];

export default function EcosystemCanvas() {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[3]); // default on Builders

  return (
    <div style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FF 100%)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(21, 0, 176, 0.12)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'clamp(1.5rem, 4vw, 2.75rem)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Accent Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'radial-gradient(rgba(21, 0, 176, 0.05) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Header Info */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div>
          <span className="pill-badge pill-preseed" style={{ marginBottom: '0.5rem' }}>
            Interactive System Map
          </span>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)' }}>
            The Repeatable Venture-Building Pathway
          </h3>
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--gray-500)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--energy)', display: 'inline-block' }} />
          Click any node to inspect ecosystem transformation
        </div>
      </div>

      {/* Nodes Progression Track */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '0.75rem',
        position: 'relative',
        zIndex: 2,
        marginBottom: '2rem'
      }}>
        {NODES.map((node, idx) => {
          const isSelected = activeNode.id === node.id;
          const Icon = node.icon;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              style={{
                background: isSelected ? 'var(--white)' : 'rgba(255,255,255,0.7)',
                border: isSelected ? `2px solid ${node.color}` : '1.5px solid var(--gray-200)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? '0 8px 24px rgba(21,0,176,0.12)' : 'none',
                transform: isSelected ? 'translateY(-4px)' : 'none',
                position: 'relative',
              }}
            >
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: isSelected ? node.color : 'var(--gray-100)',
                color: isSelected ? 'var(--white)' : node.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                transition: 'all 0.2s ease'
              }}>
                <Icon size={18} />
              </div>

              <span style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                color: 'var(--gray-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {node.role}
              </span>

              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: isSelected ? 'var(--dark-navy)' : 'var(--gray-800)',
                marginTop: '0.15rem'
              }}>
                {node.label}
              </span>

              {/* Progress Arrow on mobile/desktop between cards */}
              {idx < NODES.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                  display: 'none',
                }}>
                  <ArrowRight size={14} color="var(--gray-400)" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${activeNode.color}`,
        padding: '1.5rem 1.75rem',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: `${activeNode.color}15`,
            border: `1.5px solid ${activeNode.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: activeNode.color,
            flexShrink: 0
          }}>
            <activeNode.icon size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--dark-navy)' }}>{activeNode.label}</h4>
              <span className="pill-badge" style={{
                backgroundColor: `${activeNode.color}15`,
                color: activeNode.color,
                fontSize: '0.7rem',
                padding: '0.2rem 0.6rem'
              }}>
                {activeNode.badge}
              </span>
            </div>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', maxWidth: '650px' }}>
              {activeNode.description}
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.85rem',
          color: 'var(--primary)',
          fontWeight: 700
        }}>
          <span>Flows into next phase</span>
          <ArrowRight size={18} color="var(--energy)" />
        </div>
      </div>
    </div>
  );
}
