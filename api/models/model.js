const mongoose = require('mongoose')

const appSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('tasks', appSchema)