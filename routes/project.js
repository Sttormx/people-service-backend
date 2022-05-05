module.exports = app =>
{
	const project = require('../controllers/project')
	const router = require('express').Router()
  
    // Show all
    router.get('/', project.findAll)

	// Show by ID
	router.get('/:id', project.findOne)

	// Create a project
	router.post('/', project.Create)

	// Update a project
	router.put('/:id', project.Update)

	// Delete a project
	router.delete('/:id', project.Delete)

	app.use('/project', router)
}