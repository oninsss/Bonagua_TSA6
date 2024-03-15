// console.log(localStorage.getItem('myObject'));

const fullName = localStorage.getItem('fn');
const email = localStorage.getItem('em');
const password = localStorage.getItem('pw');
const birthdayString = localStorage.getItem('bd');
const rememberMe = localStorage.getItem('rm');

const birthday = new Date(birthdayString);

console.log(fullName);
console.log(email);
console.log(password);
console.log(birthday);
console.log(rememberMe);

// birthday = birthday.toString();

const sPersName = document.getElementById('_persName');
const sEmail = document.getElementById('_email');
const sPassword = document.getElementById('_password');
const sBirthday = document.getElementById('_birthday');
const srememberMe = document.getElementById('_rememberMe');

sPersName.querySelector('p').innerText = fullName;
sEmail.querySelector('p').innerText = email;
sPassword.querySelector('p').innerText = password;
sBirthday.querySelector('p').innerText = birthday.toDateString();
// srememberMe.querySelector('p').innerText = rememberMe;

const logOut = document.getElementById('_logout');

logOut.addEventListener('click', () => {
    // localStorage.clear();
    console.log('Logged out');
    window.location.href = '../index.html';
});