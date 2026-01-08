let CurrentQNo = document.getElementById("currentQ");
let MoveToNextQ = document.getElementById("next");
let timer = document.getElementById("timer");
let qution = document.getElementById("Question");

let interval;

function ChnageQno() {
  let value = Number(CurrentQNo.innerText);

  if (value < 10) {
    let index = value - 1;
    value++;
    CurrentQNo.innerText = value;
    fetchq(index);

    startTimer();
  }
}
async function qutionpape() {
  try {
    let res = await fetch("q.json");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchq(index) {
  let respose = await qutionpape();
  qution.innerText = respose.questions[index].question;
}

function startTimer() {
  clearInterval(interval);

  let sec = 5;

  interval = setInterval(() => {
    if (sec > 0) {
      sec--;

      timer.innerText = sec < 10 ? `00:0${sec}` : `00:${sec}`;
    } else {
      clearInterval(interval);
      MoveToNextQ.click();
    }
  }, 1000);
}

MoveToNextQ.addEventListener("click", ChnageQno);

startTimer();
