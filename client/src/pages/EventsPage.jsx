import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import confetti from 'canvas-confetti';
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Users,
  Search,
  Filter,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  CalendarCheck,
  Award,
  Globe,
  ShieldCheck,
  Copy,
} from 'lucide-react';

const EventsPage = () => {
  const { user, showToast } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedType, setSelectedType] = useState('All'); // 'All' | 'Hackathons' | 'Workshops' | 'Festivals'
  const [selectedStatus, setSelectedStatus] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('grid'); // 'grid' | 'calendar' | 'registered'

  // Selected event for modal
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Calendar state
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date(2026, 9, 1)); // Oct 2026

  const departments = [
    'All Departments',
    'CSE',
    'ECE',
    'AI & ML',
    'IT',
    'EEE',
    'MECH',
    'CIVIL',
    'MBA',
  ];

  const types = [
    { id: 'All', label: 'All Events' },
    { id: 'Hackathons', label: '🔥 National & Global Hackathons' },
    { id: 'Workshops', label: 'Campus Workshops & Bootcamps' },
    { id: 'Festivals', label: 'Symposiums & Expos' },
  ];

  const statuses = ['All Events', 'Upcoming', 'Ongoing', 'Completed'];

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await api.getEvents({
        department: selectedDept,
        status: selectedStatus,
        search: searchQuery,
      });
      if (res.success) {
        setEvents(res.events);
      }
    } catch (err) {
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedDept, selectedStatus, searchQuery]);

  // Handle Internal In-Person RSVP Toggle (ONLY for non-external college events)
  const handleInternalRsvpToggle = async (eventId, e) => {
    if (e) e.stopPropagation();
    try {
      const res = await api.toggleRegisterEvent(eventId);
      if (res.success) {
        setEvents((prev) =>
          prev.map((ev) => (ev._id === eventId ? res.event : ev))
        );
        if (selectedEvent && selectedEvent._id === eventId) {
          setSelectedEvent(res.event);
        }

        if (res.registered) {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#2563eb', '#7c3aed', '#10b981'],
          });
          showToast('Campus in-person seat reserved!', 'success');
        } else {
          showToast('Campus seat reservation cancelled.', 'info');
        }
      } else if (res.isExternal) {
        showToast(res.message, 'info');
      }
    } catch (err) {
      showToast(err.message || 'Failed to update RSVP', 'error');
    }
  };

  const isUserRegistered = (event) => {
    if (!user || !event.registrations) return false;
    return event.registrations.includes(user._id);
  };

  // Copy official registration link to clipboard
  const handleCopyLink = (url, name, e) => {
    if (e) e.stopPropagation();
    if (!url) return;
    navigator.clipboard.writeText(url);
    showToast(`Official ${name || 'hackathon'} link copied to clipboard!`, 'success');
  };

  // Filtered list based on view and type
  const displayedEvents = events.filter((ev) => {
    // Registered View
    if (activeView === 'registered') {
      return isUserRegistered(ev);
    }

    // Type filter
    if (selectedType === 'Hackathons') {
      if (!ev.isExternalHackathon && ev.category !== 'Hackathon') return false;
    } else if (selectedType === 'Workshops') {
      if (ev.category !== 'Workshop' && ev.category !== 'Bootcamp') return false;
    } else if (selectedType === 'Festivals') {
      if (
        ev.category !== 'Technical Festival' &&
        ev.category !== 'Expo' &&
        ev.category !== 'Symposium' &&
        ev.category !== 'Summit' &&
        ev.category !== 'Pitch Day'
      )
        return false;
    }

    // Search query also checks platform
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        ev.title.toLowerCase().includes(q) ||
        ev.description.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        (ev.platform && ev.platform.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  });

  // Calendar Helpers
  const daysInMonth = new Date(
    currentCalendarDate.getFullYear(),
    currentCalendarDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayIndex = new Date(
    currentCalendarDate.getFullYear(),
    currentCalendarDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const changeMonth = (delta) => {
    setCurrentCalendarDate(
      new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + delta, 1)
    );
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
            }}
          >
            🚀
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              Events & National Hackathons
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Explore real hackathons from Devfolio, Unstop, SIH, MLH & campus departmental sessions.
            </p>
          </div>
        </div>

        {/* View Switcher: Grid View | Interactive Calendar | My In-Person RSVPs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#f1f5f9',
            padding: '4px',
            borderRadius: '12px',
          }}
        >
          <button
            onClick={() => setActiveView('grid')}
            style={{
              padding: '8px 16px',
              borderRadius: '9px',
              border: 'none',
              backgroundColor: activeView === 'grid' ? '#ffffff' : 'transparent',
              color: activeView === 'grid' ? '#2563eb' : '#64748b',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: activeView === 'grid' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            Grid View
          </button>
          <button
            onClick={() => setActiveView('calendar')}
            style={{
              padding: '8px 16px',
              borderRadius: '9px',
              border: 'none',
              backgroundColor: activeView === 'calendar' ? '#ffffff' : 'transparent',
              color: activeView === 'calendar' ? '#2563eb' : '#64748b',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: activeView === 'calendar' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <CalendarIcon size={15} /> Event Calendar
          </button>
          <button
            onClick={() => setActiveView('registered')}
            style={{
              padding: '8px 16px',
              borderRadius: '9px',
              border: 'none',
              backgroundColor: activeView === 'registered' ? '#ffffff' : 'transparent',
              color: activeView === 'registered' ? '#2563eb' : '#64748b',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: activeView === 'registered' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <CalendarCheck size={15} /> Campus RSVPs
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FILTER CONTROLS BAR                                      */}
      {/* ======================================================== */}
      <div
        className="card"
        style={{
          padding: '20px 24px',
          marginBottom: '28px',
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
            placeholder="Search by title, Devfolio, Unstop, SIH, MLH, technology or location..."
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
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Event Type Filter Pills */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
            EVENT CATEGORY:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {types.map((tp) => {
              const isSelected = selectedType === tp.id;
              return (
                <button
                  key={tp.id}
                  onClick={() => setSelectedType(tp.id)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '999px',
                    border: isSelected ? '1px solid #2563eb' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                    color: isSelected ? '#1d4ed8' : '#334155',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
                  }}
                >
                  {tp.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Department-wise Filter Buttons */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
            CLASSIFIED BY DEPARTMENT:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {departments.map((dept) => {
              const isSelected = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid #7c3aed' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#f5f3ff' : '#ffffff',
                    color: isSelected ? '#6d28d9' : '#475569',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </div>

        {/* Event Status Filters & Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>
            STATUS:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {statuses.map((st) => {
              const isSelected = selectedStatus === st;
              return (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: isSelected ? '1px solid #059669' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#ecfdf5' : '#ffffff',
                    color: isSelected ? '#047857' : '#64748b',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                  }}
                >
                  {st}
                </button>
              );
            })}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: 'auto' }}>
            Showing <strong>{displayedEvents.length}</strong> events • No mock registrations for hackathons
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* CALENDAR VIEW                                            */}
      {/* ======================================================== */}
      {activeView === 'calendar' && (
        <div className="card" style={{ padding: '28px', marginBottom: '32px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                {monthNames[currentCalendarDate.getMonth()]} {currentCalendarDate.getFullYear()}
              </h2>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  backgroundColor: '#eff6ff',
                  color: '#2563eb',
                  padding: '3px 10px',
                  borderRadius: '999px',
                }}
              >
                Filtered: {selectedDept}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => changeMonth(-1)}
                className="btn btn-secondary"
                style={{ padding: '6px 12px' }}
              >
                <ChevronLeft size={16} /> Prev Month
              </button>
              <button
                onClick={() => changeMonth(1)}
                className="btn btn-secondary"
                style={{ padding: '6px 12px' }}
              >
                Next Month <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '8px',
              textAlign: 'center',
            }}
          >
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div
                key={d}
                style={{
                  padding: '8px',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  color: '#64748b',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                }}
              >
                {d}
              </div>
            ))}

            {/* Empty leading days */}
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} style={{ minHeight: '85px', opacity: 0.3 }} />
            ))}

            {/* Month Days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${currentCalendarDate.getFullYear()}-${String(
                currentCalendarDate.getMonth() + 1
              ).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;

              const dayEvents = displayedEvents.filter((ev) => ev.date === dateStr);

              return (
                <div
                  key={dayNum}
                  style={{
                    minHeight: '85px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '8px',
                    textAlign: 'left',
                    backgroundColor: dayEvents.length > 0 ? '#eff6ff' : '#ffffff',
                    transition: 'all 0.15s',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: dayEvents.length > 0 ? '#2563eb' : '#0f172a',
                    }}
                  >
                    {dayNum}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                    {dayEvents.map((ev) => (
                      <div
                        key={ev._id}
                        onClick={() => setSelectedEvent(ev)}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          backgroundColor: ev.isExternalHackathon ? '#1d4ed8' : '#7c3aed',
                          color: 'white',
                          padding: '3px 6px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        title={ev.title}
                      >
                        {ev.isExternalHackathon ? '🚀 ' : ''}{ev.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* EVENT CARDS GRID                                         */}
      {/* ======================================================== */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
          Loading campus events and hackathons...
        </div>
      ) : displayedEvents.length === 0 ? (
        <div className="card" style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>
          <div style={{ fontSize: '42px', marginBottom: '10px' }}>🔍</div>
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b' }}>
            {activeView === 'registered' ? 'No Campus In-Person RSVPs Found' : 'No Events Match Filter'}
          </h3>
          <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
            {activeView === 'registered'
              ? 'Campus workshops with reserved seats will appear here. For national hackathons, registrations are made directly on the verified host websites.'
              : 'Try choosing another category, department, or clearing your search.'}
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px',
          }}
        >
          {displayedEvents.map((ev) => {
            const isExternal = ev.isExternalHackathon || !!ev.externalUrl;
            const registered = isUserRegistered(ev);

            return (
              <div
                key={ev._id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: isExternal ? '1px solid #bfdbfe' : '1px solid #e2e8f0',
                  boxShadow: isExternal ? '0 4px 16px rgba(37, 99, 235, 0.08)' : 'var(--shadow-sm)',
                }}
              >
                {/* Event Image */}
                <div style={{ position: 'relative', height: '190px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={ev.image}
                    alt={ev.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Top Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                    }}
                  >
                    <span
                      className={`badge badge-${ev.department.toLowerCase().replace(/[^a-z]/g, '')}`}
                      style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
                    >
                      {ev.department}
                    </span>

                    {isExternal && ev.platform && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '4px 8px',
                          borderRadius: '999px',
                          backgroundColor: '#1e40af',
                          color: '#ffffff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        }}
                      >
                        <Globe size={11} /> {ev.platform}
                      </span>
                    )}

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '999px',
                        backgroundColor:
                          ev.status === 'Upcoming'
                            ? '#dbeafe'
                            : ev.status === 'Ongoing'
                            ? '#dcfce7'
                            : '#f1f5f9',
                        color:
                          ev.status === 'Upcoming'
                            ? '#1d4ed8'
                            : ev.status === 'Ongoing'
                            ? '#15803d'
                            : '#64748b',
                      }}
                    >
                      {ev.status}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(4px)',
                      color: 'white',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                    }}
                  >
                    {ev.category}
                  </div>
                </div>

                {/* Event Body */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
                  <h3
                    style={{
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.3,
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedEvent(ev)}
                  >
                    {ev.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {ev.description}
                  </p>

                  {/* Highlights (Prize & Team Size if available) */}
                  {isExternal && (ev.prizePool || ev.teamSize) && (
                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                        backgroundColor: '#eff6ff',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        border: '1px solid #dbeafe',
                        fontSize: '0.78rem',
                      }}
                    >
                      {ev.prizePool && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#047857', fontWeight: 700 }}>
                          <Award size={13} /> {ev.prizePool}
                        </div>
                      )}
                      {ev.teamSize && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1e40af', fontWeight: 600, marginLeft: 'auto' }}>
                          <Users size={13} /> {ev.teamSize}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Metadata: Date, Time, Location */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      padding: '12px',
                      borderRadius: '10px',
                      backgroundColor: '#f8fafc',
                      fontSize: '0.82rem',
                      color: '#334155',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CalendarIcon size={14} color="#2563eb" />
                      <strong>Date:</strong> {ev.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={14} color="#7c3aed" />
                      <strong>Schedule:</strong> {ev.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={14} color="#ea580c" />
                      <strong>Venue/Mode:</strong> {ev.location}
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  {isExternal ? (
                    /* REAL HACKATHON: DIRECT OFFICIAL REGISTRATION LINK + COPY LINK */
                    <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                      <a
                        href={ev.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          fontSize: '0.85rem',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontWeight: 700,
                          background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                          boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)',
                        }}
                      >
                        <span>Register on {ev.platform || 'Portal'}</span>
                        <ExternalLink size={14} />
                      </a>

                      <button
                        onClick={(e) => handleCopyLink(ev.externalUrl, ev.platform, e)}
                        className="btn btn-secondary"
                        style={{
                          padding: '10px 12px',
                          fontSize: '0.82rem',
                          borderRadius: '10px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontWeight: 600,
                        }}
                        title="Copy official registration URL"
                      >
                        <Share2 size={14} /> Copy
                      </button>

                      <button
                        onClick={() => setSelectedEvent(ev)}
                        className="btn btn-secondary"
                        style={{
                          padding: '10px 12px',
                          fontSize: '0.82rem',
                          borderRadius: '10px',
                          fontWeight: 600,
                        }}
                      >
                        Details
                      </button>
                    </div>
                  ) : (
                    /* INTERNAL CAMPUS SESSION: CAMPUS RSVP */
                    <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                      <button
                        onClick={(e) => handleInternalRsvpToggle(ev._id, e)}
                        className={registered ? 'btn btn-success' : 'btn btn-primary'}
                        style={{
                          flex: 1,
                          padding: '10px',
                          fontSize: '0.86rem',
                          borderRadius: '10px',
                        }}
                      >
                        {registered ? (
                          <>
                            <CheckCircle size={15} /> Seat Reserved
                          </>
                        ) : (
                          'RSVP for Campus Session'
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedEvent(ev)}
                        className="btn btn-secondary"
                        style={{
                          padding: '10px 14px',
                          fontSize: '0.85rem',
                          borderRadius: '10px',
                        }}
                      >
                        Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* EVENT DETAILS MODAL                                      */}
      {/* ======================================================== */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div style={{ position: 'relative', height: '220px', width: '100%' }}>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: 'rgba(0, 0, 0, 0.55)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span className={`badge badge-${selectedEvent.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {selectedEvent.department}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '999px',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                  }}
                >
                  {selectedEvent.category}
                </span>
                {selectedEvent.isExternalHackathon && (
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '999px',
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <ShieldCheck size={12} /> Verified Host: {selectedEvent.platform || 'National Portal'}
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                {selectedEvent.title}
              </h2>

              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedEvent.description}
              </p>

              {/* Grid of Key Info */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  backgroundColor: '#f8fafc',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>EVENT DATE</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.date}</div>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>TIMINGS / FORMAT</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.time}</div>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>VENUE / PLATFORM</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.location}</div>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>ORGANIZED BY</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>
                    {selectedEvent.organizer || 'Host Committee'}
                  </div>
                </div>
              </div>

              {/* EXTERNAL HACKATHON VERIFIED LINK SECTION */}
              {selectedEvent.externalUrl ? (
                <div
                  style={{
                    padding: '18px 20px',
                    backgroundColor: '#eff6ff',
                    borderRadius: '14px',
                    border: '1px solid #bfdbfe',
                    marginBottom: '22px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '18px' }}>🌐</span>
                    <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#1e40af' }}>
                      Original External Registration Portal
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#1e3a8a', lineHeight: 1.5, marginBottom: '14px' }}>
                    This hackathon is officially managed on <strong>{selectedEvent.platform || 'the organizer website'}</strong>. All team applications, problem statement choices, and project submissions take place directly on their official link.
                  </p>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href={selectedEvent.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        padding: '11px 18px',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                      }}
                    >
                      <span>Proceed to Official Registration ({selectedEvent.platform || 'Platform'})</span>
                      <ExternalLink size={16} />
                    </a>

                    <button
                      onClick={(e) => handleCopyLink(selectedEvent.externalUrl, selectedEvent.platform, e)}
                      className="btn btn-secondary"
                      style={{
                        padding: '11px 16px',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        borderRadius: '10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Share2 size={16} /> Copy Link
                    </button>
                  </div>
                </div>
              ) : null}

              {/* Bottom Close / Internal RSVP Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {!selectedEvent.externalUrl ? (
                  <button
                    onClick={(e) => handleInternalRsvpToggle(selectedEvent._id, e)}
                    className={isUserRegistered(selectedEvent) ? 'btn btn-success' : 'btn btn-primary'}
                    style={{ flex: 1, padding: '12px', borderRadius: '12px', fontSize: '0.95rem' }}
                  >
                    {isUserRegistered(selectedEvent) ? 'Cancel Campus Seat RSVP' : 'Reserve In-Person Campus Seat'}
                  </button>
                ) : null}

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="btn btn-secondary"
                  style={{
                    flex: selectedEvent.externalUrl ? 1 : 'none',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 600,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
