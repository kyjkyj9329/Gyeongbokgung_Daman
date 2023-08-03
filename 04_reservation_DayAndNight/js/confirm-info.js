// Reservation-confirm-info Booking Amount



// 예매내역
let dataList;
let user;
const reserveNumber = location.search.replace("?","");

if(localStorage.getItem('dataList') !== null) {
dataList = JSON.parse(localStorage.getItem('dataList'));
}
dataList.map(list => list.reserveNumber === reserveNumber ? user = list : false);

let {name, phone} = user;
let reservations = dataList.filter(list => 
list.name == name && list.phone == phone
)

function setItem() {

// console.log(confirmUser)
console.log(user ,name, phone ,reservations)

let item = document.querySelector(".confirm-booking-item");
let cancelItem = document.querySelector('.confirm-cancel-content')
cancelItem.innerHTML = ""
cancelItem.innerHTML = `
<div class="confirm-booking-desc">
<p>취소한 행사 내역을 안내해 드립니다.</p>
<p>취소 내역은 (총 <span class="cancel-booking-amount"></span>건) 입니다.</p>
</div>`;
item.innerHTML = "";
for(let i = 0; i < reservations.length; i++) {
  if(reservations[i].isDone){
  item.innerHTML += `
    <div class="confirm-booking confirm-booking1">
      <div class="confirm-booking-inner">
        <div class="confirm-item">
          <div id="confirm-item-title">예매 정보</div>
          <div>
            <span>예매 상태</span>
            <span>${reservations[i].isDone ? "예매 완료" : "예매 취소"}</span>
          </div>
          <div>
            <span>상품 일시</span>
            <span>${reservations[i].eventDate}</span>
          </div>
          <div>
            <span>상품 정보</span>
            <span>${reservations[i].eventName}</span>
          </div>
          <div class="price">
            <span>총 결제 금액</span>
            <span>${reservations[i].totalPrice}</span>
          </div>
        </div>
        <div class="confirm-item">
          <div id="confirm-item-title">예매 일시 / 결제 수단</div>
          <div>
            <span>예매 일시</span>
            <span>${reservations[i].reserveDate}</span>
          </div>
          <div>
            <span>예매 번호</span>
            <span>${reservations[i].reserveNumber}</span>
          </div>
          <div>
            <span>결제수단</span>
            <span>${reservations[i].payMethod}</span>
          </div>
        </div>
      </div>
      <button class="btn-reservation-cancel">예매 취소하기</button>
    </div>
  `
} else {
  cancelItem.innerHTML +=`
<div class="confirm-booking cancel-booking">            
  <div class="confirm-booking-inner">
    <div class="confirm-item">
      <div id="confirm-item-title">예매 정보</div>
      <div>
        <span>예매 상태</span>
        <span>예매 취소</span>
      </div>
      <div>
        <span>상품 일시</span>
        <span>${reservations[i].eventDate}</span>
      </div>
      <div>
        <span>상품 정보</span>
        <span>${reservations[i].eventName}</span>
      </div>
      <div class="price">
        <span>총 환불 금액</span>
        <span>${reservations[i].cancelPrice}원</span>
      </div>
    </div>
    <div class="confirm-item">
      <div id="confirm-item-title">예매 일시 / 결제 수단</div>
      <div>
        <span>예매 일시</span>
        <span>${reservations[i].reserveDate}</span>
      </div>
      <div>
        <span>예매 번호</span>
        <span>${reservations[i].reserveNumber}</span>
      </div>
      <div>
        <span>결제수단</span>
        <span>${reservations[i].payMethod}</span>
      </div>
    </div>
  </div>
</div>
  `
    }
  }
}
setItem();

const confirmBooking = document.querySelectorAll(".confirm-booking-item .confirm-booking");
const cancelBooking = document.querySelectorAll(".confirm-booking.cancel-booking");
const getBookingAmount = () => {
  document.querySelector(".booking-amount").innerText = confirmBooking.length;
  document.querySelector(".cancel-booking-amount").innerText = cancelBooking.length;
}
window.addEventListener('load', getBookingAmount);


/* ### Reservation-cancel Modal ### */
window.addEventListener('load', function() {
  const btnOpenPopup = document.querySelectorAll('.btn-reservation-cancel');
  const modalBackground3 = document.querySelector('.modal-background3');
  const cancelReservation = document.querySelector('.cancel-reservation-01');
  const btnClosePopup3 = document.querySelector('.btn-close-modal3');
  const cancelBtn = document.querySelector('#cancel-reservation-btn')

  const reserveTrue = reservations.filter(list => list.isDone === true)
  console.log(reserveTrue, reservations)
  btnOpenPopup.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      cancelReservation.style.display = 'block';
      modalBackground3.style.display = 'block';

      window.scrollTo(0,0)
      
      //예약 이름 뿌리기
      document.querySelector(".event-name").innerHTML =
      reserveTrue[idx].eventName;
      document.querySelector(".cancel-summary-price").innerText = reserveTrue[idx].totalPrice;
      document.querySelector(".cancel-item-price").innerText = reserveTrue[idx].totalPrice;
      
      //취소 수수료
      getCancelPrice(reserveTrue[idx].totalPrice, reserveTrue[idx].eventDate);


      //예약취소버튼
      cancelBtn.addEventListener('click', ()=>{
        cancelReservationErrorAlert(reserveTrue, idx)
      })
    });
  })
  btnClosePopup3.addEventListener('click', () => {
    cancelReservation.style.display = 'none';
    modalBackground3.style.display = 'none';
  });
});






// ### Reservation-cancel Checkbox SelectAll ###
function selectAll(selectAll)  {
  const checkboxes 
      = document.getElementsByName('cancel-item');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}

// Reservation-cancel Error Alert
function cancelReservationErrorAlert(arr, i) {
  const cancelItemCheckbox1 = document.querySelector("#cancel-item-checkbox1");
  const cancelAgreementCheckbox1 = document.querySelector("#cancel-agreement-checkbox1");
  const reservationItemErrormsg = document.querySelector(".reservation-item-errormsg");
  const cancelAgreementErrormsg = document.querySelector(".cancel-agreement-errormsg");
  const cancelReservation = document.querySelector('.cancel-reservation-01');
  const modalBackground3 = document.querySelector('.modal-background3');
  

  let isValid = false;

  if(cancelItemCheckbox1.checked !== true) {
    reservationItemErrormsg.innerText = "취소할 예약을 선택하세요.";
    isValid = true;
  }
  if(cancelAgreementCheckbox1.checked !== true) {
    cancelAgreementErrormsg.innerText = "취소/환불 규정에 동의해주세요.";
    cancelAgreementErrormsg.style = `color: crimson; float: right;`
    isValid = true;
  }
  if(isValid == false) {
    //추가
    console.log(arr[i])
    dataList = dataList.map(list => list.reserveNumber === arr[i].reserveNumber ? {...list, isDone: false, cancelPrice:document.querySelector(".cancel-summary-total-fee").innerText
  } : list)


    cancelReservation.style.display = 'none';
    modalBackground3.style.display = 'none';
    localStorage.setItem('dataList', JSON.stringify(dataList));
    location.reload()

  }
}

/* ### Reservation-cancel Calculation ### */
// function AddComma(num) {
//   var regexp = /\B(?=(\d{3})+(?!\d))/g;
//   return num.toString().replace(regexp, ',');
// }
// function calculateCancelPrice(cancelPrice, idx) {
//   document.querySelector(`.confirm-booking${idx} > div > div:first-child > div:last-child > span:last-child`).innerText = `${AddComma(cancelPrice)}원`
  
//   document.querySelector(`.cancel-reservation-0${idx} .cancel-item-price`).innerText = `${AddComma(cancelPrice)}`
//   document.querySelector(`.cancel-reservation-0${idx} .cancel-summary-price`).innerText = `${AddComma(cancelPrice)}`

//   const cancelFeeRate = document.querySelector(`.cancel-reservation-0${idx} .cancel-summary-fee-rate`);
//   const cancelFee = document.querySelector(`.cancel-reservation-0${idx} .cancel-summary-fee`);
//   const cancelTotalFee = document.querySelector(`.cancel-reservation-0${idx} .cancel-summary-total-fee`);
//   const getCancelPrice = () => {
//     let now = new Date();
//     let bookingDate = new Date('2023-6-23 10:30:00');
//     let leftHours = (bookingDate - now) / 60 / 60 / 1000;

//     if (leftHours <= 1 * 24) {
//       cancelFeeRate.innerText = `100`
//       cancelFee.innerText = AddComma(cancelPrice * 1);
//       cancelTotalFee.innerText = 0;
//     } else if (leftHours > 1 * 24 && leftHours <= 2 * 24) {
//       cancelFeeRate.innerText = `60`
//       cancelFee.innerText = AddComma(cancelPrice * 0.6);
//       cancelTotalFee.innerText = AddComma(cancelPrice * 0.4);
//     } else if (leftHours > 2 * 24 && leftHours <= 4 * 24) {
//       cancelFeeRate.innerText = `40`
//       cancelFee.innerText = AddComma(cancelPrice * 0.4);
//       cancelTotalFee.innerText = AddComma(cancelPrice * 0.6);
//     } else if (leftHours > 4 * 24 && leftHours <= 7 * 24) {
//       cancelFeeRate.innerText = `20`
//       cancelFee.innerText = AddComma(cancelPrice * 0.2);
//       cancelTotalFee.innerText = AddComma(cancelPrice * 0.8);
//     } else {
//       cancelFeeRate.innerText = `0`
//       cancelFee.innerText = AddComma(cancelPrice * 0);
//       cancelTotalFee.innerText = AddComma(cancelPrice * 1.0);
//     }
//   }
//   getCancelPrice();
// }


function getCancelPrice(price, date) {
  let regex = /[^0-9]/g;
  let totalPrice = +price.replace(regex, "");
  let dateSlice = date.split("(")[0];

  let now = new Date();
  let bookingDate = new Date(`${dateSlice}`);

  let leftHours = (bookingDate - now) / 60 / 60 / 1000;
  console.log(leftHours, dateSlice, totalPrice)


  const cancelFeeRate = document.querySelector(`.cancel-summary-fee-rate`);
  const cancelFee = document.querySelector(`.cancel-summary-fee`);
  const cancelTotalFee = document.querySelector(`.cancel-summary-total-fee`);

  if (leftHours <= 1 * 24) {
    cancelFeeRate.innerText = `100`
    cancelFee.innerText = (totalPrice * 1).toLocaleString();
    cancelTotalFee.innerText = 0;
  } else if (leftHours > 1 * 24 && leftHours <= 2 * 24) {
    cancelFeeRate.innerText = `60`
    cancelFee.innerText = (totalPrice * 0.6).toLocaleString();
    cancelTotalFee.innerText = (totalPrice * 0.4).toLocaleString();
  } else if (leftHours > 2 * 24 && leftHours <= 4 * 24) {
    cancelFeeRate.innerText = `40`
    cancelFee.innerText = (totalPrice * 0.4).toLocaleString();
    cancelTotalFee.innerText = (totalPrice * 0.6).toLocaleString();
  } else if (leftHours > 4 * 24 && leftHours <= 7 * 24) {
    cancelFeeRate.innerText = `20`
    cancelFee.innerText = (totalPrice * 0.2).toLocaleString();
    cancelTotalFee.innerText = (totalPrice * 0.8).toLocaleString();
  } else {
    cancelFeeRate.innerText = `0`
    cancelFee.innerText = (totalPrice * 0.0).toLocaleString();
    cancelTotalFee.innerText = (totalPrice * 1.0).toLocaleString();
  }
}