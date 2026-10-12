const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', resourceController.getResources);
router.post('/', authMiddleware, resourceController.createResource);
router.delete('/:id', authMiddleware, resourceController.deleteResource);

module.exports = router;
