module.exports = app =>
{
	const status_project = require('../controllers/status_project')
	const router = require('express').Router()
  
    // Show all
    router.get('/', status_project.findAll)

	// Show by ID
	router.get('/:id', status_project.findOne)

	// Create a status_project
	router.post('/', status_project.Create)

	// Update a status_project
	router.put('/:id', status_project.Update)

	// Delete a status_project
	router.delete('/:id', status_project.Delete)

	app.use('/status_project', router)
}