let addButton = document.getElementById("button1");
let addvalue = document.getElementById("input");
let list = document.getElementById("parent");

let DataArray = JSON.parse(localStorage.getItem("todos")) || [];

/* ------------------ CREATE LI ------------------ */
function createLi(todo, index) {
  const li = document.createElement("li");
  li.classList.add("child");
  li.dataset.index = index;

  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("side");
  check.checked = todo.completed;

  const span = document.createElement("span");
  span.innerText = todo.text;

  const but = document.createElement("button");
  but.classList.add("but");
  but.innerText = "Remove";

  if (todo.completed) {
    li.classList.add("strike");
  }

  li.append(check, span, but);
  list.appendChild(li);
}

/* ------------------ SAVE & RENDER ------------------ */
function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(DataArray));
  list.innerHTML = "";
  DataArray.forEach((todo, index) => createLi(todo, index));
}

/* ------------------ ADD TODO ------------------ */
function createTodo() {
  if (addvalue.value.trim() === "") return;

  DataArray.push({
    text: addvalue.value,
    completed: false,
  });

  addvalue.value = "";
  saveAndRender();
}

addButton.addEventListener("click", createTodo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createTodo();
  }
});

/* ------------------ EVENTS (DELEGATION) ------------------ */
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const index = Number(li.dataset.index);

  if (e.target.classList.contains("but")) {
    DataArray.splice(index, 1);
    saveAndRender();
  }
});

list.addEventListener("change", (e) => {
  if (e.target.classList.contains("side")) {
    const li = e.target.closest("li");
    const index = Number(li.dataset.index);

    DataArray[index].completed = e.target.checked;
    saveAndRender();
  }
});

/* ------------------ INITIAL LOAD ------------------ */
saveAndRender();
