module.exports = app =>
{
	const task_tool = require('../controllers/task_tool')
	const router = require('express').Router()
  
    // Show all
    router.get('/', task_tool.findAll)

	// Show by ID
	router.get('/:id', task_tool.findOne)

	// Create a task_tool
	router.post('/', task_tool.Create)

	// Update a task_tool
	router.put('/:id', task_tool.Update)

	// Delete a task_tool
	router.delete('/:id', task_tool.Delete)

	app.use('/task_tool', router)
}