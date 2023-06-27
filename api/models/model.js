const mongoose = require('mongoose')

const appSchema = new mongoose.Schema({
    task_name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean
    }
})

module.exports = mongoose.model('tasks', appSchema)