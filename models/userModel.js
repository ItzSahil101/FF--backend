const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    num: {
        type: Number,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("data", userSchema)