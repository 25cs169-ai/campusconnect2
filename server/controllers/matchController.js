const store = require('../data/store');

exports.getSmartMatches = (req, res) => {
  try {
    let skills = [];
    let department = '';
    let interests = [];

    if (req.user) {
      skills = req.user.skills || [];
      department = req.user.department || '';
      interests = req.user.interests || [];
    }

    // Allow override via query params
    if (req.query.skills) {
      skills = req.query.skills.split(',').map((s) => s.trim());
    }
    if (req.query.department) {
      department = req.query.department;
    }
    if (req.query.interests) {
      interests = req.query.interests.split(',').map((i) => i.trim());
    }

    const matches = store.getSmartMatches(skills, department, interests);

    // Filter out current user from matches
    const filteredMatches = req.user
      ? matches.filter((m) => m.student._id !== req.user._id && m.student.email !== req.user.email)
      : matches;

    // Also recommend suitable projects based on skills
    const allProjects = store.getProjects();
    const recommendedProjects = allProjects
      .filter((p) => p.status === 'Open' || p.status === 'Looking for Members')
      .map((p) => {
        const required = (p.skills || []).map((s) => s.toLowerCase());
        const userSkillsLower = (skills || []).map((s) => s.toLowerCase());
        const matched = required.filter((r) => userSkillsLower.includes(r));
        const fitScore = Math.min(
          Math.round((matched.length / Math.max(required.length, 1)) * 100),
          100
        );
        return {
          ...p,
          fitScore: Math.max(fitScore, 50),
          matchedSkills: matched,
        };
      })
      .sort((a, b) => b.fitScore - a.fitScore);

    res.json({
      success: true,
      query: { skills, department, interests },
      teammateMatches: filteredMatches,
      recommendedProjects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
