const express = require('express');
const router = express.Router();

// Imports
const Collaborator = require('./collaborator')() 
const Justify = require('./justify')() 
const Type = require('./type')() 
const value_collaborator = require('./value_collaborator')() 
const Login = require('./login')()
const Validation = require('./validation')()
const Relogin = require('./relogin')()

// Routes
router.use('/collaborator', Collaborator)
router.use('/justify', Justify)
router.use('/type', Type)
router.use('/value_collaborator', value_collaborator)
router.use('/login', Login)
router.use('/validation', Validation)
router.use('/relogin', Relogin)

module.exports = router;