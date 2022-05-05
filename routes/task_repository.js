module.exports = app =>
{
	const task_repository = require('../controllers/task_repository')
	const router = require('express').Router()
  
    // Show all
    router.get('/', task_repository.findAll)

	// Show by ID
	router.get('/:id', task_repository.findOne)

	// Create a task_repository
	router.post('/', task_repository.Create)

	// Update a task_repository
	router.put('/:id', task_repository.Update)

	// Delete a task_repository
	router.delete('/:id', task_repository.Delete)

	app.use('/task_repository', router)
}