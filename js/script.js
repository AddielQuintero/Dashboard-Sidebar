let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");
let search = document.querySelector(".bx-search");
let inputCheckBox = document.querySelector("input[type=checkbox]");
let body = document.querySelector("body");
let span = document.querySelectorAll("span");
let modeText = document.querySelector(".modeText");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  span.forEach((item) => {
    item.classList.toggle("open");
  });
});

search.addEventListener("click", () => {
  sidebar.classList.add("open");
  span.forEach((item) => {
    item.classList.add("open");
  });
});

inputCheckBox.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    modeText.innerText = "Dark mode";
  } else {
    modeText.innerText = "Light mode";
  }
});
