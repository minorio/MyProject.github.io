
(function(){
    const firebaseConfig = {
    apiKey: "AIzaSyBfONb2y-i_0JO8_1M1JL_mc_20dsqzjqc",
    authDomain: "myproject-254a0.firebaseapp.com",
    databaseURL: "https://myproject-254a0.firebaseio.com",
    projectId: "myproject-254a0",
    storageBucket: "myproject-254a0.appspot.com",
    messagingSenderId: "1020357325084",
    appId: "1:1020357325084:web:0b7d62baa87b25a0b4cad9"
  };
  firebase.initializeApp(firebaseConfig);
  const txtLogin = document.getElementById('txtLogin');
  const txtPass = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  
 btnLogin.addEventListener('click',(event) => {
 const Login = txtLogin.value;
 const Pass = txtPass.value;
 const auth = firebase.auth();
 const promise = auth.singInWithEmailAndPassword(Login, Pass );
 promise.catch(event => alert(event.message))
});
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
    else{
    console.log('Пользователя не существует');
    }
}
)
 
}()) ;
