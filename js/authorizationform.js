// //Форма авторизации
// let form = document.querySelector('.box');
// let login = form.querySelector('#login');
// let password = form.querySelector('#password');
// let btnvalidation= form.querySelector('#btnvalidation');

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log('login: ',login.value);
//     console.log('password: ',password.value);
// })

// let fields = form.querySelectorAll('.field');

// //Функции
// let generateError = function (text) {
//     let  error = document.createElement('div');
//     error.className = 'error';
//     error.style.color = 'red';
//     error.innerHTML = text;
//     return error;
//   }
// let removeValidation = function(){
//     let errors = form.querySelectorAll('.error');
//     for (let i = 0; i < errors.length; i++) {
//       errors[i].remove();
//     }
  
// }
// //

// form.addEventListener('submit', function (event) {
//   event.preventDefault()
//   removeValidation();
//   for (let i = 0; i < fields.length; i++) {
//     if (!fields[i].value) {
//       console.log('Заполните поля!', fields[i]);
//       let error = generateError('Заполните поля,Сукины дети!!!');
//       form[i].parentElement.insertBefore(error, fields[i]);
//       fields[i].style.border = '1px solid red';
//     }
//   }
// })
// form.loginValidation('sumbit',function(event){
//   event.preventDefault();
// // for(let i = 0;i < login.length;i++){
// // if(login.length < 4){
// //   console.log('Слишком короткий логин', login[i]);
// //    generateError('Слишком короткий пароль');
// // }else{  console.log('Всё окей!');
// // }}
// // return login.length;

// if(login.length = 2){
// alert('Слишком короткий логин');
// }else{alert('Всё правильно');}

// })


const form = document.querySelector('.box');
let fields = form.querySelectorAll('.field');
const login = document.getElementById('#login');
const password = document.getElementById('#password');
const btnvalidation = document.getElementById('#btnvalidation');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
})

function checkInputs(){
 //Получаем строку из инпута
const loginValue = login.value.trim();
const passwordValue = password.value.trim();

if(loginValue === ''){
setErrorFor(login,'Поле Логин обязательно для заполнения');
}else{
setSuccessFor(login);
}

if(passwordValue === ''){
  setErrorFor(password,'Поле Пароль обязательно для заполнения');
}else{
  setSuccessFor(password)
}
}

function setErrorFor(input,message){
const formconrol = input.parentElement;
const small = input.querySelector('small');

small.innerHTML = message;

formconrol.className = 'form-conrol error';
}
function setSuccessFor(input){
const formconrol = input.parentElement;
formconrol.className = 'form-conrol success';
  }
