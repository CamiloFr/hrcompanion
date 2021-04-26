const express = require('express');
const router = express.Router();
const curriculumController = require('./../controllers/curriculumController')
const { check } = require('express-validator')

router.post('/',
    // [
    //     check('id','El nombre es obligatorio').not().isEmpty(),
    //     check('password','El password debe ser minimo de 6 caracteres').isLength({min: 6}),
    // ],
    curriculumController.createCurriculum
)

module.exports = router;