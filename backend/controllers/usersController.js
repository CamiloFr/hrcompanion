const user = require('../models/Users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({errores: errores.array})
    }

    const { id, password } = req.body;

    try {
        let usuario = await user.findOne({id});

        if (usuario){
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        usuario = new user(req.body);

        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        await usuario.save();
        res.json({ msg: 'Usuario creado correctamente' });;
    } catch (error) {
        console.error(error);
        res.status(400).send('Hubo un error');
    }
}