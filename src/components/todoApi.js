const getTodoList = () => {
  return fetch('/api/getTodoList').then(res => res.json());
};

const createTodoItem = (content) => {
  return fetch('/api/createTodoItem', {
    method: 'post',
    body: JSON.stringify({ content }),
    headers: { 'content-type': 'application/json' },
  }).then(res => res.json());
};

const updateTodoStatus = (id) => {
  return fetch(`/api/updateTodoStatus/${id}`, {
    method: 'post',
  }).then(res => res.json());
};

const updateTitle = (title) => {
  return fetch('/api/updateTitle', {
    method: 'post',
    body: JSON.stringify({ title }),
    headers: { 'content-type': 'application/json' },
  }).then(res => res.json());
};

const deleteTodo = (id) => {
  return fetch(`/api/deleteTodo/${id}`, {
    method: 'post',
  }).then(res => res.json());
};

const deleteTodoList = () => {
  return fetch('/api/deleteTodoList').then(res => res.json());
};

module.exports = {
  getTodoList,
  createTodoItem,
  updateTodoStatus,
  updateTitle,
  deleteTodo,
  deleteTodoList,
};
