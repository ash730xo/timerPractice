/* 
    https://www.w3schools.com/js/js_htmldom_eventlistener.asp - information 
    https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate - demo 
    https://www.w3schools.com/js/js_dates.asp - date
    https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript - time
    https://www.w3schools.com/js/js_timing.asp - timer loop
*/

//getting element by ID form HTML
const button1 = document.getElementById("startButton")
const button2 = document.getElementById("stopButton")
let display = document.getElementById("timerBox")

//onclick event listener
button1.addEventListener("click", displayDate)
button2.addEventListener("click", pauseTimer)

//timer 1000 miliseconds = 1 second
let timer = setInterval(displayDate, 1000)

//function for event listener. Gets date and time formates it and displays on screen
function displayDate() {
   let date = new Date()
   let current_date = date.getFullYear()+ " / " + (date.getMonth() + 1 ) + " / " + date.getDate()
   let current_Time = date.toLocaleTimeString()
   let dateTime = current_date 
   display.innerHTML = dateTime + " " +current_Time;
}

function pauseTimer(){
    let date = new Date()
    let current_date = date.getFullYear()+ " / " + (date.getMonth() + 1 ) + " / " + date.getDate()
    let current_Time = date.getHours() + " : " + date.getSeconds() + " : " + date.getMilliseconds()
    let dateTime = current_date 
    display.innerHTML = dateTime + " " +current_Time;
}