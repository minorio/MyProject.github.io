

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
      let Now =  (new Date()).getTime();
      let Now2 = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      let User;
      firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){User =  firebase.auth().currentUser.email} else{User = 'Анонимная публикация'};
      });
  task.snapshot.ref.getDownloadURL().then(function(url){
    PictureURL = url;

    firebase.database().ref('Новости/'+ Now + " " + Headingtxt).set({             
    Ссылка: PictureURL,
    Заголовок: Headingtxt,
    Текст_новости: New, 
    Время_публикации: Now2,  
    Пользователь: User     
     }); 
  });
}
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
  console.log(firebaseUser);
  console.log(firebase.auth().currentUser.email);

  } else {
      console.log('Вы не вошли в аккаунт');

  }
});