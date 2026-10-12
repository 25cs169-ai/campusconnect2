const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide student name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'faculty'],
      default: 'student',
    },
    department: {
      type: String,
      required: [true, 'Please specify department'],
      enum: ['CSE', 'ECE', 'AI & ML', 'IT', 'EEE', 'MECH', 'CIVIL', 'MBA', 'Other'],
      default: 'CSE',
    },
    year: {
      type: String,
      default: '3rd Year',
    },
    skills: {
      type: [String],
      default: [],
    },
    profileImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    bio: {
      type: String,
      default: 'Passionate engineering student excited to collaborate on real-world projects.',
    },
    interests: {
      type: [String],
      default: ['Web Development', 'Artificial Intelligence', 'Hackathons'],
    },
    registeredEvents: [
      {
        type: String,
      },
    ],
    joinedProjects: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
