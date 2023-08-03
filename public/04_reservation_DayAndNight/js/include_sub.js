// 상단 nav 삽입
// ###국문###
$('.sub-banner-include').load('/04_reservation_DayAndNight/include_sub/subBanner.html', function() {

  const dayReserveBtn = document.querySelector("#dayReserveBtn");
  const nightReserveBtn = document.querySelector("#nightReserveBtn");
  const confirmReserveBtn = document.querySelector("#confirmReserveBtn");
  let url = location.search;

  if(url.includes("dayReserve")) {
    dayReserveBtn.checked = true;
  } else if(url.includes("nightReserve")){
    nightReserveBtn.checked = true;
  } else if(url.includes("confirmReserve")){
    confirmReserveBtn.checked = true;
  } 

  dayReserveBtn.addEventListener("click", ()=>{
    location.href = "./dayReserve.html?type=dayReserve";
  });
  nightReserveBtn.addEventListener("click", ()=>{
    location.href = "./nightReserve.html?type=nightReserve";
  });
  confirmReserveBtn.addEventListener("click", ()=>{
    location.href = "./reservation-confirm.html?type=confirmReserve";
  })
});

// ###영문###
$('.sub-banner-include_en').load('/04_reservation_DayAndNight/include_sub/subBanner_en.html', function() {

  const dayReserveBtn = document.querySelector("#dayReserveBtn");
  const nightReserveBtn = document.querySelector("#nightReserveBtn");
  const confirmReserveBtn = document.querySelector("#confirmReserveBtn");
  let url = location.search;

  if(url.includes("dayReserve")) {
    dayReserveBtn.checked = true;
  } else if(url.includes("nightReserve")){
    nightReserveBtn.checked = true;
  } else if(url.includes("confirmReserve")){
    confirmReserveBtn.checked = true;
  } 

  dayReserveBtn.addEventListener("click", ()=>{
    location.href = "./dayReserve_en.html?type=dayReserve";
  });
  nightReserveBtn.addEventListener("click", ()=>{
    location.href = "./nightReserve_en.html?type=nightReserve";
  });
  confirmReserveBtn.addEventListener("click", ()=>{
    location.href = "./reservation-confirm_en.html?type=confirmReserve";
  })
});