const model = require('../models/model')

module.exports.editTodo = async (req, res) => {

    const { _id, task_name, completed } =  req.body
    
    model.findByIdAndUpdate(_id, {task_name, completed})
    .then(() => res.send('Updated Successfully....'))
    .catch((err) =>  console.log(err))
}
