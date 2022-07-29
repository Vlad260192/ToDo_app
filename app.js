function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
}

function addTodoItem(event) {
    event.preventDefault();

    if (addInput.value === '') return alert('необходимо ввести название задачи.');

    const listItem = createTodoItem(addInput.value);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem)