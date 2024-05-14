//Home video
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
window.addEventListener("scroll", function () {
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

  imagesWithText.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("imageProps");
    const images = document.createElement("img");
    images.src = item.src;
    const text = document.createElement("p");
    text.textContent = item.text;
    gridItem.appendChild(images);
    gridItem.appendChild(text);
    grid.appendChild(gridItem);
  });
});
