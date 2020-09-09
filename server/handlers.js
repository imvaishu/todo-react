const { getDefault, toggleStatus } = require('./toggle');

const getTodoList = function (req, res) {
  res.json(req.app.locals.TodoList);
};

const createTodoItem = function (req, res) {
  const { TodoList } = req.app.locals;
  TodoList.lastId++
  TodoList.todo.push({ content: req.body.content, status: getDefault(), id: TodoList.lastId, });
  res.json(TodoList.todo);
};

const deleteTodo = function (req, res) {
  const { TodoList } = req.app.locals;
  TodoList.todo = TodoList.todo.filter(todo => todo.id !== +req.params.id);
  res.json(TodoList.todo);
};

const updateTodoStatus = function (req, res) {
  const { TodoList } = req.app.locals;
  const todoToUpdate = TodoList.todo.find(todo => todo.id === +req.params.id);
  todoToUpdate.status = toggleStatus(todoToUpdate.status);
  res.json(TodoList.todo);
};

const updateTitle = function (req, res) {
  const { TodoList } = req.app.locals;
  TodoList.title = req.body.title;
  res.json(TodoList.title);
};

const deleteTodoList = function (req, res) {
  const { TodoList } = req.app.locals;
  TodoList.title = 'Todo';
  TodoList.todo = [];
  TodoList.lastId = 0;
  res.json(TodoList);
};

module.exports = {
  getTodoList,
  createTodoItem,
  deleteTodoList,
  updateTitle,
  updateTodoStatus,
  deleteTodo,
};
