import React, { useState } from 'react';
import ThreeCampusScene from '../components/ThreeCampusScene';
import { useAuth } from '../context/AuthContext';
import {
  Lock,
  Mail,
  User,
  GraduationCap,
  BookOpen,
  Code,
  ArrowRight,
  Sparkles,
  Check,
  ShieldCheck,
} from 'lucide-react';

const LoginPage = () => {
  const { login, register, demoLogin } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showForgotNotice, setShowForgotNotice] = useState(false);

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regDepartment, setRegDepartment] = useState('CSE');
  const [regYear, setRegYear] = useState('3rd Year');
  const [regSkills, setRegSkills] = useState(['Python', 'React', 'AI']);

  const departments = ['CSE', 'ECE', 'AI & ML', 'IT', 'EEE', 'MECH', 'CIVIL', 'MBA', 'Other'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'];
  const availableSkills = [
    'Python',
    'Java',
    'C++',
    'JavaScript',
    'React',
    'Node.js',
    'AI',
    'Machine Learning',
    'Arduino',
    'IoT',
    'UI/UX',
    'Cloud Computing',
    'Cybersecurity',
  ];

  const toggleSkill = (skill) => {
    if (regSkills.includes(skill)) {
      setRegSkills(regSkills.filter((s) => s !== skill));
    } else {
      setRegSkills([...regSkills, skill]);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setSubmitting(true);
    await login(email, password);
    setSubmitting(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) return;
    setSubmitting(true);
    await register({
      name: regName,
      email: regEmail,
      password: regPassword,
      department: regDepartment,
      year: regYear,
      skills: regSkills,
    });
    setSubmitting(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f5ff',
      }}
    >
      {/* ======================================================== */}
      {/* 3D THREE.JS CAMPUS CANVAS (EXCLUSIVE TO LOGIN PAGE)      */}
      {/* ======================================================== */}
      <ThreeCampusScene />

      {/* Campus Hero Left Information Panel */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '60px',
          maxWidth: '620px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          pointerEvents: 'auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '8px 16px',
            borderRadius: '999px',
            border: '1px solid #bfdbfe',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.08)',
            width: 'fit-content',
          }}
        >
          <Sparkles size={16} color="#2563eb" />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1d4ed8' }}>
            Next-Gen Academic & Collaboration Ecosystem
          </span>
        </div>

        <div>
          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            🎓 CampusConnect
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#2563eb',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginTop: '6px',
            }}
          >
            Connect • Collaborate • Grow
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              marginTop: '12px',
              lineHeight: 1.6,
              maxWidth: '520px',
            }}
          >
            An integrated student management and collaboration platform uniting campus announcements,
            department hackathons, student projects, peer resources, and smart teammate matching.
          </p>
        </div>

        {/* 3D Features badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[
            '🏛️ Interactive 3D Campus Experience',
            '📢 Real-Time Announcements',
            '🤝 Smart Teammate Matching (AI)',
            '📅 Department-Wise Events',
            '📚 Peer Study Notes Vault',
            '📝 Live Issue Resolution Tracker',
          ].map((tag, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#334155',
                boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Quick Demo Logins for Lab Evaluators */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '16px 20px',
            border: '1px solid #bfdbfe',
            boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.1)',
            maxWidth: '500px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b' }}>
              ⚡ 1-Click Demo Evaluation Credentials:
            </span>
            <span style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>Lab Ready</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => demoLogin('student')}
              style={{
                flex: 1,
                padding: '9px 12px',
                borderRadius: '10px',
                border: '1px solid #bfdbfe',
                backgroundColor: '#eff6ff',
                color: '#1d4ed8',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dbeafe')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#eff6ff')}
            >
              <User size={15} /> Student (Rahul Kumar)
            </button>
            <button
              onClick={() => demoLogin('admin')}
              style={{
                flex: 1,
                padding: '9px 12px',
                borderRadius: '10px',
                border: '1px solid #e9d5ff',
                backgroundColor: '#f5f3ff',
                color: '#7c3aed',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ede9fe')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f3ff')}
            >
              <ShieldCheck size={15} /> Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Right Modern Glassmorphic Form Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginRight: '60px',
          width: '460px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.2), 0 0 0 1px rgba(191, 219, 254, 0.4)',
          padding: '36px',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
              margin: '0 auto 12px',
              color: 'white',
              boxShadow: '0 10px 20px -3px rgba(37, 99, 235, 0.3)',
            }}
          >
            🎓
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0f172a' }}>
            {isRegister ? 'Create Student Account' : 'Welcome to CampusConnect'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
            {isRegister
              ? 'Join your department and collaborate with peers'
              : 'Sign in to access your student portal and events'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#f1f5f9',
            padding: '4px',
            borderRadius: '12px',
            marginBottom: '22px',
          }}
        >
          <button
            type="button"
            onClick={() => setIsRegister(false)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '9px',
              border: 'none',
              background: !isRegister ? '#ffffff' : 'transparent',
              color: !isRegister ? '#2563eb' : '#64748b',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              boxShadow: !isRegister ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(true)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '9px',
              border: 'none',
              background: isRegister ? '#ffffff' : 'transparent',
              color: isRegister ? '#2563eb' : '#64748b',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              boxShadow: isRegister ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Create Account
          </button>
        </div>

        {/* ========================================== */}
        {/* LOGIN FORM                                 */}
        {/* ========================================== */}
        {!isRegister ? (
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Campus Email
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '10px 14px',
                }}
              >
                <Mail size={18} color="#94a3b8" />
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@campus.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotNotice(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2563eb',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Forgot Password?
                </button>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '10px 14px',
                }}
              >
                <Lock size={18} color="#94a3b8" />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                  }}
                />
              </div>
            </div>

            {showForgotNotice && (
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '10px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  fontSize: '0.8rem',
                  color: '#1d4ed8',
                }}
              >
                💡 Password reset: For demo accounts, use <code>campus123</code> or contact campus IT admin.
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.95rem',
                borderRadius: '12px',
                marginTop: '6px',
              }}
            >
              {submitting ? 'Authenticating...' : 'Login to Dashboard'}
              <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          /* ========================================== */
          /* STUDENT REGISTRATION FORM                  */
          /* ========================================== */
          <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                Full Name
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
              >
                <User size={17} color="#94a3b8" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Kumar"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                College Email
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
              >
                <Mail size={17} color="#94a3b8" />
                <input
                  type="email"
                  required
                  placeholder="student@campus.edu"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                Password
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
              >
                <Lock size={17} color="#94a3b8" />
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            {/* Department Dropdown */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                  Department
                </label>
                <select
                  value={regDepartment}
                  onChange={(e) => setRegDepartment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    fontSize: '0.88rem',
                    color: '#0f172a',
                    outline: 'none',
                  }}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                  Academic Year
                </label>
                <select
                  value={regYear}
                  onChange={(e) => setRegYear(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    fontSize: '0.88rem',
                    color: '#0f172a',
                    outline: 'none',
                  }}
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Skills selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Select Your Skills (For Smart Teammate Matching)
              </label>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  maxHeight: '110px',
                  overflowY: 'auto',
                  padding: '4px 0',
                }}
              >
                {availableSkills.map((skill) => {
                  const isSelected = regSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '999px',
                        border: isSelected ? '1px solid #2563eb' : '1px solid #cbd5e1',
                        backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                        color: isSelected ? '#2563eb' : '#475569',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isSelected && <Check size={12} />}
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '11px',
                fontSize: '0.95rem',
                borderRadius: '12px',
                marginTop: '4px',
              }}
            >
              {submitting ? 'Registering...' : 'Complete Registration'}
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
