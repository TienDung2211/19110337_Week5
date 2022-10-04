const express = require('express');
const manageRouter = express.Router();
const manageController = require('../controllers/manageControllers')

manageRouter.get('/', manageController.getAllPost);
manageRouter.get('/:id', manageController.fillForm);
manageRouter.post('/:id', manageController.controlPost)
manageRouter.post('/', manageController.controlPost)

module.exports = manageRouter