<<<<<<< Updated upstream
// $(function () {

// 	$('#calendar').fullCalendar({
// 		// dayClick: function(){
// 		// 	alert('Работает!');
// 		// }
// 		theme: true,
// 		// // lang: 'ru',
// 		// /*monthNames: ['Январь','Февраль','Март','Апрель','Май','οюнь','οюль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
// 		// monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','οюнь','οюль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
// 		// dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
// 		// dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],*/
// 	});

// });
=======
$(function () {

	$('#calendar').fullCalendar({
		// dayClick: function(){
		// 	alert('Работает!');
		// }
		theme: true,
		// lang: 'ru',
		// /*monthNames: ['Январь','Февраль','Март','Апрель','Май','οюнь','οюль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		// monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','οюнь','οюль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
		// dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
		// dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],*/
	});

})
>>>>>>> Stashed changes
const Calendar = FullCalendar.Calendar;
const calendarEl = document.getElementById('calendar');

const calendar = new Calendar(calendarEl, {
<<<<<<< Updated upstream
	headerToolbar: {
		left: 'prev,next today',
		center: 'title',
		right: 'dayGridMonth,timeGridWeek,timeGridDay'
	},
	theme: true,
	editable: true,
	dateClick: (info) => {
		calendar.addEvent({
			title: 'Привет',
			start: info.dateStr,
			image_url: 'https://picsum.photos/50'
		});
	},
	eventContent: (arg) => {
		const imgUrl = arg.event._def.extendedProps.image_url;
		const imgNode = document.createElement('img');
		imgNode.src = imgUrl;

		const title = arg.event._def.title;
		const titleNode = document.createElement('h4');
		titleNode.innerHTML = title;

		const arrNodes = [titleNode, imgNode];

		return {
			domNodes: arrNodes
		};
	},
	dayMaxEvents: 2,
	locale: 'ru'
=======
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  editable: true,
  dateClick: (info) => {
    calendar.addEvent({
      title: 'Привет',
      start: info.dateStr,
      image_url: 'https://picsum.photos/50'
    });
  },
  eventContent: (arg) => {
    const imgUrl = arg.event._def.extendedProps.image_url;
    const imgNode = document.createElement('img');
    imgNode.src = imgUrl;
    
    const title = arg.event._def.title;
    const titleNode = document.createElement('h4');
    titleNode.innerHTML = title;

    const arrNodes = [titleNode, imgNode];

    return {
      domNodes: arrNodes
    };
  },
  dayMaxEvents: 2,
  locale: 'ru'
>>>>>>> Stashed changes
});

calendar.render();