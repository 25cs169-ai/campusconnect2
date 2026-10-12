import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import {
  Shield,
  Users,
  Bell,
  Calendar,
  FolderGit2,
  BookOpen,
  AlertCircle,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  Clock,
  Search,
  ExternalLink,
  X,
} from 'lucide-react';

const AdminPage = () => {
  const { user, showToast } = useAuth();
  const [activeTab, setActiveTab] = useState('students'); // students, announcements, events, projects, resources, complaints

  // Students state
  const [students, setStudents] = useState([]);
  const [studentDeptFilter, setStudentDeptFilter] = useState('All');
  const [studentSearch, setStudentSearch] = useState('');

  // Announcements state
  const [announcements, setAnnouncements] = useState([]);
  const [showAddAnnModal, setShowAddAnnModal] = useState(false);
  const [annTitle, setAnnTitle] = useState('');
  const [annContent, setAnnContent] = useState('');
  const [annCategory, setAnnCategory] = useState('General');
  const [annImportant, setAnnImportant] = useState(false);
  const [annLink, setAnnLink] = useState('');

  // Events state
  const [events, setEvents] = useState([]);
  const [showAddEvModal, setShowAddEvModal] = useState(false);
  const [evTitle, setEvTitle] = useState('');
  const [evDept, setEvDept] = useState('CSE');
  const [evDesc, setEvDesc] = useState('');
  const [evDate, setEvDate] = useState('2026-06-15');
  const [evTime, setEvTime] = useState('10:00 AM - 4:00 PM');
  const [evLocation, setEvLocation] = useState('Main Auditorium');
  const [evImage, setEvImage] = useState('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800');
  const [evUrl, setEvUrl] = useState('');

  // Projects state
  const [projects, setProjects] = useState([]);

  // Resources state
  const [resources, setResources] = useState([]);

  // Complaints state
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [newStatus, setNewStatus] = useState('In Progress');
  const [adminNote, setAdminNote] = useState('');

  const [loading, setLoading] = useState(true);

  const departments = ['CSE', 'ECE', 'AI & ML', 'IT', 'EEE', 'MECH', 'CIVIL', 'MBA'];

  const loadData = async () => {
    try {
      setLoading(true);
      const [uRes, aRes, eRes, pRes, rRes, cRes] = await Promise.all([
        api.getAllUsers(),
        api.getAnnouncements(),
        api.getEvents(),
        api.getProjects(),
        api.getResources(),
        api.getComplaints(),
      ]);

      if (uRes.success) setStudents(uRes.users);
      if (aRes.success) setAnnouncements(aRes.announcements);
      if (eRes.success) setEvents(eRes.events);
      if (pRes.success) setProjects(pRes.projects);
      if (rRes.success) setResources(rRes.resources);
      if (cRes.success) setComplaints(cRes.complaints);
    } catch (err) {
      console.error('Failed to load admin collections:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Announcements Handlers
  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    try {
      const res = await api.createAnnouncement({
        title: annTitle,
        content: annContent,
        category: annCategory,
        important: annImportant,
        externalLink: annLink,
      });
      if (res.success) {
        setAnnouncements([res.announcement, ...announcements]);
        setShowAddAnnModal(false);
        setAnnTitle('');
        setAnnContent('');
        setAnnLink('');
        showToast('Announcement broadcasted campus-wide!', 'success');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    if (!window.confirm('Delete this announcement?')) return;
    try {
      const res = await api.deleteAnnouncement(id);
      if (res.success) {
        setAnnouncements(announcements.filter((a) => a._id !== id));
        showToast('Announcement removed', 'info');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Events Handlers
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await api.createEvent({
        title: evTitle,
        department: evDept,
        description: evDesc,
        date: evDate,
        time: evTime,
        location: evLocation,
        image: evImage,
        externalUrl: evUrl,
      });
      if (res.success) {
        setEvents([res.event, ...events]);
        setShowAddEvModal(false);
        setEvTitle('');
        setEvDesc('');
        showToast('New department event created!', 'success');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      const res = await api.deleteEvent(id);
      if (res.success) {
        setEvents(events.filter((e) => e._id !== id));
        showToast('Event removed', 'info');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Projects Handlers
  const handleProjectStatusChange = async (id, status) => {
    try {
      const res = await api.updateProject(id, { status });
      if (res.success) {
        setProjects(projects.map((p) => (p._id === id ? res.project : p)));
        showToast(`Project status changed to ${status}`, 'success');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      const res = await api.deleteProject(id);
      if (res.success) {
        setProjects(projects.filter((p) => p._id !== id));
        showToast('Project deleted', 'info');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Resources Handlers
  const handleDeleteResource = async (id) => {
    if (!window.confirm('Delete this resource?')) return;
    try {
      const res = await api.deleteResource(id);
      if (res.success) {
        setResources(resources.filter((r) => r._id !== id));
        showToast('Resource deleted from vault', 'info');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Complaints Handlers
  const handleUpdateComplaintStatus = async (id) => {
    try {
      const res = await api.updateComplaintStatus(id, {
        status: newStatus,
        adminRemarks: adminNote || `Updated to ${newStatus} by Campus Administrator`,
      });
      if (res.success) {
        setComplaints(complaints.map((c) => (c._id === id ? res.complaint : c)));
        setSelectedComplaint(null);
        showToast(`Complaint status set to ${newStatus}`, 'success');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const filteredStudents = students.filter((s) => {
    const matchesDept = studentDeptFilter === 'All' || s.department === studentDeptFilter;
    const matchesSearch =
      !studentSearch ||
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.email.toLowerCase().includes(studentSearch.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '26px' }}>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
          }}
        >
          🛡️
        </div>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
            Campus Administrator Control Panel
          </h1>
          <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
            Comprehensive management of students, announcements, department events, projects, resources, and complaints.
          </p>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          backgroundColor: '#f1f5f9',
          padding: '4px',
          borderRadius: '12px',
          overflowX: 'auto',
          gap: '4px',
          marginBottom: '26px',
        }}
      >
        {[
          { id: 'students', label: 'Manage Students', icon: Users, count: students.length },
          { id: 'announcements', label: 'Manage Announcements', icon: Bell, count: announcements.length },
          { id: 'events', label: 'Manage Events', icon: Calendar, count: events.length },
          { id: 'projects', label: 'Manage Projects', icon: FolderGit2, count: projects.length },
          { id: 'resources', label: 'Manage Resources', icon: BookOpen, count: resources.length },
          { id: 'complaints', label: 'Manage Complaints', icon: AlertCircle, count: complaints.length },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                borderRadius: '9px',
                border: 'none',
                backgroundColor: isActive ? '#ffffff' : 'transparent',
                color: isActive ? '#2563eb' : '#64748b',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
              }}
            >
              <Icon size={16} />
              {tab.label}
              <span
                style={{
                  fontSize: '0.72rem',
                  backgroundColor: isActive ? '#eff6ff' : '#e2e8f0',
                  color: isActive ? '#2563eb' : '#64748b',
                  padding: '1px 6px',
                  borderRadius: '999px',
                }}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 1. MANAGE STUDENTS                                       */}
      {/* ======================================================== */}
      {activeTab === 'students' && (
        <div className="card" style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            {/* Search */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f8fafc',
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                width: '300px',
              }}
            >
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search students..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%', fontSize: '0.86rem' }}
              />
            </div>

            {/* Dept Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>Department:</span>
              <select
                value={studentDeptFilter}
                onChange={(e) => setStudentDeptFilter(e.target.value)}
                style={{
                  padding: '7px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              >
                <option value="All">All Departments</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Student Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
                  <th style={{ padding: '12px' }}>Student</th>
                  <th style={{ padding: '12px' }}>Department</th>
                  <th style={{ padding: '12px' }}>Year</th>
                  <th style={{ padding: '12px' }}>Skills</th>
                  <th style={{ padding: '12px' }}>Role</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((s) => (
                  <tr key={s._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img
                        src={s.profileImage}
                        alt={s.name}
                        style={{ width: '36px', height: '36px', borderRadius: '10px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{s.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.email}</div>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span className={`badge badge-${s.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                        {s.department}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#475569' }}>{s.year}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '300px' }}>
                        {s.skills?.slice(0, 3).map((sk) => (
                          <span
                            key={sk}
                            style={{
                              fontSize: '0.7rem',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              backgroundColor: '#f1f5f9',
                              color: '#334155',
                            }}
                          >
                            {sk}
                          </span>
                        ))}
                        {s.skills?.length > 3 && (
                          <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>+{s.skills.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          backgroundColor: s.role === 'admin' ? '#fee2e2' : '#eff6ff',
                          color: s.role === 'admin' ? '#dc2626' : '#2563eb',
                        }}
                      >
                        {s.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. MANAGE ANNOUNCEMENTS                                  */}
      {/* ======================================================== */}
      {activeTab === 'announcements' && (
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>
              Campus Announcements ({announcements.length})
            </h3>
            <button
              onClick={() => setShowAddAnnModal(true)}
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Plus size={16} /> Broadcast New Announcement
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {announcements.map((a) => (
              <div
                key={a._id}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    {a.important && <span className="badge badge-important">Important</span>}
                    <span className={`badge badge-${a.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {a.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{a.date}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>{a.title}</div>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                    {a.content.slice(0, 120)}...
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handleDeleteAnnouncement(a._id)}
                    style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. MANAGE EVENTS                                         */}
      {/* ======================================================== */}
      {activeTab === 'events' && (
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>
              Department Events ({events.length})
            </h3>
            <button
              onClick={() => setShowAddEvModal(true)}
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Plus size={16} /> Add Campus Event
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {events.map((ev) => (
              <div
                key={ev._id}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`badge badge-${ev.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                    {ev.department}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb' }}>
                    {ev.registrations?.length || 0} Registered
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a' }}>{ev.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  📅 {ev.date} • 📍 {ev.location}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                  <button
                    onClick={() => handleDeleteEvent(ev._id)}
                    style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. MANAGE PROJECTS                                       */}
      {/* ======================================================== */}
      {activeTab === 'projects' && (
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
            Collaboration Projects ({projects.length})
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {projects.map((p) => (
              <div
                key={p._id}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className={`badge badge-${p.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {p.department}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>
                      Lead: {p.owner.name}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>{p.title}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <select
                    value={p.status}
                    onChange={(e) => handleProjectStatusChange(p._id, e.target.value)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    <option value="Open">Open</option>
                    <option value="Looking for Members">Looking for Members</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <button
                    onClick={() => handleDeleteProject(p._id)}
                    style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      cursor: 'pointer',
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. MANAGE RESOURCES                                      */}
      {/* ======================================================== */}
      {activeTab === 'resources' && (
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
            Academic Vault Resources ({resources.length})
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {resources.map((r) => (
              <div
                key={r._id}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className={`badge badge-${r.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {r.department}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{r.subject}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>{r.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Uploaded by {r.uploadedBy}</div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                  >
                    Open Link
                  </a>
                  <button
                    onClick={() => handleDeleteResource(r._id)}
                    style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 6. MANAGE COMPLAINTS & RESOLUTION STATUS                 */}
      {/* ======================================================== */}
      {activeTab === 'complaints' && (
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
            Student Complaints & Feedback Tickets ({complaints.length})
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {complaints.map((c) => (
              <div
                key={c._id}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        padding: '2px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {c.department}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      Reported by: {c.anonymous ? '🔒 Anonymous Student' : c.user?.name}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f172a' }}>{c.title}</div>
                  <p style={{ fontSize: '0.85rem', color: '#475569', marginTop: '4px', lineHeight: 1.45 }}>
                    {c.description}
                  </p>
                  {c.adminRemarks && (
                    <div style={{ fontSize: '0.78rem', color: '#059669', marginTop: '6px', fontWeight: 600 }}>
                      Current Note: {c.adminRemarks}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      backgroundColor:
                        c.status === 'Resolved'
                          ? '#dcfce7'
                          : c.status === 'In Progress'
                          ? '#fef3c7'
                          : '#eff6ff',
                      color:
                        c.status === 'Resolved'
                          ? '#15803d'
                          : c.status === 'In Progress'
                          ? '#b45309'
                          : '#1d4ed8',
                    }}
                  >
                    Stage: {c.status}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedComplaint(c);
                      setNewStatus(c.status);
                      setAdminNote(c.adminRemarks || '');
                    }}
                    className="btn btn-primary"
                    style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  >
                    Update Stage & Note
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal: Update Complaint Status */}
      {selectedComplaint && (
        <div className="modal-overlay" onClick={() => setSelectedComplaint(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Update Resolution Stage
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>
              Ticket: <strong>{selectedComplaint.title}</strong>
            </p>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Resolution Stage:
              </label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                }}
              >
                <option value="Submitted">Submitted</option>
                <option value="Under Review">Under Review</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Facility Administrator Action Note:
              </label>
              <textarea
                rows="3"
                value={adminNote}
                onChange={(e) => setAdminNote(e.target.value)}
                placeholder="e.g. Technician dispatched, cable replaced, resolved..."
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.88rem',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => handleUpdateComplaintStatus(selectedComplaint._id)}
                className="btn btn-primary"
                style={{ flex: 1, padding: '10px' }}
              >
                Save & Update Timeline
              </button>
              <button
                onClick={() => setSelectedComplaint(null)}
                className="btn btn-secondary"
                style={{ padding: '10px 18px' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Broadcast Announcement */}
      {showAddAnnModal && (
        <div className="modal-overlay" onClick={() => setShowAddAnnModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Broadcast Announcement
            </h3>
            <form onSubmit={handleCreateAnnouncement} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={annTitle}
                  onChange={(e) => setAnnTitle(e.target.value)}
                  placeholder="e.g. Campus Library Timing Extended for Examinations"
                  style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Category
                  </label>
                  <select
                    value={annCategory}
                    onChange={(e) => setAnnCategory(e.target.value)}
                    style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  >
                    <option value="General">General</option>
                    <option value="Academic">Academic</option>
                    <option value="Examinations">Examinations</option>
                    <option value="Placements">Placements</option>
                    <option value="Workshops">Workshops</option>
                    <option value="Sports">Sports</option>
                    <option value="Hackathons">Hackathons</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={annImportant}
                      onChange={(e) => setAnnImportant(e.target.checked)}
                      style={{ width: '16px', height: '16px' }}
                    />
                    <strong>Mark as Important (Pulsing Badge)</strong>
                  </label>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  External Link (optional)
                </label>
                <input
                  type="url"
                  value={annLink}
                  onChange={(e) => setAnnLink(e.target.value)}
                  placeholder="https://..."
                  style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Announcement Content
                </label>
                <textarea
                  rows="4"
                  required
                  value={annContent}
                  onChange={(e) => setAnnContent(e.target.value)}
                  placeholder="Write full circular notice text..."
                  style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '10px' }}>
                  Broadcast Immediately
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddAnnModal(false)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 18px' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Create Event */}
      {showAddEvModal && (
        <div className="modal-overlay" onClick={() => setShowAddEvModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Add Department Event
            </h3>
            <form onSubmit={handleCreateEvent} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  value={evTitle}
                  onChange={(e) => setEvTitle(e.target.value)}
                  placeholder="e.g. Cloud Security Summit 2K26"
                  style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Department
                  </label>
                  <select
                    value={evDept}
                    onChange={(e) => setEvDept(e.target.value)}
                    style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  >
                    {departments.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    required
                    value={evDate}
                    onChange={(e) => setEvDate(e.target.value)}
                    style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Time
                  </label>
                  <input
                    type="text"
                    required
                    value={evTime}
                    onChange={(e) => setEvTime(e.target.value)}
                    placeholder="10:00 AM - 4:00 PM"
                    style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={evLocation}
                    onChange={(e) => setEvLocation(e.target.value)}
                    placeholder="CSE Seminar Hall"
                    style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Description
                </label>
                <textarea
                  rows="3"
                  required
                  value={evDesc}
                  onChange={(e) => setEvDesc(e.target.value)}
                  placeholder="Outline the event schedule, rules, and speaker..."
                  style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  External Registration Link (Real non-duplicate link)
                </label>
                <input
                  type="url"
                  value={evUrl}
                  onChange={(e) => setEvUrl(e.target.value)}
                  placeholder="https://..."
                  style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '10px' }}>
                  Publish Event
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddEvModal(false)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 18px' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
