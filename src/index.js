import "./style.css";
import todo from "./components/newTask";

const Task = document.querySelector("#newTask");
const title = document.querySelector("#title");
const DueDate = document.querySelector("#date");
const newP = document.querySelector("#newPro");
const newProName = document.querySelector("#NameOfPro");
const Cont = document.querySelector(".interaction");
const sideMenu = document.querySelector(".sideMenu");

const todos = {
  def: [],
};
let currProject = todos.def;
//add new task
Task.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(currProject);
  todo(title.value, currProject, DueDate.value);
  console.log(todos);
});

//add new projects
newP.addEventListener("click", () => {
  todos[newProName.value] = [];
  const div = document.createElement("div");
  const btn = document.createElement("button");
  btn.textContent = newProName.value;
  btn.addEventListener("click", () => {
    currProject = todos[newProName.value];
  });
  div.appendChild(btn);
  sideMenu.appendChild(div);
});
