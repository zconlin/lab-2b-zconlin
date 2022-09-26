class Task {
    constructor({ text, date, done, id }) {
        this.text = text
        this.date = date
        this.done = done
        this.id = id
    }
    toHTML() {
        return `
        <li>
            <input type="checkbox" class="checkbox-icon" onclick='updateTask(${this.id})' ${this.done ? "checked" : ""}>
            <span class="task-description set-width ${this.done ? "checked-task" : ""}">${this.text}</span>
            <span class="task-date">${this.prettyDate()}</span>
            <button class="task-delete material-icon" onclick="deleteTask(${this.id})" type="button">clear</button><br>
        </li>
        `
    }
    prettyDate() {
        let date = new Date(this.date)
        return `${date.getUTCMonth()+1}/${date.getUTCDate()}/${date.getUTCFullYear()}`
        console.log(date);
    }

    toggle() {
        this.done = !this.done
    }
}

function preventSomeKeys(event){
    input.addEventListener('keydown', e => {
        if(e.shiftKey)
          if(e.which == 188,190){
          }
      })
    }

let tasks = []
let newArray = []
readTasks()

function updateStorage(newData) {
    // ... update the local storage
    localStorage.setItem("database", JSON.stringify(newData))
}

function readStorage() {
    // ... read from the local storage
    let jsonString = localStorage.getItem('database')
    let result = JSON.parse(jsonString) || []
    result = result.map(taskData => new Task(taskData))
    return result
}

function createTask(event) {
    event.preventDefault()
    let formData = new FormData(event.currentTarget)
    let json = Object.fromEntries(formData)
    let newTask = new Task({text: json.taskName, date: json.date, done: false, id: Date.now()})
    
    // let content = document.createdElement("strong")
    // content.textContent = event
    // document.getElementById("usercontent").appendChild(content)

    tasks.push(newTask)
    console.log("Added new task")

    updateStorage(tasks)
    readTasks()
}

function readTasks() {
    tasks = readStorage()
    newArray = readStorage()
    let newString = ""
    let tempString

    // if (sort button is checked)
    if (document.getElementById("cb-sort").checked) {
        newArray.sort(function(a, b){return new Date(a.date) - new Date(b.date)});
        console.log("Sorted!")
    }
    
    // if (filter button is checked)
    if (document.getElementById("ft-sort").checked) {
        newArray.filter(function(a, b){return new Date(a.date) - new Date(b.date)});
        console.log("Filtered!")
    }

    for (const x in newArray){
        tempString = newArray.at(x).toHTML()
        newString = newString + tempString
    }
    document.getElementById("taskList").innerHTML = newString
}

function updateTask(id) {
    for (const x in tasks) {
        if(tasks[x].id == id) {
            tasks.at(x).toggle()
        }
    }
    updateStorage(tasks)
    readTasks()
}

function deleteTask(id) {
    // console.log(id)
    for (const x in tasks) {
        if (tasks[x].id == id) {
            tasks.splice(x,1)
        }
    }
    updateStorage(tasks)
    readTasks()
}

function prevent(event){
    event.preventDefault();
}