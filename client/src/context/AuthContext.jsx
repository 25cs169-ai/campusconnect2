import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('cc_token') || null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // home, announcements, events, projects, resources, complaints, profile, admin
  const [toast, setToast] = useState(null); // { message, type: 'success' | 'error' | 'info' }
  const [notifications, setNotifications] = useState([
    {
      id: 'notif_1',
      title: 'Smart India Hackathon 2026',
      message: 'Internal college registrations opened today! Review rules & register team.',
      time: '10m ago',
      read: false,
      linkPage: 'announcements',
    },
    {
      id: 'notif_2',
      title: 'TechNova 2K26 Announced',
      message: 'CSE National Level Technical Festival registration is now open.',
      time: '1h ago',
      read: false,
      linkPage: 'events',
    },
    {
      id: 'notif_3',
      title: 'Smart Teammate Recommendation',
      message: 'Rahul Kumar matches 85% with your skills profile!',
      time: '2h ago',
      read: false,
      linkPage: 'projects',
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const storedToken = localStorage.getItem('cc_token');
      if (storedToken) {
        try {
          const res = await api.getMe();
          if (res.success && res.user) {
            setUser(res.user);
          } else {
            logout();
          }
        } catch (err) {
          console.warn('Failed to verify token:', err.message);
          logout();
        }
      }
      setLoading(false);
    };

    fetchCurrentUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.login({ email, password });
      if (res.success) {
        localStorage.setItem('cc_token', res.token);
        setToken(res.token);
        setUser(res.user);
        setCurrentPage('home');
        showToast(`Welcome back, ${res.user.name}!`);
        return { success: true };
      }
    } catch (err) {
      showToast(err.message || 'Login failed', 'error');
      return { success: false, message: err.message };
    }
  };

  const register = async (userData) => {
    try {
      const res = await api.register(userData);
      if (res.success) {
        localStorage.setItem('cc_token', res.token);
        setToken(res.token);
        setUser(res.user);
        setCurrentPage('home');
        showToast(`Account created successfully! Welcome ${res.user.name}.`);
        return { success: true };
      }
    } catch (err) {
      showToast(err.message || 'Registration failed', 'error');
      return { success: false, message: err.message };
    }
  };

  const demoLogin = async (role = 'student') => {
    if (role === 'admin') {
      return login('admin@campus.edu', 'campus123');
    } else {
      return login('rahul@campus.edu', 'campus123');
    }
  };

  const logout = () => {
    localStorage.removeItem('cc_token');
    setToken(null);
    setUser(null);
    setCurrentPage('home');
    showToast('Logged out successfully', 'info');
  };

  const updateUserProfile = (updatedUser) => {
    setUser((prev) => ({ ...prev, ...updatedUser }));
  };

  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        currentPage,
        setCurrentPage,
        login,
        register,
        demoLogin,
        logout,
        updateUserProfile,
        notifications,
        markNotificationRead,
        markAllNotificationsRead,
        unreadNotificationsCount,
        toast,
        showToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
