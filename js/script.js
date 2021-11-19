let allTasks = [];

setURL('http://gruppe-126.developerakademie.net/smallest_backend_ever');

async function saveToBackend() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    console.log('Saved to backend');
}

function loadAllTasks() {
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
}