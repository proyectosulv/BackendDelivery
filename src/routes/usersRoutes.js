const express = require('express');
const router = express.Router();
const userController =  require('../controllers/userController');

//Ruta para obtener todos los datos del usuario
//api/users/getall
router.get('/users/getall', userController.getall);
//api/users/create
router.post('/users/create', userController.register);

module.exports = router;