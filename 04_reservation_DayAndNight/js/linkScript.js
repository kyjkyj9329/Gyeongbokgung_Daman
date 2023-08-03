// 링크걸기~~~~


  // let url = location.search;
  // let link = document.querySelectorAll(".link") ;
  // if(url.includes("day")) {
  //   link.forEach((el,i) => {
  //   el.setAttribute("data-day",i) 
  //   el.href = `./reservation-booking.html?day&${i}`;
  //   })
  //   console.log(link)
  //   console.log(location.href)

  // } else if(url.includes("night")) {

  //   link.forEach((el,i) => {
  //   el.setAttribute("data-night",i) 
  //   el.href = `./reservation-booking.html?night&${i}`;
  //   })
  //   console.log(url)
  //   console.log(location.href);
  //   console.log(link);
  // }

let test = 0
window.addEventListener("DOMContentLoaded", ()=>{
  let url = location.search;
  let link = document.querySelectorAll(".link") ;
  if(url.includes("day")) {
    link.forEach((el,i) => {
    el.setAttribute("data-day",i) 
    el.href = `./reservation-booking.html?dn=day&event=${i}`;
    })
    console.log(link)
  } else if(url.includes("night")) {
    link.forEach((el,i) => {
    el.setAttribute("data-night",i) 
    el.href = `./reservation-booking.html?dn=night&event=${i}`;
    })
    console.log(link);
  }

})