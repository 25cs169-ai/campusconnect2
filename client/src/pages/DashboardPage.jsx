import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import {
  Users,
  Calendar,
  Bell,
  BookOpen,
  AlertCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Clock,
  MapPin,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

const DashboardPage = () => {
  const { user, setCurrentPage } = useAuth();
  const [recentAnnouncements, setRecentAnnouncements] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [annRes, evRes, projRes] = await Promise.all([
          api.getAnnouncements(),
          api.getEvents({ status: 'Upcoming' }),
          api.getProjects({ status: 'Looking for Members' }),
        ]);

        if (annRes.success) setRecentAnnouncements(annRes.announcements.slice(0, 3));
        if (evRes.success) setUpcomingEvents(evRes.events.slice(0, 3));
        if (projRes.success) setFeaturedProjects(projRes.projects.slice(0, 3));
      } catch (err) {
        console.error('Error loading dashboard feeds:', err);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, []);

  const stats = [
    {
      title: 'Active Users',
      value: '120+',
      icon: '👨🎓',
      color: '#3b82f6',
      bg: '#eff6ff',
      trend: '+14% this month',
    },
    {
      title: 'Projects Posted',
      value: '150+',
      icon: '🤝',
      color: '#8b5cf6',
      bg: '#f5f3ff',
      trend: '35 Looking for members',
    },
    {
      title: 'Events Organized',
      value: '50+',
      icon: '📅',
      color: '#06b6d4',
      bg: '#ecfeff',
      trend: '8 Upcoming this week',
    },
    {
      title: 'Resources Shared',
      value: '800+',
      icon: '📚',
      color: '#10b981',
      bg: '#f0fdf4',
      trend: 'Peer-reviewed notes',
    },
  ];

  const quickAccessCards = [
    {
      id: 'announcements',
      title: 'Announcements',
      desc: 'Latest administrative, exam, and hackathon alerts',
      icon: Bell,
      color: '#2563eb',
      bg: '#eff6ff',
      tag: 'New Alerts',
    },
    {
      id: 'events',
      title: 'Department Events',
      desc: 'CSE, ECE, AI/ML workshops & national hackathons',
      icon: Calendar,
      color: '#7c3aed',
      bg: '#f5f3ff',
      tag: 'Calendar',
    },
    {
      id: 'projects',
      title: 'Project Collaboration',
      desc: 'Build with peers using Smart Teammate Matching',
      icon: Users,
      color: '#0284c7',
      bg: '#f0f9ff',
      tag: 'Matching AI',
    },
    {
      id: 'resources',
      title: 'Study Resources',
      desc: 'Download lecture notes, slides, and syllabus files',
      icon: BookOpen,
      color: '#059669',
      bg: '#ecfdf5',
      tag: 'Vault',
    },
    {
      id: 'complaints',
      title: 'Complaints & Feedback',
      desc: 'Submit campus issues with live stage tracking',
      icon: AlertCircle,
      color: '#ea580c',
      bg: '#fff7ed',
      tag: 'Live Tracker',
    },
  ];

  return (
    <div className="page-wrapper">
      {/* ======================================================== */}
      {/* 5. WELCOME SECTION                                       */}
      {/* ======================================================== */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7c3aed 100%)',
          borderRadius: '24px',
          padding: '40px 44px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 15px 30px -5px rgba(37, 99, 235, 0.25)',
          marginBottom: '32px',
        }}
      >
        {/* Soft decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Sparkles size={16} />
            <span>Campus Innovation & Student Connectivity Hub</span>
          </div>

          <h1
            style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Welcome to CampusConnect{user?.name ? `, ${user.name.split(' ')[0]}` : ''}!
          </h1>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#e0e7ff',
              marginTop: '10px',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            "Your all-in-one platform for campus life, events, projects, and learning."
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '26px' }}>
            <button
              onClick={() => setCurrentPage('projects')}
              style={{
                backgroundColor: 'white',
                color: '#1d4ed8',
                border: 'none',
                padding: '11px 22px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.92rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Explore Projects <ArrowRight size={17} />
            </button>

            <button
              onClick={() => setCurrentPage('events')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '11px 22px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
            >
              <Calendar size={17} /> View Events
            </button>

            <button
              onClick={() => setCurrentPage('announcements')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '11px 22px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
            >
              <Bell size={17} /> View Announcements
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 6. DASHBOARD STATISTICS                                  */}
      {/* ======================================================== */}
      <div style={{ marginBottom: '34px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
          Campus Pulse & Statistics
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: s.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0,
                  border: `1px solid ${s.color}30`,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginTop: '2px' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#10b981', fontWeight: 600, marginTop: '4px' }}>
                  {s.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 7. QUICK ACCESS CARDS                                    */}
      {/* ======================================================== */}
      <div style={{ marginBottom: '38px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
              Quick Access Hub
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Instant navigation to major campus workflows
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '16px',
          }}
        >
          {quickAccessCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setCurrentPage(card.id)}
                className="card"
                style={{
                  padding: '22px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = card.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: card.bg,
                      color: card.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: card.color,
                      backgroundColor: card.bg,
                      padding: '2px 8px',
                      borderRadius: '999px',
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', lineHeight: 1.4 }}>
                    {card.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: card.color,
                    marginTop: 'auto',
                    paddingTop: '6px',
                  }}
                >
                  Open {card.title} <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* LIVE CAMPUS FEEDS: EVENTS, ANNOUNCEMENTS, PROJECTS      */}
      {/* ======================================================== */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        {/* Latest Announcements Preview */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell size={20} color="#2563eb" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                Latest Announcements
              </h3>
            </div>
            <button
              onClick={() => setCurrentPage('announcements')}
              style={{
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              View All →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {recentAnnouncements.map((ann) => (
              <div
                key={ann._id}
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {ann.important && (
                    <span className="badge badge-important" style={{ fontSize: '0.65rem' }}>
                      Important
                    </span>
                  )}
                  <span
                    className={`badge badge-${ann.category.toLowerCase().replace(/[^a-z]/g, '')}`}
                    style={{ fontSize: '0.65rem' }}
                  >
                    {ann.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginLeft: 'auto' }}>
                    {ann.date}
                  </span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1e293b' }}>
                  {ann.title}
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
                  {ann.content.slice(0, 110)}...
                </p>
                {ann.externalLink && (
                  <a
                    href={ann.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#2563eb',
                      marginTop: '2px',
                    }}
                  >
                    Official Portal <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Preview */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={20} color="#7c3aed" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                Upcoming Campus Events
              </h3>
            </div>
            <button
              onClick={() => setCurrentPage('events')}
              style={{
                background: 'none',
                border: 'none',
                color: '#7c3aed',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Browse All →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {upcomingEvents.map((ev) => (
              <div
                key={ev._id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                }}
              >
                <img
                  src={ev.image}
                  alt={ev.title}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                    <span className={`badge badge-${ev.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {ev.department}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                      {ev.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: '#0f172a',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {ev.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.74rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Clock size={12} /> {ev.date}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <MapPin size={12} /> {ev.location}
                    </span>
                    {ev.externalUrl && (
                      <a
                        href={ev.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.74rem',
                          color: '#2563eb',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          marginLeft: 'auto',
                          textDecoration: 'none',
                        }}
                      >
                        Register on {ev.platform || 'Portal'} <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
