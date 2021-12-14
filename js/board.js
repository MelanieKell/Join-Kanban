let currentDraggedElement;

async function init() {
    await downloadFromServer(); //necessary to use "allTasks"
    loadAllTasks(); //necessary to use "allTasks"
    includeHTML();
    setTimeout(()=> {checkUrlShowOnNav(); }, 50) 
    updateHTML();
    canvasInfo = canvas.getBoundingClientRect();
}

/**
 * Shows the tickets in the respective column 
 */




function updateHTML() {
    //To do
    let todo = allTasks.filter(t => t['board'] == 'todo');
    document.getElementById('boardColumnToDo').innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('boardColumnToDo').innerHTML +=
            `<div id="taggingfromBacklog" style="position: relative">
                <table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" onclick="openPopup(${element['id']})" class="task-board">
                    <tr>
                        <td>Assigned to:</td>
                        <td>${element.assignment[0].name}</td>
                    </tr>
                    <tr>
                        <td>Due to:</td>
                        <td>${element.date}</td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td>${element.title}</td>
                    </tr> 
                </table>
                <div class="delete-button" onclick="deleteTask(${element.id})">x</div>
            </div>
            `;
    }

    // In Progress
    let inProgress = allTasks.filter(t => t['board'] == 'inProgress');
    document.getElementById('boardColumnInProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('boardColumnInProgress').innerHTML +=
            `<div style="position:relative">
                <table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" onclick="openPopup(${element['id']})" class="task-board"> 
                    <tr>
                        <td>Assigned to:</td>
                        <td>${element.assignment[0].name}</td>
                    </tr>
                    <tr>
                        <td>Due to:</td>
                        <td>${element.date}</td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td>${element.title}</td>
                    </tr>
                </table>
                <div class="delete-button" onclick="deleteTask(${element.id})">x</div>
            </div>
            `;
    }

    // Code review
    let codeReview = allTasks.filter(t => t['board'] == 'codeReview');
    document.getElementById('boardColumnCodeReview').innerHTML = '';

    for (let i = 0; i < codeReview.length; i++) {
        const element = codeReview[i];
        document.getElementById('boardColumnCodeReview').innerHTML +=
            `<div style="position:relative">
                <table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" onclick="openPopup(${element['id']})" class="task-board"> 
                    <tr>
                        <td>Assigned to:</td>
                        <td>${element.assignment[0].name}</td>
                    </tr>
                    <tr>
                        <td>Due to:</td>
                        <td>${element.date}</td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td>${element.title}</td>
                    </tr>
                </table>
                <div class="delete-button" onclick="deleteTask(${element.id})">x</div>
            </div>
            `;
    }

    //Done
    let done = allTasks.filter(t => t['board'] == 'done');
    document.getElementById('boardColumnDone').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('boardColumnDone').innerHTML +=
        `<div style="position:relative">
            <table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" onclick="openPopup(${element['id']})" class="task-board"> 
                <tr>
                    <td>Assigned to:</td>
                    <td>${element.assignment[0].name}</td>
                </tr>
                <tr>
                    <td>Due to:</td>
                    <td>${element.date}</td>
                </tr>
                <tr>
                    <td>Title:</td>
                    <td>${element.title}</td>
                </tr>
            </table>
            <div class="delete-button" onclick="deleteTask(${element.id})">x</div>
        </div>
        `;
    }
}

/**
 * Passes the id to the global variable "currentDraggedElement"
 * @param {number} id - individual number to seperate the tickets
 */
function startDragging(id) {
    currentDraggedElement = id;
}

/**
 * Allows the tickets to drop into the div 
 * @param {string} ev - enables to run the function
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * The category of the tickets with the id of the current dragged element gets new category 
 * @param {string} category - placeholder variable for toDo/inProgress/codeReview/done
 */
async function moveTo(category) {
    allTasks.find(t => t.id === currentDraggedElement)['board'] = category;
    updateHTML();
    await saveToBackendTasks();
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

//NICHT fertig show task in fullscreen 
function openPopup(id) {
    let task = allTasks.find(t => t.id === id);
    let pos = allTasks.indexOf(task);
    document.getElementById('taskFullscreen-title').innerHTML = 'Title: <br> ' + allTasks[pos].title;
    document.getElementById('taskFullscreen-date').innerHTML = 'Due to:<br> ' + allTasks[pos].date;
    document.getElementById('taskFullscreen-category').innerHTML = 'Category:<br> ' + allTasks[pos].category;
    document.getElementById('taskFullscreen-assignment').innerHTML = 'Assigned to:<br> ' + allTasks[pos].assignment[0].name;
    document.getElementById('taskFullscreen-urgency').innerHTML = 'Urgency:<br> ' + allTasks[pos].urgency;
    document.getElementById('taskFullscreen-description').innerHTML = 'Task description:<br> ' + allTasks[pos].description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}