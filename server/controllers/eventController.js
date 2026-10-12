const store = require('../data/store');

exports.getEvents = (req, res) => {
  try {
    const { department, status, search } = req.query;
    const events = store.getEvents({ department, status, search });
    res.json({ success: true, count: events.length, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getEventById = (req, res) => {
  try {
    const event = store.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createEvent = (req, res) => {
  try {
    const { title, description, department, date, time, location, category, image, externalUrl } = req.body;
    if (!title || !description || !department || !date || !location) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, department, date, and location are required',
      });
    }

    const newEvent = store.createEvent({
      title,
      description,
      department,
      date,
      time: time || '10:00 AM - 4:00 PM',
      location,
      category: category || 'Workshop',
      image: image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
      externalUrl: externalUrl || '',
      organizer: req.user ? `${req.user.name} (${req.user.department})` : 'Campus Event Cell',
    });

    res.status(201).json({ success: true, event: newEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateEvent = (req, res) => {
  try {
    const updated = store.updateEvent(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.json({ success: true, event: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteEvent = (req, res) => {
  try {
    const deleted = store.deleteEvent(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.toggleRegister = (req, res) => {
  try {
    const userId = req.user._id;
    const eventId = req.params.id;

    const result = store.toggleRegisterEvent(eventId, userId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Event or user not found' });
    }

    res.json({
      success: true,
      registered: result.registered,
      message: result.registered
        ? 'Successfully registered for this event!'
        : 'Registration cancelled.',
      event: result.event,
      userRegisteredEvents: result.user.registeredEvents,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
