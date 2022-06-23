function exNumF() {
//exNum - broj vjezbi
const exNum = document.getElementById("exNum").value;

for (let i = 0; i<=exNum-1; i++) {
   // kreiraj input polja koliko ima vjezbi, dodaj ta polja
   var z =  document.createElement("input");
   const exNumDiv = document.getElementById("exNumDiv");
   exNumDiv.appendChild(z);
   const linebreak = document.createElement("br");
   exNumDiv.appendChild(linebreak);
}

//f-ja koja unesene vjezbe dodaje u listu desno od timer-a
function addTheEx() {
   const inputs = document.querySelectorAll('#exNumDiv > input')
   for(let i = 0; i<=exNum-1; i++) {
   let listLi = document.createElement('li');
   listLi.innerText = inputs[i].value;
   listOl.appendChild(listLi);
}
}


const addToList = document.getElementById("addToList");
addToList.addEventListener('click', () => {
   addTheEx();
});
}

const exNumB = document.getElementById("exNumB");
exNumB.addEventListener('click', exNumF);

var timeLeft = 30;
var timerClock = document.getElementById('timer');
const timerId = setInterval(countdown, 1000);

function countdown() {
   if (timeLeft == -1) {
      clearTimeout(timerId);
} else {
   timer.innerHTML = timeLeft;
   timeLeft--;
}
}