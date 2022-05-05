module.exports = app =>
{
	const task = require('../controllers/task')
	const router = require('express').Router()
  
    // Show all
    router.get('/', task.findAll)

	// Show by ID
	router.get('/:id', task.findOne)

	// Create a task
	router.post('/', task.Create)

	// Update a task
	router.put('/:id', task.Update)

	// Delete a task
	router.delete('/:id', task.Delete)

	app.use('/task', router)
}