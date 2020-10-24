(function () {
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
  });
  firebase.auth().onAuthStateChanged((firebaseUser) => {
   
    if (firebaseUser) {
      console.log(firebaseUser);
      console.log("Вы  вошли в аккаунт");
      //    btnLogout.classList.remove('hide');
    } else {
      console.log("Вы не вошли в аккаунт");
      //    btnLogout.classList.add('hide');
    }
  });
}());
