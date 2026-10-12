const store = require('../data/store');

exports.getResources = (req, res) => {
  try {
    const { department, search } = req.query;
    const resources = store.getResources(department, search);
    res.json({ success: true, count: resources.length, resources });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createResource = (req, res) => {
  try {
    const { title, department, subject, description, link, fileType } = req.body;
    if (!title || !department || !subject || !link) {
      return res.status(400).json({
        success: false,
        message: 'Title, department, subject, and link are required',
      });
    }

    const newRes = store.createResource({
      title,
      department,
      subject,
      description: description || 'Study material shared by student community.',
      link,
      fileType: fileType || 'PDF',
      uploadedBy: req.user ? req.user.name : 'Peer Contributor',
    });

    res.status(201).json({ success: true, resource: newRes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteResource = (req, res) => {
  try {
    const deleted = store.deleteResource(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Resource not found' });
    }
    res.json({ success: true, message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
