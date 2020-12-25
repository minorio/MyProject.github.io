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


let contactform = document.querySelector('.contactinfo');
let name = document.getElementById('contactname');
let mail = document.getElementById('contactmail');
let callnumber = document.getElementById('contactnumber');
let message = document.getElementById('contactmessage');
let contactbtn = document.getElementById('contackbtn');
let contactfields = document.querySelectorAll('.form-control');

contactform.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputs();
})


function checkInputs() {

  //Получаем строку из инпута
  const nameValue = name.value.trim();
  const mailValue = mail.value.trim();
  const callnumberValue = callnumber.value.trim();

  // Для скрытия предупреждений
  setErrorFor(name, '');
  setErrorFor(mail, '');
  setErrorFor(callnumber, '');
  setErrorFor(message, '');

  if (nameValue === '') {
    setErrorFor(nameValue, 'Поле Имя обязательно для заполнения');
  } else {
    setSuccessFor(nameValue);


  }

  if (mailValue === '') {
    setErrorFor(mailValue, 'Поле Email обязательно для заполнения');
  } else {
    setSuccessFor(mailValue)
  }

  if (callnumberValue === '') {
    setErrorFor(callnumberValue, 'Поле Нормер обязательно для заполнения');
  } else {
    setSuccessFor(callnumberValue)
  }


  if (message === '') {
    setErrorFor(message, 'Поле Сообщение обязательно для заполнения');
  } else {
    setSuccessFor(message)

  }

}

document.getElementById('post').onclick = function () {

  let name = document.getElementById('contactname').value;
  let mail = document.getElementById('contactmail').value;
  let callnumber = document.getElementById('contactnumber').value;
  let message = document.getElementById('contactmessage').value;

  let Now2 = new Date().toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  if (name !== '' && mail !== '' && callnumber !== '' && message !== '') {
    firebase.database().ref('Контакты/' + 'Имя пользователя:' + " " + name + " Время: " + Now2).set({
      Имя: name,
      Майл: mail,
      Номер_телефона: callnumber,
      Сообщение: message,
    });
  } else {
    setErrorFor(message, 'Поля  обязательны для заполнения');
  }

}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.createElement('small');
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
