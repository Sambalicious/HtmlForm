

const submit = document.querySelector('#submit');

submit.addEventListener('click', signUp);


function signUp(e){

const name = document.getElementById('fullname').value;
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const cpass = document.getElementById('cpass').value;
//const checkbox = document.querySelector('input[type ="checkbox"]:checked').value;

if (name.trim() && username.trim() && password && cpass){
    e.preventDefault();

    if (password === cpass){
        console.log(`your name is ${name}`);
        console.log(`your username is ${username}`);
        console.log(`your password is ${password}`);
        console.log(`your confirm password is ${cpass}`);
        
        alert(`hello ${username}, You are now logged in`);
    }
    else{
    alert(' password and confirm password does not match')
    }
}

}