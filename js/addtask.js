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

function assignToMembers() {
    document.getElementById('id-assignToMembers').innerHTML = ``;

    for (let i = 0; i < Members.length; i++) {
        let Member = Members[i];
        
        document.getElementById('id-assignToMembers').innerHTML += `
            <tr>
                <td><img class="img-profilePicture" src="${Member['img']}"></td>
                <td>${Member['name']}</td>
                <td><img class="img-add" src="img/add.png"></td>
            </tr>
        `;
    }
}