Members = [
    {
        img: 'img/Profilepicture1.PNG',
        name: 'Melanie Kell'
    },
    {
        img: 'img/Profilepicture2.PNG',
        name: 'Mario Neubacher'
    },
    {
        img: 'img/Profilepicture3.PNG',
        name: 'Bünyamin Altan'
    },
];

let selectedMembers = [];

/**
 * Shows the profile picture and name of the coworker with a json array
 */
function assignToMembers() {
    document.getElementById('id-assignment').innerHTML = ``;

    for (let i = 0; i < Members.length; i++) {
        let Member = Members[i];

        document.getElementById('id-assignment').innerHTML += `
            <tr>
                <td><img class="img-profilePicture" src="${Member['img']}"></td>
                <td>${Member['name']}</td>
                <td><img onclick="select(${i})" id="id-add${i}" class="img-add" src="img/add.png"></td>
            </tr>
        `;
    }
}

/**
 * Alters the selectedMembers array and replaces the plus with a minus by selection
 * @param {number} i - filters which user was selected
 */
function select(i) {
    let position = selectedMembers.indexOf(Members[i]);
    if (noMemberSelected(position)) {
        selectedMembers.push(Members[i]);
        document.getElementById('id-add' + i).src = "img/remove.png";
    } else {
        selectedMembers.splice(position, 1);
        document.getElementById('id-add' + i).src = "img/add.png";
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
    
        let task = {
            'title': title,
            'date': date,
            'category': category,
            'urgency': urgency,
            'description': description,
        };
    
        allTasks.push(task);
        alert('Task added!');
        await saveToBackend();
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
    document.getElementById('id-assignment').value = '';
}