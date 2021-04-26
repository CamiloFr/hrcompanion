const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('./../controllers/authController')

router.post('/',
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser minimo de 2 caracteres').isLength({min: 6}),
    ],
    authController.authenticationUser
)

module.exports = router;