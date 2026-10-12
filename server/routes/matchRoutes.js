const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const { authMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, matchController.getSmartMatches);

module.exports = router;
