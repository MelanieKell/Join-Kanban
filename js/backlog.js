let inactiveTasks = [];




/**
 * Fires the functions when side loads
 */
async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    inactiveTasks = allTasks.filter(task => task.status === 'inactiv')
    showTasks();
    setTimeout(()=> {checkUrlShowOnNav(); }, 50)

}







/**
 * This function  shows the added tasks 
 * @param {string} name - this 
 */
function showTasks() {
    let taskRow = document.getElementById('taskRow');
    taskRow.innerHTML = '';
    for (let i = 0; i < inactiveTasks.length; i++) {

        console.log('showsomething');

        taskRow.innerHTML += `
            <div class="history">
            <div class="members-list" id="members-list${i}">
            
            </div>
            
            <div class="category">
            
            <b class="responsiv-category">Category:</b><p class="category1">${inactiveTasks[i].category}</p>
            
            </div>
            
            <div class="details-history">
            <b class="responsiv-details">Details:</b>
            <span class="break">${inactiveTasks[i].description}</span>
            
            </div>
            
            <button id="showTaskinBoard" class="text-createTask" onclick="showTaskinBoard(${inactiveTasks[i].id})">+</button>
            </div>
        `;
        showMembers(i);
    }
}



async function showTaskinBoard(taskID) {
    let task = allTasks.find(t=>t.id === taskID);
    task.status = 'active';
    await saveToBackendTasks(); // necessary to keep changes

    /* await backend.setItem('allTasks' , JSON.stringify(inactiveTasks)) */
    alert('Task added to board!');
    inactiveTasks = allTasks.filter(task => task.status === 'inactiv')
    showTasks();
    
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
            <span class="name-email">${allTasks[taskIndex].assignment[i].name}</span>
            <span class="email">${allTasks[taskIndex].assignment[i].email}
            </div>
          
        `;


    }
}