const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

function updateCount() {
    const tasksLeft = taskList.querySelectorAll("li:not(.completed)").length;

    if (tasksLeft === 1) {
        taskCount.textContent = "1 task left";
    } else {
        taskCount.textContent = tasksLeft + " tasks left";
    }
}

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
        updateCount();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
