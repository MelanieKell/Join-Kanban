
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

function setID() {
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i]['id'] = i;
    }
}

async function deleteTask(id) {
    let task = allTasks.find(t => t.id === id);
    let pos = allTasks.indexOf(task);
    allTasks.splice(pos, 1)
    await saveToBackendTasks();
    updateHTML();
    
}





/* generates task in board in the respectively column */

function updateHTML() {
    let todo = allTasks.filter(t => t['board'] == 'todo');
    document.getElementById('boardColumnToDo').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        document.getElementById('boardColumnToDo').innerHTML += 
            `<div id="taskBoard${i}" onclick="openFullScreen({i})" class="task-board"> 
            <div><b>${todo[i].title}</b></div>
            <div>${todo[i].date}</div>
            <div>${todo[i].assignment[0].name}</div>
            <button class="delete-button" onclick="deleteTask(${todo[i].id})">x</button>
            </div>`;
    }

    /*  
  
    let inProgress = allTasks.filter(t => t['board'] == 'boardColumnInProgress');
    document.getElementById('boardColumnInProgress').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        document.getElementById('boardColumnInProgress').innerHTML += 
         `<div id="${i}" class="task-board"> 
            <div><b>${allTasks[i].title}</b></div>
            <div>${allTasks[i].date}</div>
            <div>${allTasks[i].assignment[0].name}</div>
         </div>`;

    }

    let codeReview = allTasks.filter(t => t['board'] == 'boardColumnCodeReview');
    document.getElementById('boardColumnCodeReview').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        document.getElementById('boardColumnCodeReview').innerHTML += 
        `<div id="${i}" class="task-board"> 
            <div><b>${allTasks[i].title}</b></div>
            <div>${allTasks[i].date}</div>
            <div>${allTasks[i].assignment[0].name}</div>
        </div>`;

    }


    let done = allTasks.filter(t => t['board'] == 'boardColumnDone');
    document.getElementById('boardColumnDone').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        document.getElementById('boardColumnDone').innerHTML += 
        `<div id="${i}" class="task-board"> 
            <div><b>${allTasks[i].title}</b></div>
            <div>${allTasks[i].date}</div>
            <div>${allTasks[i].assignment[0].name}</div>
        </div>`;

    }
    */
    

}

function startDragging(id) {
    currentDraggedElement = id;

}


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

/*  NICHT fertig show task in fullscreen 


function openFullScreen (i) {

    document.getElementById('boardColumnToDo').classList.add('taskBoardFullscreen');
    document.getElementById('taskBoard').src = allTasks[i];
}

function closeFullScreen (i) {

    document.getElementById('taskBoard').classList.remove = 'display: none;';
    document.getElementById('boardColumnToDo').classList.remove('taskBoardFullscreen');
}

*/