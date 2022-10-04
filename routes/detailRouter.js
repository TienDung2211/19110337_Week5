const express = require('express');
const detailRouter = express.Router();
const detailController = require('../controllers/detailControllers')

detailRouter.get('/:id', detailController.getPost);
detailRouter.post('/:id', detailController.addComment);

module.exports = detailRouter