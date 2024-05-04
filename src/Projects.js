document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".showProjects");
  const imagesWithText = [
    {
      src: "../assets/solar.jpg",
      text: "Supermercado O Baratinho Serrinha-Ba 29,16KWp",
    },
    {
      src: "../assets/solar.jpg",
      text: "Mercado Porcino, Barracas-Ponto Novo- Ba 9,9KWp",
    },
    { src: "../assets/solar.jpg", text: "C&E Mercado Biritinga-Ba 14,4KWp" },
    { src: "../assets/solar.jpg", text: "Residência em Serrinha-Ba 12,6KWp" },
    { src: "../assets/solar.jpg", text: "Araci- Ba 7,7KWp x 6KW" },
    {
      src: "../assets/solar.jpg",
      text: "Madeireira Silva Serrinha-BA 9,75KWp",
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
