module.exports = app =>
{
	const source_code_tool = require('../controllers/source_code_tool')
	const router = require('express').Router()
  
    // Show all
    router.get('/', source_code_tool.findAll)

	// Show by ID
	router.get('/:id', source_code_tool.findOne)

	// Create a source_code_tool
	router.post('/', source_code_tool.Create)

	// Update a source_code_tool
	router.put('/:id', source_code_tool.Update)

	// Delete a source_code_tool
	router.delete('/:id', source_code_tool.Delete)

	app.use('/source_code_tool', router)
}