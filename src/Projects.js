const imagesWithText = [
  {
    src: "../assets/image7.jpeg",
    text: "Madeireira Silva Serrinha-BA 9,75KWp",
  },
  {
    src: "../assets/image1.jpeg",
    text: "????",
  },
  {
    src: "../assets/image5.jpg",
    text: "C&E Mercado Biritinga-Ba 14,4KWp",
  },
  {
    src: "../assets/image2.jpeg",
    text: "Mercado Porcino, Barracas-Ponto Novo- Ba 9,9KWp",
  },
];

//Home video
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    video.pause();
    btn.classList.add("slide");
  } else {
    video.play();
    btn.classList.remove("slide");
  }
});

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

//Show images
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".showProjects");

  imagesWithText.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("imageProps");
    const images = document.createElement("img");
    images.src = item.src;
    const text = document.createElement("span");
    text.textContent = item.text;
    gridItem.appendChild(images);
    gridItem.appendChild(text);
    grid.appendChild(gridItem);
  });
});

//navbar
const button = document.querySelector("#toggle");
const sectionTwo = document.querySelector(".section-two");
const navBar = document.querySelector(".navBar");
const icon = document.querySelector("#icon");
let toggle = false;

button.addEventListener("click", () => {
  navBar.classList.toggle("visible");
  sectionTwo.classList.toggle("visible");

  toggle = !toggle;

  if (toggle) {
    icon.classList.remove("fa-solid", "fa-bars");
    icon.classList.add("fa-solid", "fa-xmark");
  } else {
    icon.classList.remove("fa-solid", "fa-xmark");
    icon.classList.add("fa-solid", "fa-bars");
  }
});
