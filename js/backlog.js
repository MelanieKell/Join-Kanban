/**
 * Fires the functions when side loads
 */
async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    showTasks();
    inactiveTasks = allTasks.filter(task => task.status === 'inactiv')
    checkUrlShowOnNav()

}


let inactiveTasks = [];





/**
 * This function  shows the added tasks 
 * @param {string} name - this 
 */
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
            
            <p class="category1">${inactiveTasks[i].category}</p>
            
            </div>
            
            <div class="details-history">
            
            <p>${allTasks[i].description}</p>
            
            <button id="showTaskinBoard" class="text-createTask" onclick="showTaskinBoard(${inactiveTaks[i].id})">+</button>
            </div>

        </div>
        `;
        showMembers(i);
    }
}



async function showTaskinBoard(taskID) {
    let task = allTasks.find(t=>t.id === taskID);
    task.status = 'active';
    await backend.setItem('allTasks' , Json.stringify(allTasks))
    
    updateHTML()
    alert('Task wurde zum Board geaddet');
}







/**
 * This function shows the user picture name and email
 * @param {*} taskIndex 
 */
function showMembers(taskIndex) {
    document.getElementById("members-list" + taskIndex).innerHTML = "";
    for (let i = 0; i < allTasks[taskIndex].assignment.length; i++) {
        document.getElementById("members-list" + taskIndex).innerHTML += `
            <img class="member-pic" src="${allTasks[taskIndex].assignment[i].img}">
            <div class="user-data">
            <span class="name-email">${allTasks[taskIndex].assignment[i].name}</p>
            <span class="email">${allTasks[taskIndex].assignment[i].email}
            </div>
          
        `;


    }
}