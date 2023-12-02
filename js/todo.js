const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDolist = document.getElementById("todo-list")
let todos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}


function deleteListButton(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}

function paintToDo(newtodo){
    const li = document.createElement("li")
    li.id = newtodo.id
    const span = document.createElement("span")
    const deleteButton = document.createElement("button")


    li.appendChild(span);
    span.innerText = newtodo.text;

    li.appendChild(deleteButton);
    deleteButton.innerText = "❌"
    
    deleteButton.onclick = deleteListButton
    toDolist.appendChild(li);

    
    }
   
    



function handleToDoSubmit(event){
    event.preventDefault();
    const newtodo = toDoInput.value;
    toDoInput.value="";
    const newtodoObj = {
        text: newtodo,
        id: Date.now(),
    }
    todos.push(newtodoObj);
    paintToDo(newtodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


    /* 리스트를 만들고, 백업하고, 불러오기까지 완성. X버튼 눌렀을 때
    local storage에서 지워지는 기능만 만들면 해결*/
