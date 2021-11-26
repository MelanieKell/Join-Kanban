let currentDraggedElement;

async function init() {
    await downloadFromServer(); //necessary to use "allTasks"
    loadAllTasks(); //necessary to use "allTasks"
    includeHTML();
    updateHTML();
}

function updateHTML() {
    let todo = allTasks.filter(t => t['board'] == 'boardColumnToDo');
    document.getElementById('boardColumnToDo').innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('boardColumnToDo').innerHTML += 
            `<div id="taskBoard${i}" onclick="openFullScreen({i})" class="task-board"> 
                <div><b>${element.title}</b></div>
                <div>${element.date}</div>
                <div>${element.assignment[0].name}</div>
                <button class="delete-button" onclick="deleteTask(${element.id})">x</button>
            </div>`;
    }

    let inProgress = allTasks.filter(t => t['board'] == 'boardColumnInProgress');
    document.getElementById('boardColumnInProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('boardColumnInProgress').innerHTML +=
            `<div id="${i}" class="task-board"> 
            <div><b>${element.title}</b></div>
            <div>${element.date}</div>
            <div>${element.aselement.name}</div>
         </div>`;

    }

    let codeReview = allTasks.filter(t => t['board'] == 'boardColumnCodeReview');
    document.getElementById('boardColumnCodeReview').innerHTML = '';

    for (let i = 0; i < codeReview.length; i++) {
        const element = codeReview[i];
        document.getElementById('boardColumnCodeReview').innerHTML +=
            `<div id="${i}" class="task-board"> 
            <div><b>${element.title}</b></div>
            <div>${element.date}</div>
            <div>${element.assignment[0].name}</div>
        </div>`;

    }

    let done = allTasks.filter(t => t['board'] == 'boardColumnDone');
    document.getElementById('boardColumnDone').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('boardColumnDone').innerHTML +=
            `<div id="${i}" class="task-board"> 
            <div><b>${element.title}</b></div>
            <div>${element.date}</div>
            <div>${element.assignment[0].name}</div>
        </div>`;

    }
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

/* function updateHTML() {
    //TO DO 
    let todo = allTasks.filter(t => t['board'] == 'todo');

    document.getElementById('boardColumnToDo').innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('boardColumnToDo').innerHTML += generateToDoHTML(element);
    }

    //IN PROGRESS
    let inProgress = allTasks.filter(t => t['board'] == 'inProgess');

    document.getElementById('boardColumnInProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('boardColumnInProgress').innerHTML += generateToDoHTML(element);
    }

    //CODE REVIEW
    let codeReview = allTasks.filter(t => t['board'] == 'codeReview');

    document.getElementById('boardColumnCodeReview').innerHTML = '';

    for (let i = 0; i < codeReview.length; i++) {
        const element = codeReview[i];
        document.getElementById('boardColumnCodeReview').innerHTML += generateToDoHTML(element);
    }

    //DONE
    let done = allTasks.filter(t => t['board'] == 'done');

    document.getElementById('boardColumnDone').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const element = done[i];
        document.getElementById('boardColumnDone').innerHTML += generateToDoHTML(element);
    }
}

function generateToDoHTML(element) {
    return `
        <table class="div-ticket" draggable="true" ondragstart="startDragging(${element['id']})">
            <tr>
                <td><b>Title:</b></td>
                <td>${element.title}</td>
            </tr>
            <tr>
                <td><b>Assigne:</b></td>
                <td>${element.assignment[0].name}</td>
            </tr>
            <tr>
                <td><b>Due date:</b></td>
                <td>${element.date}</td>
            </tr>
        </table>
        `;
} 
 */