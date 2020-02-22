const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please type a task first!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.value = "";
});
