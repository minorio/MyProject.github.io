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
            let LastNew = News.length - 1;
            //Для активной новости
			let Heading = document.getElementById("Heading1");
			let Link = document.getElementById("Link1");
			let Text = document.getElementById("Text1");

			firebase
				.database()
				.ref("Новости/" + News[LastNew])
				.on("value", function (snapshot) {
					Heading.innerText = snapshot.val().Заголовок;
					Text.innerText = snapshot.val().Текст_новости.substr(0, 250)+'...';
					Link.innerHTML = '<img id src="' + snapshot.val().Ссылка + '" class="img-fluid rounded d-block w-100" >';
				});

            //Для остальных четырёх новостей
				let LastNews = News.length - 2;
				for(let i = 2; i < 6;i++){
				let Heading = document.getElementById("Heading" + i);
			let Link = document.getElementById("Link" + i);
			let Text = document.getElementById("Text" + i);

			firebase
				.database()
				.ref("Новости/" + News[LastNews])
				.on("value", function (snapshot) {
					Heading.innerText = snapshot.val().Заголовок;
					Text.innerText = snapshot.val().Текст_новости.substr(0, 300)+'...';
					Link.innerHTML = '<img id src="' + snapshot.val().Ссылка + '" class="img-fluid rounded d-block w-100" >';
				});
				LastNews--;
			}

			//4 Средние новости
			let LastNews2 = News.length - 1;
				for(let i = 1; i < 7;i++){
				let Heading = document.getElementById("Heading2-" + i);
			    let Link = document.getElementById("Link2-" + i);
			firebase
				.database()
				.ref("Новости/" + News[LastNews2])
				.on("value", function (snapshot) {
					Heading.innerText = snapshot.val().Заголовок;
					Link.innerHTML = '<img id src="' + snapshot.val().Ссылка + '"  class="card-img-top" >';
				});
				LastNews2--;
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