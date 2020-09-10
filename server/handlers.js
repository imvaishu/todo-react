const { getDefault, toggleStatus } = require('./toggle');

const defaultTodo = () => ({ title: 'Todo', todo: [], lastId: 0 });

const initializeTodoList = (req, res, next) => {
  req.app.locals.db
    .readFromRedis('todoList')
    .then(todoData => {
      req.app.locals.todoList = todoData || defaultTodo();
    })
    .then(next);
};

const getTodoList = function (req, res) {
  res.json(req.app.locals.todoList);
};

const createTodoItem = function (req, res) {
  const { todoList,db } = req.app.locals;
  todoList.lastId++;
  todoList.todo.push({
    content: req.body.content,
    status: getDefault(),
    id: todoList.lastId,
  });
  db.writeToRedis('todoList',todoList)
  res.json(todoList.todo);
};

const deleteTodo = function (req, res) {
  const { todoList ,db} = req.app.locals;
  todoList.todo = todoList.todo.filter(todo => todo.id !== +req.params.id);
  db.writeToRedis('todoList',todoList)
  res.json(todoList.todo);
};

const updateTodoStatus = function (req, res) {
  const { todoList, db } = req.app.locals;
  const todoToUpdate = todoList.todo.find(todo => todo.id === +req.params.id);
  todoToUpdate.status = toggleStatus(todoToUpdate.status);
  db.writeToRedis('todoList',todoList)
  res.json(todoList.todo);
};

const updateTitle = function (req, res) {
  const { todoList, db } = req.app.locals;
  todoList.title = req.body.title;
  db.writeToRedis('todoList', todoList);
  res.json(todoList.title);
};

const deleteTodoList = function (req, res) {
  const { db } = req.app.locals;
  db.writeToRedis('todoList', defaultTodo());
  res.json(req.app.locals.todoList);
};

module.exports = {
  initializeTodoList,
  getTodoList,
  createTodoItem,
  deleteTodoList,
  updateTitle,
  updateTodoStatus,
  deleteTodo,
};
