async function login() {
    let email = document.getElementById('id-email').value; 
    let password = document.getElementById('id-password').value; 

    let loggedUser = {
        'email': email,
        'password': password
    }

    allLoggedUser.push(loggedUser);
    console.log('User logged in');
    await saveToBackend();
    window.location.href = "./board.html";
}

function signIn() {
    document.getElementById('id-name').classList.remove('d-none');
    document.getElementById('id-loginAsGuest').classList.add('d-none');
    document.getElementById('id-signIn').classList.add('d-none');
    document.getElementById('id-backToLogin').classList.remove('d-none');
}

function backToLogin() {
    document.getElementById('id-name').classList.add('d-none');
    document.getElementById('id-loginAsGuest').classList.remove('d-none');
    document.getElementById('id-signIn').classList.remove('d-none');
    document.getElementById('id-backToLogin').classList.add('d-none');
}