const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();

const authController = new AuthController();

/**
 * POST /api/auth/register
 * @summary Register a new user
 * @tags Auth
 * @param {object} request.body.required - user info
 * @param {string} request.body.required.username - username
 * @param {string} request.body.required.password - password
 * @param {string} request.body.required.email - email
 * @return {object} 201 - User registered successfully
 * @return {object} 400 - Username already exists
 * @return {object} 500 - Server error
 */
router.post('/register', authController.register);

/**
 * POST /api/auth/login
 * @summary Login a user
 * @tags Auth
 * @param {object} request.body.required - user info
 * @param {string} request.body.required.username - username
 * @param {string} request.body.required.password - password
 * @return {object} 200 - Login successful
 * @return {object} 401 - Invalid credentials
 * @return {object} 500 - Server error
 */
router.post('/login', authController.login);

module.exports = router;