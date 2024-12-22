const express = require('express');
const ProfileController = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, ProfileController.getProfile);

module.exports = router;