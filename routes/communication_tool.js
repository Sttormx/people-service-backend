module.exports = app =>
{
	const Communication_tool = require('../controllers/communication_tool')
	const router = require('express').Router()
  
    // Show all
    router.get('/', Communication_tool.findAll)

	// Show by ID
	router.get('/:id', Communication_tool.findOne)

	// Create a communication tool
	router.post('/', Communication_tool.Create)

	// Update a communication tool
	router.put('/:id', Communication_tool.Update)

	// Delete a communication tool
	router.delete('/:id', Communication_tool.Delete)

	app.use('/communication_tool', router)
}