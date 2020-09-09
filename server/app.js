const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {
  getTodoList,
  createTodoItem,
  deleteTodoList,
  updateTitle,
  updateTodoStatus,
  deleteTodo,
} = require('./handlers');

const { getDefault } = require('./toggle');

app.locals.TodoList = {
  title: 'Todo',
  todo: [{ content: 'hello', status: getDefault(), id: 0 }],
  lastId: 0,
};

app.use(express.static('build'));

app.use(bodyParser.json());

app.get('/', (req, res) => { res.sendFile('index.html'); });

app.get('/api/getTodoList', getTodoList);

app.post('/api/createTodoItem', createTodoItem);

app.post('/api/deleteTodo/:id', deleteTodo);

app.post('/api/updateTodoStatus/:id', updateTodoStatus);

app.post('/api/updateTitle', updateTitle);

app.get('/api/deleteTodoList', deleteTodoList);

module.exports = { app };
