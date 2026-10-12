const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, complaintController.getComplaints);
router.post('/', authMiddleware, complaintController.createComplaint);
router.patch('/:id', authMiddleware, complaintController.updateComplaintStatus);

module.exports = router;
