const model = require('../models/model')

module.exports.getTodo = async (req, res) => {
    const todos = await model.find()
    res.send(todos)
}
