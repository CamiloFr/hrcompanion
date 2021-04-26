const express = require('express');
const router = express.Router();
const allusersController = require('./../controllers/allusersController')

router.post('/',
    allusersController.allUsers
)

module.exports = router;