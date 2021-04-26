const express = require('express');
const router = express.Router();
const allcurriculumsController = require('./../controllers/allcurriculumsController')

router.post('/',
    allcurriculumsController.allCurriculums
)

module.exports = router;