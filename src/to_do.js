// Hello O_o
"use strict"
let database = [
    {"task": "O_o", "status": ""}
]
function createTask(text, status, index){
    const task = document.createElement("label")
    task.classList.add("task-item")
    task.innerHTML = `
        <input type="checkbox" ${status} data-indice=${index}>
        <div class="task-text">${text}</div>
        <input id="delButton" type="button" value="X" data-indice=${index}>
    `
    document.querySelector("#task-list").appendChild(task)
}

function cleanTasks(){
    const list = document.querySelector("#task-list")
    while(list.firstChild){
        list.removeChild(list.lastChild)
    }
    console.log(database)
}

function UpdateWindow(){
    cleanTasks()
    database.forEach((item, index) => createTask(item.task, item.status, index))
}

function insertTask(event){
    const keyE = event.key
    const text = event.target.value
    if(keyE == "Enter"){
        database.push({"task": text, "status": ""})
        UpdateWindow()
        event.target.value = "";
    }
}

function removeTask(index){
    database.splice(index, 1)
    UpdateWindow()
}

function actualizeBox(index){
    database[index].status = database[index].status == "" ? "checked" : ""
    UpdateWindow()
}

function clickTask(event){
    const element = event.target
    if(element.type == "button"){
        const indice = element.dataset.indice
        removeTask(indice)
    } else if(element.type == "checkbox"){
        const indice = element.dataset.indice
        actualizeBox(indice)
    }
}

document.querySelector("#input-item-text").addEventListener("keypress", insertTask)
document.querySelector("#task-list").addEventListener("click", clickTask)

UpdateWindow()
