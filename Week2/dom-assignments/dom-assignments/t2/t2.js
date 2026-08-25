

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

todoList.forEach(item => {
  ul = document.querySelector("ul")
  let li = document.createElement("li")
  let input = document.createElement("input")
  input.type = 'checkbox';
  input.id = `todo-${item.id}`;
  input.checked = item.completed;
  let label = document.createElement("label")
  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;

  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
});
