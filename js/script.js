let allTasks = [];
let allLoggedUser = [];
let allSignedUser = [];

setURL('http://gruppe-126.developerakademie.net/smallest_backend_ever');

async function saveToBackendTasks() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    console.log('Saved to backend');
}

async function saveToBackendLogins() {
    await backend.setItem('allLoggedUser', JSON.stringify(allLoggedUser));
    console.log('Saved to backend');
}

async function saveToBackendSignUps() {
    await backend.setItem('allSignedUser', JSON.stringify(allSignedUser));
    console.log('Saved to backend');
}

function loadAllTasks() {
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
}

function loadAllLogins() {
    allLoggedUser = JSON.parse(backend.getItem('allLoggedUser')) || [];
}

function loadAllSignIns() {
    allSignedUser = JSON.parse(backend.getItem('allSignedUser')) || [];
}