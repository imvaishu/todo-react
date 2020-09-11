const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { RedisClient } = require('./redisClient');

const redis = require('redis');

const getRedisClient = function () {
  if (process.env.REDISCLOUD_URL) {
    return redis.createClient(process.env.REDISCLOUD_URL, {
      no_ready_check: true,
    });
  }
  return redis.createClient();
};

const {
  initializeTodoList,
  getTodoList,
  createTodoItem,
  deleteTodoList,
  updateTitle,
  updateTodoStatus,
  deleteTodo,
} = require('./handlers');

app.locals.db = new RedisClient(getRedisClient());

app.use(express.static('build'));

app.use(bodyParser.json());

app.use(initializeTodoList);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/api/getTodoList', getTodoList);

app.post('/api/createTodoItem', createTodoItem);

app.post('/api/deleteTodo/:id', deleteTodo);

app.post('/api/updateTodoStatus/:id', updateTodoStatus);

app.post('/api/updateTitle', updateTitle);

app.get('/api/deleteTodoList', deleteTodoList);

module.exports = { app };
