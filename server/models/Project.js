const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
    },
    skills: {
      type: [String],
      required: [true, 'At least one required skill must be specified'],
    },
    owner: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      department: { type: String, default: 'CSE' },
      avatar: { type: String, default: '' },
    },
    members: [
      {
        name: String,
        email: String,
        role: { type: String, default: 'Developer' },
        department: String,
        joinedAt: { type: Date, default: Date.now },
      },
    ],
    status: {
      type: String,
      enum: ['Open', 'Looking for Members', 'In Progress', 'Completed'],
      default: 'Looking for Members',
    },
    maxMembers: {
      type: Number,
      default: 4,
    },
    githubUrl: {
      type: String,
      default: '',
    },
    demoUrl: {
      type: String,
      default: '',
    },
    progress: {
      type: Number,
      default: 25,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
