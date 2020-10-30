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

            let Heading = document.getElementById("Heading");
            let Author = document.getElementById("Author");
            let Time = document.getElementById("Time");
            let Image = document.getElementById("Image");
            let Text = document.getElementById("Text");
            firebase
                .database()
                .ref("Новости/" + News[cat])
                .on("value", function (snapshot) {
                    Heading.innerText = snapshot.val().Заголовок;
                    Text.innerText = snapshot.val().Текст_новости;
                    Image.src = snapshot.val().Ссылка;
                    Time.innerText = snapshot.val().Время_публикации;
                    Author.innerText = "By: " + snapshot.val().Пользователь;
                });
        })
}