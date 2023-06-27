const model = require('../models/model')

module.exports.editTodo = async (req, res) => {

    const { _id, text } =  req.body
    
    model.findByIdAndUpdate(_id, {text})
    .then(() => res.send('Updated Successfully....'))
    .catch((err) =>  console.log(err))
}

module.exports.toggleComplete = async (req, res) => {

    const { _id, completed } =  req.body
    model.findByIdAndUpdate(_id, {completed})
    .then(() => res.send('Status updated Successfully....'))
    .catch((err) =>  console.log(err))
}
