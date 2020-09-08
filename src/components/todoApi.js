const TodoApi = {};

TodoApi.getTodoList = () => {
  return fetch('/api/getTodoList').then(res => res.json());
};

TodoApi.createTodoItem = (content) => {
  return fetch('/api/createTodoItem', {
    method: 'post',
    body: JSON.stringify({ content }),
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json());
};

TodoApi.updateTodoStatus = (id) => {
  return fetch(`/api/updateTodoStatus/${id}`, {
    method: 'post',
  }).then(res => res.json());
};

TodoApi.updateTitle = (title) => {
  return fetch('/api/updateTitle', {
    method: 'post',
    body: JSON.stringify({ title }),
    headers: { 'content-type': 'application/json' },
  }).then(res => res.json());
};

TodoApi.deleteTodo = (id) => {
  return fetch(`/api/deleteTodo/${id}`, {
    method: 'post',
  }).then(res => res.json());
};

TodoApi.deleteTodoList = () => {
  return fetch('/api/deleteTodoList').then(res => res.json());
};

export default TodoApi;
