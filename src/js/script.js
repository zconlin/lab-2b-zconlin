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
    tasks.push(newTask)
    console.log("Added new task")

    // for (i = 0; i < database.length; i++) {
    //     databaseSort[i] = database[i];
    //     console.log(database[i])
    //     console.log(databaseSort[i])
    //   }

    updateStorage(tasks)
    readTasks()
}

function readTasks() {
    tasks = readStorage()
    newArray = readStorage()
    let newString = ""
    let tempString

    // if (button is checked)
    if (document.getElementById("cb-sort").checked) {
        newArray.sort();
        console.log("Sorted!")
    }
    // then call the sortTasks()

    for (const x in newArray){
        tempString = newArray.at(x).toHTML()
        newString = newString + tempString
    }
    document.getElementById("taskList").innerHTML = newString
}

function updateTask(id) {
    // console.log(id)
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

function sortTasks() {
    console.log("Flip!")
}

function prevent(event){
    event.preventDefault();
}

// const sortButton = document.getElementById("cb-sort");
// sortButton.addEventListener("click", sortTasks()) {
//   document.getElementById("cb-sort").innerHTML = "Hello World"
//   console.log("cb-sort")
// });

// function byDate() {
//     for (i = 0; i < tasks.size(); i++) {
//         x = tasks(date).at[i]
//         y = tasks(date).at[i+1]

//         tasks.sort(function(x, y) {
//             return x.timestamp - y.timestamp
//         }
//     }
// }

// const dates = ['Mar 16 2017', 'Jan 22 2021', 'Dec 31 2000'];
// dates.sort();
// console.log(dates); 