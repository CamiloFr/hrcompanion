const user = require('../models/Users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.authenticationUser = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({msg: errores.array()});
    }
    
    const { id, password } = req.body;

    try {
        let usuario = await user.findOne({ id });
        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' })
        }

        let passCorrect = await bcryptjs.compare(password, usuario.password)
        if (!passCorrect) {
            return res.status(400).json({ msg: 'Password incorrecto' })
        }

        return res.status(200).json({ id: usuario.id, curriculum: usuario.curriculum, type:usuario.type, photo: usuario.photo })

    } catch (error) {
        console.log(error);
    }
}