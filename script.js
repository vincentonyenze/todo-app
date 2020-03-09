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

function saveTasks() {
    const tasks = [];

    taskList.querySelectorAll("li").forEach(function (li) {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please type a task first!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateCount();
        saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateCount();
        saveTasks();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
    saveTasks();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
