export default function (title, pro, dueDate) {
  pro.push({
    title: title,
    marked: false,
    deadline: dueDate,
  });
  return;
}
