const hotel = require('../models/Hotels');

exports.allHotels = async (req, res) => {
    console.log('aca');
    try {
        let hotels = await hotel.find();
        res.json(hotels);
    } catch (error) {
        console.error(error);
        res.status(400).send('Hubo un error');
    }
}