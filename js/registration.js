// document.addEventListener('keyup', function(event) { // Выполняем скрипт при изменении содержимого 2-го поля
	
//     const value_input1 = document.getElementById('password').value; // Получаем содержимое 1-го поля
//     const value_input2 = document.getElementById('cor_password').value; // Получаем содержимое 2-го поля
    
//     if(value_input1 !== value_input2) { // Условие, если поля не совпадают
    
//         $(".error").html("Пароли не совпадают!"); // Выводим сообщение
//         $("#submit").attr("disabled", "disabled"); // Запрещаем отправку формы
//         setErrorFor()
//     } else { // Условие, если поля совпадают
    
//         $("#submit").removeAttr("disabled");  // Разрешаем отправку формы
//         $(".error").html(""); // Скрываем сообщение
        
//     }
// })  
// ;

const form = document.querySelector('.box');
let fields = form.querySelectorAll('.field');
const login = document.getElementById('login');
const password = document.getElementById('password');
const corpassword = document.getElementById('cor_password');
const passverification = document.getElementById('passverification')
const btnvalidation = document.getElementById('#btnvalidation');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('login: ', login.value);
  console.log('password: ', password.value);
  checkInputs(passDone());

})

function checkInputs() {
  //Получаем строку из инпута
  const loginValue = login.value.trim();
  const passwordValue = password.value.trim();
  const corpasswordValue = corpassword.value.trim();
  // const passwordValue = password.value.trim();
  // const corpasswordValue = corpassword.value.trim();

  // Для скрытия предупреждений
  setErrorFor(login, '');
  setErrorFor(password, '');
  setErrorFor(corpassword, '');

  if (loginValue === '') {
    setErrorFor(login, 'Поле Логин обязательно для заполнения');
  } else {
    setSuccessFor(login);
    // alert('Логин введён правильно!')
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Поле Пароль обязательно для заполнения');
  } else {
    setSuccessFor(password)
    // alert('Пароль введён правильно!')
  }
  if (corpasswordValue === '') {
    setErrorFor(corpassword, 'Поле Проверка Пароля обязательно для заполнения');
  } else {
    setSuccessFor(corpassword)
    // alert('Пароль введён правильно!')
  }
  // if(loginValue,passwordValue,corpasswordValue !== ''){
  //  const modwindiow = (loginValue,passwordValue,corpasswordValue );
  //   modwindiow = confirm("Запомнить меня?");
  // }else{
  //   false
  // }
}

function passDone() {
  const passwordPass = password.value.trim();
  const corpasswordPass = corpassword.value.trim();
  //Получаем строку из инпута
  if (passwordPass !== corpasswordPass) {
    setVerPass(passverification, 'Пароли не совпадают');
    console.log('Пароль введён НЕправильно!')
  } else {
    setSuccessFor(passverification)
    console.log('Пароль введён правильно!')
  }

}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-conrol error';
  small.innerHTML = message;
  formControl.className = 'error';
  formControl.style.color = 'red';
  formControl.style.border.color = 'red';
}

function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = 'form-conrol success';

}

function setVerPass(input, message) {
  let formControl = input.parentElement;
  const passverification = formControl.parentElement;
  const small = passverification.querySelector('small');
  passverification.className = 'form-conrol error';
  small.innerHTML = message;
  passverification.className = 'error';
  passverification.style.color = 'red';
  passverification.style.border.color = 'red';
}