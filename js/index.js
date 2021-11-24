async function init() {
    await downloadFromServer(); 
    loadAllSignIns();
}

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
    let found = allSignedUser.find(u => u.email === email && u.password === password);

    if (found) {
        window.location.href = "./addtask.html";
    } else {
        alert('Email or password is wrong')
    }
}

async function signInBackend() {
    let name = document.getElementById('id-name').value; 
    let email = document.getElementById('id-email1').value; 
    let password = document.getElementById('id-password1').value; 

    let signedUser = {
        'img': 'img/contact.png',
        'name': name,
        'email': email,
        'password': password
    }

    allSignedUser.push(signedUser);
    await saveToBackendSignUps();
    console.log('saved to Backend');
    window.location.href = "./addtask.html";
}