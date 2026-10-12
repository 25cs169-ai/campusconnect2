import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import {
  AlertCircle,
  Plus,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  ShieldAlert,
  HelpCircle,
  X,
  UserCheck,
  Send,
  MessageSquare,
} from 'lucide-react';

const ComplaintsPage = () => {
  const { user, showToast } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter
  const [filterStatus, setFilterStatus] = useState('All');

  // Submit Complaint Modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [title, setTitle] = useState('');
  const [dept, setDept] = useState('IT & Infrastructure');
  const [category, setCategory] = useState('Technical problems');
  const [description, setDescription] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [priority, setPriority] = useState('Medium');
  const [submitting, setSubmitting] = useState(false);

  const categories = [
    'Campus issues',
    'Infrastructure problems',
    'Technical problems',
    'General complaints',
    'Feedback',
  ];

  const statuses = ['Submitted', 'Under Review', 'In Progress', 'Resolved'];

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const res = await api.getComplaints();
      if (res.success) {
        setComplaints(res.complaints);
      }
    } catch (err) {
      console.error('Error fetching complaints:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleSubmitComplaint = async (e) => {
    e.preventDefault();
    if (!title || !description) return;
    try {
      setSubmitting(true);
      const res = await api.createComplaint({
        title,
        department: dept,
        category,
        description,
        anonymous,
        priority,
      });
      if (res.success) {
        setComplaints([res.complaint, ...complaints]);
        setShowSubmitModal(false);
        setTitle('');
        setDescription('');
        setAnonymous(false);
        showToast('Ticket submitted! You can track resolution live.', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to submit complaint', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusStepIndex = (status) => {
    switch (status) {
      case 'Submitted':
        return 0;
      case 'Under Review':
        return 1;
      case 'In Progress':
        return 2;
      case 'Resolved':
        return 3;
      default:
        return 0;
    }
  };

  const filteredComplaints = complaints.filter((c) => {
    if (filterStatus === 'All') return true;
    return c.status === filterStatus;
  });

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
          marginBottom: '26px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              backgroundColor: '#fff7ed',
              color: '#ea580c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
            }}
          >
            📝
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              Campus Complaints & Feedback
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Transparent campus issue reporting and resolution timeline tracking.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="btn btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.9rem' }}
        >
          <Plus size={18} /> Lodge Campus Issue / Feedback
        </button>
      </div>

      {/* Filter Bar */}
      <div
        className="card"
        style={{
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', marginRight: '6px' }}>
          Filter by Stage:
        </span>
        {['All', ...statuses].map((st) => {
          const isSelected = filterStatus === st;
          return (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              style={{
                padding: '5px 14px',
                borderRadius: '8px',
                border: isSelected ? '1px solid #ea580c' : '1px solid #e2e8f0',
                backgroundColor: isSelected ? '#ea580c' : '#ffffff',
                color: isSelected ? '#ffffff' : '#475569',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {st}
            </button>
          );
        })}
        <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: 'auto' }}>
          {filteredComplaints.length} Reported Issue(s)
        </span>
      </div>

      {/* Complaints List with Visual Timelines */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
          Loading complaint history...
        </div>
      ) : filteredComplaints.length === 0 ? (
        <div className="card" style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>
          <div style={{ fontSize: '42px', marginBottom: '10px' }}>🎉</div>
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b' }}>No Issues Reported Under This Filter</h3>
          <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
            All campus systems and infrastructure are operating smoothly.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredComplaints.map((c) => {
            const currentStepIdx = getStatusStepIndex(c.status);
            return (
              <div
                key={c._id}
                className="card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                {/* Header line */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          padding: '3px 8px',
                          borderRadius: '6px',
                        }}
                      >
                        {c.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: '#eff6ff',
                          color: '#1d4ed8',
                          padding: '3px 8px',
                          borderRadius: '6px',
                        }}
                      >
                        {c.department}
                      </span>
                      {c.anonymous && (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            backgroundColor: '#fef3c7',
                            color: '#b45309',
                            padding: '3px 8px',
                            borderRadius: '6px',
                          }}
                        >
                          🔒 Anonymous Report
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
                      {c.title}
                    </h3>
                  </div>

                  {/* Priority Tag */}
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      backgroundColor:
                        c.priority === 'Urgent'
                          ? '#fee2e2'
                          : c.priority === 'High'
                          ? '#ffedd5'
                          : '#eff6ff',
                      color:
                        c.priority === 'Urgent'
                          ? '#dc2626'
                          : c.priority === 'High'
                          ? '#c2410c'
                          : '#2563eb',
                    }}
                  >
                    Priority: {c.priority || 'Medium'}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                  {c.description}
                </p>

                {/* ======================================================== */}
                {/* 26. VISUAL PROGRESS TIMELINE                             */}
                {/* ======================================================== */}
                <div
                  style={{
                    padding: '20px',
                    borderRadius: '14px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#64748b', marginBottom: '16px' }}>
                    RESOLUTION TIMELINE:
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      position: 'relative',
                      gap: '12px',
                    }}
                  >
                    {/* Progress Track Line */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '12%',
                        right: '12%',
                        height: '4px',
                        backgroundColor: '#e2e8f0',
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${(currentStepIdx / 3) * 100}%`,
                          backgroundColor: '#10b981',
                          transition: 'width 0.4s ease',
                        }}
                      />
                    </div>

                    {statuses.map((step, idx) => {
                      const isCompleted = idx <= currentStepIdx;
                      const isCurrent = idx === currentStepIdx;
                      return (
                        <div
                          key={step}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              backgroundColor: isCompleted ? '#10b981' : '#ffffff',
                              border: isCurrent
                                ? '3px solid #059669'
                                : isCompleted
                                ? '2px solid #10b981'
                                : '2px solid #cbd5e1',
                              color: isCompleted ? 'white' : '#94a3b8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '13px',
                              fontWeight: 700,
                              boxShadow: isCurrent ? '0 0 0 4px rgba(16, 185, 129, 0.2)' : 'none',
                              marginBottom: '8px',
                            }}
                          >
                            {isCompleted ? '✓' : idx + 1}
                          </div>
                          <div
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: isCurrent ? 700 : 600,
                              color: isCurrent ? '#047857' : isCompleted ? '#1e293b' : '#94a3b8',
                            }}
                          >
                            {step}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Admin Remarks */}
                  {c.adminRemarks && (
                    <div
                      style={{
                        marginTop: '16px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.82rem',
                        color: '#334155',
                      }}
                    >
                      <span style={{ fontWeight: 700, color: '#2563eb' }}>Facility Overseer Note: </span>
                      {c.adminRemarks}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* 25. LODGE COMPLAINT MODAL                                */}
      {/* ======================================================== */}
      {showSubmitModal && (
        <div className="modal-overlay" onClick={() => setShowSubmitModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                Lodge Campus Issue or Feedback
              </h2>
              <button
                onClick={() => setShowSubmitModal(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitComplaint} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Complaint Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wi-Fi router disconnection in Central Library 2nd floor"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Department / Area
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CSE Labs, Hostel 3, Cafeteria"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Issue Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Priority Level
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['Low', 'Medium', 'High', 'Urgent'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        border: priority === p ? '1px solid #ea580c' : '1px solid #cbd5e1',
                        backgroundColor: priority === p ? '#fff7ed' : '#ffffff',
                        color: priority === p ? '#ea580c' : '#475569',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Detailed Description of Problem
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Provide precise location details, when the issue occurred, and specific equipment involved..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              {/* Anonymous Checkbox */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                }}
              >
                <input
                  type="checkbox"
                  id="anonCheck"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <label htmlFor="anonCheck" style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', fontWeight: 500 }}>
                  <strong>Submit Anonymously</strong> — Protect my student identity. The facility admin will not see my name or student email.
                </label>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '11px', borderRadius: '10px' }}
                >
                  {submitting ? 'Registering Issue...' : 'Submit Campus Complaint'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="btn btn-secondary"
                  style={{ padding: '11px 20px', borderRadius: '10px' }}
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

export default ComplaintsPage;
