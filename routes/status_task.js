module.exports = app =>
{
	const status_task = require('../controllers/status_task')
	const router = require('express').Router()
  
    // Show all
    router.get('/', status_task.findAll)

	// Show by ID
	router.get('/:id', status_task.findOne)

	// Create a status_task
	router.post('/', status_task.Create)

	// Update a status_task
	router.put('/:id', status_task.Update)

	// Delete a status_task
	router.delete('/:id', status_task.Delete)

	app.use('/status_task', router)
}