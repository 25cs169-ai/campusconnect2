const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', authMiddleware, projectController.createProject);
router.post('/:id/join', authMiddleware, projectController.joinProject);
router.put('/:id', authMiddleware, projectController.updateProject);
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;
