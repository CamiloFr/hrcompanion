const usercurriculum = require('../models/Users');
const curriculum = require('../models/Curriculum');

exports.createCurriculum = async (req, res) => {
    const { user, nombres, apellidos, identificacion, tipo, man, girl, single, married, separate, windowe, telefono, pais, departamento, ciudad, direccion, titulo, descripcion, photo } = req.body;

    try {
        let id = user;
        const changecurriculum = await usercurriculum.findOne({id});
        if (changecurriculum) {
            try {
                let updates = { curriculum: true };
                let options = { new: true };
                await usercurriculum.findByIdAndUpdate(changecurriculum._id, updates, options);
            } catch (error) {
                return res.status(400).send({ msg: 'Error actualizando el usuario' });
            }
        }

        const exist = await curriculum.findOne({ user });
        if (exist) {
            try {
                let updates = req.body;
                let options = { new: true };
                const result = await curriculum.findByIdAndUpdate(exist._id, updates, options);
                return res.status(200).json({ msg: 'Registro modificado' });
            } catch (error) {
                return res.status(400).send({ msg: 'Error actualizando la hoja de vida' });
            }
        }

        let hojadevida = new curriculum(req.body);
        await hojadevida.save();
        return res.status(200).json({ msg: 'Registro creado' })

    } catch (error) {
        console.error(error);
        res.status(400).send({ msg: 'Hubo un error' });
    }
}