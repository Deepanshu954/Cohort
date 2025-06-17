let ctr = 3;

function addTask() {
    const inputEle = document.getElementById("inputEle");
    const value = inputEle.value.trim();

    if (value === "") {
        alert("Please enter a task.");
        return;
    }

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo-" + ctr);
    newDiv.setAttribute("class", "dis");

    newDiv.innerHTML = `
        <h4>${value}</h4>
        <button class="delete-btn" onclick="deleteTask(${ctr})">❌</button>
    `;

    document.getElementById("tasks-container").appendChild(newDiv);

    // Clear the input and increment counter
    inputEle.value = "";
    ctr++;
    inputEle.focus();
}

function deleteTask(index) {
    const element = document.getElementById("todo-" + index);
    if (element) {
        element.remove();
    }
}

// ENTER key triggers addTask
const inputEle = document.getElementById("inputEle");
if (inputEle) {
    inputEle.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
}


