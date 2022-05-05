module.exports = app =>
{
	const Commit = require('../controllers/commit')
	const router = require('express').Router()
  
    // Show all
    router.get('/', Commit.findAll)

	// Show by ID
	router.get('/:id', Commit.findOne)

	// Create a commit
	router.post('/', Commit.Create)

	// Update a commit
	router.put('/:id', Commit.Update)

	// Delete a commit
	router.delete('/:id', Commit.Delete)

	app.use('/commit', router)
}