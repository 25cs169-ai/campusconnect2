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
  Bookmark,
  Share2,
  CalendarCheck,
} from 'lucide-react';

const EventsPage = () => {
  const { user, showToast } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedStatus, setSelectedStatus] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('grid'); // 'grid' | 'calendar' | 'registered'

  // Selected event for modal
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Calendar state
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date(2026, 5, 1)); // June 2026

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

  // Handle Event Registration Toggle
  const handleRegisterToggle = async (eventId, e) => {
    if (e) e.stopPropagation();
    try {
      const res = await api.toggleRegisterEvent(eventId);
      if (res.success) {
        // Update local state
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
          showToast(res.message, 'success');
        } else {
          showToast(res.message, 'info');
        }
      }
    } catch (err) {
      showToast(err.message || 'Failed to update registration', 'error');
    }
  };

  const isUserRegistered = (event) => {
    if (!user || !event.registrations) return false;
    return event.registrations.includes(user._id);
  };

  // Filtered list based on view
  const displayedEvents = events.filter((ev) => {
    if (activeView === 'registered') {
      return isUserRegistered(ev);
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
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              backgroundColor: '#f5f3ff',
              color: '#7c3aed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
            }}
          >
            📅
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              Campus Events
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Discover and participate in events organized by different departments.
            </p>
          </div>
        </div>

        {/* View Switcher: Grid View | Interactive Calendar | My Registered Events */}
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
            <CalendarCheck size={15} /> My Registered Events
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 10. DEPARTMENT-WISE & 11. STATUS COMBINED FILTERS        */}
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
            placeholder="Search events by title, description, or location..."
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

        {/* 10. Department-wise Filter Buttons */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
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
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: isSelected ? '1px solid #2563eb' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#2563eb' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#334155',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? '0 4px 10px rgba(37, 99, 235, 0.2)' : 'none',
                  }}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </div>

        {/* 11. Event Status Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
            EVENT STATUS:
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {statuses.map((st) => {
              const isSelected = selectedStatus === st;
              return (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid #7c3aed' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#f5f3ff' : '#ffffff',
                    color: isSelected ? '#7c3aed' : '#64748b',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  {st}
                </button>
              );
            })}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: 'auto' }}>
            Showing: <strong>{selectedDept}</strong> • <strong>{selectedStatus}</strong>
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 17. CALENDAR VIEW                                        */}
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
                Filtered by {selectedDept}
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
                          backgroundColor: '#2563eb',
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
                        {ev.title}
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
      {/* 12. EVENT CARDS GRID                                     */}
      {/* ======================================================== */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
          Loading department events...
        </div>
      ) : displayedEvents.length === 0 ? (
        <div className="card" style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>
          <div style={{ fontSize: '42px', marginBottom: '10px' }}>📅</div>
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b' }}>
            {activeView === 'registered' ? 'No Registered Events Yet' : 'No Events Match Filter'}
          </h3>
          <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
            {activeView === 'registered'
              ? 'Browse the department events list and click "Register" to add them to your calendar.'
              : 'Try changing your department or status filter criteria.'}
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px',
          }}
        >
          {displayedEvents.map((ev) => {
            const registered = isUserRegistered(ev);
            return (
              <div
                key={ev._id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
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

                  {/* Department & Status Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      gap: '6px',
                    }}
                  >
                    <span
                      className={`badge badge-${ev.department.toLowerCase().replace(/[^a-z]/g, '')}`}
                      style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
                    >
                      {ev.department}
                    </span>
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
                      backgroundColor: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(4px)',
                      color: 'white',
                      fontSize: '0.72rem',
                      fontWeight: 600,
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
                      fontSize: '1.25rem',
                      fontWeight: 700,
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
                      color: '#64748b',
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {ev.description}
                  </p>

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
                      <strong>Time:</strong> {ev.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={14} color="#ea580c" />
                      <strong>Location:</strong> {ev.location}
                    </div>
                  </div>

                  {/* External Hackathon Link (if available - genuine links without duplicates) */}
                  {ev.externalUrl && (
                    <a
                      href={ev.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#2563eb',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Official National Portal <ExternalLink size={13} />
                    </a>
                  )}

                  {/* Buttons: Register & View Details */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                    <button
                      onClick={(e) => handleRegisterToggle(ev._id, e)}
                      className={registered ? 'btn btn-success' : 'btn btn-primary'}
                      style={{
                        flex: 1,
                        padding: '9px',
                        fontSize: '0.88rem',
                        borderRadius: '10px',
                      }}
                    >
                      {registered ? (
                        <>
                          <CheckCircle size={16} /> Registered
                        </>
                      ) : (
                        'Register'
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedEvent(ev)}
                      className="btn btn-secondary"
                      style={{
                        padding: '9px 14px',
                        fontSize: '0.88rem',
                        borderRadius: '10px',
                      }}
                    >
                      View Details
                    </button>
                  </div>
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
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
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
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                {selectedEvent.title}
              </h2>

              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedEvent.description}
              </p>

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
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>DATE</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.date}</div>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>TIME</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.time}</div>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>LOCATION</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.location}</div>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>ORGANIZED BY</div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{selectedEvent.organizer || 'Department Cell'}</div>
                </div>
              </div>

              {selectedEvent.externalUrl && (
                <div
                  style={{
                    padding: '14px',
                    backgroundColor: '#eff6ff',
                    borderRadius: '12px',
                    border: '1px solid #bfdbfe',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e40af' }}>
                    Original External Registration Link
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#1d4ed8', marginTop: '2px', marginBottom: '8px' }}>
                    Access official hackathon problem statements, rules, and national team portal.
                  </p>
                  <a
                    href={selectedEvent.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '0.82rem', padding: '7px 14px' }}
                  >
                    Open {selectedEvent.externalUrl} <ExternalLink size={14} />
                  </a>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={(e) => handleRegisterToggle(selectedEvent._id, e)}
                  className={isUserRegistered(selectedEvent) ? 'btn btn-success' : 'btn btn-primary'}
                  style={{ flex: 1, padding: '12px', borderRadius: '12px', fontSize: '0.95rem' }}
                >
                  {isUserRegistered(selectedEvent) ? 'Cancel Registration' : 'Register for Event'}
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="btn btn-secondary"
                  style={{ padding: '12px 20px', borderRadius: '12px' }}
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
