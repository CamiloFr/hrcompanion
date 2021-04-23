const mongoose = require('mongoose');

var HotelSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        direction:String,
        summary:String,
        country:String,
        city:String,
        starts:Number,
        pisicina:Boolean,
        jacuzzi:Boolean,
        futbol:Boolean,
        tennis:Boolean,
        parking:Boolean,
        photo:String,
        name:String,
    }
)

module.exports = mongoose.model('Hotels', HotelSchema)