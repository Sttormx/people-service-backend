module.exports = app =>
{
	const Contract = require('../controllers/contract')
	const router = require('express').Router()
  
    // Show all
    router.get('/', Contract.findAll)

	// Show by ID
	router.get('/:id', Contract.findOne)

	// Create a Contract
	router.post('/', Contract.Create)

	// Update a Contract
	router.put('/:id', Contract.Update)

	// Delete a Contract
	router.delete('/:id', Contract.Delete)

	app.use('/contract', router)
}