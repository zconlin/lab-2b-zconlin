class Task {
    constructor({ text, date, done, id }) {
        // HINT This method is the constructor. In C++, this would be
        // the Task() method. The curly braces inside the constructor is 
        // a JavaScript syntax that is called 'deconstruction'. This
        // means the constructor will ask for an object
        // (`{i: 'am', an: 'object'}`) with the parameters `text`,
        // `date`, `done`, and `id`. This will make it easier to
        // convert it from the local storage database we will set up.
        this.text = text
        this.date = date
        this.done = done
        this.id = id
    }
    toHTML() {
        // TODO: Fill out this method. It should return a string version
        // of this task, including an `<li>` tag and all of the
        // css classes you used to make it look pretty. It should
        // display the `text`, `date`, and `done` property of this
        // Task. It should also have two inline event handlers, which call the
        // update and delete function, with this Task's `id` as a
        // parameter.
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
        // TODO: Fill out this method. It should return the date in our
        // locale's format, 'MM / DD / YYYY', instead of the
        // easily-sortable international standard, 'YYYY-MM-DD'.
        // this.date.toLocalString('en-us', {month:"numeric", day:"numeric", year:"numeric",})
        let date = new Date(this.date)
        return `${date.getUTCMonth()+1}/${date.getUTCDate()}/${date.getUTCFullYear()}`
        console.log(date);
    }
    
    toggle() {
        // TODO: Fill out this method. It should flip this Task's `done`
        // property from `true` to `false`, or from `false` to `true`.
        this.done = !this.done
    }
}

let tasks = readStorage()
readTasks();

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
    event.preventDefault();
    let formData = new FormData(event.currentTarget)
    let json = Object.fromEntries(formData)
    let newTask = new Task({text: json.taskName, date: json.date, done: false, id: Date.now()})
    tasks.push(newTask);
    updateStorage(tasks);
    readTasks();
        // TODO: Pull in form data from DOM
        // TODO: Format it to JSON
        // TODO: Save it to local storage
        // Hint - Look at the JavaScript code from lab 1B to see how to extract form data
}

function readTasks() {
    tasks = readStorage()
    let newString = ""
    let tempString

    for (const x in tasks){
        tempString = tasks.at(x).toHTML()
        newString = newString + tempString
    }
    document.getElementById("taskList").innerHTML = newString
    // TODO: Pull in tasks from local storage
    // TODO: Parse tasks using the toHTML() function
    // TODO: Update DOM accordingly

}
function updateTask(id) {
    console.log(id)
    for (const x in tasks) {
        if(tasks[x].id == id) {
            tasks.at(x).toggle()
        }
    }
    updateStorage(tasks)
    readTasks()
    // TODO: Update the task in `tasks` array by flipping it's `done` value
    // TODO: Save to local storage
    // TODO: Make the DOM update
    // Call Toggle function and update HTML + local storage
}

function deleteTask(id) {
    console.log(id)
    for (const x in tasks) {
        if (tasks[x].id == id) {
            tasks.splice(x,1)
        }
    }
    // TODO: Delete task from `tasks` array
    // TODO: Save to local storage
    // TODO: Make the DOM update
    updateStorage(tasks)
    readTasks()
}

function prevent(event){
    /* Make sure it is the first line of code in the function, if there is an error in a line of code that is above event.preventDefault() the function will stop and never reach it.
    /* If you were to comment out the line below you would see that the page reloads every time you click the button */
    event.preventDefault();
}

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