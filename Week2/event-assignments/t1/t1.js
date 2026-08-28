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


const ul = document.querySelector('ul');

// Render initial array
todoList.forEach((item) => {
  const isChecked = item.completed ? 'checked' : '';
  const html = `
    <li>
      <input type="checkbox" id="todo-${item.id}" ${isChecked}>
      <label for="todo-${item.id}">${item.task}</label>
      <button type="button" class="delete-btn" data-id="${item.id}">delete</button>
    </li>`;
  ul.insertAdjacentHTML('beforeend', html);
});

const dialog = document.createElement('dialog');
const heading = document.createElement('h2');
heading.textContent = 'Add Todo Item';
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add todo item here';
const saveBtn = document.createElement('button');
saveBtn.type = 'submit';
saveBtn.textContent = 'Save';

form.appendChild(input);
form.appendChild(saveBtn);
dialog.appendChild(heading);
dialog.appendChild(form);
document.body.appendChild(dialog);

const openModalBtn = document.querySelector('.add-btn');
openModalBtn.addEventListener('click', () => {
  dialog.showModal();
});

function generateNumericId() {
  if (todoList.length === 0) return 1;
  const maxId = Math.max(...todoList.map(item => item.id));
  return maxId + 1;
}


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const itemText = input.value.trim();

  if (itemText !== '') {
    const newTodo = {
      id: generateNumericId(),
      task: itemText,
      completed: false
    };

    const html = `
      <li>
        <input type="checkbox" id="todo-${newTodo.id}">
        <label for="todo-${newTodo.id}">${newTodo.task}</label>
        <button type="button" class="delete-btn" data-id="${newTodo.id}">delete</button>
      </li>`;

    ul.insertAdjacentHTML('beforeend', html);
    todoList.push(newTodo);
    console.log('Updated todoList after add:', todoList);
    
    input.value = '';
    dialog.close();
  }
});

ul.addEventListener('click', (event) => {

  if (event.target.classList.contains('delete-btn')) {
    const idToDelete = parseInt(event.target.dataset.id);
    

    const index = todoList.findIndex(item => item.id === idToDelete);

    if (index) {
      todoList.splice(index, 1); 
      event.target.closest('li').remove();
      console.log('Updated todoList after delete:', todoList);
    }
  }
});


ul.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const id = parseInt(event.target.id.split('-')[1]);
    const targetItem = todoList.find(item => item.id === id);
    
    if (targetItem) {
      targetItem.completed = event.target.checked;
      console.log('Updated todoList after toggle:', todoList);
    }
  }
});