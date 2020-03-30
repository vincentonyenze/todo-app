const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const clearButton = document.getElementById("clear-completed");
const emptyMessage = document.getElementById("empty-message");

function updateCount() {
    const tasksLeft = taskList.querySelectorAll("li:not(.completed)").length;

    if (tasksLeft === 1) {
        taskCount.textContent = "1 task left";
    } else {
        taskCount.textContent = tasksLeft + " tasks left";
    }

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
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

function createTask(text, completed) {
    const li = document.createElement("li");

    if (completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateCount();
        saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        updateCount();
        saveTasks();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please type a task first!");
        return;
    }

    createTask(taskText, false);

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

clearButton.addEventListener("click", function () {
    taskList.querySelectorAll("li.completed").forEach(function (li) {
        li.remove();
    });

    updateCount();
    saveTasks();
});

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function (task) {
        createTask(task.text, task.completed);
    });

    updateCount();
}

loadTasks();
