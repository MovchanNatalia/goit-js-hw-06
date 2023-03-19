const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul");
const newArr = [];
for (const ingredient of ingredients) {  
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  newArr.push(liEl);
}

listEl.append(...newArr);
console.log(listEl);
