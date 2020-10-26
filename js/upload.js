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

 //получаем значения полей
    const uploader = document.getElementById('uploader');
  const fileButton = document.getElementById('fileButton');
  let task, PictureURL;


  //событие выбора файла
  fileButton.addEventListener('change', function(e){
      
    //получаем файл
  const file = e.target.files[0];

  //создаём ссылку на хранилище 
  const storageRef = firebase.storage().ref('Images/' + file.name);

  //загружаем файл в хранилище
  task = storageRef.put(file);

  //обновляем полосочку загрузки
    task.on('state_changed',
      
    function progress(snapshot){
      
      const percentage = (snapshot.bytesTransferred / 
        snapshot.totalBytes) * 100;
        uploader.value = percentage;
   
    },
    function error(err){
      alert(err.message)
    },
    function complete(){
    }

    );

  });

  document.getElementById('Post').onclick = function(e){  
      
    let Headingtxt = document.getElementById('txtHeading').value;
      let New = document.getElementById('txtNew').value; 
      let Now =  new Date().toLocaleString();
      let User;
      firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){User =  firebase.auth().currentUser.email} else{User = 'Анонимный пользователь'};
      });
  task.snapshot.ref.getDownloadURL().then(function(url){
    PictureURL = url;

    firebase.database().ref('Новости/'+ Headingtxt).set({             
    Ссылка: PictureURL,
    Заголовок: Headingtxt,
    Текст_новости: New, 
    Время_публикации: Now,  
    Пользователь: User     
     }); 
  });
}
