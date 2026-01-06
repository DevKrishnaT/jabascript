let addButton = document.getElementById("button1");
let addvalue = document.getElementById("input");
let list = document.getElementById("parent");

function createLi() {
  const li = document.createElement("li");
  li.classList.add("child");
  li.innerText = addvalue.value;
  li.prepend(check());
  list.append(li);
  console.log(li);
}
function check() {
  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("side");
  return check;
}

addButton.addEventListener("click", () => {
  createLi();
  addvalue.value = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    createLi();
    addvalue.value = "";
  }
});
