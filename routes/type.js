const Auth = require('../middleware/Auth')

module.exports = app =>
{
	const Type = require('../controllers/type')
	const router = require('express').Router()
  
    // Show all
    router.get('/', Auth, Type.findAll)

	// Show by ID
	router.get('/:id', Auth, Type.findOne)

	// Create a type
	router.post('/', Auth, Type.Create)

	// Update a type
	router.put('/:id', Auth, Type.Update)

	// Delete a type
	router.delete('/:id', Auth, Type.Delete)

	return router
}