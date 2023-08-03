// 상단 nav 삽입
// ###국문###
$('.sub-banner-include').load('/05_reservation_Package/include_sub/subBanner.html', function() {

  const packageReserveBtn = document.querySelector("#packageReserveBtn");
  const confirmPackageReserveBtn = document.querySelector("#confirmPackageReserveBtn");
  let url = location.search;

  if(url.includes("packageReserve")) {
    packageReserveBtn.checked = true;
  } else if(url.includes("confirmPackageReserve")){
    confirmPackageReserveBtn.checked = true;
  } 

  packageReserveBtn.addEventListener("click", ()=>{
    location.href = "./gbg_package.html?type=packageReserve";
  })
  confirmPackageReserveBtn.addEventListener("click", ()=>{
    location.href = "./reservation-confirm.html?type=confirmPackageReserve";
  })
});

// ###영문###
$('.sub-banner-include_en').load('/05_reservation_Package/include_sub/subBanner_en.html', function() {

  const packageReserveBtn = document.querySelector("#packageReserveBtn");
  const confirmPackageReserveBtn = document.querySelector("#confirmPackageReserveBtn");
  let url = location.search;

  if(url.includes("packageReserve")) {
    packageReserveBtn.checked = true;
  } else if(url.includes("confirmPackageReserve")){
    confirmPackageReserveBtn.checked = true;
  } 

  packageReserveBtn.addEventListener("click", ()=>{
    location.href = "./gbg_package_en.html?type=packageReserve";
  })
  confirmPackageReserveBtn.addEventListener("click", ()=>{
    location.href = "./reservation-confirm_en.html?type=confirmPackageReserve";
  })
});