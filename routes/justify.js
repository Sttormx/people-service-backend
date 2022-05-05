const Auth = require('../middleware/Auth')

module.exports = app =>
{
	const Justify = require('../controllers/justify')
	const router = require('express').Router()
  
    // Show all
    router.get('/', Auth, Justify.findAll)

	// Show by ID
	router.get('/:id', Auth, Justify.findOne)

	// Create a justify
	router.post('/', Auth, Justify.Create)

	// Update a justify
	router.put('/:id', Auth, Justify.Update)

	// Delete a jusfity
	router.delete('/:id', Auth, Justify.Delete)

	return router
}