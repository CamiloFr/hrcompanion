const user = require('../models/Users');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const { id, password } = req.body;

    try {
        let usuario = await user.findOne({id});

        if (usuario){
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        usuario = new user(req.body);

        const payload = {
            usuario: {
                id: usuario.id,
            }
        };

        jwt.sign(payload, process.env.SERCRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error;

            res.json({ token:token });
        });

        await usuario.save();
    } catch (error) {
        console.error(error);
        res.status(400).send('Hubo un error');
    }
}