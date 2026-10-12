const store = require('../data/store');

exports.getAnnouncements = (req, res) => {
  try {
    const { category, department } = req.query;
    const announcements = store.getAnnouncements(category, department);
    res.json({ success: true, count: announcements.length, announcements });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAnnouncementById = (req, res) => {
  try {
    const item = store.getAnnouncementById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Announcement not found' });
    }
    res.json({ success: true, announcement: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createAnnouncement = (req, res) => {
  try {
    const { title, content, category, important, department, externalLink } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }
    const newAnn = store.createAnnouncement({
      title,
      content,
      category: category || 'General',
      important: Boolean(important),
      department: department || 'All',
      externalLink: externalLink || '',
      author: req.user ? req.user.name : 'Campus Administration',
    });
    res.status(201).json({ success: true, announcement: newAnn });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateAnnouncement = (req, res) => {
  try {
    const updated = store.updateAnnouncement(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Announcement not found' });
    }
    res.json({ success: true, announcement: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteAnnouncement = (req, res) => {
  try {
    const deleted = store.deleteAnnouncement(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Announcement not found' });
    }
    res.json({ success: true, message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
