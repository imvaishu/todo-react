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

app.use(bodyParser.json());

app.get('/api/getTodoList', getTodoList);

app.post('/api/createTodoItem', createTodoItem);

app.post('/api/deleteTodo/:id', deleteTodo);

app.post('/api/updateTodoStatus/:id', updateTodoStatus);

app.post('/api/updateTitle', updateTitle);

app.get('/api/deleteTodoList', deleteTodoList);

app.listen(8000, () => console.log('listening on 8000'));
