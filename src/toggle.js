const DONE = 'done';
const DOING = 'doing';
const UNDONE = 'undone';

const toggle = {
  [UNDONE]: DOING,
  [DOING]: DONE,
  [DONE]: UNDONE,
};

const getDefault = () => UNDONE;

const toggleStatus = currentStatus => toggle[currentStatus];

export { getDefault, toggleStatus };
