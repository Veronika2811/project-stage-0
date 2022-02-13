let timeHTML = document.querySelector('.time');
let dateHTML = document.querySelector('.date');
let monthHTML = document.querySelector('.month'); 
let yearHTML = document.querySelector('.year');  
let todayHTML = document.querySelector('.today');

function digitalClock() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
      date = addZero(date);
  let hours = d.getHours();
      hours = addZero(hours);
  let minutes = d.getMinutes();
      minutes = addZero(minutes);
  let seconds = d.getSeconds();
      seconds = addZero(seconds);
  let today = d.getDay(); 
  let dayName = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let monthName = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  
  timeHTML.innerHTML =  hours + ' : ' + minutes + ' : ' + seconds; 
  todayHTML.innerHTML = dayName[today];
  dateHTML.innerHTML =  date;
  monthHTML.innerHTML = monthName[month];
  yearHTML.innerHTML =  year;
}
  
function addZero(i) {
  if ( i < 10 ) {
    i = '0' + i;
  }
  return i;
}
  
setInterval(digitalClock, 1000);  
    
export default digitalClock;