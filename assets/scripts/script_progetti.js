let navigation = document.querySelector("#navigation");
let hamburger = document.querySelector("#hamburger");
const links = document.querySelectorAll(".gruppo-foto");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navigation.classList.toggle("show");
});

let lastTapTime = 0;
links.forEach((link) => {
  link.addEventListener("touchend", function (event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    // Se il tempo tra due tocchi è inferiore a 300 ms, allora è un doppio tap
    if (tapLength < 200 && tapLength > 0) {
      // Consenti la navigazione
      window.location.href = link.href;
    } else {
      // Previeni l'azione predefinita del link sul primo tocco
      event.preventDefault();
    }

    lastTapTime = currentTime;
  });
});
