const model = require('../models/model')

module.exports.createTodo = async (req, res) => {

    const body = req.body
    model.create(body).then((data) => {
        console.log("Task added successfully...");
        res.send(data);
    })
}
