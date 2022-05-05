const Mail = require('../middleware/Mail')

module.exports = app =>
{
	const login = require('../controllers/login')
	const router = require('express').Router()
  
	// Login
	router.post('/', Mail, login.Login)

	return router
}