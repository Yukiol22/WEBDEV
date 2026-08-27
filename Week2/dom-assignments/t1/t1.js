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


todoList.forEach(function (item) {
  let ul = document.querySelector('ul');
  if (item.completed == false){
    let html = `<li>
      <input type="checkbox" id="todo-${item.id}" >
      <label for="todo-${item.id}">${item.task}</label>
    </li>`;
    ul.insertAdjacentHTML('beforeend', html);
  }
  else{
     let html = `<li>
      <input type="checkbox" id="todo-${item.id}" checked>
      <label for="todo-${item.id}">${item.task}</label>
    </li>`;
    ul.insertAdjacentHTML('beforeend', html);
  }

})
