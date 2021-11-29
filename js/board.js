let currentDraggedElement;

async function init() {
    await downloadFromServer(); //necessary to use "allTasks"
    loadAllTasks(); //necessary to use "allTasks"
    includeHTML();
    updateHTML();
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
            `<table draggable="true" ondragstart="startDragging(${element['id']})" id="taskBoard${i}" onclick="openPopup(${i})" class="task-board">
                <div class="delete-button" onclick="deleteTask(${element.id})">x</div>
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
            </table>`;
    }

    // In Progress
    let inProgress = allTasks.filter(t => t['board'] == 'inProgress');
    document.getElementById('boardColumnInProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('boardColumnInProgress').innerHTML +=
            `<table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" onclick="openPopup(${i})" class="task-board"> 
                <button class="delete-button" onclick="deleteTask(${element.id})">x</button>
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
            </table>`;
    }

    // Code review
    let codeReview = allTasks.filter(t => t['board'] == 'codeReview');
    document.getElementById('boardColumnCodeReview').innerHTML = '';

    for (let i = 0; i < codeReview.length; i++) {
        const element = codeReview[i];
        document.getElementById('boardColumnCodeReview').innerHTML +=
            `<table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" onclick="openPopup(${i})" class="task-board"> 
                <button class="delete-button" onclick="deleteTask(${element.id})">x</button>
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
            </table>`;
    }

    //Done
    let done = allTasks.filter(t => t['board'] == 'done');
    document.getElementById('boardColumnDone').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('boardColumnDone').innerHTML +=
            `<table draggable="true" ondragstart="startDragging(${element['id']})" id="${i}" class="task-board" onclick="openPopup(${i})"> 
                <button class="delete-button" onclick="deleteTask(${element.id})">x</button>
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
            </table>`;
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
function openPopup(i) {
    document.getElementById('taskFullscreen-title').innerHTML = 'title: ' + allTasks[i].title;
    document.getElementById('taskFullscreen-date').innerHTML = 'date: ' + allTasks[i].date;
    document.getElementById('taskFullscreen-category').innerHTML = 'category: ' + allTasks[i].category;
    document.getElementById('taskFullscreen-assignment').innerHTML = 'assignment: ' + allTasks[i].assignment[0].name;
    document.getElementById('taskFullscreen-urgency').innerHTML = 'urgency: ' + allTasks[i].urgency;
    document.getElementById('taskFullscreen-description').innerHTML = 'description: ' + allTasks[i].description;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}