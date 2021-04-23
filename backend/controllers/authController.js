const user = require('../models/Users');
const bcryptjs = require('bcryptjs');
const { ValidationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticationUser = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    const { id, password } = req.body;

    try {
        let usuario = user.findOne({ id })

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' })
        }

    } catch (error) {
        console.log(error);
    }
}