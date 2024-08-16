const btn_1 = document.getElementById("btn-1");
const container = document.getElementById("container");
const form = document.getElementById("form");

btn_1.addEventListener("click", () => {
  btn_1.innerHTML = "Clicked!";
});

container.addEventListener("mouseover", () => {
  container.classList.add("change-bg");
});

container.addEventListener("mouseout", () => {
  container.classList.remove("change-bg");
});

form.addEventListener("submit", () => {
  alert("Form submitted!");
});
