export default function (list, todos) {
  const div = document.createElement("div");
  console.log(list);
  list.forEach((obj, index) => {
    const task = document.createElement("div");
    const para = document.createElement("p");
    const endDate = document.createElement("p");
    const btn = document.createElement("input");
    const del = document.createElement("button");
    para.textContent = obj.title;
    endDate.textContent = obj.deadline;
    btn.setAttribute("type", "checkbox");
    btn.addEventListener("click", () => {
      para.classList.toggle("strike");
      obj.marked = !obj.marked;
      localStorage.setItem("todo", JSON.stringify(todos));
    });
    del.textContent = "Delete";
    task.appendChild(para);
    task.appendChild(endDate);
    task.appendChild(btn);
    task.appendChild(del);
    task.setAttribute("data-index", `${index}`);
    // add a event listener here
    del.addEventListener("click", () => {
      list.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(todos));
      div.removeChild(task);
    });
    div.appendChild(task);
  });
  return div;
}
