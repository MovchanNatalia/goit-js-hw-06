const liClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${liClass.length}`);

liClass.forEach((listEl) => {
  console.log("");
  console.log(`Category: ${listEl.firstElementChild.textContent}`);
  console.log(
    `Elements: ${listEl.lastElementChild.querySelectorAll("li").length}`
  );
});
