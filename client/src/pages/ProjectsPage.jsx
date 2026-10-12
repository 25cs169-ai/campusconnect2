import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import confetti from 'canvas-confetti';
import {
  Users,
  Plus,
  Search,
  Filter,
  Sparkles,
  GitBranch,
  CheckCircle,
  ExternalLink,
  Code,
  UserCheck,
  Send,
  MessageSquare,
  X,
  Target,
  Award,
} from 'lucide-react';

const ProjectsPage = () => {
  const { user, showToast } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('hub'); // 'hub' | 'matching'

  // Smart Matching state
  const [smartMatches, setSmartMatches] = useState([]);
  const [recommendedProjects, setRecommendedProjects] = useState([]);
  const [matchLoading, setMatchLoading] = useState(false);
  const [customSkills, setCustomSkills] = useState('');
  const [customDept, setCustomDept] = useState('');
  const [connectedStudents, setConnectedStudents] = useState(new Set());

  // Post Project Modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDept, setNewDept] = useState('CSE');
  const [newDesc, setNewDesc] = useState('');
  const [newSkills, setNewSkills] = useState('React, Python, Machine Learning');
  const [newMaxMembers, setNewMaxMembers] = useState(4);
  const [newGithub, setNewGithub] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Selected project for details
  const [selectedProject, setSelectedProject] = useState(null);

  const departments = ['All', 'CSE', 'ECE', 'AI & ML', 'IT', 'EEE', 'MECH', 'CIVIL', 'MBA'];
  const statuses = ['All', 'Open', 'Looking for Members', 'In Progress', 'Completed'];

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await api.getProjects({
        department: selectedDept,
        status: selectedStatus,
      });
      if (res.success) {
        setProjects(res.projects);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSmartMatches = async () => {
    try {
      setMatchLoading(true);
      const res = await api.getMatches({
        skills: customSkills || (user?.skills ? user.skills.join(',') : ''),
        department: customDept || user?.department || '',
      });
      if (res.success) {
        setSmartMatches(res.teammateMatches);
        setRecommendedProjects(res.recommendedProjects || []);
      }
    } catch (err) {
      console.error('Error calculating smart matches:', err);
    } finally {
      setMatchLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [selectedDept, selectedStatus]);

  useEffect(() => {
    fetchSmartMatches();
  }, [customSkills, customDept]);

  const handleJoinProject = async (projectId) => {
    try {
      const res = await api.joinProject(projectId, 'Contributor');
      if (res.success) {
        setProjects((prev) =>
          prev.map((p) => (p._id === projectId ? res.project : p))
        );
        if (selectedProject && selectedProject._id === projectId) {
          setSelectedProject(res.project);
        }
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#2563eb', '#7c3aed'],
        });
        showToast(`You have joined ${res.project.title}!`, 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to join project', 'error');
    }
  };

  const handleCreateProjectSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;
    try {
      setSubmitting(true);
      const res = await api.createProject({
        title: newTitle,
        description: newDesc,
        department: newDept,
        skills: newSkills.split(',').map((s) => s.trim()),
        maxMembers: Number(newMaxMembers),
        githubUrl: newGithub,
      });
      if (res.success) {
        setProjects([res.project, ...projects]);
        setShowCreateModal(false);
        setNewTitle('');
        setNewDesc('');
        setNewGithub('');
        showToast('Project idea posted to collaboration hub!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to create project', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleConnectStudent = (studentId, studentName) => {
    setConnectedStudents((prev) => new Set(prev).add(studentId));
    showToast(`Collaboration invitation sent to ${studentName}!`, 'success');
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
          marginBottom: '26px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
            }}
          >
            🤝
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              Project Collaboration Hub
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Connect with skilled campus teammates, form multidisciplinary squads, and build real-world systems.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn btn-primary"
            style={{ padding: '10px 18px', fontSize: '0.9rem' }}
          >
            <Plus size={18} /> Post Project Idea
          </button>
        </div>
      </div>

      {/* Navigation tabs between Project Directory and Smart Teammate Matching */}
      <div
        style={{
          display: 'flex',
          backgroundColor: '#f1f5f9',
          padding: '4px',
          borderRadius: '12px',
          width: 'fit-content',
          marginBottom: '24px',
        }}
      >
        <button
          onClick={() => setActiveTab('hub')}
          style={{
            padding: '8px 20px',
            borderRadius: '9px',
            border: 'none',
            backgroundColor: activeTab === 'hub' ? '#ffffff' : 'transparent',
            color: activeTab === 'hub' ? '#2563eb' : '#64748b',
            fontWeight: 600,
            fontSize: '0.88rem',
            cursor: 'pointer',
            boxShadow: activeTab === 'hub' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
          }}
        >
          All Collaboration Projects ({projects.length})
        </button>

        <button
          onClick={() => setActiveTab('matching')}
          style={{
            padding: '8px 20px',
            borderRadius: '9px',
            border: 'none',
            backgroundColor: activeTab === 'matching' ? '#ffffff' : 'transparent',
            color: activeTab === 'matching' ? '#7c3aed' : '#64748b',
            fontWeight: 600,
            fontSize: '0.88rem',
            cursor: 'pointer',
            boxShadow: activeTab === 'matching' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Sparkles size={16} color="#7c3aed" />
          💡 Smart Teammate Matching
          <span
            style={{
              fontSize: '0.68rem',
              backgroundColor: '#f3e8ff',
              color: '#7c3aed',
              padding: '1px 6px',
              borderRadius: '999px',
            }}
          >
            AI Powered
          </span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* 21. SMART TEAMMATE MATCHING (INNOVATION FEATURE)         */}
      {/* ======================================================== */}
      {activeTab === 'matching' && (
        <div style={{ marginBottom: '32px' }}>
          {/* Smart Match Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)',
              border: '1px solid #ddd6fe',
              borderRadius: '20px',
              padding: '24px 28px',
              marginBottom: '26px',
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={20} />
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#4c1d95' }}>
                Smart Teammate Matching Engine
              </h2>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#5b21b6', lineHeight: 1.5, maxWidth: '800px' }}>
              The system analyzes student skillsets, department synergies, and collaborative project requirements
              to compute multi-factor compatibility scores. Prioritizes matching skills, shared departmental domain, and complementary competencies.
            </p>

            {/* Quick Filter Inputs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '14px',
                marginTop: '18px',
              }}
            >
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4c1d95', display: 'block', marginBottom: '4px' }}>
                  Target Skills (comma separated):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Python, React, AI, Machine Learning"
                  value={customSkills}
                  onChange={(e) => setCustomSkills(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: '1px solid #c4b5fd',
                    backgroundColor: 'white',
                    fontSize: '0.85rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4c1d95', display: 'block', marginBottom: '4px' }}>
                  Target Department:
                </label>
                <select
                  value={customDept}
                  onChange={(e) => setCustomDept(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: '1px solid #c4b5fd',
                    backgroundColor: 'white',
                    fontSize: '0.85rem',
                  }}
                >
                  <option value="">All Departments (Multi-disciplinary)</option>
                  {departments.filter((d) => d !== 'All').map((d) => (
                    <option key={d} value={d}>
                      {d} Department
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Recommended Teammates Grid */}
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
            Recommended Student Teammates
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
              marginBottom: '36px',
            }}
          >
            {smartMatches.map((m) => {
              const student = m.student;
              const isConnected = connectedStudents.has(student._id);
              return (
                <div
                  key={student._id}
                  className="card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    border: m.matchPercentage >= 80 ? '1.5px solid #a78bfa' : '1px solid #e2e8f0',
                    boxShadow: m.matchPercentage >= 80 ? '0 8px 20px -3px rgba(124, 58, 237, 0.12)' : 'none',
                  }}
                >
                  {/* Top Bar with Match Score */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={student.profileImage}
                        alt={student.name}
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          objectFit: 'cover',
                          border: '2px solid #ddd6fe',
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f172a' }}>
                          {student.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                          {student.department} • {student.year}
                        </div>
                      </div>
                    </div>

                    {/* Match Score Badge */}
                    <div
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#f5f3ff',
                        padding: '6px 12px',
                        borderRadius: '12px',
                        border: '1px solid #ddd6fe',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 800,
                          color: '#7c3aed',
                          lineHeight: 1,
                        }}
                      >
                        {m.matchPercentage}%
                      </div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#6d28d9' }}>
                        Match
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.45 }}>
                    {student.bio}
                  </p>

                  {/* Common & All Skills */}
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', marginBottom: '6px' }}>
                      COMMON SKILLS ({m.commonSkills.length}):
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {m.commonSkills.map((sk) => (
                        <span
                          key={sk}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '999px',
                            backgroundColor: '#eff6ff',
                            color: '#1d4ed8',
                            border: '1px solid #bfdbfe',
                          }}
                        >
                          ✓ {sk}
                        </span>
                      ))}
                      {student.skills
                        .filter((sk) => !m.commonSkills.includes(sk))
                        .map((sk) => (
                          <span
                            key={sk}
                            style={{
                              fontSize: '0.72rem',
                              padding: '3px 8px',
                              borderRadius: '999px',
                              backgroundColor: '#f1f5f9',
                              color: '#64748b',
                            }}
                          >
                            {sk}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Connect / Invite Button */}
                  <button
                    onClick={() => handleConnectStudent(student._id, student.name)}
                    disabled={isConnected}
                    className={isConnected ? 'btn btn-secondary' : 'btn btn-primary'}
                    style={{
                      width: '100%',
                      padding: '9px',
                      fontSize: '0.88rem',
                      marginTop: 'auto',
                    }}
                  >
                    {isConnected ? (
                      <>
                        <CheckCircle size={15} color="#10b981" /> Request Sent
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Connect & Invite to Project
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 19. PROJECT DIRECTORY / ALL COLLABORATIONS               */}
      {/* ======================================================== */}
      {activeTab === 'hub' && (
        <>
          {/* Department and Status filter bar */}
          <div
            className="card"
            style={{
              padding: '16px 20px',
              marginBottom: '26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginRight: '6px' }}>
                Department:
              </span>
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '999px',
                      border: isSelected ? '1px solid #2563eb' : '1px solid #e2e8f0',
                      backgroundColor: isSelected ? '#2563eb' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginRight: '6px' }}>
                Status:
              </span>
              {statuses.map((st) => {
                const isSelected = selectedStatus === st;
                return (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: isSelected ? '1px solid #7c3aed' : '1px solid #e2e8f0',
                      backgroundColor: isSelected ? '#f5f3ff' : '#ffffff',
                      color: isSelected ? '#7c3aed' : '#64748b',
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
          </div>

          {/* Project Cards Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
              Loading project collaboration directory...
            </div>
          ) : projects.length === 0 ? (
            <div className="card" style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>
              <div style={{ fontSize: '42px', marginBottom: '10px' }}>🤝</div>
              <h3 style={{ fontSize: '1.2rem', color: '#1e293b' }}>No Projects Found</h3>
              <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
                Be the first to post a new project idea for your department!
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
              {projects.map((proj) => {
                const isMember =
                  user &&
                  proj.members &&
                  proj.members.some((m) => m.email === user.email);

                const isOwner = user && proj.owner && proj.owner.email === user.email;

                return (
                  <div
                    key={proj._id}
                    className="card"
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      position: 'relative',
                    }}
                  >
                    {/* Top Badges */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={`badge badge-${proj.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                        {proj.department}
                      </span>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '999px',
                          backgroundColor:
                            proj.status === 'Open'
                              ? '#dcfce7'
                              : proj.status === 'Looking for Members'
                              ? '#eff6ff'
                              : proj.status === 'In Progress'
                              ? '#fef3c7'
                              : '#f1f5f9',
                          color:
                            proj.status === 'Open'
                              ? '#15803d'
                              : proj.status === 'Looking for Members'
                              ? '#1d4ed8'
                              : proj.status === 'In Progress'
                              ? '#b45309'
                              : '#475569',
                        }}
                      >
                        {proj.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '1.22rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        cursor: 'pointer',
                        lineHeight: 1.3,
                      }}
                      onClick={() => setSelectedProject(proj)}
                    >
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, flex: 1 }}>
                      {proj.description}
                    </p>

                    {/* Required Skills */}
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', marginBottom: '6px' }}>
                        REQUIRED SKILLS:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {proj.skills.map((sk) => (
                          <span
                            key={sk}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              padding: '2px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#f1f5f9',
                              color: '#334155',
                            }}
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Team Members & Owner */}
                    <div
                      style={{
                        padding: '12px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>
                          PROJECT LEAD
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>
                          {proj.owner.name} ({proj.owner.department})
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>
                          TEAM ROSTER
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb' }}>
                          {proj.members ? proj.members.length : 1} / {proj.maxMembers || 4} Members
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginBottom: '4px' }}>
                        <span>Progress</span>
                        <span>{proj.progress || 25}%</span>
                      </div>
                      <div
                        style={{
                          height: '6px',
                          backgroundColor: '#e2e8f0',
                          borderRadius: '999px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${proj.progress || 25}%`,
                            background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                      {isMember ? (
                        <div
                          style={{
                            flex: 1,
                            padding: '9px',
                            borderRadius: '10px',
                            backgroundColor: '#ecfdf5',
                            color: '#059669',
                            fontWeight: 600,
                            fontSize: '0.84rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                          }}
                        >
                          <CheckCircle size={15} /> Member of Team
                        </div>
                      ) : (
                        <button
                          onClick={() => handleJoinProject(proj._id)}
                          className="btn btn-primary"
                          style={{ flex: 1, padding: '9px', fontSize: '0.88rem' }}
                        >
                          Join Project
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="btn btn-secondary"
                        style={{ padding: '9px 14px', fontSize: '0.88rem' }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* ======================================================== */}
      {/* POST PROJECT IDEA MODAL                                  */}
      {/* ======================================================== */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                Post Project Idea
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateProjectSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Autonomous Campus Delivery Drone"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
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
                    Department
                  </label>
                  <select
                    value={newDept}
                    onChange={(e) => setNewDept(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  >
                    {departments.filter((d) => d !== 'All').map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Max Team Members
                  </label>
                  <input
                    type="number"
                    min="2"
                    max="8"
                    value={newMaxMembers}
                    onChange={(e) => setNewMaxMembers(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Required Skills (comma separated)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Python, ROS, OpenCV, Raspberry Pi"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
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
                  Project Description & Goals
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Explain the project scope, intended deliverables, and who you're looking for..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
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
                  GitHub Repository (optional)
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/username/project"
                  value={newGithub}
                  onChange={(e) => setNewGithub(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '11px', borderRadius: '10px' }}
                >
                  {submitting ? 'Publishing...' : 'Publish to Collaboration Hub'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
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

      {/* ======================================================== */}
      {/* PROJECT DETAILS MODAL                                    */}
      {/* ======================================================== */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className={`badge badge-${selectedProject.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {selectedProject.department}
                </span>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', backgroundColor: '#eff6ff', color: '#1d4ed8' }}>
                  {selectedProject.status}
                </span>
              </div>
              <button onClick={() => setSelectedProject(null)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              {selectedProject.title}
            </h2>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
              {selectedProject.description}
            </p>

            {/* Team Roster */}
            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b', marginBottom: '10px' }}>
                TEAM MEMBERS ({selectedProject.members?.length || 1} / {selectedProject.maxMembers || 4}):
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedProject.members?.map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                    <div style={{ fontWeight: 600, color: '#334155' }}>
                      👤 {m.name}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', backgroundColor: '#e2e8f0', padding: '2px 8px', borderRadius: '6px' }}>
                      {m.role || 'Contributor'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {selectedProject.githubUrl && (
              <div style={{ marginBottom: '20px' }}>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <GitBranch size={16} /> View GitHub Repository
                </a>
              </div>
            )}

            <button
              onClick={() => handleJoinProject(selectedProject._id)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '11px', borderRadius: '10px' }}
            >
              Join Project Collaboration Squad
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
