const navHome = document.querySelector("#navHome");
const navOne = document.querySelector("#navOne");
const navTwo = document.querySelector("#navTwo");
const navThree = document.querySelector("#navThree");
const navFour = document.querySelector("#navFour");
const navFive = document.querySelector("#navFive");
const navSix = document.querySelector("#navSix");
const navSeven = document.querySelector("#navSeven");
const navEight = document.querySelector("#navEight");
const navNine = document.querySelector("#navNine");
const navTen = document.querySelector("#navTen");

const slideHome = document.querySelector(".pageHome");
const slideOne = document.querySelector(".pageOne");
const slideTwo = document.querySelector(".pageTwo");
const slideThree = document.querySelector(".pageThree");
const slideFour = document.querySelector(".pageFour");
const slideFive = document.querySelector(".pageFive");
const slideSix = document.querySelector(".pageSix");
const slideSeven = document.querySelector(".pageSeven");
const slideEight = document.querySelector(".pageEight");
const slideNine = document.querySelector(".pageNine");
const slideTen = document.querySelector(".pageTen");

// ===== FOR KEYBOARD NAVIGATION =====
const navItems = [navHome, navOne, navTwo, navThree, navFour, navFive, navSix, navSeven, navEight, navNine, navTen];
const slides = [slideHome, slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix, slideSeven, slideEight, slideNine, slideTen];
let activeSlideIndex = 0;
navOne.classList.add("buttonActive");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    setActiveSlide(activeSlideIndex - 1);
  } else if (event.key === "ArrowRight") {
    setActiveSlide(activeSlideIndex + 1);
  }
});

function setActiveSlide(index) {
  index = (index + slides.length) % slides.length;
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slides[index].classList.remove("hide");
  activeSlideIndex = index;
  navItems.forEach((navItem, navIndex) => {
    navItem.classList.toggle("buttonActive", navIndex === activeSlideIndex);
  });
}

setActiveSlide(0);






// ===== FOR CLICK NAVIGATION =====

// navOne.addEventListener("click", () => {
// 	slideOne.classList.remove("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.add("hide");
// 	navOne.classList.add("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navTwo.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.remove("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.add("hide");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.add("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navThree.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.remove("hide");
// 	slideThree.classList.add("buttonActive");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.add("hide");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.add("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navFour.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.remove("hide");
// 	slideFour.classList.add("buttonActive");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.add("hide");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.add("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navFive.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.remove("hide");
// 	slideFive.classList.add("buttonActive");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.add("hide");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.add("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navSix.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.remove("hide");
// 	slideSix.classList.add("buttonActive");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.add("hide");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.add("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navSeven.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.remove("hide");
// 	slideSeven.classList.add("buttonActive");
// 	slideEight.classList.add("hide");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.add("buttonActive");
// 	navEight.classList.remove("buttonActive");
// });

// navEight.addEventListener("click", () => {
// 	slideOne.classList.add("hide");
// 	slideTwo.classList.add("hide");
// 	slideThree.classList.add("hide");
// 	slideFour.classList.add("hide");
// 	slideFive.classList.add("hide");
// 	slideSix.classList.add("hide");
// 	slideSeven.classList.add("hide");
// 	slideEight.classList.remove("hide");
// 	slideEight.classList.add("buttonActive");
// 	navOne.classList.remove("buttonActive");
// 	navTwo.classList.remove("buttonActive");
// 	navThree.classList.remove("buttonActive");
// 	navFour.classList.remove("buttonActive");
// 	navFive.classList.remove("buttonActive");
// 	navSix.classList.remove("buttonActive");
// 	navSeven.classList.remove("buttonActive");
// 	navEight.classList.add("buttonActive");
// });
