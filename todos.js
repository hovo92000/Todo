// const addButton = document.querySelector(".addButton");
// const myInput = document.querySelector(".myInput");
// let checked=false;
// // console.log(myInput.value)
// addButton.addEventListener("click", () => {
//   if (myInput.value === "") {
//     alert("please input enithing");
//   } else {
//     renderSpanInNewDiv(renderNewDiv());
//     myInput.value = "";
//   }
// });
// function renderNewDiv() {
//   let newDiv = document.createElement("div");
//   newDiv.classList = "newDiv";
//   newDiv.innerHTML = myInput.value;
//   return newDiv;
// }

// function renderSpanInNewDiv(newDiv) {
//   let arrow = document.createElement("span");
//   arrow.classList = "arrow";
//   newDiv.appendChild(arrow);

//   let closeButton = document.createElement("span");
//   closeButton.id = "closeButton";
//   closeButton.innerHTML = "x";
//   newDiv.appendChild(closeButton);

//   closeButton.onclick = function () {
//     newDiv.remove();
//   };

//   newDiv.onclick = function () {
//       if(checked){
//           checked = false;
//         //   arrow.style.display = "none";
//         //   newDiv.style.backgroundColor = "red";
//         newDiv.id=""

//         }else{
//           checked = true;
//         //   arrow.style.display = "block";
//         //   newDiv.style.backgroundColor = "blue";
//           newDiv.id = "checked";
//       }
//   };
//   document.body.appendChild(newDiv);
// //   const todos = localStorage.getItem("todos");
// //   const todosArray = JSON.parse(todos);

// //   todosArray.push({
// //     text: newDiv.innerText,
// //   });
// //   localStorage.setItem("todos", JSON.stringify(todosArray));
// }

// // const todos = localStorage.getItem("todos");
// // const todosArray = JSON.parse(todos);

// // todosArray.push({
// //   text: newDiv.innerHTML,
// // });

const taskInput = document.querySelector(".myInput");
const addButton = document.querySelector(".addButton");
const divForTodos = document.querySelector(".divForTodos");
const date=document.querySelector(".data");

let data=new Date();
date.innerHTML=data.toDateString()

let tasks;
!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));
let todoListElem = [];
function Task(todoText) {
  this.todoText = todoText;
  this.completed = false;
}

function renderTemplate(item, index) {
  return `
    <div class="todoList${item.completed ? "Checked" : ""} ">
    <div class="todoText">${item.todoText}</div>
    <div class="buttons" >
    <input onclick="completeTask(${index})" type="checkbox" class="buttonCompleted" ${
    item.completed ? "checked" : ""
  }>
    <button onclick="deleteTask(${index})" class="deleteButton">delete</button>
    </div>
    </div>
    `;
}

function fillHtmlList() {
  divForTodos.innerHTML = "";
  if (tasks.length > 0 ) {
    tasks.forEach((item, index) => {
      divForTodos.innerHTML += renderTemplate(item, index);
    }); 
    // todoListElem = document.querySelectorAll(".todoList");
  }
}
fillHtmlList();

function updateLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  updateLocal();
  fillHtmlList();
}

addButton.addEventListener("click", () => {
    if(taskInput.value.trim()!==""){
  tasks.push(new Task(taskInput.value));
    }
  updateLocal();
  fillHtmlList();
  taskInput.value = "";
});

function deleteTask(index){
    tasks.splice(index,1)
    updateLocal()
    fillHtmlList()
}