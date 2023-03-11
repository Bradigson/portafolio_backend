const express = require('express');
const mongoose = require('mongoose');
const controllers = require('../controller/port.controller');

const router = express.Router();

router
.get('/read_portafolio', controllers.readPortafolio)
.post('/insert', controllers.insertPortafolioData)
.put('/update/:id', controllers.updateportafolio)


module.exports = router;