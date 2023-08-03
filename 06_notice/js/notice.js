
const noticeList = document.querySelectorAll(".list");
const detailImg = document.querySelectorAll(".notice-inner-details");

let url = location.search;
if(url.includes("eventModal")) {
    detailImg[0].classList.add("open");
} 

noticeList.forEach((list, index) => {
    list.addEventListener("click", () => {
    const isOpen = detailImg[index].classList.contains("open");
    closeAllDetailImgs();
    if (!isOpen) {
        detailImg[index].classList.add("open");
        }
    });
});

function closeAllDetailImgs() {
    detailImg.forEach(img => {
        img.classList.remove("open");
    });
}