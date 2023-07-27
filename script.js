
let navBar = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");

burger.addEventListener("click", function () {
  navBar.classList.toggle("activeNav");
});

let btnClickMe = document.getElementById("btnClickMe");
btnClickMe.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
});