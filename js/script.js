let allTasks = [];

setURL('http://gruppe-126.developerakademie.net/smallest_backend_ever');

async function init() {
    await downloadFromServer();
}

async function saveToBackend() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    console.log('saved to backend');
}