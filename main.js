const countersContainer = document.getElementById("counters-container");
const addCounterBtn = document.getElementById("add-counter-btn");
const totalDisplay = document.getElementById("total-number");

const createCounter = () => {
  const counter = document.createElement("div");
  counter.className = "counter";

  const h1 = document.createElement("h1");
  h1.textContent = "Counter";

  const h3 = document.createElement("h3");
  h3.classList.add("number");
  h3.textContent = 0;

  const btnplus = document.createElement("button");
  btnplus.classList.add("btn", "btn-plus");
  btnplus.textContent = "+";

  const btnDec = document.createElement("button");
  btnDec.classList.add("btn", "btn-dec");
  btnDec.textContent = "-";

  const btnClr = document.createElement("button");
  btnClr.classList.add("btn", "btn-clr");
  btnClr.textContent = "Clear";

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-delete");
  btnDelete.textContent = "Delete";

  counter.append(h1, btnplus, h3, btnDec, btnClr, btnDelete);
  countersContainer.appendChild(counter);

  btnplus.addEventListener("click", () => {
    plus(h3, 1);
    updateTotal();
  });

  btnDec.addEventListener("click", () => {
    del(h3, 1);
    updateTotal();
  });

  btnClr.addEventListener("click", () => {
    clr(h3);
    updateTotal();
  });

  btnDelete.addEventListener("click", () => {
    deleteCounter(counter);
    updateTotal();
  });
};

const addCounter = () => {
  createCounter();
  updateTotal();
};

const plus = (element, num) => {
  element.textContent = Number(element.textContent) + num;
};

const del = (element, num) => {
  if (Number(element.textContent) > 0) {
    element.textContent = Number(element.textContent) - num;
  }
};

const clr = (element) => {
  element.textContent = 0;
};

const deleteCounter = (counter) => {
  countersContainer.removeChild(counter);
};

const updateTotal = () => {
  let total = 0;
  const counters = document.querySelectorAll(".number");
  counters.forEach((counter) => {
    total += Number(counter.textContent);
  });
  totalDisplay.textContent = total;
};

createCounter();

addCounterBtn.addEventListener("click", () => {
  addCounter();
});
