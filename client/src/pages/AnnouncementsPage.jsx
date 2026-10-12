import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import {
  Bell,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Clock,
  User,
  AlertTriangle,
  X,
  Share2,
} from 'lucide-react';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readIds, setReadIds] = useState(new Set());
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const categories = [
    'All',
    'General',
    'Academic',
    'Examinations',
    'Placements',
    'Workshops',
    'Sports',
    'Hackathons',
  ];

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const res = await api.getAnnouncements(selectedCategory);
      if (res.success) {
        setAnnouncements(res.announcements);
      }
    } catch (err) {
      console.error('Error fetching announcements:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, [selectedCategory]);

  const toggleReadStatus = (id) => {
    setReadIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Examinations':
        return '📚';
      case 'Placements':
        return '💼';
      case 'Workshops':
        return '🤖';
      case 'Sports':
        return '🏆';
      case 'Hackathons':
        return '🚀';
      case 'Academic':
        return '🎓';
      default:
        return '📢';
    }
  };

  const filteredAnnouncements = announcements.filter((item) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q)
    );
  });

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}
          >
            📢
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              Latest Announcements
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Stay updated with important campus information and notifications.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="card"
        style={{
          padding: '16px 20px',
          marginBottom: '26px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* Search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            padding: '10px 16px',
          }}
        >
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search by announcement title, keywords, or department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.92rem',
              color: '#0f172a',
            }}
          />
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', marginRight: '4px' }}>
            Filter Category:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: isSelected ? '1px solid #2563eb' : '1px solid #e2e8f0',
                  backgroundColor: isSelected ? '#2563eb' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#475569',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 10px rgba(37, 99, 235, 0.2)' : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Announcements List / Cards */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
          Loading latest announcements...
        </div>
      ) : filteredAnnouncements.length === 0 ? (
        <div
          className="card"
          style={{
            padding: '50px',
            textAlign: 'center',
            color: '#64748b',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔍</div>
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b' }}>No Announcements Found</h3>
          <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
            Try resetting your search query or choosing another category filter.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredAnnouncements.map((ann) => {
            const isRead = readIds.has(ann._id);
            return (
              <div
                key={ann._id}
                className="card"
                style={{
                  padding: '24px 28px',
                  borderLeft: ann.important
                    ? '4px solid #ef4444'
                    : isRead
                    ? '4px solid #cbd5e1'
                    : '4px solid #3b82f6',
                  backgroundColor: isRead ? '#fcfdfe' : '#ffffff',
                  transition: 'all 0.2s',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '18px', flex: 1 }}>
                    {/* Category Icon */}
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        backgroundColor: '#f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        flexShrink: 0,
                      }}
                    >
                      {getCategoryIcon(ann.category)}
                    </div>

                    <div style={{ flex: 1 }}>
                      {/* Badges & Meta */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          flexWrap: 'wrap',
                          marginBottom: '8px',
                        }}
                      >
                        {ann.important && (
                          <span className="badge badge-important">Important Notice</span>
                        )}
                        <span
                          className={`badge badge-${ann.category.toLowerCase().replace(/[^a-z]/g, '')}`}
                        >
                          {ann.category}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} /> {ann.date} at {ann.timePosted || '10:00 AM'}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <User size={13} /> {ann.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '1.22rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          marginBottom: '8px',
                          cursor: 'pointer',
                        }}
                        onClick={() => setSelectedAnnouncement(ann)}
                      >
                        {ann.title}
                      </h3>

                      {/* Content */}
                      <p
                        style={{
                          fontSize: '0.92rem',
                          color: '#475569',
                          lineHeight: 1.6,
                        }}
                      >
                        {ann.content}
                      </p>

                      {/* Footer Actions: Original external link (direct official registration) */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          flexWrap: 'wrap',
                          marginTop: '16px',
                        }}
                      >
                        {ann.externalLink && (
                          <>
                            <a
                              href={ann.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                              style={{
                                fontSize: '0.82rem',
                                padding: '7px 16px',
                                borderRadius: '8px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                textDecoration: 'none',
                                fontWeight: 700,
                              }}
                            >
                              <span>Register on Official Portal</span>
                              <ExternalLink size={14} />
                            </a>

                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(ann.externalLink);
                              }}
                              className="btn btn-secondary"
                              style={{
                                fontSize: '0.8rem',
                                padding: '7px 12px',
                                borderRadius: '8px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                              title="Copy official URL"
                            >
                              <Share2 size={13} /> Copy Link
                            </button>
                          </>
                        )}

                        <button
                          onClick={() => setSelectedAnnouncement(ann)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#2563eb',
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          View Details →
                        </button>

                        <button
                          onClick={() => toggleReadStatus(ann._id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: isRead ? '#10b981' : '#64748b',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginLeft: 'auto',
                          }}
                        >
                          <CheckCircle2 size={16} color={isRead ? '#10b981' : '#94a3b8'} />
                          {isRead ? 'Marked as Read' : 'Mark as Read'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View Announcement Details Modal */}
      {selectedAnnouncement && (
        <div className="modal-overlay" onClick={() => setSelectedAnnouncement(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className={`badge badge-${selectedAnnouncement.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {selectedAnnouncement.category}
                </span>
                {selectedAnnouncement.important && (
                  <span className="badge badge-important">Important</span>
                )}
              </div>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              {selectedAnnouncement.title}
            </h2>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                fontSize: '0.82rem',
                color: '#64748b',
                paddingBottom: '14px',
                borderBottom: '1px solid #e2e8f0',
                marginBottom: '18px',
              }}
            >
              <span>📅 {selectedAnnouncement.date}</span>
              <span>⏰ {selectedAnnouncement.timePosted || '10:00 AM'}</span>
              <span>👤 {selectedAnnouncement.author}</span>
            </div>

            <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedAnnouncement.content}
            </p>

            {selectedAnnouncement.externalLink && (
              <div
                style={{
                  backgroundColor: '#eff6ff',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid #bfdbfe',
                  marginBottom: '20px',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '4px' }}>
                  Official External Link
                </div>
                <p style={{ fontSize: '0.82rem', color: '#1d4ed8', marginBottom: '10px' }}>
                  Visit the verified portal for regulations, submissions, or detailed notifications.
                </p>
                <a
                  href={selectedAnnouncement.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                >
                  Open {selectedAnnouncement.externalLink} <ExternalLink size={14} />
                </a>
              </div>
            )}

            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '10px' }}
            >
              Close Announcement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsPage;
