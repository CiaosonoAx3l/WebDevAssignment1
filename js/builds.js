const builds = [
  {
    name: "Alessandro's Gaming PC 2025",
    img: "images/PC_Alessandro.jpg",
    components: [
      { type: "CPU", name: "Ryzen 7 7800X3D", price: 400 },
      { type: "GPU", name: "RTX 4070 SUPER", price: 700 },
      { type: "MB", name: "X670E MSI TOMAHAWK", price: 250 },
      { type: "RAM", name: "32GB DDR5 6000MHz", price: 120 },
      { type: "SSD", name: "2TB NVMe", price: 100 },
    ],
  },
  {
    name: "Ares Streaming Setup 2025",
    img: "images/PC_Ares.jpg",
    components: [
      { type: "CPU", name: "Ryzen 9 7950X", price: 550 },
      { type: "GPU", name: "RTX 4070 SUPER", price: 700 },
      { type: "MB", name: "X870E", price: 300 },
      { type: "RAM", name: "32GB DDR5", price: 120 },
      { type: "SSD", name: "1TB NVMe", price: 80 },
    ],
  },
  {
    name: "Luca's Balanced Gaming PC",
    img: "images/PC_Sofia.jpg",
    components: [
      { type: "CPU", name: "Ryzen 7 7700X", price: 370 },
      { type: "GPU", name: "RX 7800XT", price: 550 },
      { type: "MB", name: "B650-A ROG STRIX", price: 200 },
      { type: "RAM", name: "32GB DDR5", price: 110 },
      { type: "SSD", name: "1TB NVMe", price: 80 },
    ],
  },
  {
    name: "Marco's Budget Build",
    img: "images/PC_Sophie.jpg",
    components: [
      { type: "CPU", name: "Ryzen 5 7600", price: 250 },
      { type: "GPU", name: "RX 7700XT", price: 400 },
      { type: "MB", name: "B650M AORUS", price: 150 },
      { type: "RAM", name: "16GB DDR5", price: 70 },
      { type: "SSD", name: "1TB NVMe", price: 60 },
    ],
  },
];

//Generate them
const container = document.getElementById("builds-container");

builds.forEach((build) => {
  const total = build.components.reduce((sum, c) => sum + c.price, 0);
  const buildCard = document.createElement("div");
  buildCard.className = "build-card";
  buildCard.innerHTML = `
    <img src="${build.img}" alt="${build.name}">
    <h3>${build.name}</h3>
    <table class="table">
      <tbody>
        ${build.components
          .map(
            (c) =>
              `<tr><th>${c.type}</th><td>${c.name}</td><td>€${c.price}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
    <p class="price">Total: €${total}</p>
  `;
  container.appendChild(buildCard);
});
