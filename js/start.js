function signIn() {
    document.getElementById('id-formLogin').classList.add('d-none');
    document.getElementById('id-formSignIn').classList.remove('d-none');
}

function backToLogin() {
    document.getElementById('id-formLogin').classList.remove('d-none');
    document.getElementById('id-formSignIn').classList.add('d-none');
}

async function login() {
    let email = document.getElementById('id-email').value; 
    let password = document.getElementById('id-password').value; 

    let loggedUser = {
        'email': email,
        'password': password
    }

    allLoggedUser.push(loggedUser);
    await saveToBackendLogins();
    window.location.href = "./board.html";
}

async function signInBackend() {
    let name = document.getElementById('id-name').value; 
    let email = document.getElementById('id-email1').value; 
    let password = document.getElementById('id-password1').value; 

    let signedUser = {
        'name': name,
        'email': email,
        'password': password
    }

    allSignedUser.push(signedUser);
    await saveToBackendSignUps();
    window.location.href = "./board.html";
}