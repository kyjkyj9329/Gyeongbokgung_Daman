
const labels = document.querySelectorAll('.label');
const options = document.querySelectorAll('.optionItem');


// Function to handle the select event
const handleSelect = (label, item) => {
  const selectBox = label.parentNode;
  selectBox.classList.remove('active');
  label.innerHTML = item.textContent;
}

// Function to remove active class from other selectBox elements
const removeActiveFromOtherSelectBoxes = currentSelectBox => {
  labels.forEach(label => {
    const selectBox = label.parentNode;
    if (selectBox !== currentSelectBox) {
      selectBox.classList.remove('active');
    }
  });
};

// Add event listeners to each select box
labels.forEach((label, index) => {
  const selectOptions = label.nextElementSibling.querySelectorAll('.optionItem');
  const selectBox = label.parentNode;

  // Add event listeners to the options in each select box
  selectOptions.forEach(option => {
    option.addEventListener('click', () => {
      handleSelect(label, option);
      removeActiveFromOtherSelectBoxes(selectBox);
    });
  });
  
  // Add event listener to toggle the options list when the label is clicked
  label.addEventListener('click', () => {
    if (selectBox.classList.contains('active')) {
      selectBox.classList.remove('active');
    } else {
      removeActiveFromOtherSelectBoxes(selectBox);
      selectBox.classList.add('active');
    }
  });
});


// Image Change
const dayImg = document.querySelectorAll('.dayImg');
const nightImg = document.querySelectorAll('.nightImg');
const promoImg1 = document.getElementById('promoImg1');
const promoImg2 = document.getElementById('promoImg2');

const dayImgPaths = [
  "./img/day1.jpg",
  "./img/day2.jpg",
  "./img/day3.jpg",
  "./img/day4.png"
];

const nightImgPaths = [
  "./img/night1.jpg",
  "./img/night2.jpg",
  "./img/night3.jpg",
  "./img/night4.png"
];



dayImg.forEach((item, index) => {
  item.addEventListener('click', () => {
    promoImg1.src = dayImgPaths[index];
    event_idx[0] = index;
  });
});

nightImg.forEach((item, index) => {
  item.addEventListener('click', () => {
    promoImg2.src = nightImgPaths[index];
    event_idx[1] = index;
  });
});

// 예매 버튼
let event_idx = []
const reservation_btn = document.querySelector('#reservation-btn')

reservation_btn.addEventListener("click", (e) => {

  if(event_idx.length < 2) {
    e.preventDefault();
    alert("행사를 선택해주세요")
  } else {
    reservation_btn.href = `./package-booking.html?${event_idx[0]}&${event_idx[1]}`
  }
})