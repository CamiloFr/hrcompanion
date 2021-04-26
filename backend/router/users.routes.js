const express = require('express');
const router = express.Router();
const userController = require('./../controllers/usersController')
const { check } = require('express-validator')

router.post('/',
    [
        check('id','El nombre es obligatorio').not().isEmpty(),
        check('password','El password debe ser minimo de 6 caracteres').isLength({min: 6}),
    ],
    userController.createUser
)

module.exports = router;