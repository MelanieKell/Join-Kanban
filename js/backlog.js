/**
 * Fires the functions when side loads
 */
async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    showTasks();

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
        showMembers(i);
    }
}

function showMembers(taskIndex) {
    document.getElementById("members-list" + taskIndex).innerHTML = "";
    for (let i = 0; i < allTasks[taskIndex].assignment.length; i++) {
        document.getElementById("members-list" + taskIndex).innerHTML += `
            <img class="member-pic" src="${allTasks[taskIndex].assignment[i].img}">
            <div class="user-data">
            <p class="name-email">${allTasks[taskIndex].assignment[i].name}</p>
            <p class="email">${allTasks[taskIndex].assignment[i].email}
            </div>
          
        `;


    }
}