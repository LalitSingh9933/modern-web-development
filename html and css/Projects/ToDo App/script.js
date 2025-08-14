const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const years = document.getElementById('year');

//let handle the form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    //createting a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    //adding delete functionality
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(li);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
//Auto-update the footer year

const currentYear = new Date().getFullYear();
years.textContent = currentYear;