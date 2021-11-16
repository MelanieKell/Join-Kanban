/**
 * Fires the functions when side loads
 */
 async function init() {
    await downloadFromServer();
    loadAllTasks();
    includeHTML();
}

