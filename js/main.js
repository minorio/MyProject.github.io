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

	firebase
		.database()
		.ref("Новости")
		.on("value", function (snapshot) {
			CopyObject = snapshot.val();

			News = Object.keys(CopyObject);
			console.log(News);


	let Heading = document.getElementById("Heading");
	let Link = document.getElementById("Link");
	let Text = document.getElementById("Text");

	firebase
          .database()
          .ref("Новости/" + News[1])
          .on("value", function (snapshot) {
            Heading.innerText = snapshot.val().Заголовок;
			Text.innerText = snapshot.val().Текст_новости;
            Link.innerHTML = '<img id src="' + snapshot.val().Ссылка + '" width = "930" height="420">';
		});
	})
}
firebase.auth().onAuthStateChanged((firebaseUser) => {
	if (firebaseUser) {
		alert('Вы в аккаунте !', firebaseUser);
		for (let i = 0; i < controlButtons.length; i++) {
			controlButtons[i].classList.toggle('hide')
		}
	} else {
		alert('Вы не вошли в аккаунт')
	}
});
// КАРУСЕЛЬ

{/* <div class="container">
<div class="row">
  <div class="col-md my-3">
	<!-- carosel -->
	
	<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

	  <div class="carousel-inner">

<div id ='foo'> */}
// <div class="carousel-item active">
//   <img src="images/article15.jpg" class="img-fluid rounded d-block w-100" alt="">
//   <div class="carousel-caption d-none d-md-block">
// 	<h3>Mafia и реальность — как развлекались люди в эпоху Великой Депрессии</h3>
// 	<p> О том, каким получился ремейк, Антон рассказал в нашем обзоре. Ну а я хочу рассказать о теме,
// 	  которая интересна мне, но может заинтересовать и вас...</p>
//   </div>
// </div>
// <div class="carousel-item">
//   <img src="images/article4.jpg" class="img-fluid rounded d-block w-100" alt="">
//   <div class="carousel-caption d-none d-md-block">
// 	<h3>Вышли подробности от разработчиков Ghost of Tsushima</h3>
// 	<p>В прошлый раз мы узнали о боевой системе, а теперь разработчики из Sucker Punch рассказали о мире
// 	  самурайского экшена в открытом мире Ghost of Tsushima, кото...</p>
//   </div>
// </div>

// <div class="carousel-item">
//   <img src="images/article12.jpg" class="img-fluid rounded d-block w-100" alt="">
//   <div class="carousel-caption d-none d-md-block">
// 	<h3>Японский дизайнер создал маску для лица в стиле киберпанка</h3>
// 	<p>Нынешний год, как и следующий, надолго запомнится нам как время масок, санитайзеров и социальной
// 	  изоляции. Но, как показала практика, ношение масок необязательно должно быть скучным. Особенно, если
// 	  есть фантазия и прямые руки.</p>
//   </div>
// </div>
// <div class="carousel-item">
//   <img src="images/article14.jpg" class="img-fluid rounded d-block w-100" alt="">
//   <div class="carousel-caption d-none d-md-block">
// 	<h3>Гейб Ньюэлл думает о релокации разработчиков Valve в Новую Зеландию</h3>
// 	<p>Гейб Ньюэлл спасается от коронавируса в Новой Зеландии с марта этого года. Учитывая, насколько хорошо
// 	  справилось с пандемией островное государство, выбор места оказался верным...</p>
//   </div>
// </div>
// <div class="carousel-item">
//   <img src="images/article24.jpg" class="img-fluid rounded d-block w-100" alt="">
//   <div class="carousel-caption d-none d-md-block">
// 	<h3>CD Projekt RED использовала ИИ для анимации губ персонажей Cyberpunk 2077 на разных языках</h3>
// 	<p>До выхода Cyberpunk 2077 остается месяц и когда экшен-RPG CD Projekt RED поступит в продажу, то будет
// 	  поддерживать озвучку диалогов сразу на 10 языках и субтитры еще на нескольких. ...</p>
//   </div>
// </div>

// </div>


//Две большие новости


// 	<div class="row">
// 	          <div class="col-md-6 my-3">
// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article28.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Инсайдер: Square Enix разрабатывает для PS5 улучшенную версию Final Fantasy 7
// 	                </h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-6 my-3">
// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article8.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Чудесная Япония — концепт-арты Ghost of Tsushima</h5>
// 	                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
// 	                  card's content.</p> -->

// 	              </div>
// 	            </div>
// 	          </div>

// 			</div> 





// //Четыре средние новости


// 	 <div class="row">
// 	          <div class="col-md-6 my-3">
// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article28.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Инсайдер: Square Enix разрабатывает для PS5 улучшенную версию Final Fantasy 7
// 	                </h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-6 my-3">
// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article8.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Чудесная Япония — концепт-арты Ghost of Tsushima</h5>
// 	                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
// 	                  card's content.</p> -->

// 	              </div>
// 	            </div>
// 	          </div>

// 	        </div>
// 	        <div class="row">
// 	          <div class="col-md-6 my-3">

// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article13.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Майк Пондсмит про Cyberpunk: Киберпанк это не только ночь, дождь и неон</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-6 my-3">
// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article9.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Новый скриншот и немного деталей Spider-Man: Miles Morales</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 			</div> 



//Девять маленьких новостей 


// 	 <div class="row">
// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article52.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Куда пропал весь "панк" из Cyberpunk 2077</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article10.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">По мотивам Death Stranding анонсирован графический роман </h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article6.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Патч Red Dead Online сломал игру — пропали звери, NPC</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	        </div>
// 	        <div class="row">
// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article16.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Трейлер пострелизной поддержки Assassin's Creed Valhalla</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article18.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Konami: P.T. не получится перенести на PS5 </h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article17.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Одним из спин-оффов "Ходячих мертвецов" может стать анимационная антология</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	        </div>
// 	        <div class="row">
// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article19.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Актер, исполнивший роль Коннора в Detroit: Become Human, озвучил автомат с
// 	                  газировкой в Cyberpunk 2077</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article20.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">DOOM запустили на овцах в Minecraft </h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-4 my-3">
// 	            <div class="card mincard">
// 	              <img class="card-img-top" src="./images/article23.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Новая версия PlayStation Store запустится с 21 по 26 октября</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 			</div>



// 			//Ещё две средние новости


// 	        <div class="row">
// 	          <div class="col-md-6 my-3">

// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article21.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">Летние анонсы игр включали значительно больше женских протагонистов, чем в
// 	                  прошлые годы</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// 	          <div class="col-md-6 my-3">
// 	            <div class="card bigcard">
// 	              <img class="card-img-top" src="./images/article22.jpg" alt="Card image cap">
// 	              <div class="card-body">
// 	                <h5 class="card-title">От пистолета до гарпуна: Виды оружия в новом трейлере ремейка XIII</h5>
// 	              </div>
// 	            </div>
// 	          </div>

// </div> 