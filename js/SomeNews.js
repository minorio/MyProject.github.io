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

const controlButtons = [...document.querySelectorAll('.headauth'), ...document.querySelectorAll('.headprof')];
const Exit = document.getElementById("Exit");

Exit.addEventListener('click', (event) => {
    firebase.auth().signOut();
    for (let i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.toggle('hide')
    }
});
window.onload = function () {

    let CopyObject = {};
    let News = [];
    let cat = localStorage.getItem('id');
    console.log(cat);
    firebase
        .database()
        .ref("Новости")
        .on("value", function (snapshot) {
            CopyObject = snapshot.val();console.log(CopyObject);
            News = Object.keys(CopyObject);
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


            let CopyComment = {};
            let Comments = [];
            firebase
                .database()
                .ref('Новости')
                .child(News[cat])
                .child('Комментарии')
                .on("value", function (snapshot) {

                    CopyComment = snapshot.val();
                    Comments = Object.keys(CopyComment);    
                    console.log(Comments.length);
                    for (let i = Comments.length - 1; i > -1; i--) {
                        function InsertAll() {
                            let div = document.getElementById("posted");
                            div.appendChild(com);
                            com.appendChild(d2d3);
                            d2d3.appendChild(d2);
                            d2d3.appendChild(d3);
                            com.appendChild(d1);
                        }
                        let com = document.createElement('div');
                        let d2d3 = document.createElement("div");
                        let d1 = document.createElement('p');
                        let d2 = document.createElement('p');
                        let d3 = document.createElement('p');
                        d1.id = 'Text' + i;
                        d2.id = 'Author' + i;
                        d3.id = 'Time' + i;
                       
                        d2d3.className = "row";
                        d2.className = "col-md-9";
                        d3.className = "col-md-3";
                        InsertAll();

                        let Text = document.getElementById("Text" + i);
                        let Time = document.getElementById("Time" + i);
                        let Author = document.getElementById("Author" + i);

                        console.log(Comments[i])

                        firebase
                .database()
                .ref('Новости/' + News[cat])
                .child('/Комментарии/' + Comments[i])
                .on("value", function (snapshot) { 

                    Author.innerText = snapshot.val().Автор;
                    Time.innerText = snapshot.val().Время_публикации;
                    Text.innerHTML = snapshot.val().Комментарий + '<hr/>';
                    
                });




                    
                }
            });
        })



    document.getElementById('post').onclick = function (e) {

        let comment = document.getElementById('comment').value;
        let Now = (new Date()).getTime();
        let Now2 = new Date().toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        let User;
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                User = firebase.auth().currentUser.email
            } else {
                User = 'Анонимная публикация'
            };



            firebase.database().ref('Новости/' + News[cat] + '/Комментарии/' + Now).set({
                Комментарий: comment,
                Время_публикации: Now2,
                Автор: User
            });
        });
    }




}




{
    /* <div id = 'comments'>
      <p> Комментарии </p>
      
      <input type="text" id ="comment" placeholder="Оставьте свой комментарий"/></br></br>
      <button id = "post" class="btn btn-actions bg-light"> Оставить комментарий </button>

    </div> */
}

firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        console.log('Вы в аккаунте !', firebaseUser);
        for (let i = 0; i < controlButtons.length; i++) {
            controlButtons[i].classList.toggle('hide')
        }
    } else {
        alert('Вы не вошли в аккаунт')
    }
});