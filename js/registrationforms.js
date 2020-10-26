
  const firebaseConfig = {
    apiKey: "AIzaSyBgVckiwDxHryAhOI-RDJ6PmmAK4sKrjIQ",
    authDomain: "mygameland-d3269.firebaseapp.com",
    databaseURL: "https://mygameland-d3269.firebaseio.com",
    projectId: "mygameland-d3269",
    storageBucket: "mygameland-d3269.appspot.com",
    messagingSenderId: "17717778700",
    appId: "1:17717778700:web:54c68a99eaa92138361129"
  }; firebase.initializeApp(firebaseConfig);
  const txtLogin = document.getElementById("txtLogin");
  const txtPass = document.getElementById("txtPassword");
  const txtValidPass = document.getElementById("txtValidPassword");
  const btnReg = document.getElementById("btnReg");
const controlButtons = [...document.querySelectorAll('.headauth'), ...document.querySelectorAll('.headprof')];
const Exit = document.getElementById("Exit");

  
  

  btnReg.addEventListener("click", (event) => {
    const Login = txtLogin.value;
    const Pass = txtPass.value;
    const ValidPass = txtValidPass.value;
    const auth = firebase.auth();
    if (Pass === ValidPass) {
      const promise = auth.createUserWithEmailAndPassword(Login, Pass);
    
      promise.catch((event) => alert(event.message));
    } else {
      alert("Пароли не совпадают");
    }
//      (function timeoutAuthorization(event){
//  const promise = auth.signInWithEmailAndPassword(Login, Pass);
//      promise.catch((event) => alert(event.message));   
//      }
   
//      ()) 
//      setTimeout(timeoutAuthorization, 4000);

  });
  Exit.addEventListener('click', (event) => {
    firebase.auth().signOut();
    })
  firebase.auth().onAuthStateChanged((firebaseUser) => {
   
    // if (firebaseUser) {
    //   console.log(firebaseUser);
    //   alert("Вы  вошли в аккаунт");
    //   headprofile.classList.add('hide') ;         
    // } else {
    //   alert("Вы не вошли в аккаунт");
    //   headauth.classList.add('hide') ; 

    // }
    document.querySelector('.registrationFormAlert').addEventListener('click', function () {
      
      
      if (firebaseUser) {
        console.log(firebaseUser);
        for (let i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.toggle('hide')
        console.log("Вы  вошли в аккаунт");
         console.log(firebaseUser);    
      }
       } else {
        console.log("Вы не вошли в аккаунт");
        
      }
       
  }); 
  });


