export default function (title, pro, dueDate) {
  if (title == "") {
    alert("Title cannot be empty");
    return;
  }
  pro.push({
    title: title,
    marked: false,
    deadline: dueDate,
  });
  return;
}
