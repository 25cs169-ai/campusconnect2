const {
  seedUsers,
  seedAnnouncements,
  seedEvents,
  seedProjects,
  seedResources,
  seedComplaints,
} = require('./seedData');

// Clone in-memory datasets
class DataStore {
  constructor() {
    this.users = JSON.parse(JSON.stringify(seedUsers));
    this.announcements = JSON.parse(JSON.stringify(seedAnnouncements));
    this.events = JSON.parse(JSON.stringify(seedEvents));
    this.projects = JSON.parse(JSON.stringify(seedProjects));
    this.resources = JSON.parse(JSON.stringify(seedResources));
    this.complaints = JSON.parse(JSON.stringify(seedComplaints));
  }

  // User methods
  findUserByEmail(email) {
    return this.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  }

  findUserById(id) {
    return this.users.find((u) => u._id === id);
  }

  createUser(userData) {
    const newUser = {
      _id: 'usr_' + Date.now(),
      registeredEvents: [],
      joinedProjects: [],
      interests: [],
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updates) {
    const idx = this.users.findIndex((u) => u._id === id);
    if (idx !== -1) {
      this.users[idx] = { ...this.users[idx], ...updates };
      return this.users[idx];
    }
    return null;
  }

  getAllUsers(dept) {
    if (dept && dept !== 'All') {
      return this.users.filter((u) => u.department === dept);
    }
    return this.users;
  }

  // Announcements
  getAnnouncements(category, dept) {
    let list = [...this.announcements];
    if (category && category !== 'All') {
      list = list.filter((a) => a.category.toLowerCase() === category.toLowerCase());
    }
    if (dept && dept !== 'All') {
      list = list.filter((a) => a.department === 'All' || a.department === dept);
    }
    return list;
  }

  getAnnouncementById(id) {
    return this.announcements.find((a) => a._id === id);
  }

  createAnnouncement(data) {
    const newAnn = {
      _id: 'ann_' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      timePosted: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      important: false,
      externalLink: '',
      department: 'All',
      ...data,
      createdAt: new Date(),
    };
    this.announcements.unshift(newAnn);
    return newAnn;
  }

  updateAnnouncement(id, updates) {
    const idx = this.announcements.findIndex((a) => a._id === id);
    if (idx !== -1) {
      this.announcements[idx] = { ...this.announcements[idx], ...updates };
      return this.announcements[idx];
    }
    return null;
  }

  deleteAnnouncement(id) {
    const idx = this.announcements.findIndex((a) => a._id === id);
    if (idx !== -1) {
      return this.announcements.splice(idx, 1)[0];
    }
    return null;
  }

  // Events
  getEvents({ department, status, search }) {
    let list = [...this.events];
    if (department && department !== 'All' && department !== 'All Departments') {
      list = list.filter((e) => e.department.toUpperCase() === department.toUpperCase());
    }
    if (status && status !== 'All Events' && status !== 'All') {
      list = list.filter((e) => e.status.toLowerCase() === status.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q)
      );
    }
    return list;
  }

  getEventById(id) {
    return this.events.find((e) => e._id === id);
  }

  createEvent(data) {
    const newEvent = {
      _id: 'ev_' + Date.now(),
      registrations: [],
      maxRegistrations: 100,
      status: 'Upcoming',
      externalUrl: '',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
      ...data,
      createdAt: new Date(),
    };
    this.events.unshift(newEvent);
    return newEvent;
  }

  updateEvent(id, updates) {
    const idx = this.events.findIndex((e) => e._id === id);
    if (idx !== -1) {
      this.events[idx] = { ...this.events[idx], ...updates };
      return this.events[idx];
    }
    return null;
  }

  deleteEvent(id) {
    const idx = this.events.findIndex((e) => e._id === id);
    if (idx !== -1) {
      return this.events.splice(idx, 1)[0];
    }
    return null;
  }

  toggleRegisterEvent(eventId, userId) {
    const event = this.getEventById(eventId);
    const user = this.findUserById(userId);
    if (!event || !user) return null;

    if (!event.registrations) event.registrations = [];
    if (!user.registeredEvents) user.registeredEvents = [];

    const isReg = event.registrations.includes(userId);
    if (isReg) {
      event.registrations = event.registrations.filter((id) => id !== userId);
      user.registeredEvents = user.registeredEvents.filter((id) => id !== eventId);
      return { registered: false, event, user };
    } else {
      event.registrations.push(userId);
      if (!user.registeredEvents.includes(eventId)) {
        user.registeredEvents.push(eventId);
      }
      return { registered: true, event, user };
    }
  }

  // Projects
  getProjects(department, status) {
    let list = [...this.projects];
    if (department && department !== 'All') {
      list = list.filter((p) => p.department === department);
    }
    if (status && status !== 'All') {
      list = list.filter((p) => p.status.toLowerCase() === status.toLowerCase());
    }
    return list;
  }

  getProjectById(id) {
    return this.projects.find((p) => p._id === id);
  }

  createProject(data) {
    const newProj = {
      _id: 'proj_' + Date.now(),
      status: 'Looking for Members',
      members: [
        {
          name: data.owner?.name || 'Project Lead',
          email: data.owner?.email || '',
          role: 'Project Lead',
          department: data.department || 'CSE',
        },
      ],
      progress: 10,
      maxMembers: 4,
      ...data,
      createdAt: new Date(),
    };
    this.projects.unshift(newProj);
    return newProj;
  }

  joinProject(projectId, member) {
    const project = this.getProjectById(projectId);
    if (!project) return null;
    const existing = project.members.find((m) => m.email === member.email);
    if (!existing) {
      project.members.push({
        name: member.name,
        email: member.email,
        role: member.role || 'Contributor',
        department: member.department,
        joinedAt: new Date(),
      });
      if (project.members.length >= (project.maxMembers || 4)) {
        project.status = 'In Progress';
      }
    }
    return project;
  }

  updateProject(id, updates) {
    const idx = this.projects.findIndex((p) => p._id === id);
    if (idx !== -1) {
      this.projects[idx] = { ...this.projects[idx], ...updates };
      return this.projects[idx];
    }
    return null;
  }

  deleteProject(id) {
    const idx = this.projects.findIndex((p) => p._id === id);
    if (idx !== -1) {
      return this.projects.splice(idx, 1)[0];
    }
    return null;
  }

  // Resources
  getResources(department, search) {
    let list = [...this.resources];
    if (department && department !== 'All' && department !== 'All Departments') {
      list = list.filter((r) => r.department === department);
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subject.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      );
    }
    return list;
  }

  createResource(data) {
    const newRes = {
      _id: 'res_' + Date.now(),
      downloads: 0,
      fileSize: '3.5 MB',
      fileType: 'PDF',
      ...data,
      createdAt: new Date(),
    };
    this.resources.unshift(newRes);
    return newRes;
  }

  deleteResource(id) {
    const idx = this.resources.findIndex((r) => r._id === id);
    if (idx !== -1) {
      return this.resources.splice(idx, 1)[0];
    }
    return null;
  }

  // Complaints
  getComplaints(userEmail) {
    if (userEmail) {
      return this.complaints.filter(
        (c) => c.user && c.user.email.toLowerCase() === userEmail.toLowerCase()
      );
    }
    return this.complaints;
  }

  getAllComplaints() {
    return this.complaints;
  }

  createComplaint(data) {
    const newCmp = {
      _id: 'cmp_' + Date.now(),
      status: 'Submitted',
      priority: data.priority || 'Medium',
      adminRemarks: 'Complaint registered. Assigned to respective department overseer.',
      timeline: [
        {
          stage: 'Submitted',
          timestamp: new Date(),
          note: 'Ticket successfully created and registered on CampusConnect.',
        },
      ],
      ...data,
      createdAt: new Date(),
    };
    this.complaints.unshift(newCmp);
    return newCmp;
  }

  updateComplaintStatus(id, { status, adminRemarks }) {
    const cmp = this.complaints.find((c) => c._id === id);
    if (!cmp) return null;
    if (status) {
      cmp.status = status;
      if (!cmp.timeline) cmp.timeline = [];
      cmp.timeline.push({
        stage: status,
        timestamp: new Date(),
        note: adminRemarks || `Complaint transitioned to ${status}`,
      });
    }
    if (adminRemarks) {
      cmp.adminRemarks = adminRemarks;
    }
    return cmp;
  }

  // Smart Matching Algorithm
  getSmartMatches(studentSkills = [], department = '', interests = []) {
    const sanitizedStudentSkills = (studentSkills || []).map((s) => s.trim().toLowerCase());
    const matches = [];

    // Score other students
    this.users.forEach((student) => {
      // Don't recommend self
      if (student.role === 'admin') return;

      const otherSkills = (student.skills || []).map((s) => s.trim().toLowerCase());
      const commonSkills = [];

      sanitizedStudentSkills.forEach((s) => {
        if (otherSkills.includes(s)) {
          commonSkills.push(s);
        }
      });

      // Calculate matching percentage
      let score = 0;
      if (sanitizedStudentSkills.length > 0) {
        score = Math.round((commonSkills.length / Math.max(sanitizedStudentSkills.length, otherSkills.length, 1)) * 70);
      } else {
        score = 50;
      }

      // Boost score if same department
      if (department && student.department === department) {
        score += 20;
      }

      // Boost score if shared interest
      if (interests && student.interests) {
        const sharedInterests = interests.filter((i) =>
          student.interests.some((si) => si.toLowerCase().includes(i.toLowerCase()))
        );
        if (sharedInterests.length > 0) score += 10;
      }

      score = Math.min(Math.max(score, 45), 98); // Bound reasonably between 45% and 98%

      matches.push({
        student: {
          _id: student._id,
          name: student.name,
          email: student.email,
          department: student.department,
          year: student.year,
          skills: student.skills,
          profileImage: student.profileImage,
          bio: student.bio,
        },
        matchPercentage: score,
        commonSkills: student.skills.filter((s) =>
          sanitizedStudentSkills.includes(s.toLowerCase())
        ),
      });
    });

    // Sort descending by match percentage
    matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
    return matches;
  }
}

const store = new DataStore();
module.exports = store;
