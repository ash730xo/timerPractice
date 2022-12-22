/* 
    https://www.w3schools.com/js/js_htmldom_eventlistener.asp - information 
    https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate - demo 
    https://www.w3schools.com/js/js_dates.asp - date
    https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript - time
    https://www.w3schools.com/js/js_timing.asp - timer loop
    https://stackoverflow.com/questions/56225643/how-to-make-a-pause-play-button-for-timer-on-javascript - pause & play
*/

//getting element by ID form HTML
const button1 = document.getElementById("startButton")
const button2 = document.getElementById("stopButton")
let display = document.getElementById("timerBox")

//onclick event listener
button1.addEventListener("click", startTimer)
button2.addEventListener("click", pauseTimer)

//timer outside of the scope so both functions can use it 
let timer 

//display date function 
function displayTime() {

   // gets current time Hours: Minutes: Minilseconds 
   const d = new Date
    
   //displats the time in a string on the HTML webserver
   display.innerHTML = d.toLocaleTimeString()
}

// timer function, gets the displayTime and incriments it
function startTimer() {
    timer  = setInterval(displayTime, 1000)
}

//pauses button at the time the button was pressed 
function pauseTimer(){
    clearInterval(timer)
}