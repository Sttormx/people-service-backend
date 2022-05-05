module.exports = app =>
{
	const login = require('../controllers/login')
	const router = require('express').Router()
  
	// Login
	router.post('/', login.Relogin)

	return router
}