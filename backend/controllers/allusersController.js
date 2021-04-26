const user = require('../models/Users');

exports.allUsers = async (req, res) => {
    try {
        let usuario = await user.find();
        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(400).send('Hubo un error');
    }
}