setURL('http://developerakademie.com/smallest_backend_ever');
let user = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}