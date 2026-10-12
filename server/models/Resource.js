const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Resource title is required'],
      trim: true,
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      enum: ['CSE', 'ECE', 'AI & ML', 'IT', 'EEE', 'MECH', 'CIVIL', 'MBA', 'Other'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    link: {
      type: String,
      required: [true, 'Resource URL/link is required'],
    },
    fileType: {
      type: String,
      enum: ['PDF', 'Document', 'Drive', 'Video', 'Code', 'Slides'],
      default: 'PDF',
    },
    fileSize: {
      type: String,
      default: '4.2 MB',
    },
    uploadedBy: {
      type: String,
      default: 'Faculty / Peer Contributor',
    },
    downloads: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
