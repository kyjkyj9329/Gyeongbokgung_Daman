import { dayEvent, nightEvent } from "./data.js";


const dayBtn = document.querySelector("#day");
const nightBtn = document.querySelector("#night");
const banner = document.querySelector(".event-banner img")
let cards =  document.querySelector(".event-cards");
let url = location.search;

document.addEventListener('DOMContentLoaded', () => {
  if(url.includes("day")) {
    dayBtn.checked = true;
    banner.src = "./img/day-banner.png"
    setPage(dayEvent)
  } else if(url.includes("night")){
    nightBtn.checked = true;
    banner.src = "./img/night-banner.png"
    setPage(nightEvent);
  }
})

dayBtn.addEventListener("click", ()=>{
  location.href = "./event.html?type=day";
})
nightBtn.addEventListener("click", ()=>{
  location.href = "./event.html?type=night";
})


  function setPage(arr,page) {
  // 페이지에 보여줄 카드 수
  let pageCount = 4;
  // 총 페이지 수
  let totalpage = Math.ceil(arr.length / pageCount);
  page = page === undefined ? 1 : page;
  //페이지 첫번째 카드
  let firstCard = (page - 1) * pageCount;
  //페이지 마지막 카드
  let lastCard = firstCard + pageCount;
  lastCard = lastCard > arr.length ? arr.length : lastCard;

  document.querySelector(".page-number").innerHTML =""
  for(let i = 1; i <= totalpage ; i++){
    let html = page == i ?  `<a href="#" class="on">${i}</a>` : `<a href="#">${i}</a>`
    document.querySelector(".page-number").innerHTML += html;
  }

  cards.innerHTML= ""
  for(let i = firstCard; i < lastCard; i++) {
    cards.innerHTML += `
    <div class="event-card">
    <div class="card-img">
      <img src=${arr[i].src} alt="">
    </div>
    <div class="card-desc">
      <h2>${arr[i].title}</h2>
      <div class="time-wrap">
        <p>
        <i class="fa-solid fa-calendar-days"></i>
        행사 날짜 
        <span>${arr[i].date}</span>
        </p>
        <p>
        <i class="fas fa-location-crosshairs"></i> 
        행사 장소 
        <span>${arr[i].location}</span>
        </p>
      </div>
      <div class="desc">
        <h3>행사내용</h3>
        <p>
          ${arr[i].desc}
        </p>
      </div>
      <div class="view-wrap">
      <a href="#" data-event=${i}>
        <button class="view-more">더보기 
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </a>
      </div>
    </div>
    </div>
  </div>
    `
  }
  //페이지 번호 누를때 카드 변경
    let pageNum = document.querySelectorAll(".page-number a");
    pageNum.forEach(el => {
    el.addEventListener("click", () => {
      setPage(arr,+el.innerText)
    })
  })


//모달창 디자인 확인후 추가 하기~~~~~~~~~~~~ 
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-content-inner");
const modalImg = document.querySelector(".modal-content-inner img");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const modalClose = () => {
    modal.classList.add("hidden");
    modalImg.style.opacity = "0";
}

overlay.addEventListener("click", modalClose);
closeBtn.addEventListener("click", modalClose)

let viewBtn = document.querySelectorAll(".view-wrap a");
  viewBtn.forEach((el, i) => {
    el.addEventListener("click", (e)=>{
      e.preventDefault();
      modal.classList.remove("hidden");
      let idx = firstCard + i
      modalInner.scrollTo(0, 0);
      modalImg.style.opacity = "1";
      modalImg.setAttribute("src", arr[idx].detailImg);
      console.log(arr[idx].detailImg, i)
    })
  })
}


