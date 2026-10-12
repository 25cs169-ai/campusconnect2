import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import {
  BookOpen,
  Download,
  Upload,
  Search,
  FileText,
  ExternalLink,
  Plus,
  Filter,
  CheckCircle,
  X,
  FileCode,
  Sliders,
  FolderOpen,
} from 'lucide-react';

const ResourcesPage = () => {
  const { user, showToast } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');

  // Upload modal state
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [title, setTitle] = useState('');
  const [dept, setDept] = useState('CSE');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [fileType, setFileType] = useState('PDF');
  const [submitting, setSubmitting] = useState(false);

  const departments = [
    'All Departments',
    'CSE',
    'ECE',
    'AI & ML',
    'IT',
    'Other Departments',
  ];

  const subjectMap = {
    CSE: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'Web Development'],
    ECE: ['Digital Electronics', 'Microprocessors', 'Embedded Systems', 'Communication Systems'],
    'AI & ML': ['Python', 'Machine Learning', 'Deep Learning', 'Data Science'],
    IT: ['Networking', 'Cloud Computing', 'Cybersecurity', 'Database Systems'],
  };

  const fetchResources = async () => {
    try {
      setLoading(true);
      const res = await api.getResources({
        department: selectedDept,
        search: searchQuery,
      });
      if (res.success) {
        setResources(res.resources);
      }
    } catch (err) {
      console.error('Error fetching resources:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, [selectedDept, searchQuery]);

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!title || !subject || !link) return;
    try {
      setSubmitting(true);
      const res = await api.createResource({
        title,
        department: dept,
        subject,
        description,
        link,
        fileType,
      });
      if (res.success) {
        setResources([res.resource, ...resources]);
        setShowUploadModal(false);
        setTitle('');
        setSubject('');
        setDescription('');
        setLink('');
        showToast('Study resource published successfully!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Upload failed', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredResources = resources.filter((r) => {
    if (selectedSubject === 'All') return true;
    return r.subject.toLowerCase() === selectedSubject.toLowerCase();
  });

  const getFileTypeIcon = (type) => {
    switch (type) {
      case 'PDF':
        return '📄';
      case 'Slides':
        return '📊';
      case 'Code':
        return '💻';
      case 'Document':
        return '📝';
      default:
        return '📁';
    }
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
              backgroundColor: '#ecfdf5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
            }}
          >
            📚
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              Study Resources
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Peer-reviewed syllabus notes, lecture slides, question banks, and code repositories.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="btn btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.9rem' }}
        >
          <Upload size={17} /> Upload Notes / Share Link
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="card"
        style={{
          padding: '20px 24px',
          marginBottom: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            padding: '10px 16px',
          }}
        >
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search by topic, subject (e.g. Operating Systems, Microprocessors, Deep Learning)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.92rem',
              color: '#0f172a',
            }}
          />
        </div>

        {/* Department Filters */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
            DEPARTMENT REPOSITORY:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {departments.map((deptName) => {
              const isSelected = selectedDept === deptName;
              return (
                <button
                  key={deptName}
                  onClick={() => {
                    setSelectedDept(deptName);
                    setSelectedSubject('All');
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: isSelected ? '1px solid #059669' : '1px solid #e2e8f0',
                    backgroundColor: isSelected ? '#059669' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#334155',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    boxShadow: isSelected ? '0 4px 10px rgba(5, 150, 105, 0.2)' : 'none',
                  }}
                >
                  {deptName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Department specific subject pills */}
        {selectedDept !== 'All Departments' && subjectMap[selectedDept] && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', paddingTop: '6px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>
              SUBJECTS:
            </span>
            <button
              onClick={() => setSelectedSubject('All')}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                border: selectedSubject === 'All' ? '1px solid #059669' : '1px solid #e2e8f0',
                backgroundColor: selectedSubject === 'All' ? '#ecfdf5' : '#ffffff',
                color: selectedSubject === 'All' ? '#059669' : '#64748b',
                fontWeight: 600,
                fontSize: '0.76rem',
                cursor: 'pointer',
              }}
            >
              All Subjects
            </button>
            {subjectMap[selectedDept].map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: selectedSubject === subj ? '1px solid #059669' : '1px solid #e2e8f0',
                  backgroundColor: selectedSubject === subj ? '#ecfdf5' : '#ffffff',
                  color: selectedSubject === subj ? '#059669' : '#64748b',
                  fontWeight: 600,
                  fontSize: '0.76rem',
                  cursor: 'pointer',
                }}
              >
                {subj}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Resource Cards */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
          Loading campus study resources...
        </div>
      ) : filteredResources.length === 0 ? (
        <div className="card" style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>
          <div style={{ fontSize: '42px', marginBottom: '10px' }}>📚</div>
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b' }}>No Resources Found</h3>
          <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
            Try another subject filter or be the first to upload lecture notes!
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '22px',
          }}
        >
          {filteredResources.map((res) => (
            <div
              key={res._id}
              className="card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative',
              }}
            >
              {/* Top Meta Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={`badge badge-${res.department.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {res.department}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                  }}
                >
                  {getFileTypeIcon(res.fileType)} {res.fileType} • {res.fileSize || '3.5 MB'}
                </span>
              </div>

              {/* Subject Tag */}
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#059669',
                  backgroundColor: '#ecfdf5',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  width: 'fit-content',
                }}
              >
                Subject: {res.subject}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                {res.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, flex: 1 }}>
                {res.description}
              </p>

              {/* Upload Meta */}
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '8px',
                  backgroundColor: '#f8fafc',
                  fontSize: '0.78rem',
                  color: '#64748b',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <strong>Uploaded By:</strong> {res.uploadedBy}
                </div>
                <div>{res.downloads || 140} downloads</div>
              </div>

              {/* Download / Open Button */}
              <a
                href={res.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{
                  marginTop: '6px',
                  padding: '9px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  justifyContent: 'center',
                }}
              >
                <Download size={16} /> Open / Download Resource
              </a>
            </div>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* UPLOAD NOTES / SHARE LINK MODAL                          */}
      {/* ======================================================== */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                Upload Study Resource
              </h2>
              <button
                onClick={() => setShowUploadModal(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Resource Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Complete Microprocessor 8051 Handwritten Notes"
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
                    Department
                  </label>
                  <select
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  >
                    {departments.filter((d) => d !== 'All Departments').map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Operating Systems"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Resource URL / Google Drive / GitHub Link
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/... or github.com/..."
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
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
                    Format / File Type
                  </label>
                  <select
                    value={fileType}
                    onChange={(e) => setFileType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  >
                    <option value="PDF">PDF Handout</option>
                    <option value="Slides">Lecture Slides</option>
                    <option value="Code">Code Repository</option>
                    <option value="Document">Word Document / Notes</option>
                    <option value="Drive">Google Drive Folder</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Description & Key Topics Covered
                </label>
                <textarea
                  rows="3"
                  placeholder="Outline chapters, syllabus unit codes, or exam review topics covered..."
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

              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '11px', borderRadius: '10px' }}
                >
                  {submitting ? 'Sharing...' : 'Publish to Resource Vault'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
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

export default ResourcesPage;
