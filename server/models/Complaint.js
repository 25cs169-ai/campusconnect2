const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Complaint title is required'],
      trim: true,
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      default: 'General Campus',
    },
    category: {
      type: String,
      enum: ['Campus issues', 'Infrastructure problems', 'Technical problems', 'General complaints', 'Feedback'],
      default: 'Campus issues',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    anonymous: {
      type: Boolean,
      default: false,
    },
    user: {
      name: { type: String, default: 'Anonymous Student' },
      email: { type: String, default: 'anonymous@campus.edu' },
    },
    status: {
      type: String,
      enum: ['Submitted', 'Under Review', 'In Progress', 'Resolved'],
      default: 'Submitted',
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Urgent'],
      default: 'Medium',
    },
    adminRemarks: {
      type: String,
      default: 'Complaint logged. Under preliminary inspection by facility management.',
    },
    timeline: [
      {
        stage: String,
        timestamp: { type: Date, default: Date.now },
        note: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);
