import "./style.css";
import todo from "./components/newTask";
import populate from "./components/populate";

const Task = document.querySelector("#newTask");
const title = document.querySelector("#title");
const DueDate = document.querySelector("#date");
const newP = document.querySelector("#newPro");
const newProName = document.querySelector("#NameOfPro");
const Cont = document.querySelector(".tasks");
const sideMenu = document.querySelector(".sideMenu");
const def = document.querySelector(".default");

let todos = {
  def: [],
};
let currProject = todos.def;
def.addEventListener("click", () => {
  currProject = todos.def;
  Cont.innerHTML = "";
  Cont.appendChild(populate(currProject, todos));
});

//add new task
Task.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(currProject);
  todo(title.value, currProject, DueDate.value);
  console.log(todos);
  localStorage.setItem("todo", JSON.stringify(todos));
  Cont.innerHTML = "";
  Cont.appendChild(populate(currProject, todos));
});

//add new projects
newP.addEventListener("click", () => {
  if (newProName.value == "") {
    alert("Enter a valid name");
    return;
  }
  todos[newProName.value] = [];
  localStorage.setItem("todo", JSON.stringify(todos));
  const div = document.createElement("div");
  const btn = document.createElement("button");
  const del = document.createElement("button");
  del.textContent = "X";
  btn.textContent = newProName.value;
  btn.addEventListener("click", () => {
    currProject = todos[newProName.value];
    Cont.innerHTML = "";
    Cont.appendChild(populate(currProject, todos));
  });
  //delete button in project bar
  del.addEventListener("click", () => {
    if (confirm("This will delete the entire project") == false) {
      return;
    }
    delete todos[btn.textContent];
    console.log(todos);
    localStorage.setItem("todo", JSON.stringify(todos));
    sideMenu.removeChild(div);
    currProject = todos.def;
    Cont.innerHTML = "";
    Cont.appendChild(populate(currProject, todos));
  });
  div.appendChild(btn);
  div.appendChild(del);
  sideMenu.appendChild(div);
});

//windowsloading

window.addEventListener("load", () => {
  if (localStorage.getItem("todo") != null) {
    todos = JSON.parse(localStorage.getItem("todo"));
  }
  currProject = todos.def;
  Cont.appendChild(populate(currProject, todos));
  Object.keys(todos).forEach((project) => {
    if (project == "def") {
      console.log("def");
      return;
    }
    const div = document.createElement("div");
    const btn = document.createElement("button");
    const del = document.createElement("button");
    btn.textContent = project;
    del.textContent = "X";
    btn.addEventListener("click", () => {
      currProject = todos[project];
      Cont.innerHTML = "";
      Cont.appendChild(populate(currProject, todos));
    });

    //delete button in project bar
    del.addEventListener("click", () => {
      if (confirm("This will delete the entire project") == false) {
        return;
      }
      delete todos[btn.textContent];
      console.log(todos);
      localStorage.setItem("todo", JSON.stringify(todos));
      sideMenu.removeChild(div);
      currProject = todos.def;
      Cont.innerHTML = "";
      Cont.appendChild(populate(currProject, todos));
    });
    div.appendChild(btn);
    div.appendChild(del);
    sideMenu.appendChild(div);
  });
});
