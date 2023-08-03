const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const modalOpen = () => {
    modal.classList.remove("hidden");
}

const modalClose = () => {
    modal.classList.add("hidden");
}

modalBtn.addEventListener("click", modalOpen);
overlay.addEventListener("click", modalClose);
closeBtn.addEventListener("click", modalClose)