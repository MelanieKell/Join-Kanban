let allTasks = [];
let currentUser = [];



/**
 * Fires the functions when side loads
 */
 async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();

}

function showTasks() {
    let taskRow = document.getElementById('taskRow');
    taskRow.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {

        console.log('showsomething');

        taskRow.innerHTML += `
            <div class="history">

                <div class="members-list" id="members-list${i}">

            </div>

            <div class="category">

                <p class="category1">${allTasks[i].category}</p>

            </div>

            <div class="details-history">
 
                <p>${allTasks[i].description}</p>

            </div>

        </div>
        `;
    }
}


/* funktioniert noch nicht!!!!!! 

function renderTasks() {

    for (let i = 0; i < allTasks.length; i++) {
        document.getElementById('boardColumnToDo').innerHTML += ` 

    <div class="task-board"> 
        <div><b>${allTasks[i].title}</b></div>
        <div>${allTasks[i].date}</div>
        <div>${allTasks[i].category}</div>
    </div>`;
    }


}
*/





let currentDraggedElement;

function updateHTML() {
    let open = todos.filter(t => t['board'] == 'todo');
    document.getElementById('todo').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);

    }

    let closed = todos.filter(t => t['board'] == 'closed');
    document.getElementById('closed').innerHTML = '';

    for (let i = 0; i < closed.length; i++) {
        const element = closed[i];
        document.getElementById('closed').innerHTML += generateTodoHTML(element);

    }

}

function startDragging(id) {
    currentDraggedElement = id;

}


function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})"class="testTask">${element['title']}<div>`
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(board) {
    todos[currentDraggedElement]['board'] = board;
    updateHTML();
}

function highlight(id){
    document.getElementById(id).classList.add('drag-highlight');

}

function removehighlight(id){
    document.getElementById(id).classList.remove('drag-highlight');

}

