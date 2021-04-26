const mongoose = require('mongoose');

var CurriculumSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        nombres: String,
        apellidos: String,
        identificacion: String,
        tipo: String,
        genero: String,
        estadocivil: String,
        telefono: String,
        pais: String,
        departamento: String,
        ciudad: String,
        direccion: String,
        titulo: String,
        descripcion: String,
        photo: String,
    }
)

module.exports = mongoose.model('Curriculum', CurriculumSchema)