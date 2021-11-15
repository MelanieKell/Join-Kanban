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
    document.getElementById('id-assignToMembers').innerHTML = ``;

    for (let i = 0; i < Members.length; i++) {
        let Member = Members[i];
        
        document.getElementById('id-assignToMembers').innerHTML += `
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
        document.getElementById('id-add'+i).src="img/remove.png";
    } else {
        selectedMembers.splice(position, 1);
        document.getElementById('id-add'+i).src="img/add.png";
    }
}

function noMemberSelected(position){
    return position == -1;
}