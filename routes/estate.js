module.exports = app =>
{
	const estate = require('../controllers/estate')
	const router = require('express').Router()
  
    // Show all
    router.get('/', estate.findAll)

	// Show by ID
	router.get('/:id', estate.findOne)

	// Create a estate
	router.post('/', estate.Create)

	// Update a estate
	router.put('/:id', estate.Update)

	// Delete a estate
	router.delete('/:id', estate.Delete)

	app.use('/estate', router)
}