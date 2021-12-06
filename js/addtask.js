let selectedMembers = [];

async function init() {
    await downloadFromServer();
    loadAllSignIns(); /* has to load before assignToMembers() */
    loadAllTasks(); // all have to load again so that new can add up
    includeHTML();
    assignToMembers();
}

/**
 * For loop which shows the profile picture and username from the array "allSignedUser" plus an select and delete button
 */
function assignToMembers() {
    document.getElementById('id-assignment').innerHTML = ``; //necessary otherwise too much gets added

    for (let i = 0; i < allSignedUser.length; i++) {
        let Member = allSignedUser[i];

        document.getElementById('id-assignment').innerHTML += `
            <tr id="id-tr">
                <td style="display:flex; align-items: center"><img class="img-profilePicture" src="${Member['img']}">${Member['name']}</td>
                <td><img onclick="select(${i})" id="id-add${i}" class="img-add" src="img/plus.png"></td>
                <td><div onclick="deleteUser(${i})" class="div-deleteUser"><b>Delete user</b></div></td>
            </tr>
        `;
    }
}

/**
 * Deletes user from array "allSignedUser", saves the backend adjustment and loads assignToMembers() to show changes
 * @param {Number} i - Which one was selected
 */
function deleteUser(i) {
    allSignedUser.splice(i, 1);
    saveToBackendSignUps();
    assignToMembers();
}

/**
 * Alters the array "selectedMembers" and replaces the plus with a minus by selection
 * @param {number} i - filters which user was selected
 */
function select(i) {
    let position = selectedMembers.indexOf(allSignedUser[i]);
    if (noMemberSelected(position)) {
        selectedMembers.push(allSignedUser[i]);
        document.getElementById('id-add' + i).src = "img/minus.png";
    } else {
        selectedMembers.splice(position, 1);
        document.getElementById('id-add' + i).src = "img/plus.png";
    }
}

function noMemberSelected(position) {
    return position == -1;
}

/**
 * Pushes the task data to the array "allTasks", saves it to backend, gives an success alert and clears input fields or gives missing alert 
 */
async function createTask() {
    if (selectedMembers.length != 0) {
        let title = document.getElementById('id-title').value;
        let date = document.getElementById('id-date').value;
        let category = document.getElementById('id-category').value;
        let urgency = document.getElementById('id-urgency').value;
        let description = document.getElementById('id-description').value;
        let assignment = selectedMembers;
    
        let task = {
            'title': title,
            'date': date,
            'category': category,
            'urgency': urgency,
            'description': description,
            'assignment': assignment,
            'board': 'todo', //board bc category already used
            'id' : new Date().getTime()
        };
    
        allTasks.push(task);
        await saveToBackendTasks();
        alert('Task added!');
        deleteInformation(); 
    } else {
        alert("Please select an assigne!");
    }
}

/**
 * Clears all input fields and load assignToMembers to show changes
 */
function deleteInformation() {
    document.getElementById('id-title').value = '';
    document.getElementById('id-date').value = '';
    document.getElementById('id-category').value = '';
    document.getElementById('id-urgency').value = '';
    document.getElementById('id-description').value = '';

    selectedMembers = []; //array gets cleared for new ticket
    assignToMembers();
}