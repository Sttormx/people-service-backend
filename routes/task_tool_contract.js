module.exports = app =>
{
	const task_tool_contract = require('../controllers/task_tool_contract')
	const router = require('express').Router()
  
    // Show all
    router.get('/', task_tool_contract.findAll)

	// Show by ID
	router.get('/:id', task_tool_contract.findOne)

	// Create a task_tool_contract
	router.post('/', task_tool_contract.Create)

	// Update a task_tool_contract
	router.put('/:id', task_tool_contract.Update)

	// Delete a task_tool_contract
	router.delete('/:id', task_tool_contract.Delete)

	app.use('/task_tool_contract', router)
}