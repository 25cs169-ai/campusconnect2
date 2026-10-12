import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Search,
  Bell,
  Menu,
  CheckCircle2,
  Calendar,
  Users,
  BookOpen,
  ChevronDown,
  User,
  Shield,
  LogOut,
  ExternalLink,
} from 'lucide-react';

const Navbar = ({ onToggleMobileSidebar, onSearchQuery }) => {
  const {
    user,
    logout,
    setCurrentPage,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    unreadNotificationsCount,
  } = useAuth();

  const [searchVal, setSearchVal] = useState('');
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifMenu(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
    if (onSearchQuery) onSearchQuery(e.target.value);
  };

  const handleNotificationClick = (notif) => {
    markNotificationRead(notif.id);
    setShowNotifMenu(false);
    if (notif.linkPage) {
      setCurrentPage(notif.linkPage);
    }
  };

  return (
    <header
      style={{
        height: '70px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left: Mobile Toggle & Global Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, maxWidth: '580px' }}>
        <button
          onClick={onToggleMobileSidebar}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            color: '#475569',
          }}
          className="mobile-toggle-btn"
        >
          <Menu size={22} />
        </button>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#f1f5f9',
            padding: '8px 16px',
            borderRadius: '12px',
            width: '100%',
            border: '1px solid transparent',
            transition: 'all 0.2s',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#3b82f6')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'transparent')}
        >
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search campus announcements, hackathons, events, projects, resources..."
            value={searchVal}
            onChange={handleSearchChange}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.88rem',
              color: '#0f172a',
            }}
          />
        </div>
      </div>

      {/* Right: Notifications & Profile Dropdown */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        {/* Notifications Dropdown */}
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button
            onClick={() => setShowNotifMenu(!showNotifMenu)}
            style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#eff6ff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
            title="Notifications"
          >
            <Bell size={20} />
            {unreadNotificationsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                }}
              >
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* Notifications Menu */}
          {showNotifMenu && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '52px',
                width: '360px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
                border: '1px solid #e2e8f0',
                padding: '16px',
                zIndex: 100,
                animation: 'slideUp 0.18s ease-out',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                    Notifications
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      padding: '2px 8px',
                      borderRadius: '999px',
                    }}
                  >
                    {unreadNotificationsCount} New
                  </span>
                </div>
                {unreadNotificationsCount > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#2563eb',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Mark all as read
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '320px', overflowY: 'auto' }}>
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => handleNotificationClick(n)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      backgroundColor: n.read ? '#ffffff' : '#f0f7ff',
                      border: n.read ? '1px solid #f1f5f9' : '1px solid #bfdbfe',
                      cursor: 'pointer',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = n.read ? '#ffffff' : '#f0f7ff')
                    }
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e293b' }}>
                        {n.title}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{n.time}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px', lineHeight: 1.35 }}>
                      {n.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar & Dropdown */}
        <div style={{ position: 'relative' }} ref={profileRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '12px',
            }}
          >
            <img
              src={
                user?.profileImage ||
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120'
              }
              alt={user?.name || 'Student Profile'}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '2px solid #3b82f6',
              }}
            />
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0f172a' }}>
                {user?.name?.split(' ')[0] || 'Student'}
              </span>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                {user?.department || 'CSE'}
              </span>
            </div>
            <ChevronDown size={15} color="#64748b" />
          </button>

          {/* Profile Menu Dropdown */}
          {showProfileMenu && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '52px',
                width: '230px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                padding: '8px',
                zIndex: 100,
                animation: 'slideUp 0.18s ease-out',
              }}
            >
              <div style={{ padding: '10px 12px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>{user?.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{user?.email}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '6px 0' }}>
                <button
                  onClick={() => {
                    setCurrentPage('profile');
                    setShowProfileMenu(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    color: '#334155',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <User size={16} color="#64748b" />
                  View Profile
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('admin');
                    setShowProfileMenu(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    color: '#334155',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Shield size={16} color="#64748b" />
                  Admin Dashboard
                </button>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '6px' }}>
                <button
                  onClick={() => {
                    logout();
                    setShowProfileMenu(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    color: '#dc2626',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fee2e2')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <LogOut size={16} color="#dc2626" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
