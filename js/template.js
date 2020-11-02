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
  //получение списка заголовков
  firebase
    .database()
    .ref("Новости")
    .on("value", function (snapshot) {
      CopyObject = snapshot.val();
      News = Object.keys(CopyObject);
      console.log(News);
      let i2 = News.length + 99;
      for (let i = News.length - 1; i > -1; i--) {
        function InsertAll() {
          let div = document.getElementById("foo");
          div.appendChild(d1);
          d1.appendChild(d2);
          d2.appendChild(d3);
          d2.appendChild(d4);
          d2.appendChild(d5);
          d6d7.appendChild(d7);
          d6d7.appendChild(d6);
          d2.prepend(d6d7);
        }
        //создание контейнеров для новостей
        let d1 = document.createElement("div");
        d1.className = "row justify-content-md-center";
        let d2 = document.createElement("div");
        d2.className = "col-md-12";
        let d3 = document.createElement("h4");
        d3.id = "Heading" + i;
        let d4 = document.createElement("p");
        d4.id = "Text" + i;
        let d5 = document.createElement("p");
        d5.id = "Link" + i;
        d5.classList.add("card-img-top");
        let d6 = document.createElement("p");
        d6.id = "Time" + i;
        let d7 = document.createElement("p");
        d7.id = "Author" + i;
        let d6d7 = document.createElement("div");
        d6d7.className = "row";
        d6.className = "col-md-3";
        d7.className = "col-md-9";
        InsertAll();
        let Heading = document.getElementById("Heading" + i);
        let Text = document.getElementById("Text" + i);
        let Link = document.getElementById("Link" + i);
        let Time = document.getElementById("Time" + i);
        let User = document.getElementById("Author" + i);
        firebase
          .database()
          .ref("Новости/" + News[i])
          .on("value", function (snapshot) {
            Heading.innerHTML = '<a style="text-decoration:none;color:#fff;"id = "'+ i +'" href="./someNews.html"> ' + snapshot.val().Заголовок + '</a>';
            Text.innerText = snapshot.val().Текст_новости.substr(0,350)+'...';
            Link.innerHTML = '<a id = "'+ i2 +'" href="./someNews.html"> ' + '<img id src="' + snapshot.val().Ссылка + '" width = "725" height="350"></a><hr style="background-color:#fff;"/>';
            Time.innerText = snapshot.val().Время_публикации;
            User.innerText = "By: " + snapshot.val().Пользователь;
          });
          i2--;
      }

      for (let i = News.length - 1; i > -1; i--) {
        let New = document.getElementById(i);
        New.addEventListener('click', () => {
          localStorage.setItem('id', New.id);
        });
      }
      for (let i2 = News.length + 99; i2 > 50; i2--) {
        let New = document.getElementById(i2);
        New.addEventListener('click', () => {
          localStorage.setItem('id', i2 - 100);
        });
      }

    });
}
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log('Вы в аккаунте !', firebaseUser);
    for (let i = 0; i < controlButtons.length; i++) {
      controlButtons[i].classList.toggle('hide')
    }
  } else {
    console.log('Вы не вошли в аккаунт')
  }
});