const Auth = require('../middleware/Auth')

module.exports = app =>
{
	const Collaborator = require('../controllers/collaborator')
	const router = require('express').Router()
  
	// Show all
    router.get('/', Auth, Collaborator.findAll)

	// Show by ID
	router.get('/:id', Auth, Collaborator.findOne)

	// Create a collaborator
	router.post('/', Collaborator.Create)

	// Update a collaborator
	router.put('/:id', Auth, Collaborator.Update)

	// Delete a collaborator
	router.delete('/:id', Auth, Collaborator.Delete)

	return router
}