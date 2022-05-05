module.exports = app =>
{
	const status_contract = require('../controllers/status_contract')
	const router = require('express').Router()
  
    // Show all
    router.get('/', status_contract.findAll)

	// Show by ID
	router.get('/:id', status_contract.findOne)

	// Create a status_contract
	router.post('/', status_contract.Create)

	// Update a status_contract
	router.put('/:id', status_contract.Update)

	// Delete a status_contract
	router.delete('/:id', status_contract.Delete)

	app.use('/status_contract', router)
}