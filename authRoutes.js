// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/signup route
router.post('/signup', authController.signup);

module.exports = router;
