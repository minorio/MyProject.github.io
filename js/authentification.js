
(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyBgVckiwDxHryAhOI-RDJ6PmmAK4sKrjIQ",
        authDomain: "mygameland-d3269.firebaseapp.com",
        databaseURL: "https://mygameland-d3269.firebaseio.com",
        projectId: "mygameland-d3269",
        storageBucket: "mygameland-d3269.appspot.com",
        messagingSenderId: "17717778700",
        appId: "1:17717778700:web:54c68a99eaa92138361129"
      }; firebase.initializeApp(firebaseConfig);
//   const txtLogin = document.getElementById('txtLogin');
//   const txtPass = document.getElementById('txtPassword');
//   const btnLogin = document.getElementById('btnLogin');
  
//  btnLogin.addEventListener('click',(event) => {
//  const Login = txtLogin.value;
//  const Pass = txtPass.value;
//  const auth = firebase.auth();
//  const promise = auth.singInWithEmailAndPassword(Login, Pass );
//  promise.catch(event => alert(event.message))
// });
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser){
//         console.log(firebaseUser);
//     }
//     else{
//    alert('Пользователя не существует');
//     }
// }
// )
const txtLogin = document.getElementById('txtLogin');
const txtPass = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
const email = txtLogin.value;
const pass = txtPass.value;
const auth = firebase.auth();

const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e => alert("Такого пользователя не существует"));
 
});


firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
    console.log(firebaseUser);

    } else {
        console.log('Вы не вошли в аккаунт');
    }
});
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });
}());

