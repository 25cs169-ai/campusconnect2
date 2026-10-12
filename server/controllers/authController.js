const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const store = require('../data/store');
const { JWT_SECRET } = require('../middleware/auth');

exports.register = async (req, res) => {
  try {
    const { name, email, password, department, year, skills } = req.body;

    if (!name || !email || !password || !department) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, password, and department',
      });
    }

    const existingUser = store.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'A student account with this email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const parsedSkills = Array.isArray(skills)
      ? skills
      : typeof skills === 'string'
      ? skills.split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    const newUser = store.createUser({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      department,
      year: year || '1st Year',
      skills: parsedSkills,
      role: 'student',
      profileImage: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=2563eb,3b82f6,6366f1`,
    });

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password: _, ...userSafe } = newUser;

    res.status(201).json({
      success: true,
      message: 'Account registered successfully! Welcome to CampusConnect.',
      token,
      user: userSafe,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    const user = store.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. User with this email does not exist.',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password. Please check your credentials.',
      });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password: _, ...userSafe } = user;

    res.json({
      success: true,
      message: 'Welcome back!',
      token,
      user: userSafe,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMe = async (req, res) => {
  try {
    const { password: _, ...userSafe } = req.user;
    res.json({
      success: true,
      user: userSafe,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password;
    delete updates.role;
    delete updates.email;

    const updatedUser = store.updateUser(req.user._id, updates);
    const { password: _, ...userSafe } = updatedUser;

    res.json({
      success: true,
      message: 'Profile updated successfully!',
      user: userSafe,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const { department } = req.query;
    const users = store.getAllUsers(department).map((u) => {
      const { password: _, ...safe } = u;
      return safe;
    });
    res.json({ success: true, count: users.length, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
