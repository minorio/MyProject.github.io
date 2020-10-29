const firebaseConfig = {
    apiKey: "AIzaSyBgVckiwDxHryAhOI-RDJ6PmmAK4sKrjIQ",
    authDomain: "mygameland-d3269.firebaseapp.com",
    databaseURL: "https://mygameland-d3269.firebaseio.com",
    projectId: "mygameland-d3269",
    storageBucket: "mygameland-d3269.appspot.com",
    messagingSenderId: "17717778700",
    appId: "1:17717778700:web:54c68a99eaa92138361129",
};
firebase.initializeApp(firebaseConfig);

window.onload = function () {

    let CopyObject = {};
    let News = [];
    //получение списка заголовков
    firebase
        .database()
        .ref("Новости")
        .on("value", function (snapshot) {
            CopyObject = snapshot.val();

            News = Object.keys(CopyObject);
            console.log(News);
            let cat = localStorage.getItem('id');
            console.log(cat);
            localStorage.clear();
        })
}