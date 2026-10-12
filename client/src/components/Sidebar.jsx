import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Home,
  Bell,
  Calendar,
  Users,
  BookOpen,
  AlertCircle,
  User,
  Shield,
  LogOut,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const { currentPage, setCurrentPage, user, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, badge: null },
    { id: 'announcements', label: 'Announcements', icon: Bell, badge: 'New' },
    { id: 'events', label: 'Events', icon: Calendar, badge: 'Active' },
    { id: 'projects', label: 'Projects', icon: Users, badge: 'Match' },
    { id: 'resources', label: 'Resources', icon: BookOpen, badge: null },
    { id: 'complaints', label: 'Complaints', icon: AlertCircle, badge: null },
    { id: 'profile', label: 'Profile', icon: User, badge: null },
  ];

  // If user is admin, add admin dashboard directly
  if (user && user.role === 'admin') {
    navItems.push({ id: 'admin', label: 'Admin Dashboard', icon: Shield, badge: 'Admin' });
  } else {
    // Also provide access to Admin Dashboard for demonstration in Product Development Lab
    navItems.push({ id: 'admin', label: 'Admin Portal', icon: Shield, badge: 'Demo' });
  }

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            zIndex: 90,
          }}
        />
      )}

      <aside
        style={{
          width: '270px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '2px 0 12px rgba(0, 0, 0, 0.02)',
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            padding: '24px 22px',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              boxShadow: '0 6px 16px -2px rgba(37, 99, 235, 0.3)',
              color: 'white',
              flexShrink: 0,
            }}
          >
            🎓
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              CampusConnect
            </h2>
            <p
              style={{
                fontSize: '0.72rem',
                color: '#64748b',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              Connect • Collaborate • Grow
            </p>
          </div>
        </div>

        {/* Navigation List */}
        <nav
          style={{
            flex: 1,
            padding: '16px 14px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#94a3b8',
              padding: '6px 12px',
              letterSpacing: '0.05em',
            }}
          >
            Main Menu
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  background: isActive
                    ? 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)'
                    : 'transparent',
                  color: isActive ? '#2563eb' : '#475569',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.18s ease',
                  borderLeft: isActive ? '3.5px solid #2563eb' : '3.5px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.color = '#1e293b';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                <Icon
                  size={19}
                  color={isActive ? '#2563eb' : '#64748b'}
                  style={{ flexShrink: 0 }}
                />
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '999px',
                      backgroundColor:
                        item.badge === 'Admin'
                          ? '#fef2f2'
                          : item.badge === 'Match'
                          ? '#f3e8ff'
                          : '#e0f2fe',
                      color:
                        item.badge === 'Admin'
                          ? '#dc2626'
                          : item.badge === 'Match'
                          ? '#7c3aed'
                          : '#0284c7',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Status Card & Logout */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid #f1f5f9',
            backgroundColor: '#fafaf9',
          }}
        >
          {user && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                marginBottom: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('profile')}
            >
              <img
                src={user.profileImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                alt={user.name}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '2px solid #dbeafe',
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {user.name}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                    }}
                  />
                  {user.department || 'Student'} • {user.role === 'admin' ? 'Admin' : user.year || '3rd Year'}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={logout}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '9px',
              borderRadius: '8px',
              border: '1px solid #fee2e2',
              backgroundColor: '#fff5f5',
              color: '#dc2626',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fee2e2')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff5f5')}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
