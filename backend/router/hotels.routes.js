const express = require('express');
const router = express.Router();
const hotelController = require('./../controllers/hotelsController')

router.post('/',
    hotelController.allHotels
)

module.exports = router;