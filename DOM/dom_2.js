let bt = document.querySelector("#bt2");
let all = document.querySelectorAll(".hello");
// console.log(all);

// all.forEach((item) => {
//   item.style.fontSize = "20px";
// });

// Array.prototype.foreachcoustom = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// Array.from(all).foreachcoustom((item) => {
//   item.innerText = "loop custom";
// });
bt.addEventListener("click", () => {
  for (let i = 1; i < 5; i++) {
    switch (i) {
      case 1:
        setTimeout(() => {
          bt.innerText = "hello";
        }, 2000);
        break;

      case 2:
        bt.innerText = "my";

        setTimeout(() => {}, 2000);
        break;
      case 3:
        bt.innerText = "dear";
        setTimeout(() => {}, 2000);
        break;

      case 4:
        bt.innerText = "fri";
        setTimeout(() => {}, 2000);
        break;

      default:
        bt.innerText = "click";

        break;
    }
  }
});
