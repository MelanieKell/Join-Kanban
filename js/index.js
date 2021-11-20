/**
/**
 * Fires the functions when side loads
 */
 async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    
   
}

/* Array für the tasks from the backend */
let todos = [];

/* trying to load the tasks from backend into todos array */
async function tasksForBoard() {
    await downloadFromServer();
    todos = JSON.parse(backend.getItem('todos')) || [];
}

function renderTasks() {

    for (let i = 0; i < todos.length; i++) {
        document.getElementById('boardColumn').innerHTML += ` 

    <div class="task-board"> 
        <div><b>${todos[i].title}</b></div>
        <div>${todos[i].date}</div>
        <div>${todos[i].category}</div>
    </div>`;
    }


}