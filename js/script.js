let allTasks = [];
let allSignedUser = [];

setURL('http://gruppe-126.developerakademie.net/smallest_backend_ever');

/**
 * Saves array "allTasks" to backend
 */
async function saveToBackendTasks() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    console.log('Saved to backend');
}

/**
 * Saves array "allSignedUser" to backend
 */
async function saveToBackendSignUps() {
    await backend.setItem('allSignedUser', JSON.stringify(allSignedUser));
    console.log('Saved to backend');
}

/**
 * Load array "allTasks" from backend
 */
function loadAllTasks() {
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
}

/**
 * Loads array "allSignedUser" from backend
 */
function loadAllSignIns() {
    allSignedUser = JSON.parse(backend.getItem('allSignedUser')) || [];
}