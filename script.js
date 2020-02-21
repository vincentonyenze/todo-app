const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = "";
});
