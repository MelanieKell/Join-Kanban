let selectedMembers = [];

/**
 * Fires the functions when side loads
 */
async function init() {
    await downloadFromServer();
    loadAllSignIns(); /* has to load before assignToMembers() */
    includeHTML();
    assignToMembers();
}

/**
 * Shows the profile picture and name of the coworker with a json array
 */
function assignToMembers() {
    document.getElementById('id-assignment').innerHTML = ``;

    for (let i = 0; i < allSignedUser.length; i++) {
        let Member = allSignedUser[i];

        document.getElementById('id-assignment').innerHTML += `
            <tr id="id-tr">
                <td><img class="img-profilePicture" src="${Member['img']}"></td>
                <td>${Member['name']}</td>
                <td><img onclick="select(${i})" id="id-add${i}" class="img-add" src="img/plus.png"></td>
                <td><div onclick="deleteUser(${i})" class="div-deleteUser"><b>Delete user</b></div></td>
            </tr>
        `;
    }
}

function deleteUser(i) {
    allSignedUser.splice(i, 1);
    saveToBackendSignUps();
    assignToMembers();
}

/**
 * Alters the selectedMembers array and replaces the plus with a minus by selection
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
 * Adds the infos to board and backlog
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
            'board': 'todo',
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
 * Clears all input fields
 */
function deleteInformation() {
    document.getElementById('id-title').value = '';
    document.getElementById('id-date').value = '';
    document.getElementById('id-category').value = '';
    document.getElementById('id-urgency').value = '';
    document.getElementById('id-description').value = '';

    selectedMembers = [];
    assignToMembers();
}