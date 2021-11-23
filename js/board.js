
/**
 * Fires the functions when side loads
 */
async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    updateHTML();
}


let currentDraggedElement;

function updateHTML() {
    let open = allTasks.filter(t => t['board'] == 'todo');
    document.getElementById('boardColumnToDo').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        document.getElementById('boardColumnToDo').innerHTML += 
            `<div class="task-board"> 
            <div><b>${allTasks[i].title}</b></div>
            <div>${allTasks[i].date}</div>
            <div>${allTasks[i].assignment}</div>
            </div>`;
    }

    let closed = allTasks.filter(t => t['board'] == 'inprogress');
    document.getElementById('inprogress').innerHTML = '';

    for (let i = 0; i < closed.length; i++) {
        const element = closed[i];
        document.getElementById('closed').innerHTML += generateTodoHTML(element);

    }

}

function startDragging(id) {
    currentDraggedElement = id;

}

/*  not needed 
function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})"class="testTask">${element['title']}<div>`
}*/

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(board) {
    todos[currentDraggedElement]['board'] = board;
    updateHTML();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-highlight');

}

function removehighlight(id) {
    document.getElementById(id).classList.remove('drag-highlight');

}

