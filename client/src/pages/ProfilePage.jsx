import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import {
  User,
  Mail,
  GraduationCap,
  Calendar,
  Code,
  Plus,
  X,
  Edit2,
  Check,
  FolderGit2,
  CalendarCheck,
  Award,
  Sparkles,
} from 'lucide-react';

const ProfilePage = () => {
  const { user, updateUserProfile, showToast, setCurrentPage } = useAuth();

  const [skills, setSkills] = useState(user?.skills || []);
  const [newSkillInput, setNewSkillInput] = useState('');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioText, setBioText] = useState(user?.bio || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.profileImage || '');

  const [registeredEventsList, setRegisteredEventsList] = useState([]);
  const [joinedProjectsList, setJoinedProjectsList] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (user) {
      setSkills(user.skills || []);
      setBioText(user.bio || '');
      setAvatarUrl(user.profileImage || '');
    }
  }, [user]);

  useEffect(() => {
    const fetchStudentEngagements = async () => {
      try {
        const [evRes, projRes] = await Promise.all([
          api.getEvents(),
          api.getProjects(),
        ]);

        if (evRes.success && user) {
          const userEvents = evRes.events.filter(
            (e) => e.registrations && e.registrations.includes(user._id)
          );
          setRegisteredEventsList(userEvents);
        }

        if (projRes.success && user) {
          const userProjects = projRes.projects.filter(
            (p) =>
              (p.owner && p.owner.email === user.email) ||
              (p.members && p.members.some((m) => m.email === user.email))
          );
          setJoinedProjectsList(userProjects);
        }
      } catch (err) {
        console.error('Error fetching student engagements:', err);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStudentEngagements();
  }, [user]);

  const handleAddSkill = async (e) => {
    e.preventDefault();
    const trimmed = newSkillInput.trim();
    if (!trimmed || skills.includes(trimmed)) return;

    const updatedSkills = [...skills, trimmed];
    setSkills(updatedSkills);
    setNewSkillInput('');

    try {
      const res = await api.updateProfile({ skills: updatedSkills });
      if (res.success) {
        updateUserProfile(res.user);
        showToast(`Added skill: "${trimmed}"`, 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to update skills', 'error');
    }
  };

  const handleRemoveSkill = async (skillToRemove) => {
    const updatedSkills = skills.filter((s) => s !== skillToRemove);
    setSkills(updatedSkills);

    try {
      const res = await api.updateProfile({ skills: updatedSkills });
      if (res.success) {
        updateUserProfile(res.user);
        showToast(`Removed skill: "${skillToRemove}"`, 'info');
      }
    } catch (err) {
      showToast(err.message || 'Failed to update skills', 'error');
    }
  };

  const handleSaveBio = async () => {
    try {
      const res = await api.updateProfile({ bio: bioText, profileImage: avatarUrl });
      if (res.success) {
        updateUserProfile(res.user);
        setIsEditingBio(false);
        showToast('Profile bio updated!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to update profile', 'error');
    }
  };

  return (
    <div className="page-wrapper">
      {/* Profile Header Banner */}
      <div
        className="card"
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '28px',
          border: '1px solid #bfdbfe',
        }}
      >
        {/* Decorative Top Gradient */}
        <div
          style={{
            height: '140px',
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7c3aed 100%)',
          }}
        />

        <div style={{ padding: '0 32px 32px', marginTop: '-55px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            {/* Avatar & Student Name */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
              <img
                src={
                  avatarUrl ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'
                }
                alt={user?.name}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  border: '4px solid white',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
                  backgroundColor: 'white',
                }}
              />
              <div style={{ marginBottom: '8px' }}>
                <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  {user?.name || 'Student Name'}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <span className={`badge badge-${user?.department?.toLowerCase().replace(/[^a-z]/g, '') || 'cse'}`}>
                    {user?.department || 'CSE'}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    {user?.year || '3rd Year'} • {user?.role === 'admin' ? 'Administrator' : 'Undergraduate'}
                  </span>
                </div>
              </div>
            </div>

            {/* Edit Profile Toggle Button */}
            <button
              onClick={() => setIsEditingBio(!isEditingBio)}
              className="btn btn-secondary"
              style={{ padding: '9px 18px', fontSize: '0.88rem', marginBottom: '8px' }}
            >
              <Edit2 size={15} /> {isEditingBio ? 'Done Editing' : 'Edit Profile'}
            </button>
          </div>

          {/* Bio section */}
          <div style={{ marginTop: '20px', maxWidth: '750px' }}>
            {isEditingBio ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    Avatar Image URL:
                  </label>
                  <input
                    type="url"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    placeholder="https://..."
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    Student Bio / Research Interests:
                  </label>
                  <textarea
                    rows="3"
                    value={bioText}
                    onChange={(e) => setBioText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
                <button
                  onClick={handleSaveBio}
                  className="btn btn-primary"
                  style={{ width: 'fit-content', padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  <Check size={16} /> Save Changes
                </button>
              </div>
            ) : (
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                {bioText || 'No bio written yet. Click "Edit Profile" to share your background!'}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '14px', fontSize: '0.85rem', color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={15} color="#2563eb" /> {user?.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={15} color="#7c3aed" /> Dept: {user?.department}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' }}>
        {/* ======================================================== */}
        {/* SKILLS MANAGEMENT                                        */}
        {/* ======================================================== */}
        <div className="card" style={{ padding: '26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code size={20} color="#2563eb" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
                Skills & Technologies
              </h2>
            </div>
            <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
              {skills.length} Skills Listed
            </span>
          </div>

          <p style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '16px', lineHeight: 1.45 }}>
            These competencies directly power the <strong>Smart Teammate Matching Engine</strong> when forming hackathon & project teams.
          </p>

          {/* Add Skill Form */}
          <form onSubmit={handleAddSkill} style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
            <input
              type="text"
              placeholder="Add skill (e.g. Flutter, Docker, PyTorch)..."
              value={newSkillInput}
              onChange={(e) => setNewSkillInput(e.target.value)}
              style={{
                flex: 1,
                padding: '9px 14px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '0.88rem',
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '9px 16px', fontSize: '0.88rem' }}
            >
              <Plus size={16} /> Add
            </button>
          </form>

          {/* Skill Badges with Remove 'X' */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1d4ed8',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#93c5fd',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#93c5fd')}
                  title={`Remove ${skill}`}
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* ENGAGEMENTS: JOINED PROJECTS & REGISTERED EVENTS         */}
        {/* ======================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Projects Joined */}
          <div className="card" style={{ padding: '26px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FolderGit2 size={20} color="#7c3aed" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
                  Projects Joined ({joinedProjectsList.length})
                </h2>
              </div>
              <button
                onClick={() => setCurrentPage('projects')}
                style={{ background: 'none', border: 'none', color: '#7c3aed', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Explore Hub →
              </button>
            </div>

            {joinedProjectsList.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                You haven't joined any projects yet. Check out the Collaboration Hub!
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {joinedProjectsList.map((p) => (
                  <div
                    key={p._id}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1e293b' }}>
                        {p.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {p.department} • {p.status}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: '#f3e8ff',
                        color: '#7c3aed',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {p.progress || 25}% Done
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Registered Events */}
          <div className="card" style={{ padding: '26px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CalendarCheck size={20} color="#059669" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
                  Registered Events ({registeredEventsList.length})
                </h2>
              </div>
              <button
                onClick={() => setCurrentPage('events')}
                style={{ background: 'none', border: 'none', color: '#059669', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}
              >
                View Events →
              </button>
            </div>

            {registeredEventsList.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                No registered events found. Register for upcoming department hackathons!
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {registeredEventsList.map((ev) => (
                  <div
                    key={ev._id}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#166534' }}>
                        {ev.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#15803d' }}>
                        📅 {ev.date} • {ev.location}
                      </div>
                    </div>
                    <span className={`badge badge-${ev.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      {ev.department}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
