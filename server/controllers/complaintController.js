const store = require('../data/store');

exports.getComplaints = (req, res) => {
  try {
    const user = req.user;
    let complaints;
    if (user && user.role === 'admin') {
      complaints = store.getAllComplaints();
    } else if (user) {
      complaints = store.getComplaints(user.email);
    } else {
      complaints = store.getAllComplaints();
    }
    res.json({ success: true, count: complaints.length, complaints });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createComplaint = (req, res) => {
  try {
    const { title, department, category, description, anonymous, priority } = req.body;
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' });
    }

    const isAnon = Boolean(anonymous);
    const newComplaint = store.createComplaint({
      title,
      department: department || 'General Campus',
      category: category || 'Campus issues',
      description,
      anonymous: isAnon,
      priority: priority || 'Medium',
      user: {
        name: isAnon ? 'Anonymous Student' : (req.user ? req.user.name : 'Student'),
        email: isAnon ? 'anonymous@campus.edu' : (req.user ? req.user.email : 'student@campus.edu'),
      },
    });

    res.status(201).json({
      success: true,
      message: 'Complaint lodged successfully! You can track its progress live.',
      complaint: newComplaint,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateComplaintStatus = (req, res) => {
  try {
    const { status, adminRemarks } = req.body;
    const updated = store.updateComplaintStatus(req.params.id, { status, adminRemarks });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }
    res.json({
      success: true,
      message: `Complaint status updated to ${status}`,
      complaint: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
