//Форма авторизации
let form = document.querySelector('.box');
let login = form.querySelector('#login');
let password = form.querySelector('#password');
let btnvalidation= form.querySelector('#btnvalidation');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('login: ',login.value);
    console.log('password: ',password.value);
})

let fields = form.querySelectorAll('.field');

//Функции
let generateError = function (text) {
    let  error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
  }
let removeValidation = function(){
    let errors = form.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
  
}
//

form.addEventListener('submit', function (event) {
  event.preventDefault()
  removeValidation();
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('Заполните поля!', fields[i]);
      let error = generateError('Заполните поля,Сукины дети!!!');
      form[i].parentElement.insertBefore(error, fields[i]);
      fields[i].style.border = '1px solid red';
    }
  }
})



