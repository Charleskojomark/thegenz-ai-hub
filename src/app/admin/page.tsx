'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Lock,
  LogOut,
  Users,
  Code2,
  Briefcase,
  Globe2,
  Search,
  Download,
  Trash2,
  Eye,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  X,
  Phone,
  Mail,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface Member {
  id: number;
  full_name: string;
  email: string;
  whatsapp: string;
  country: string;
  city: string | null;
  role: string;
  project_intent: string | null;
  created_at: string;
  status: string;
}

interface Stats {
  totalMembers: number;
  countriesCount: number;
  technicalCount: number;
  problemOwnersCount: number;
  studentsCount: number;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  const [members, setMembers] = useState<Member[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingData, setLoadingData] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
        fetchMembers();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Invalid credentials');
      }

      setIsAuthenticated(true);
      setPassword('');
      fetchMembers();
    } catch (err: any) {
      setLoginError(err.message || 'Login failed. Check your password.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setMembers([]);
    setStats(null);
  };

  const fetchMembers = async () => {
    setLoadingData(true);
    try {
      const res = await fetch('/api/admin/members');
      const data = await res.json();
      if (data.success) {
        setMembers(data.members || []);
        setStats(data.stats || null);
      }
    } catch (err) {
      console.error('Failed to load members:', err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleDeleteMember = async (id: number) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/members?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setMembers((prev) => prev.filter((m) => m.id !== id));
        if (selectedMember?.id === id) setSelectedMember(null);
        setDeleteConfirmId(null);
      }
    } catch (err) {
      console.error('Failed to delete member:', err);
    } finally {
      setDeletingId(null);
    }
  };

  // Filter members
  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchesSearch =
        m.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.whatsapp?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (m.city && m.city.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (m.project_intent && m.project_intent.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole =
        roleFilter === 'ALL' ||
        (roleFilter === 'TECHNICAL' && (m.role.includes('Engineer') || m.role.includes('Developer'))) ||
        (roleFilter === 'DESIGN' && m.role.includes('Designer')) ||
        (roleFilter === 'PROBLEM_OWNER' && (m.role.includes('Problem') || m.role.includes('Domain'))) ||
        (roleFilter === 'STUDENT' && (m.role.includes('Student') || m.role.includes('Builder')));

      return matchesSearch && matchesRole;
    });
  }, [members, searchQuery, roleFilter]);

  // Export to CSV
  const handleExportCsv = () => {
    if (filteredMembers.length === 0) return;

    const headers = ['ID', 'Full Name', 'Email', 'WhatsApp', 'Country', 'City', 'Role', 'Project Intent', 'Date Joined'];
    const rows = filteredMembers.map((m) => [
      m.id,
      `"${(m.full_name || '').replace(/"/g, '""')}"`,
      `"${(m.email || '').replace(/"/g, '""')}"`,
      `"${(m.whatsapp || '').replace(/"/g, '""')}"`,
      `"${(m.country || '').replace(/"/g, '""')}"`,
      `"${(m.city || '').replace(/"/g, '""')}"`,
      `"${(m.role || '').replace(/"/g, '""')}"`,
      `"${(m.project_intent || '').replace(/"/g, '""')}"`,
      `"${new Date(m.created_at).toLocaleString()}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `thegenz-community-members-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Clean WhatsApp phone number for direct wa.me link
  const getCleanWhatsAppLink = (phone: string) => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleaned}`;
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--gray-600)' }}>
          <RefreshCw className="animate-spin" size={28} style={{ margin: '0 auto 1rem auto', animation: 'spin 1s linear infinite' }} />
          <p>Verifying admin permissions...</p>
        </div>
      </div>
    );
  }

  // Login View if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        backgroundColor: 'var(--bg-page)'
      }}>
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          maxWidth: '440px',
          width: '100%',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--gray-200)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            backgroundColor: 'rgba(21, 0, 176, 0.08)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}>
            <Shield size={28} />
          </div>

          <span className="pill-badge pill-energy" style={{ marginBottom: '0.75rem' }}>
            RESTRICTED ACCESS
          </span>

          <h1 style={{ fontSize: '1.65rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
            Admin Portal
          </h1>

          <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.5 }}>
            Please enter your administrator password to view and manage TheGenZ AI Hub community members.
          </p>

          {loginError && (
            <div style={{
              backgroundColor: '#FEF2F2',
              color: '#991B1B',
              border: '1px solid #F87171',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              marginBottom: '1.25rem',
              textAlign: 'left'
            }}>
              ⚠️ {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem 0.8rem 2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--gray-200)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'var(--transition)'
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
              />
              <Lock size={16} color="var(--gray-400)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem',
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              {loginLoading ? 'Authenticating...' : 'Enter Dashboard'}
            </button>
          </form>

          <div style={{ marginTop: '2rem', borderTop: '1px solid var(--gray-100)', paddingTop: '1rem' }}>
            <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--gray-500)', textDecoration: 'none' }}>
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard View
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', paddingBottom: '5rem' }}>
      {/* Admin Top Navigation */}
      <header style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--gray-200)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/">
              <Image
                src="/thegenzlogo-cropped.png"
                alt="TheGenZ AI Hub"
                width={150}
                height={45}
                style={{ height: '38px', width: 'auto' }}
              />
            </Link>
            <span style={{ color: 'var(--gray-300)' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="pill-badge pill-energy" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                ADMIN CONSOLE
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={fetchMembers}
              disabled={loadingData}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
              title="Refresh database records"
            >
              <RefreshCw size={14} className={loadingData ? 'animate-spin' : ''} style={{ animation: loadingData ? 'spin 1s linear infinite' : 'none' }} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="btn"
              style={{
                backgroundColor: 'transparent',
                color: '#DC2626',
                border: '1px solid #FCA5A5',
                padding: '0.5rem 0.9rem',
                fontSize: '0.85rem'
              }}
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="container" style={{ paddingTop: '2rem' }}>
        {/* Title & Actions Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '1.85rem', color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
              Community Members Registry
            </h1>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>
              Real-time directory of builders and domain problem owners registered via the intake form.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handleExportCsv}
              disabled={filteredMembers.length === 0}
              className="btn btn-primary"
              style={{ padding: '0.6rem 1.15rem', fontSize: '0.875rem' }}
            >
              <Download size={15} />
              <span>Export CSV ({filteredMembers.length})</span>
            </button>
          </div>
        </div>

        {/* KPI Summary Cards */}
        {stats && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--gray-200)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-500)' }}>TOTAL MEMBERS</span>
                <Users size={18} color="var(--primary)" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                {stats.totalMembers}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--gray-200)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-500)' }}>TECH BUILDERS</span>
                <Code2 size={18} color="var(--energy)" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--energy)' }}>
                {stats.technicalCount}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--gray-200)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-500)' }}>PROBLEM OWNERS</span>
                <Briefcase size={18} color="#059669" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#059669' }}>
                {stats.problemOwnersCount}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--gray-200)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-500)' }}>COUNTRIES</span>
                <Globe2 size={18} color="#7C3AED" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#7C3AED' }}>
                {stats.countriesCount}
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          border: '1px solid var(--gray-200)',
          marginBottom: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1 1 280px', minWidth: '240px' }}>
            <Search size={16} color="var(--gray-400)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by name, email, WhatsApp, country, idea..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.35rem',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--gray-200)',
                fontSize: '0.875rem',
                outline: 'none'
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-200)')}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--gray-400)'
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Role Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)', fontWeight: 600 }}>Role:</span>
            {[
              { label: 'All', value: 'ALL' },
              { label: 'Tech & Devs', value: 'TECHNICAL' },
              { label: 'Designers', value: 'DESIGN' },
              { label: 'Problem Owners', value: 'PROBLEM_OWNER' },
              { label: 'Students', value: 'STUDENT' }
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setRoleFilter(f.value)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: roleFilter === f.value ? 700 : 500,
                  backgroundColor: roleFilter === f.value ? 'var(--primary)' : 'var(--gray-100)',
                  color: roleFilter === f.value ? 'var(--white)' : 'var(--gray-700)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--gray-200)',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
        }}>
          {loadingData ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--gray-500)' }}>
              <RefreshCw className="animate-spin" size={24} style={{ margin: '0 auto 0.75rem auto', animation: 'spin 1s linear infinite' }} />
              <p>Loading member data...</p>
            </div>
          ) : filteredMembers.length === 0 ? (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--gray-500)' }}>
              <Users size={36} color="var(--gray-300)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                No members found
              </h3>
              <p style={{ fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto' }}>
                {searchQuery || roleFilter !== 'ALL'
                  ? 'No members match your current filters. Try resetting the search query or role filter.'
                  : 'No one has submitted the community intake form yet. Submissions will appear here automatically.'}
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)', color: 'var(--gray-600)' }}>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Member Name</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Role</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Contact Info</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Location</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Project Idea</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Joined Date</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((m) => (
                    <tr
                      key={m.id}
                      style={{
                        borderBottom: '1px solid var(--gray-100)',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {/* Name */}
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: 'var(--dark-navy)' }}>
                        {m.full_name}
                      </td>

                      {/* Role Badge */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: m.role.includes('Engineer') || m.role.includes('Developer')
                            ? 'rgba(21, 0, 176, 0.08)'
                            : m.role.includes('Problem')
                            ? 'rgba(5, 150, 105, 0.1)'
                            : 'rgba(255, 92, 0, 0.1)',
                          color: m.role.includes('Engineer') || m.role.includes('Developer')
                            ? 'var(--primary)'
                            : m.role.includes('Problem')
                            ? '#059669'
                            : 'var(--energy)'
                        }}>
                          {m.role}
                        </span>
                      </td>

                      {/* Contact Info */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          <a
                            href={`mailto:${m.email}`}
                            style={{ color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                          >
                            <Mail size={13} />
                            <span>{m.email}</span>
                          </a>
                          <a
                            href={getCleanWhatsAppLink(m.whatsapp)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#16A34A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
                          >
                            <Phone size={13} />
                            <span>{m.whatsapp}</span>
                          </a>
                        </div>
                      </td>

                      {/* Location */}
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--gray-700)' }}>
                        {m.city ? `${m.city}, ${m.country}` : m.country}
                      </td>

                      {/* Project Idea (truncated) */}
                      <td style={{ padding: '1rem 1.25rem', maxWidth: '280px' }}>
                        {m.project_intent ? (
                          <span
                            onClick={() => setSelectedMember(m)}
                            title="Click to view full description"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              cursor: 'pointer',
                              color: 'var(--gray-700)',
                              fontSize: '0.825rem'
                            }}
                          >
                            {m.project_intent}
                          </span>
                        ) : (
                          <span style={{ color: 'var(--gray-400)', fontStyle: 'italic', fontSize: '0.8rem' }}>None provided</span>
                        )}
                      </td>

                      {/* Joined Date */}
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--gray-500)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                        {new Date(m.created_at).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                          <button
                            onClick={() => setSelectedMember(m)}
                            style={{
                              padding: '0.35rem 0.6rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--gray-200)',
                              backgroundColor: 'var(--white)',
                              cursor: 'pointer',
                              color: 'var(--primary)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontSize: '0.78rem',
                              fontWeight: 600
                            }}
                            title="View Full Profile"
                          >
                            <Eye size={13} />
                            <span>View</span>
                          </button>

                          {deleteConfirmId === m.id ? (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                              <button
                                onClick={() => handleDeleteMember(m.id)}
                                disabled={deletingId === m.id}
                                style={{
                                  padding: '0.3rem 0.55rem',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: '#DC2626',
                                  color: 'white',
                                  border: 'none',
                                  cursor: 'pointer',
                                  fontSize: '0.75rem',
                                  fontWeight: 600
                                }}
                              >
                                {deletingId === m.id ? '...' : 'Yes, Delete'}
                              </button>
                              <button
                                onClick={() => setDeleteConfirmId(null)}
                                style={{
                                  padding: '0.3rem 0.5rem',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: 'var(--gray-200)',
                                  border: 'none',
                                  cursor: 'pointer',
                                  fontSize: '0.75rem'
                                }}
                              >
                                ✕
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirmId(m.id)}
                              style={{
                                padding: '0.35rem 0.5rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--gray-200)',
                                backgroundColor: 'var(--white)',
                                cursor: 'pointer',
                                color: '#EF4444'
                              }}
                              title="Delete Member"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Member Details Modal */}
      {selectedMember && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(8, 5, 30, 0.55)',
          backdropFilter: 'blur(3px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '560px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
            boxShadow: 'var(--shadow-2xl)',
            border: '1px solid var(--gray-200)'
          }}>
            <button
              onClick={() => setSelectedMember(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--gray-400)',
                padding: '0.25rem'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '1.5rem' }}>
              <span className="pill-badge pill-energy" style={{ marginBottom: '0.5rem' }}>
                MEMBER PROFILE #{selectedMember.id}
              </span>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--dark-navy)', marginTop: '0.25rem' }}>
                {selectedMember.full_name}
              </h2>
              <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                {selectedMember.role}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', borderTop: '1px solid var(--gray-100)', paddingTop: '1.25rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gray-500)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Contact Information
                </label>
                <div style={{ marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Mail size={16} color="var(--primary)" />
                    <a href={`mailto:${selectedMember.email}`} style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                      {selectedMember.email}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Phone size={16} color="#16A34A" />
                    <a
                      href={getCleanWhatsAppLink(selectedMember.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#16A34A', fontWeight: 600, textDecoration: 'none' }}
                    >
                      {selectedMember.whatsapp} (Click to open WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gray-500)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Location
                </label>
                <p style={{ marginTop: '0.3rem', fontSize: '0.95rem', color: 'var(--gray-800)', fontWeight: 500 }}>
                  📍 {selectedMember.city ? `${selectedMember.city}, ${selectedMember.country}` : selectedMember.country}
                </p>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gray-500)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  What they want to build / solve with AI
                </label>
                <div style={{
                  marginTop: '0.4rem',
                  padding: '1rem',
                  backgroundColor: 'var(--gray-50)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--gray-200)',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                  color: 'var(--dark-navy)'
                }}>
                  {selectedMember.project_intent || 'No project intent submitted.'}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gray-500)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Registration Timestamp
                </label>
                <p style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                  {new Date(selectedMember.created_at).toLocaleString()}
                </p>
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              display: 'flex',
              gap: '0.75rem',
              borderTop: '1px solid var(--gray-100)',
              paddingTop: '1.25rem'
            }}>
              <a
                href={getCleanWhatsAppLink(selectedMember.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-energy"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}
              >
                <Phone size={15} />
                <span>Message on WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedMember(null)}
                className="btn btn-secondary"
                style={{ fontSize: '0.875rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
