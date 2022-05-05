module.exports = app =>
{
	const source_code_tool_contract = require('../controllers/source_code_tool_contract')
	const router = require('express').Router()
  
    // Show all
    router.get('/', source_code_tool_contract.findAll)

	// Show by ID
	router.get('/:id', source_code_tool_contract.findOne)

	// Create a source_code_tool_contract
	router.post('/', source_code_tool_contract.Create)

	// Update a source_code_tool_contract
	router.put('/:id', source_code_tool_contract.Update)

	// Delete a source_code_tool_contract
	router.delete('/:id', source_code_tool_contract.Delete)

	app.use('/source_code_tool_contract', router)
}