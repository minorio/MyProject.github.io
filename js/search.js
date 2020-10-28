
// document.querySelector('.search_input').oninput = function () {
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll('.news-title');
//     if (val != '') {
//         elasticItems.forEach(function (elem) {
//             if (elem.innerText.search(val) == -1) {
//                 elem.classList.add('hide');
//                 elem.innerHTML = elem.innerText;
//             }
//             else {
//                 elem.classList.remove('hide');
//                 let str = elem.innerText;
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }
//         });
//     }
//     else {
//         elasticItems.forEach(function (elem) {
//             elem.classList.remove('hide');
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }


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

function searchIn(){

 document.querySelector('search_input').addEventListener('keyup', onChange);

 let CopyObject = {};
 let News = []; 

 firebase.database().ref('Новости').ref("child/path").on('value', function (snapshot) {
    CopyObject = snapshot.val();

    News = Object.keys(CopyObject);
   console.log(News);

const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => { fn.apply(this, arguments) }
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms)
    };
  }

  onChange = debounce(onChange, 200);

 })
}

console.log(searchIn());



  
//   function onChange(e) {
//     console.log(e.target.value);
//   }
  

  
  
 
  
  
  
