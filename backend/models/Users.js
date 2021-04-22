const mongoose = require('mongoose');

var UsersSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: String,
        curriculum: Boolean,
        type: String,
    }
)

module.exports = mongoose.model('Users', UsersSchema)