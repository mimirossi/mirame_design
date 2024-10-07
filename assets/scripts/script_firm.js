let navigation = document.querySelector("#navigation");
let hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navigation.classList.toggle("show");
});
