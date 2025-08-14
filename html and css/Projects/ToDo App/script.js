const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const years = document.getElementById('year');

//using localstorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const tasks = getTaskFromLocalStorage();
    tasks.forEach(task=> addTask(task));
});

//let handle the form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        saveTaskToLocalStorage(taskText);
        todoInput.value = '';
    }
});
//add task to local storage
function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    //createting a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    //adding delete functionality
    deleteButton.addEventListener('click', function () {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

//get task from local storage
const getTaskFromLocalStorage= () =>{
return JSON.parse(localStorage.getItem('tasks')) || [];
}

//save a new task to localstorage
const saveTaskToLocalStorage = (taskText)=> {
    const tasks= getTaskFromLocalStorage();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}
//remove task from local storage
const removeTaskFromLocalStorage = (taskText) =>{
    let tasks= getTaskFromLocalStorage();
    tasks = tasks.filter(task=> task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}


//Auto-update the footer year

const currentYear = new Date().getFullYear();
years.textContent = currentYear;