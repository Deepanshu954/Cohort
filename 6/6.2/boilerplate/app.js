let ctr = 2;

function addTask()
{
    const inputEle = document.getElementById("inputEle");
    const value = inputEle.value;

    console.log(value);

    if(value === "")
    {
        alert("Enter A Task");
        return;
    }

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo-"+ctr);
    newDiv.setAttribute("class", "task");

    newDiv.innerHTML = `
        <h4> ${value}</h4>
        <button onclick = "deleteTask(${ctr})">❌</button>
    `;

    document.getElementById("items").appendChild(newDiv);
    ctr++;
    inputEle.value = "";
}


function deleteTask(index)
{

    const element = document.getElementById("todo-"+ index);
    if(element)
    {
        element.remove();
        ctr--;
    }
}

document.getElementById("inputEle").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
