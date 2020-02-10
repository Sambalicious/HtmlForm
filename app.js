

let submit = document.querySelector('#submit');

submit.addEventListener('click', signUp);


function signUp(e){

let name = document.getElementById('fullname').value;
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let cpass = document.getElementById('cpass').value;
//let checkbox = document.querySelector('input[type ="checkbox"]:checked').value;

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
name = '';
username = '';
password = ''
}