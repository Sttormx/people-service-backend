module.exports = app =>
{
	const dev_contract = require('../controllers/dev_contract')
	const router = require('express').Router()
  
    // Show all
    router.get('/', dev_contract.findAll)

	// Show by ID
	router.get('/:id', dev_contract.findOne)

	// Create a dev_contract
	router.post('/', dev_contract.Create)

	// Update a dev_contract
	router.put('/:id', dev_contract.Update)

	// Delete a dev_contract
	router.delete('/:id', dev_contract.Delete)

	app.use('/dev_contract', router)
}