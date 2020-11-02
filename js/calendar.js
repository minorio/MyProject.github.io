// $(function () {

// 	$('#calendar').fullCalendar({
// 		// dayClick: function(){
// 		// 	alert('Работает!');
// 		// }
// 		theme: true,
// 		// lang: 'ru',
// 		// /*monthNames: ['Январь','Февраль','Март','Апрель','Май','οюнь','οюль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
// 		// monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','οюнь','οюль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
// 		// dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
// 		// dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],*/
// 	});

// })
const Calendar = FullCalendar.Calendar;
const calendarEl = document.getElementById('calendar');
const dialog = document.getElementById('dialog')
const calendar = new Calendar(calendarEl, {

  editable: true,
  dateClick: (info) => {
    calendar.addEvent({
      title: 'Привет',
      start: info.dateStr,
      image_url: 'https://picsum.photos/50',
      // platfoem:f,
    });
  },
  eventContent: (arg) => {
    const imgUrl = arg.event._def.extendedProps.image_url;
     const imgNode = document.createElement('img');
      imgNode.src = imgUrl; const title = arg.event._def.title;
       const titleNode = document.createElement('h4'); titleNode.innerHTML = title; 
       const arrNodes = [titleNode, imgNode];
        return { domNodes: arrNodes }
    } ,
  dayMaxEvents: 2,
  locale: 'ru'
});


calendar.render();
// // const dialog = $('#dialog');
// $('#dialog').dialog({
//   autoOpen:false,
//   show:{
//     effect:'drop',
//    duration:.500
//   }
// });
// $('#open').click(function(){
//   $('#dialog').dialog('open');
// })
// console.log(dialog)