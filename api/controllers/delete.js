const model = require('../models/model')

module.exports.deleteTodo = async (req, res) => {

    const {_id} =  req.body
    
    model.findByIdAndDelete(_id)
    .then(() => res.send('Deleted Successfully....'))
    .catch((err) =>  console.log(err))
}
