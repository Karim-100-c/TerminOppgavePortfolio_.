const hourEl = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateClock();

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let a = "AM";

if(h > 12){
a = "PM"; 
}


/* if(h < 10) {
 h = "0" + h;
} */


// conditional 0perator eller Ternary 0perator
h = h < 10 ? "0" + h : h;
/* 
if(m < 10){ 
  m = "0" + m;
} */

// conditional 0perator eller Ternary 0perator
m = m < 10 ? "0" + m : m;
/* 
if(s < 10) {
  s = "0" + s;
} */

//conditional 0perator eller Ternary 0perator
s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = a;
  // event
  setTimeout(() => {
  updateClock();
 }, 1000);



  }
