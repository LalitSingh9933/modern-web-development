function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function loadTasks(){
    let stored =localStorage.getItem("tasks");
    if(stored){
        tasks =JSON.parse(stored);
        displayTasks();
    }
}


let tasks = [];
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        saveTasks();
        displayTasks();
        taskInput.value = "";
    }

}
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = () => deleteTask(index);
        li.appendChild(btn);
        taskList.appendChild(li);
    });

}
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}
window.onload=loadTasks;