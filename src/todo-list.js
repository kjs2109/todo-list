const todoForm  = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoUl = document.querySelector('.todo-ul');

let toDos = [];

function storageSaveToDos(toDos) {
    localStorage.setItem('to-dos', JSON.stringify(toDos));
}

function deletTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.dir(li.className);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.className));
    console.log(toDos);
    storageSaveToDos(toDos)
}

function paintTodo(todoObj) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerText = todoObj['text'];
    button.innerText = 'X';

    todoUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    li.classList.add(todoObj['id']);

    button.addEventListener('click', deletTodo);
}

function handleTodoInput(event) {
    event.preventDefault();

    const toDo = todoInput.value;
    todoInput.value = '';

    const id = Date.now()
    const toDoObj = {id:id, text:toDo}

    toDos.push(toDoObj);
    storageSaveToDos(toDos);
    console.log(toDos);

    paintTodo(toDoObj);
}

const storageGetToDos = JSON.parse(localStorage.getItem('to-dos'));

console.log(storageGetToDos);

if (storageGetToDos !== null){
    for (const storageGetToDo of storageGetToDos){
        paintTodo(storageGetToDo);
    }
    toDos = storageGetToDos;
}


todoForm.addEventListener('submit', handleTodoInput);