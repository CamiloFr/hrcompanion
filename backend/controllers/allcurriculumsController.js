const user = require('../models/Users');
const curriculum = require('../models/Curriculum');

exports.allCurriculums = async (req, res) => {
    try {
        let curriculums = await curriculum.find();
        res.json(curriculums);
    } catch (error) {
        console.error(error);
        res.status(400).send('Hubo un error');
    }
}