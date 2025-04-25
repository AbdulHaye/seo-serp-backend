// routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const hellow = require('../controllers/hello');

router.get('/', hellow.helloWorld);


module.exports = router;