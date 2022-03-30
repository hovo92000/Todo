const openButton = document.querySelector(".openButton");
const loginInput = document.querySelector(".loginInput");
const pasInput = document.querySelector(".pasInput");
const todosPageLink = document.querySelector(".todosPageLink");
let users ;

!localStorage.users?users=[]:users=JSON.parse(localStorage.getItem("users"))
function User(login, password) {
  this.login = login;
  this.password = password;
}

openButton.addEventListener("click", () => {
  if (loginInput.value.trim() !== "" && pasInput.value.trim() !== "") {
    todosPageLink.href="todos.html"
    users.push(new User(loginInput.value, pasInput.value));
    updateLocal();
    loginInput.value="";
    pasInput.value="";
  }
});
function updateLocal() {
  localStorage.setItem("users", JSON.stringify(users));
}
// console.log(JSON.parse(localStorage.getItem("users")))
