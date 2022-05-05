module.exports = () =>
{
	const Validation = require('../controllers/validation')
	const router = require('express').Router()
  
	// Authorize e-mail
    router.get('/:id', Validation.Authorize)

	return router
}