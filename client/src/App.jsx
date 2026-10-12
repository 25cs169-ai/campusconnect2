import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import EventsPage from './pages/EventsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import ComplaintsPage from './pages/ComplaintsPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

function AppContent() {
  const { user, loading, currentPage, setCurrentPage, toast } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          gap: '16px',
        }}
      >
        <div style={{ fontSize: '48px', animation: 'spin 2s linear infinite' }}>🎓</div>
        <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '1.1rem' }}>
          Loading CampusConnect...
        </div>
      </div>
    );
  }

  // If not logged in, render the 3D animated Login / Welcome Page
  if (!user) {
    return (
      <>
        <LoginPage />
        {/* Floating Toast Message */}
        {toast && (
          <div
            style={{
              position: 'fixed',
              top: '24px',
              right: '24px',
              zIndex: 9999,
              backgroundColor: toast.type === 'error' ? '#fee2e2' : '#eff6ff',
              color: toast.type === 'error' ? '#dc2626' : '#1d4ed8',
              border: `1px solid ${toast.type === 'error' ? '#fca5a5' : '#bfdbfe'}`,
              borderRadius: '12px',
              padding: '12px 20px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 600,
              fontSize: '0.9rem',
              animation: 'slideUp 0.25s ease-out',
            }}
          >
            {toast.type === 'error' ? (
              <AlertTriangle size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )}
            <span>{toast.message}</span>
          </div>
        )}
      </>
    );
  }

  // Logged-in application with modern Light Theme dashboard
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <DashboardPage />;
      case 'announcements':
        return <AnnouncementsPage />;
      case 'events':
        return <EventsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'complaints':
        return <ComplaintsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            zIndex: 9999,
            backgroundColor:
              toast.type === 'error'
                ? '#fee2e2'
                : toast.type === 'info'
                ? '#f1f5f9'
                : '#ecfdf5',
            color:
              toast.type === 'error'
                ? '#dc2626'
                : toast.type === 'info'
                ? '#334155'
                : '#059669',
            border: `1px solid ${
              toast.type === 'error'
                ? '#fca5a5'
                : toast.type === 'info'
                ? '#cbd5e1'
                : '#a7f3d0'
            }`,
            borderRadius: '12px',
            padding: '12px 20px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 600,
            fontSize: '0.9rem',
            animation: 'slideUp 0.25s ease-out',
          }}
        >
          {toast.type === 'error' ? (
            <AlertTriangle size={18} />
          ) : toast.type === 'info' ? (
            <Info size={18} />
          ) : (
            <CheckCircle2 size={18} />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        isMobileOpen={mobileSidebarOpen}
        setIsMobileOpen={setMobileSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="main-content">
        <Navbar
          onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          onSearchQuery={(q) => {
            // If user searches from header, switch to search results or announcements/events
            if (q.trim().length > 2 && currentPage === 'home') {
              setCurrentPage('announcements');
            }
          }}
        />

        <main style={{ flex: 1 }}>{renderPage()}</main>

        {/* Global Footer */}
        <footer
          style={{
            padding: '24px 36px',
            borderTop: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            <strong>CampusConnect</strong> — An integrated student management and collabration platform
          </div>
          <div>Connect • Collaborate • Grow | Product Development Lab</div>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
