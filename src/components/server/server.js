const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getDefault, toggleStatus } = require('../toggle');

let index = { lastId: 0 };

let todoList = {
  title: 'Todo',
  todo: [{ content: 'hello', status: getDefault(), id: index.lastId }],
};
app.use(bodyParser.json());

app.get('/api/getTodoList', (req, res) => {
  res.json(todoList);
});

app.post('/api/createTodoItem', (req, res) => {
  const id = ++index.lastId;
  todoList.todo.push({
    content: req.body.content,
    status: getDefault(),
    id: id,
  });
  id.lastId = id;
  res.json(todoList.todo);
});

app.post('/api/deleteTodo/:id', (req, res) => {
  todoList.todo = todoList.todo.filter(todo => todo.id !== +req.params.id);
  res.json(todoList.todo);
});

app.post('/api/updateTodoStatus/:id', (req, res) => {
  todoList.todo.forEach(todo => {
    if (todo.id === +req.params.id) {
      todo.status = toggleStatus(todo.status);
    }
  });
  res.json(todoList.todo);
});

app.post('/api/updateTitle', (req, res) => {
  todoList.title = req.body.title;
  res.json(todoList.title);
});

app.get('/api/deleteTodoList', (req, res) => {
  todoList = { title: 'Todo', todo: [] };
  res.json(todoList);
});

app.listen(8000, () => console.log('listening on 8000'));
