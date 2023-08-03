let observer = new IntersectionObserver((e)=> {
    e.forEach((box)=> {
        if (box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        } //else {
            //box.target.style.transform = 'translateY(-50%)';
        //}
    })
})

let introHeader = document.querySelector(".articleTitle");
let introImg = document.querySelector(".gbg-intro-img");
let introText = document.querySelector(".gbg-intro-text");
let introTextBg = document.querySelector(".gbg-intro-text-bg");

let middleHeader1 = document.querySelector(".middle-header1");
let middleHeader2 = document.querySelector(".middle-header2");
let middleHeader3 = document.querySelector(".middle-header3");
let middleImgCenter = document.querySelector(".middle-img-center");
let middleText1 = document.querySelector(".middle-text1");
let middleText2 = document.querySelector(".middle-text2");
let middleText3 = document.querySelector(".bottom1");

let bottom1 = document.querySelector(".bottom2");
let bottom2 = document.querySelector(".bottom3");
let bottom3 = document.querySelector(".middle-text3");

observer.observe(introHeader);
observer.observe(introImg);
observer.observe(introText);

observer.observe(middleHeader1);
observer.observe(middleHeader2);
observer.observe(middleHeader3);
observer.observe(middleImgCenter);
observer.observe(middleText1);
observer.observe(middleText2);
observer.observe(middleText3);

observer.observe(bottom1);
observer.observe(bottom2);
observer.observe(bottom3);

///////////////////////////////////////////

let observerImg = new IntersectionObserver((e)=> {
    e.forEach((box)=> {
        if (box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateX(0)';
        }
    })
})

let middleImgLeft1 = document.querySelector(".img-left1");
let middleImgRight1 = document.querySelector(".img-right1");
let middleImgLeft2 = document.querySelector(".img-left2");
let middleImgRight2 = document.querySelector(".img-right2");

observerImg.observe(middleImgLeft1);
observerImg.observe(middleImgRight1);
observerImg.observe(middleImgLeft2);
observerImg.observe(middleImgRight2);

if (matchMedia("screen and (max-width: 768px)").matches) {
    let observerImg = new IntersectionObserver((e)=> {
        e.forEach((box)=> {
            if (box.isIntersecting) {
                box.target.style.opacity = 1;
                box.target.style.transform = 'translateY(0)';
            }
        })
    })
    
    let middleImgLeft1 = document.querySelector(".img-left1");
    let middleImgRight1 = document.querySelector(".img-right1");
    let middleImgLeft2 = document.querySelector(".img-left2");
    let middleImgRight2 = document.querySelector(".img-right2");

    observerImg.observe(middleImgLeft1);
    observerImg.observe(middleImgRight1);
    observerImg.observe(middleImgLeft2);
    observerImg.observe(middleImgRight2);
}