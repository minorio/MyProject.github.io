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

    const controlButtons = [...document.querySelectorAll('.headauth'), ...document.querySelectorAll('.headprof')];
    const Exit = document.getElementById("Exit");
    
    Exit.addEventListener('click', (event) => {
        firebase.auth().signOut();
        for (let i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.toggle('hide') }
        })

        window.onload = function () {
firebase.auth().onAuthStateChanged((firebaseUser) => {  
    if (firebaseUser) {
        alert('Вы в аккаунте !', firebaseUser);
        for (let i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.toggle('hide') 
    } 
}  else {alert('Вы не вошли в аккаунт')}
})};