const Auth = require('../middleware/Auth')

module.exports = app =>
{
	const ValueCollab = require('../controllers/value_collaborator')
	const router = require('express').Router()
  
    // Show all
    router.get('/', Auth, ValueCollab.findAll)

	// Show by ID
	router.get('/:id', Auth, ValueCollab.findOne)

	// Create a value collaborator
	router.post('/', Auth, ValueCollab.Create)

	// Update a value collaborator
	router.put('/:id', Auth, ValueCollab.Update)

	// Delete a value collaborator
	router.delete('/:id', Auth, ValueCollab.Delete)

	return router
}