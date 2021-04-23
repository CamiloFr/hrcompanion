const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('./../controllers/authController')

router.post('/',
    [
        check('id', 'El nombre es obligatorio').isEmpty(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min: 6}),
    ],
    authController.authenticationUser
)

module.exports = router;