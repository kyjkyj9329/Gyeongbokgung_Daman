// === ### Reservation-booking Page ### ===

// === Item4 Input Auto ===

function changePhone1() {
  const phone1 = document.querySelector("#phone1").value;
  if(phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
}
function changePhone2() {
  const phone2 = document.querySelector("#phone2").value;
  if(phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
}
function changePhone3() {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;
  if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.querySelector("#token_button").style = "background-color: #fff; border: 1px solid var(--sub-color-blue); color: var(--sub-color-blue); cursor: pointer";
    document.querySelector("#token_button").removeAttribute("disabled")
  }
}


// === Item5 Show / Hide ===

let accordionBtn = document.querySelectorAll('.view-detail');
let allTexts = document.querySelectorAll('.agreement-detail-text');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
  let targetText = el.currentTarget.nextElementSibling.classList;

  if (targetText.contains('show')) {
      targetText.remove('show');
  } else {
      accordionBtn.forEach(function (el) {
      allTexts.forEach(function (el) {
        el.classList.remove('show');
      })
    });
    
    targetText.add('show');
  }  
}

// ### Reservation-confirm Page Error Alert###
function confirmReservation() {
  const confirmMobileTel = document.querySelector("#confirm-mobile-tel");
  const confirmMobilePassword = document.querySelector("#confirm-mobile-password");
  let isValid = true;

  if(confirmMobileTel.value.length < 11) {
    confirmMobileTel.placeholder = "휴대폰 번호가 올바르지 않습니다.";
    confirmMobileTel.style = "border: 1px solid red;";
    confirmMobileTel.classList.add("placeholder-red");
    isValid = false;
  }
  if(confirmMobilePassword.value === "") {
    confirmMobilePassword.placeholder = "비밀번호를 입력하세요.";
    confirmMobilePassword.style = "border: 1px solid red;";
    confirmMobilePassword.classList.add("placeholder-red");
    isValid = false;
  }
  if(isValid == true) {
    // e.preventDefault()
    reservationDetails(confirmMobileTel, confirmMobilePassword, "phone", "password");
  }
}

// window.onload = () => {
  document.querySelector("#confirm-reservation-btn").addEventListener("click", (e) => {
    e.preventDefault();
  });
// }

function confirmReservation2() {
  const confirmEmailTel = document.querySelector("#confirm-email-tel");
  const confirmEmailPassword = document.querySelector("#confirm-email-password");

  let isValid = true;

  if(confirmEmailTel.value.includes("@") === false) {
    confirmEmailTel.placeholder = "이메일이 올바르지 않습니다.";
    confirmEmailTel.style = "border: 1px solid red;";
    confirmEmailTel.classList.add("placeholder-red");
    isValid = false;
  }
  if(confirmEmailPassword.value === "") {
    confirmEmailPassword.placeholder = "비밀번호를 입력하세요.";
    confirmEmailPassword.style = "border: 1px solid red;";
    confirmEmailPassword.classList.add("placeholder-red");
    isValid = false;
  }
  if(isValid == true) {
    reservationDetails(confirmEmailTel, confirmEmailPassword, "email", "password")
  }
}

window.addEventListener('load', function() {
  document.querySelector("#confirm-reservation-btn2").addEventListener("click", (e) => {
    e.preventDefault();

    
  });
})

/* ### Reservation-reset-password Modal ### */
window.addEventListener('load', function() {
  const btnOpenPopup = document.querySelector('.reset-password-btn');
  const btnOpenPopup2 = document.querySelector('.reset-password-btn2');
  const modalBackground = document.querySelector('.modal-background');
  const modalBackground2 = document.querySelector('.modal-background2');
  const resetPassword = document.querySelector('.reset-password');
  const resetPassword2 = document.querySelector('.reset-password2');
  const btnClosePopup = document.querySelector('.btn-close-modal');
  const btnClosePopup2 = document.querySelector('.btn-close-modal2');

  resetPassword.addEventListener("click", function(e) {
    e.preventDefault();
  })
  resetPassword2.addEventListener("click", function(e) {
    e.preventDefault();
  })
  btnOpenPopup.addEventListener('click', (e) => {
    e.preventDefault();
    resetPassword.style.display = 'block';
    modalBackground.style.display = 'block';
  });
  btnOpenPopup2.addEventListener('click', (e) => {
    e.preventDefault();
    resetPassword2.style.display = 'block';
    modalBackground2.style.display = 'block';
  });
  btnClosePopup.addEventListener('click', () => {
    resetPassword.style.display = 'none';
    modalBackground.style.display = 'none';
  });
  btnClosePopup2.addEventListener('click', () => {
    resetPassword2.style.display = 'none';
    modalBackground2.style.display = 'none';
  });
})

function getToken() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  document.querySelector("#token_button").style = "background-color: #fff";
  document.querySelector("#token_button").setAttribute("disabled", "true");
  document.querySelector("#token_timer_confirm_button").style = "background-color: var(--sub-color-blue); color: #fff; cursor: pointer";
  document.querySelector("#token_timer_confirm_button").removeAttribute("disabled");
  getTokenTimer();
}

let interval;
function getTokenTimer() {
  let timer = 180;

  interval = setInterval(() => {
    if(timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
  
      document.querySelector("#token_timer").innerText = minutes + ":" + String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      document.querySelector("#token_timer").innerText = "000000";
      document.querySelector("#token_button").style = "";
      document.querySelector("#token_button").setAttribute("disabled", "true");
      document.querySelector("#token_timer").innerText = "3:00";
      document.querySelector("#token_timer_confirm_button").style = "";
      document.querySelector("#token_timer_confirm_button").setAttribute("disabled", "true");

      clearInterval(interval)
    }
  } ,1000)
}

function getTokenTimerConfirm() {
  clearInterval(interval);
  document.querySelector("#token_timer_confirm_button").style = "background-color: #fff;"
  document.querySelector("#token_timer_confirm_button").setAttribute("disabled", "true");
  document.querySelector("#token_timer_confirm_button").innerText = "인증완료";
  alert("인증이 완료되었습니다.");

  document.querySelector("#reset-password-btn").removeAttribute("disabled");
}

// Reservation-confirm-info Booking Amount
// const confirmBooking = document.querySelectorAll(".confirm-booking");

// const getBookingAmount = () => {
//   document.querySelector(".booking-amount").innerText = confirmBooking.length - 1;
// }
// window.addEventListener('load', getBookingAmount);

// /* ### Reservation-cancel Modal ### */
// window.addEventListener('load', function() {
//   const btnOpenPopup3 = document.querySelector('.btn-reservation-cancel');
//   const btnOpenPopup4 = document.querySelector('.btn-reservation-cancel2');
//   const modalBackground3 = document.querySelector('.modal-background3');
//   const modalBackground4 = document.querySelector('.modal-background4');
//   const cancelReservation = document.querySelector('.cancel-reservation-01');
//   const cancelReservation2 = document.querySelector('.cancel-reservation-02');
//   const btnClosePopup3 = document.querySelector('.btn-close-modal3');
//   const btnClosePopup4 = document.querySelector('.btn-close-modal4');

//   btnOpenPopup3.addEventListener('click', () => {
//     cancelReservation.style.display = 'block';
//     modalBackground3.style.display = 'block';
//   });
//   btnClosePopup3.addEventListener('click', () => {
//     cancelReservation.style.display = 'none';
//     modalBackground3.style.display = 'none';
//   });
//   btnOpenPopup4.addEventListener('click', () => {
//     cancelReservation2.style.display = 'block';
//     modalBackground4.style.display = 'block';
//   });
//   btnClosePopup4.addEventListener('click', () => {
//     cancelReservation2.style.display = 'none';
//     modalBackground4.style.display = 'none';
//   });
// });

// // ### Reservation-cancel Checkbox SelectAll ###
// function selectAll(selectAll)  {
//   const checkboxes 
//       = document.getElementsByName('cancel-item');
  
//   checkboxes.forEach((checkbox) => {
//     checkbox.checked = selectAll.checked;
//   })
// }

// // Reservation-cancel Error Alert
// function cancelReservationErrorAlert() {
//   const cancelItemCheckbox1 = document.querySelector("#cancel-item-checkbox1");
//   const cancelAgreementCheckbox1 = document.querySelector("#cancel-agreement-checkbox1");
//   const reservationItemErrormsg = document.querySelector(".reservation-item-errormsg");
//   const cancelAgreementErrormsg = document.querySelector(".cancel-agreement-errormsg");
//   const cancelReservation = document.querySelector('.cancel-reservation-01');
//   const modalBackground3 = document.querySelector('.modal-background3');
  

//   let isValid = false;

//   if(cancelItemCheckbox1.checked !== true) {
//     reservationItemErrormsg.innerText = "취소할 예약을 선택하세요.";
//     isValid = true;
//   }
//   if(cancelAgreementCheckbox1.checked !== true) {
//     cancelAgreementErrormsg.innerText = "취소/환불 규정에 동의해주세요.";
//     cancelAgreementErrormsg.style.color = "crimson"
//     isValid = true;
//   }
//   if(isValid == false) {
//     cancelReservation.style.display = 'none';
//     modalBackground3.style.display = 'none';
//     document.querySelector(".confirm-booking").remove();
//     document.querySelector(".booking-amount").innerText -= 1;
//   }
// }

// function cancelReservationErrorAlert2() {
//   const cancelItemCheckbox2 = document.querySelector("#cancel-item-checkbox2");
//   const cancelAgreementCheckbox2 = document.querySelector("#cancel-agreement-checkbox2");
//   const reservationItemErrormsg2 = document.querySelector(".reservation-item-errormsg2");
//   const cancelAgreementErrormsg2 = document.querySelector(".cancel-agreement-errormsg2");
//   const cancelReservation2 = document.querySelector('.cancel-reservation-02');
//   const modalBackground4 = document.querySelector('.modal-background4');

//   let isValid = false;

//   if(cancelItemCheckbox2.checked !== true) {
//     reservationItemErrormsg2.innerText = "취소할 예약을 선택하세요.";
//     reservationItemErrormsg2.style.color = "crimson"
//     isValid = true;
//   }
//   if(cancelAgreementCheckbox2.checked !== true) {
//     cancelAgreementErrormsg2.innerText = "취소/환불 규정에 동의해주세요.";
//     cancelAgreementErrormsg2.style.color = "crimson"
//     isValid = true;
//   }
//   if(isValid == false) {
//     cancelReservation2.style.display = 'none';
//     modalBackground4.style.display = 'none';
//     document.querySelector(".confirm-booking").remove();
//     document.querySelector(".booking-amount").innerText -= 1;
//   }
// }

/* ### Reservation-cancel Calculation ### */




function reservationDetails(selector1, selector2, key1, key2) {
  let reservationNumber;
  let dataList = JSON.parse(localStorage.getItem("dataList"));
  dataList.map(list => list[key1] == selector1.value && list[key2] == selector2.value ?
  reservationNumber = list.reserveNumber : list);

  if(!reservationNumber) {
    alert("예약 내역이 존재하지 않습니다 입력 내용을 확인해 주세요")
  } else {
    location.href = `/04_reservation_DayAndNight/reservation-confirm-info.html?${reservationNumber}`
  }
}