let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector("#value");

increment.addEventListener("click", addNumber);
decrement.addEventListener("click", removeNumber);

function addNumber() {
  counterValue += 1;
  span.textContent = counterValue;
}

function removeNumber() {
  counterValue -= 1;
  span.textContent = counterValue;
}
