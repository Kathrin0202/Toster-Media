let openButton = document.querySelector(".head_box_logo_menu");
let closeButton = document.querySelector(".head_box_logo_close");
let menu = document.querySelector(".main");
let navMenu = document.querySelector(".head_box_menu");
navMenu.style.display = "none";
openButton.addEventListener("click", () => {
  menu.style.display = "none";
  navMenu.style.display = "block";
});
closeButton.addEventListener("click", () => {
  navMenu.style.display = "none";
  menu.style.display = "block";
});

let timer = document.querySelector(".box_mac_text_timer");
let now = new Date("Jan 1, 2025 00:00:00").getTime();

let updateTimer = setInterval(() => {
  let time = new Date().getTime();
  let difference = now - time;
  let hoursDif = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hoursDif = hoursDif < 10 ? "0" + hoursDif : hoursDif;
  let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  minutesDif = minutesDif < 10 ? "0" + minutesDif : minutesDif;
  let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);
  secondsDif = secondsDif < 10 ? "0" + secondsDif : secondsDif;
  timer.innerHTML = hoursDif + ":" + minutesDif + ":" + secondsDif;

  if (difference < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "Закончилось";
  }
}, 1000);

const buttonRating = document.querySelector(".head_box_text_rating_start_img");
const footer = document.querySelector(".footer");

buttonRating.addEventListener("click", (el) => {
  footer.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  });
});

const openForm = document.querySelector(".box_mac_shipping_open");
const btnOpenForm = document.querySelector(".box_mac_shipping_title_img");
openForm.style.display = "none";

btnOpenForm.addEventListener("click", () => {
  if (openForm.style.display === "none") {
    openForm.style.display = "block";
    btnOpenForm.classList.toggle("rotate");
  } else {
    openForm.style.display = "none";
    btnOpenForm.classList.toggle("rotate");
  }
});

const readBtn = document.querySelector(".footer_btn");
const readText = document.querySelector(".footer_text_open");

readText.style.display = "none";

readBtn.addEventListener("click", () => {
  if (readText.style.display === "none") {
    readText.style.display = "block";
    readBtn.innerHTML = "Read less";
  } else {
    readText.style.display = "none";
    readBtn.innerHTML = "Read more";
  }
});

const openModal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".special_box_btn");
const closeModalBtn = document.querySelector(".modal_head_close");

openModal.style.display = "none";

openModalBtn.addEventListener("click", () => {
  openModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  openModal.style.display = "none";
});
