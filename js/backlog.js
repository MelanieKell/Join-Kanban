/**
 * Fires the functions when side loads
 */
 async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
    showTasks();
    showMemberPicture()
}



Members = [
    {
        img: 'img/Profilepicture1.PNG',
        name: 'Melanie Kell',
        email: 'Melanie@gmail.com'
    },
    {
        img: 'img/Profilepicture2.PNG',
        name: 'Mario Neubacher',
        email: 'Mario@gmail.com'
    },
    {
        img: 'img/Profilepicture3.PNG',
        name: 'Bünyamin Altan',
        email: 'Bünyamin@gmail.com'
    },
];



function showTasks() {
    let taskRow = document.getElementById('taskRow');
    taskRow.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {

        console.log('showsomething');

        taskRow.innerHTML += `
        <div class="history">
            <img class="member-pic" src=${Members.img}>

            <div class="name-email">
                <p>${Members[0]['name']}</p>
                <p class="email">${Members[0]['email']}</p>
            </div>

            <div class="category">
                <p class="category1">${allTasks[i].category}</p>
            </div>

            <div class="details-history">
                <p>${allTasks[i].description}</p>
            </div>
        </div>
        `;

    }
}


function showMemberPicture() {
for (let MemberInfo = 0; MemberInfo < Members.length; MemberInfo++) {
    const element = array[MemberInfo];
    
}}