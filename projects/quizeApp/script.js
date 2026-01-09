let CurrentQNo = document.getElementById("currentQ");
let MoveToNextQ = document.getElementById("next");
let timer = document.getElementById("timer");
let qution = document.getElementById("Question");
let option = document.getElementsByClassName("optionButtons");
let parentoption = document.querySelector(".options");
let reasult = document.getElementById("show");
let optionStyle = document.querySelectorAll(".optionStyle");

let totalCorrect = [];

parentoption.addEventListener("click", (e) => {
  if (!e.target.classList.contains("optionButtons")) return;

  const selectedIndex = Number(e.target.dataset.index);
  const optionDiv = e.target.closest(".optionStyle");

  console.log();

  if (selectedIndex === correctAns) {
    optionDiv.style.border = "2px solid green";

    totalCorrect.push(1);
  } else {
    optionDiv.style.border = "2px solid red";
    showCorrectAns();
  }

  setTimeout(() => {
    ChnageQno();
    enableOptions();
  }, 700);
});

let interval;
let correctAns;

function ChnageQno() {
  let value = Number(CurrentQNo.innerText);

  if (value < 10) {
    let index = value - 1;
    value++;
    CurrentQNo.innerText = value;
    fetchq(index);

    startTimer();
  } else {
    window.location.href = `result.html?score=${totalCorrect.length}`;
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
  correctAns = respose.questions[index].correctIndex;

  option[0].innerText = respose.questions[index].options[0];
  option[1].innerText = respose.questions[index].options[1];
  option[2].innerText = respose.questions[index].options[2];
  option[3].innerText = respose.questions[index].options[3];
  optionStyle.forEach((div) => {
    div.style.border = "1.5px solid grey";
  });
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
function showCorrectAns() {
  optionStyle.forEach((div) => {
    const btn = div.querySelector(".optionButtons");
    if (Number(btn.dataset.index) === correctAns) {
      div.style.border = "2px solid green";
    }
  });
}

MoveToNextQ.addEventListener("click", ChnageQno);

startTimer();
