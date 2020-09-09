const { getDefault, toggleStatus } = require('../src/components/toggle');

let index = { lastId: 0 };

let todoList = {
  title: 'Todo',
  todo: [{ content: 'hello', status: getDefault(), id: index.lastId }],
};

const getTodoList = function (req, res) {
  res.json(todoList);
};

const createTodoItem = function (req, res) {
  const id = ++index.lastId;
  todoList.todo.push({
    content: req.body.content,
    status: getDefault(),
    id: id,
  });
  id.lastId = id;
  res.json(todoList.todo);
};

const deleteTodo = function (req, res) {
  todoList.todo = todoList.todo.filter(todo => todo.id !== +req.params.id);
  res.json(todoList.todo);
};

const updateTodoStatus = function (req, res) {
  todoList.todo.forEach(todo => {
    if (todo.id === +req.params.id) {
      todo.status = toggleStatus(todo.status);
    }
  });
  res.json(todoList.todo);
};

const updateTitle = function (req, res) {
  todoList.title = req.body.title;
  res.json(todoList.title);
};

const deleteTodoList = function (req, res) {
  todoList = { title: 'Todo', todo: [] };
  res.json(todoList);
};

module.exports = {
  getTodoList,
  createTodoItem,
  deleteTodoList,
  updateTitle,
  updateTodoStatus,
  deleteTodo,
};
