let task = [];

function addTask(event) {
    event.preventDefault();

    const addTaskInput = document.getElementById("taskInput").value;
    task.push({ text: addTaskInput, important: false });

    console.log(task);
    document.getElementById("taskInput").value = "";

    toDoList();
}

function toDoList(filteredTasks = task) {
    let listTask = document.getElementById("taskList");
    listTask.innerHTML = "";
    filteredTasks.forEach((taskItem, taskIndex) => {
        listTask.innerHTML += `
            <div class="d-flex justify-content-between border p-2 text-center" style="background-color: ${taskItem.important ? 'red' : 'white'};">
                <li style="list-style: none;">${taskItem.text}</li>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-info" onclick="importantTask(${taskIndex})">Important</button>
                    <button class="btn btn-sm btn-warning" onclick="editTask(${taskIndex})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTask(${taskIndex})">Delete</button>
                </div>
            </div>
        `;
    });
}

function editTask(taskIndex) {
    const newTask = prompt("Edit your task:", task[taskIndex].text);
    if (newTask !== null) {
        task[taskIndex].text = newTask;
        toDoList();
    }
}

function deleteTask(taskIndex) {
    task.splice(taskIndex, 1);
    toDoList();
}

function filterTask() {
    const filterInput = document.getElementById("filterInput").value.toLowerCase();
    const filteredTasks = task.filter(taskItem => taskItem.text.toLowerCase().includes(filterInput));
    toDoList(filteredTasks);
}

function importantTask(taskIndex) {
    task[taskIndex].important = !task[taskIndex].important;
    if (task[taskIndex].important) {
        const markAsImportant = task.splice(taskIndex, 1)[0];
        task.unshift(markAsImportant);
    } else {
        const markNotImportant = task.splice(taskIndex, 1)[0];
        task.push(markNotImportant);
    }
    toDoList();
}


