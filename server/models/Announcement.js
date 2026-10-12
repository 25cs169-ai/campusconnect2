const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Announcement title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Announcement content is required'],
    },
    category: {
      type: String,
      enum: ['General', 'Academic', 'Examinations', 'Placements', 'Workshops', 'Sports', 'Hackathons'],
      default: 'General',
    },
    author: {
      type: String,
      default: 'Campus Administration',
    },
    important: {
      type: Boolean,
      default: false,
    },
    externalLink: {
      type: String,
      default: '',
    },
    department: {
      type: String,
      default: 'All',
    },
    date: {
      type: String,
      default: () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    },
    timePosted: {
      type: String,
      default: '10:00 AM',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Announcement || mongoose.model('Announcement', AnnouncementSchema);
