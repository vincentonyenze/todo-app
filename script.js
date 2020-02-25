const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please type a task first!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
