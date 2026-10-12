const API_BASE = '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('cc_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'An error occurred during API request');
  }
  return data;
};

export const api = {
  // Auth
  async register(userData) {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(res);
  },

  async login(credentials) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return handleResponse(res);
  },

  async getMe() {
    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  async updateProfile(updates) {
    const res = await fetch(`${API_BASE}/auth/profile`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return handleResponse(res);
  },

  async getAllUsers(department) {
    const url = department
      ? `${API_BASE}/auth/users?department=${encodeURIComponent(department)}`
      : `${API_BASE}/auth/users`;
    const res = await fetch(url, { headers: getAuthHeaders() });
    return handleResponse(res);
  },

  // Announcements
  async getAnnouncements(category, department) {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (department && department !== 'All') params.append('department', department);
    const res = await fetch(`${API_BASE}/announcements?${params.toString()}`);
    return handleResponse(res);
  },

  async createAnnouncement(data) {
    const res = await fetch(`${API_BASE}/announcements`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(res);
  },

  async updateAnnouncement(id, updates) {
    const res = await fetch(`${API_BASE}/announcements/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return handleResponse(res);
  },

  async deleteAnnouncement(id) {
    const res = await fetch(`${API_BASE}/announcements/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // Events
  async getEvents({ department, status, search } = {}) {
    const params = new URLSearchParams();
    if (department && department !== 'All' && department !== 'All Departments') {
      params.append('department', department);
    }
    if (status && status !== 'All Events' && status !== 'All') {
      params.append('status', status);
    }
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE}/events?${params.toString()}`);
    return handleResponse(res);
  },

  async createEvent(eventData) {
    const res = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(eventData),
    });
    return handleResponse(res);
  },

  async updateEvent(id, updates) {
    const res = await fetch(`${API_BASE}/events/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return handleResponse(res);
  },

  async deleteEvent(id) {
    const res = await fetch(`${API_BASE}/events/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  async toggleRegisterEvent(id) {
    const res = await fetch(`${API_BASE}/events/${id}/register`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // Projects
  async getProjects({ department, status } = {}) {
    const params = new URLSearchParams();
    if (department && department !== 'All') params.append('department', department);
    if (status && status !== 'All') params.append('status', status);
    const res = await fetch(`${API_BASE}/projects?${params.toString()}`);
    return handleResponse(res);
  },

  async createProject(projectData) {
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(projectData),
    });
    return handleResponse(res);
  },

  async joinProject(id, role = 'Contributor') {
    const res = await fetch(`${API_BASE}/projects/${id}/join`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ role }),
    });
    return handleResponse(res);
  },

  async updateProject(id, updates) {
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return handleResponse(res);
  },

  async deleteProject(id) {
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // Resources
  async getResources({ department, search } = {}) {
    const params = new URLSearchParams();
    if (department && department !== 'All' && department !== 'All Departments') {
      params.append('department', department);
    }
    if (search) params.append('search', search);
    const res = await fetch(`${API_BASE}/resources?${params.toString()}`);
    return handleResponse(res);
  },

  async createResource(resourceData) {
    const res = await fetch(`${API_BASE}/resources`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(resourceData),
    });
    return handleResponse(res);
  },

  async deleteResource(id) {
    const res = await fetch(`${API_BASE}/resources/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // Complaints
  async getComplaints() {
    const res = await fetch(`${API_BASE}/complaints`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  async createComplaint(data) {
    const res = await fetch(`${API_BASE}/complaints`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(res);
  },

  async updateComplaintStatus(id, { status, adminRemarks }) {
    const res = await fetch(`${API_BASE}/complaints/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status, adminRemarks }),
    });
    return handleResponse(res);
  },

  // Smart Matching
  async getMatches({ skills, department, interests } = {}) {
    const params = new URLSearchParams();
    if (skills) params.append('skills', Array.isArray(skills) ? skills.join(',') : skills);
    if (department) params.append('department', department);
    if (interests) params.append('interests', Array.isArray(interests) ? interests.join(',') : interests);
    const res = await fetch(`${API_BASE}/matches?${params.toString()}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },
};
