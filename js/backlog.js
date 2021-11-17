/**
 * Fires the functions when side loads
 */
 async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    loadTasks();
}








function loadTasks() {
    let taskRow = document.getElementById('taskRow');
    taskRow.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {

        console.log('showsomething');

        taskRow.innerHTML += `
        <div class="history">
            <img class="member-pic" src=${Member['img']}>

            <div class="name-email">
                <p>${Member['name']}</p>
                <p class="email">${Member['email']}</p>
            </div>

            <div class="category">
                <p class="category1">${urgency}</p>
            </div>

            <div class="details-history">
                <p>${loadAllTasks[i][description]}</p>
            </div>
        </div>
        `;

    }
}