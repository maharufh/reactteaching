 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  if (tasks.length >= 3) return;

  const input = document.getElementById("taskInput");
  if (!input.value) return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const ul = document.getElementById("tasks");
  ul.innerHTML = "";

  tasks.forEach((task, i) => {
    ul.innerHTML += `<li>${task}</li>`;
  });

  if (tasks.length === 3) {
    document.getElementById("message").innerText =
      "Great work. Stop here. Rest is part of progress.";
  }
}

renderTasks();
