var express = require('express');
var router = express.Router();
const { getTodo } = require('../controllers/view');
const { createTodo } = require('../controllers/create');
const { editTodo } = require('../controllers/edit');
const { deleteTodo } = require('../controllers/delete');

router.get('/', getTodo)
router.post('/save', createTodo)
router.post('/update', editTodo)
router.delete('/delete', deleteTodo)

module.exports = router;
