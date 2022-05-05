module.exports = app =>
{
	const calendar = require('../controllers/calendar')
	const router = require('express').Router()
  
    // Show all
    router.get('/', calendar.findAll)

	// Show by ID
	router.get('/:id', calendar.findOne)

	// Create a calendar
	router.post('/', calendar.Create)

	// Update a calendar
	router.put('/:id', calendar.Update)

	// Delete a calendar
	router.delete('/:id', calendar.Delete)

	app.use('/calendar', router)
}