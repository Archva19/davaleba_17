// 1.

const headline1 = document.querySelector(".headline1");
const buttonRed = document.querySelector(".bg-red");
const buttonBlue = document.querySelector(".bg-blue");
const buttonGreen = document.querySelector(".bg-green");

buttonRed.addEventListener("click", function () {
  headline1.style.color = "red";
});

buttonBlue.addEventListener("click", function () {
  headline1.style.color = "blue";
});

buttonGreen.addEventListener("click", function () {
  headline1.style.color = "green";
});

// 2.

const button2 = document.querySelector("#button2");
const profileCard = document.querySelector("#profile_card");

button2.addEventListener("click", function () {
  profileCard.classList.toggle("hidden");
  if (profileCard.classList.contains("hidden")) {
    button2.textContent = "პროფილის ჩვენება";
  } else {
    button2.textContent = "პროფილის დამალვა";
  }
});

// 3.

const textarea = document.querySelector("#textarea");
const symNum = document.querySelector("#sym_num");

textarea.addEventListener("input", function (event) {
  symNum.textContent = `სიმბოლოების რაოდენობა: ${event.target.value.length}`;
});

// 4.

const expandedImage = document.querySelector(".expanded_img");
const firstImage = document.querySelector(".first_img");
const secondImage = document.querySelector(".second_img");
const thirdImage = document.querySelector(".third_img");

firstImage.addEventListener("click", function () {
  expandedImage.src = firstImage.src;
});

secondImage.addEventListener("click", function () {
  expandedImage.src = secondImage.src;
});

thirdImage.addEventListener("click", function () {
  expandedImage.src = thirdImage.src;
});
