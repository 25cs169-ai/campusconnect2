const store = require('../data/store');

exports.getProjects = (req, res) => {
  try {
    const { department, status } = req.query;
    const projects = store.getProjects(department, status);
    res.json({ success: true, count: projects.length, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProjectById = (req, res) => {
  try {
    const project = store.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createProject = (req, res) => {
  try {
    const { title, description, department, skills, githubUrl, demoUrl, maxMembers } = req.body;
    if (!title || !description || !department) {
      return res.status(400).json({ success: false, message: 'Title, description, and department are required' });
    }

    const parsedSkills = Array.isArray(skills)
      ? skills
      : typeof skills === 'string'
      ? skills.split(',').map((s) => s.trim()).filter(Boolean)
      : ['General'];

    const newProject = store.createProject({
      title,
      description,
      department,
      skills: parsedSkills,
      githubUrl: githubUrl || '',
      demoUrl: demoUrl || '',
      maxMembers: Number(maxMembers) || 4,
      owner: {
        name: req.user ? req.user.name : 'Student Lead',
        email: req.user ? req.user.email : 'student@campus.edu',
        department: req.user ? req.user.department : department,
        avatar: req.user ? req.user.profileImage : '',
      },
      status: 'Looking for Members',
    });

    if (req.user && !req.user.joinedProjects.includes(newProject._id)) {
      req.user.joinedProjects.push(newProject._id);
    }

    res.status(201).json({ success: true, project: newProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.joinProject = (req, res) => {
  try {
    const projectId = req.params.id;
    const project = store.getProjectById(projectId);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    const member = {
      name: req.user.name,
      email: req.user.email,
      role: req.body.role || 'Contributor',
      department: req.user.department,
    };

    const updated = store.joinProject(projectId, member);
    if (req.user && !req.user.joinedProjects.includes(projectId)) {
      req.user.joinedProjects.push(projectId);
    }

    res.json({
      success: true,
      message: `You have successfully joined ${project.title}!`,
      project: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProject = (req, res) => {
  try {
    const updated = store.updateProject(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, project: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteProject = (req, res) => {
  try {
    const deleted = store.deleteProject(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
