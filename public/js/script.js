
// Event Modal
//모달창 디자인 확인후 추가 하기~~~~~~~~~~~~ 
const modal = document.querySelector(".main-event-modal");
const closeBtn = document.querySelector(".main-event-modal .close-btn");
const modalClose = () => {
    modal.classList.add("hidden");
}
closeBtn.addEventListener("click", modalClose)

// === Main Slide ===
const mainSlideItems = document.querySelectorAll(".main-slide img");
let mainSlideIndex = 0;

function mainSlide() {
  mainSlideItems.forEach(items => {
    items.classList.remove("show");
  });
  mainSlideItems[mainSlideIndex].classList.add("show");
  mainSlideIndex = (mainSlideIndex + 1) % mainSlideItems.length;
}
setInterval(mainSlide, 5000);

// === Monthly Event ===
/* 달력 */
// 슬라이드 JS로 바꿈 /
// 현재 년 월
let current_year = new Date().getFullYear();
let current_month = new Date().getMonth()+1;

document.querySelector(".year").innerText = current_year
document.querySelector(".month").innerText = current_month < 10 ? "0" +current_month : current_month;


// 윤년 계산
function checkLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function changeYearMonth(year, month) {
  let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if(month == 2) {
    if(checkLeapYear(year)) month_day[1] = 29;
  }
  // 1일의 요일 구하기
  let first_day = new Date(`${year}-${month}-01`).getDay();
  
  let arr_calendar = [];


  for(let i = 0; i < first_day; i++) {
    arr_calendar.push("");
  }

  for(let i = 1; i <= month_day[month-1]; i++){
    arr_calendar.push(i)
  }

  let blank_day = 7 - arr_calendar.length % 7
  // console.log(blank_day);

  if(blank_day < 7) {
    for(let i = 0; i < blank_day; i++){
      arr_calendar.push("")
    }
  }
    mobile_Calendar(arr_calendar);
    pc_Calendar(arr_calendar);

      // 나중에 링크 넣기~~~~~~
    let calendar_link = document.querySelectorAll(".calendar a");
    calendar_link.forEach((el,i) => {
      el.href = "./test.html";
    });
    today();
};

function pc_Calendar(data) {

  let pc_display = "<tr>";
  data.filter((el, i) => {
    if(el !== "" && i % 7 === 0){
      pc_display +=`<td><a href="#" style="color:red;">${data[i]}</a></td>`
    } else if(el !=="" && i % 7 === 6) {
      // pc_display +=`<td><a href="#" style="color:blue;">${data[i]}</a></td>`
      pc_display +=`<td><a href="#" style="color:red;">${data[i]}</a></td>`
    }else if(el !== ""){
      pc_display +=`<td><a href="#">${data[i]}</a></td>`
    }
  });

  pc_display += "</tr>";

  document.querySelector(".calendar .pc-calendar").innerHTML = pc_display;
}

function mobile_Calendar(data) {

  let mobile_display = "";
  for(let i = 0; i < data.length; i++){
    if(i === 0) {
      mobile_display += "<tr>"
    } else if(i % 7 === 0) {
      mobile_display += "</tr>"
      mobile_display += "<tr>"
    }

    mobile_display +=`<td><a href="#">${data[i]}</a></td>`
  }
  mobile_display += "</tr>";

  document.querySelector(".calendar .mobile-calendar").innerHTML = mobile_display;
}

//달력 월 바꾸기
function changeMonth(e) {
  current_month = current_month + e;

  if(current_month == 0) {
    current_year = current_year - 1;
    current_month = 12;
  } else if(current_month == 13) {
    current_year = current_year + 1;
    current_month = 1 
  }

  document.querySelector(".year").innerText = current_year
  document.querySelector(".month").innerText = current_month < 10 ? "0" + current_month : current_month;

  changeYearMonth(current_year, current_month);

}

changeYearMonth(current_year,current_month);

// 오늘 날짜 표시 해주기
function today() {
  let mobile = document.querySelectorAll(".mobile-calendar a");
  let pc = document.querySelectorAll(".pc-calendar a");
  let today = new Date();
  if(today.getFullYear() === current_year && today.getMonth()+1 == current_month) {
    for(let el of mobile) {
      if(el.innerText == today.getDate()) {
        el.parentElement.classList.add('today');
        // console.log(el)
        break;
      }
    }
    for(let el of pc) {
      if(el.innerText == today.getDate()) {
        el.parentElement.classList.add('today');
        // console.log(el)
        break;
      }
    }
  }
}

// 슬라이드 
let slides = document.querySelector(".slide-items"),
    slide = document.querySelectorAll(".slide-items li"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth,
    slideMargin = 30,
    responsiveMargin = 26.4,
    slidesWrap,
    current_slide,
    prevBtn = document.querySelector(".item-prev-btn"),
    nextBtn = document.querySelector(".item-next-btn")

makeClone();

function makeClone() {
  
  slide.forEach(li => {
    let clone = li.cloneNode(true);
    clone.classList.add("clone");
    slides.appendChild(clone);
  });

  slide.forEach(li => {
    let clone = li.cloneNode(true);
    clone.classList.add("clone");
    slides.insertBefore(clone, slide[0]);
  })

  updateWidthTrasnform();
      setTimeout(()=> {
      slides.classList.add('move')
    },100)
};

window.addEventListener("resize", () => {
  updateWidthTrasnform();

  // PC 달력 정렬
  if (window.matchMedia("all and (min-width: 1600px)").matches) {
    document.querySelector(".calendar .pc-calendar tr").style.justifyContent = "space-between"
  } else {
    document.querySelector(".calendar .pc-calendar tr").style.justifyContent = "flex-start"
  }
})

//화면 너비별 슬라이드 위치, 크기 함수
function updateWidthTrasnform() {
  current_slide = document.querySelectorAll(".slide-items li");
  let newSlide_count = current_slide.length;
  slidesWrap = Number(window.getComputedStyle(document.querySelector(".slide-wrap")).width.replace("px", "")) - 20;
  
  // console.log(slidesWrap)

  //  1024px 이상
  slideWidth = (slidesWrap - slideMargin*2) / 3 
  settingSlide(slideWidth, slideMargin, newSlide_count);
  
  // 1024px 이하
  if(window.innerWidth < 1024) {

    if(window.innerWidth < 768) {
      slideWidth = slidesWrap ;
      settingSlide(slideWidth, responsiveMargin, newSlide_count);
    }else {
      slideWidth = (slidesWrap - responsiveMargin) / 2 ;
      settingSlide(slideWidth, responsiveMargin, newSlide_count);
    }
  }
}

// 슬라이드 위치 크기 셋팅 함수
function settingSlide(width, margin, count) {
  let slideTransform = -(width + margin) * slideCount;
  
  current_slide.forEach(slide => {
    slide.style.width = width +'px'
  })
  slides.style.width = (width + margin) * count +'px'
  slides.style.transform = `translateX(${slideTransform}px)`
}

// 버튼 이벤튼
prevBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  if(window.innerWidth > 1024) {
    moveSlide(currentIdx - 1, slideMargin) 
  }else if(window.innerWidth < 1024) {
    moveSlide(currentIdx - 1, responsiveMargin)
  } 
})
nextBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  if(window.innerWidth > 1024 ){
    moveSlide(currentIdx + 1, slideMargin) 
  }else if(window.innerWidth < 1024) {
    moveSlide(currentIdx + 1, responsiveMargin)
  } ;
});
//슬라이드 이동 함수
function moveSlide(num, margin) {
  slides.style.left = -num*(slideWidth + margin) + 'px';
  currentIdx = num;

  if(currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(()=>{
      slides.classList.remove("move");
      slides.style.left = '0px';
      currentIdx = 0;
    },500)
    setTimeout(()=>{
      slides.classList.add("move")
    },600)
  }
}

// === Footer Slide ===
$('.swiper').each(function(index) {
  t = $(this);
  t.addClass('swiepr-' + index);

  let swiper = new Swiper( t, {
      autoplay: {
      delay: 0, //add
      disableOnInteraction: false,
      },
      speed: 6000,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 5,
  });
});
