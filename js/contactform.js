// let contactform = document.querySelector('.contactinfo');
// let name = contactform.querySelector('#contactname');
// let mail = contactform.querySelector('#contactmail');
// let callnumber =contactform.querySelector('#contactnumber');
// let message = contactform.querySelector('#contactmessage');
// let contactbtn = contactform.querySelector('#contackbtn');

// contactform.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log('name: ',name.value);
//     console.log('mail: ',mail.value);
//     console.log('callnumber: ',callnumber.value);
//     console.log('message : ',message.value);
// })

// let  contactfields = contactform.querySelectorAll('.form-control');

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

// contactform.addEventListener('button', function (event) {
//   event.preventDefault()
//   removeValidation();
//   for (let i = 0; i < contactfields.length; i++) {
//     if (!contactfiels[i].value) {
//       console.log('Заполните поля!', form-control[i]);
//       let error = generateError('Заполните поля!!!');
//       contactfields[i].parentElement.insertBefore(error, contactfields[i]);
//       contactfields[i].style.border = '1px solid red';
//     }
//   }
// })
// let clearValue = function(event){
//   event.preventDefault()
//   let cleanstr = contactform.querySelectorAll('#contactclearbtn');
//    for (let i = 0; i < cleanstr.length; i++) {
//     if (!cleanstr[i].value) {
//       console.log('Ничего не написано',cleanstr[i]);

//     }else{
//       let cleanstr = contactform.querySelectorAll('#contactclearbtn');
//       cleanstr.value.remove()

//       }
//     }
   
//   } 
// }
// let contactform = document.querySelector('.contactinfo');
// let name = contactform.querySelector('#contactname');
// let mail = contactform.querySelector('#contactmail');
// let callnumber = contactform.querySelector('#contactnumber');
// let message = contactform.querySelector('#contactmessage');
// let contactbtn = contactform.querySelector('#contackbtn');
// let contactfields = contactform.querySelectorAll('.form-control');

// contactform.addEventListener('submit', function(event){
//     // логирование
//     console.log('name: ', name.value);
//     console.log('mail: ', mail.value);
//     console.log('callnumber: ', callnumber.value);
//     console.log('message : ', message.value);
//     checkInputs();
  
//     // валидация
//     for(let i = 0; i < contactfields.length; i++){
//         let field = contactfields[i];
//         if(!field.value){
//             event.preventDefault(); // запрещаем отправку только если не валидно
//             console.log('Заполните полe!', field);
//             let error = generateError('Заполните поля!!!');
//             contactfields[i].parentElement.insertBefore(error, contactfields[i]);
//             contactfields[i].style.border = '1px solid red';
//         }
//     }
// })
let contactform = document.querySelector('.contactinfo');
let name = document.getElementById('contactname');
let mail = document.getElementById('contactmail');
let callnumber = document.getElementById('contactnumber');
let message = document.getElementById('contactmessage');
let contactbtn = document.getElementById('contackbtn');
let contactfields = document.querySelectorAll('.form-control');


contactform.addEventListener('submit', (event) => {
    event.preventDefault();
     console.log('login: ',name.value);
    console.log('mail: ',mail.value);
    console.log('callnumber: ',callnumber.value);
    console.log('message: ',message.value);
    checkInputs();
  })


  function checkInputs() {
    //Получаем строку из инпута
    const nameValue =  name.value.trim();
    const mailValue = mail.value.trim();
    const callnumberValue =  callnumber.value.trim();
  
    // Для скрытия предупреждений
    setErrorFor(name, '');
    setErrorFor(mail, '');
    setErrorFor(callnumber, '');
    setErrorFor(message, '');
  
    if (nameValue === '' ) {
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
  