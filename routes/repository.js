module.exports = app =>
{
	const repository = require('../controllers/repository')
	const router = require('express').Router()
  
    // Show all
    router.get('/', repository.findAll)

	// Show by ID
	router.get('/:id', repository.findOne)

	// Create a repository
	router.post('/', repository.Create)

	// Update a repository
	router.put('/:id', repository.Update)

	// Delete a repository
	router.delete('/:id', repository.Delete)

	app.use('/repository', router)
}