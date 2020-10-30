const firebaseConfig = {
    apiKey: "AIzaSyBgVckiwDxHryAhOI-RDJ6PmmAK4sKrjIQ",
    authDomain: "mygameland-d3269.firebaseapp.com",
    databaseURL: "https://mygameland-d3269.firebaseio.com",
    projectId: "mygameland-d3269",
    storageBucket: "mygameland-d3269.appspot.com",
    messagingSenderId: "17717778700",
    appId: "1:17717778700:web:54c68a99eaa92138361129"
};
firebase.initializeApp(firebaseConfig);

window.onload = function () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
            alert('Вы в аккаунте !');
            console.log(firebaseUser);
            for (let i = 0; i < controlButtons.length; i++) {
                controlButtons[i].classList.toggle('hide')
            }
        } else {
            alert('Вы не вошли в аккаунт')
            console.log('Вы не в аккаунте !')
        }
    })
};

const txtLogin = document.getElementById('login');
const txtPass = document.getElementById('password');
const btnLogin = document.getElementById('btnvalidation');
const btnLogout = document.getElementById('Exit');

btnLogin.addEventListener('click', e => {
    const email = txtLogin.value;
    const pass = txtPass.value;
    const auth = firebase.auth();


    const promise = auth.signInWithEmailAndPassword(email, pass);
    if (email != '') {
        promise.catch(e => alert("Такого пользователя не существует"));
    }

});

const controlButtons = [...document.querySelectorAll('.headauth'), ...document.querySelectorAll('.headprof')];
const Exit = document.getElementById("Exit");

Exit.addEventListener('click', (event) => {
    firebase.auth().signOut();
    for (let i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.toggle('hide')
    }
})



const form = document.querySelector('.box');
let fields = form.querySelectorAll('.field');
const login = document.getElementById('login');
const password = document.getElementById('password');
const btnvalidation = document.getElementById('#btnvalidation');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
})

function checkInputs() {
    //Получаем строку из инпута
    const loginValue = login.value.trim();
    const passwordValue = password.value.trim();

    // Для скрытия предупреждений
    setErrorFor(login, '');
    setErrorFor(password, '');

    if (loginValue === '') {
        setErrorFor(login, 'Поле Логин обязательно для заполнения');
    } else {
        setSuccessFor(login);
        // alert('Логин введён правильно!')
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Поле Пароль обязательно для заполнения');
    } else {
        setSuccessFor(password);
        // alert('Логин введён правильно!')
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-conrol error';
    small.innerHTML = message;
    formControl.className = 'error';
    formControl.style.color = 'red';
    formControl.style.border.color = 'red';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-conrol success';

}