function showMessage() {
  alert("Hello! You clicked the button!");
}
function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const list = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.textContent = taskText;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "-";
  removeBtn.onclick = function () {
    list.removeChild(li);
  };
  li.appendChild(removeBtn);
  list.appendChild(li);
  input.value = "";
}
