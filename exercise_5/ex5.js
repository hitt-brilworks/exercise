const btn_1 = document.getElementById("btn-1");
const list = document.getElementById("list");
const chnage_p = document.getElementById("change-p");
const change_style = document.getElementById("change-style");

let count = 0;

btn_1.addEventListener("click", () => {
  item = document.createElement("li");
  item.innerHTML = `item - ${count}`;
  list.appendChild(item);
  count++;
});

chnage_p.addEventListener("click", function () {
  this.innerHTML = "It changed!";
  this.style.color = "red";
  this.removeAttribute("id");
});

change_style.addEventListener("click", function () {
  this.style.cssText = "font-size:1.5rem; color:red ";
  this.removeAttribute("id");
});
