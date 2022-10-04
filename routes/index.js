const { getAllPost } = require('../controllers/controllers')
const express = require('express');
const router = express.Router();

router.get('/', getAllPost);

module.exports = router