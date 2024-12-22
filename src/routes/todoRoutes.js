const express = require('express');
const TodoController = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, TodoController.createTodo);
router.get('/', authMiddleware, TodoController.getTodos);
router.get('/:id', authMiddleware, TodoController.getTodoById);
router.put('/:id', authMiddleware, TodoController.updateTodoById);
router.delete('/:id', authMiddleware, TodoController.deleteTodoById);

module.exports = router;