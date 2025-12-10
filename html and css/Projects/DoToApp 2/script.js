const mainTodoElem = document.querySelector(".todo-lists-elem");
const inputValue = document.getElementById("inputValue");



const getTodoListFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("youtubeTodoList"));

};
let localTodoLists = getTodoListFromLocalStorage() || [];

//adding add to list dynamically
const addTodoDynamicElement = (curEle) => {

    const divElement = document.createElement("div");
    divElement.classList.add("main-todo-div");
    divElement.innerHTML = `<li>${curEle}</li>
    <button class ="deleteBtn">Delete</button>`;
    mainTodoElem.append(divElement);

}
const addToodList = (e) => {
    e.preventDefault();


    const todoListValue = inputValue.value.trim();


    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)];
    console.log(localTodoLists);
    localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists))

    const divElement = document.createElement("div");
    divElement.classList.add("main-todo-div");
    divElement.innerHTML = `<li>${inputValue.value}</li>
    <button class ="deleteBtn">Delete</button>`;
    mainTodoElem.append(divElement);
};
const showTodoList = () => {
    console.log(localTodoLists);
    localTodoLists.forEach(curEle => {

    });
}
showTodoList();


document.querySelector(".btn").addEventListener("click", (e) => {
    addToodList(e);
});