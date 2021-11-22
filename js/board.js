/**
/**
 * Fires the functions when side loads
 */
async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    updateHTML();
}

/* funktioniert noch nicht!!!!!! 

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
*/

/* später dann das Array für the tasks from the backend */

let todos = [{
    'id': 0,
    'title': 'test0',
    'catergory': 'open'
},
{
    'id': 1,
    'title': 'test1',
    'catergory': 'open'
},
{
    'id': 2,
    'title': 'test2',
    'catergory': 'closed'
},

];

let currentDraggedElement;

function updateHTML() {
    let open = todos.filter(t => t['catergory'] == 'open');
    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('open').innerHTML += generateTodoHTML(element);

    }

    let closed = todos.filter(t => t['catergory'] == 'closed');
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

function moveTo(category) {
    todos[currentDraggedElement]['catergory'] = category;
    updateHTML();
}

function highlight(id){
    document.getElementById(id).classList.add('drag-highlight');

}

function removehighlight(id){
    document.getElementById(id).classList.remove('drag-highlight');

}

