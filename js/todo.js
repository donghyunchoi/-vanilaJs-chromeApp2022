const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

let toDos = [];

const TODOS_KEY = "todos"

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function handleTodoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos(); 
}

function deleteTodo(event){ 
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((todo)=>todo.id !==parseInt(li.id))
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

toDoForm.addEventListener("submit", handleTodoSubmit)


const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

function sexyFilter(item){
    return item!==3
}

