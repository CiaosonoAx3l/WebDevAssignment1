const componentOptions = {
  cpu: [
    // AMD AM4
    { name: "Ryzen 5 5600", price: 180, socket: "AM4", ramType: "DDR4" },
    { name: "Ryzen 7 5800X3D", price: 320, socket: "AM4", ramType: "DDR4" },
    // AMD AM5
    { name: "Ryzen 5 7600", price: 250, socket: "AM5", ramType: "DDR5" },
    { name: "Ryzen 7 7800X3D", price: 400, socket: "AM5", ramType: "DDR5" },
    { name: "Ryzen 9 7950X", price: 550, socket: "AM5", ramType: "DDR5" },
    // Intel
    { name: "Intel i5-13600K", price: 330, socket: "LGA1700", ramType: "DDR5" },
    { name: "Intel i7-13700K", price: 420, socket: "LGA1700", ramType: "DDR5" },
    { name: "Intel i9-14900K", price: 600, socket: "LGA1700", ramType: "DDR5" },
  ],

  gpu: [
    { name: "RTX 4060", price: 350, res: "1080p" },
    { name: "RTX 4070 SUPER", price: 700, res: "1440p" },
    { name: "RTX 5070", price: 750, res: "1440p" },
    { name: "RTX 5070 Ti", price: 900, res: "4K" },
    { name: "RX 7700XT", price: 400, res: "1080p" },
    { name: "RX 7800XT", price: 550, res: "1440p" },
  ],

  motherboard: [
    // AM4
    { name: "B550 TUF Gaming", price: 130, socket: "AM4", ramType: "DDR4" },
    { name: "X570 AORUS Elite", price: 180, socket: "AM4", ramType: "DDR4" },
    // AM5
    { name: "B650-A ROG STRIX", price: 200, socket: "AM5", ramType: "DDR5" },
    { name: "X670E ROG STRIX", price: 250, socket: "AM5", ramType: "DDR5" },
    // Intel
    { name: "Z690 Tomahawk", price: 200, socket: "LGA1700", ramType: "DDR5" },
    { name: "Z790 AORUS Master", price: 300, socket: "LGA1700", ramType: "DDR5" },
  ],

  ram: [
    { name: "16GB DDR4 3200MHz", price: 60, type: "DDR4" },
    { name: "32GB DDR4 3600MHz", price: 100, type: "DDR4" },
    { name: "16GB DDR5 5200MHz", price: 80, type: "DDR5" },
    { name: "32GB DDR5 6000MHz", price: 120, type: "DDR5" },
    { name: "64GB DDR5 6400MHz", price: 220, type: "DDR5" },
  ],

  ssd: [
    { name: "1TB NVMe Gen3", price: 60 },
    { name: "2TB NVMe Gen4", price: 100 },
    { name: "3TB NVMe Gen4", price: 160 },
  ],

  cooling: [
    { name: "Air Cooler", price: 50 },
    { name: "AIO 240mm", price: 90 },
    { name: "AIO 360mm", price: 120 },
  ],

  case: [
    { name: "NZXT H5 Flow", price: 100 },
    { name: "Lian Li Lancool 216", price: 130 },
    { name: "Fractal North", price: 150 },
  ],

  psu: [
    { name: "650W Bronze", price: 70 },
    { name: "750W Gold", price: 110 },
    { name: "850W Gold", price: 140 },
  ],

  fans: [
    { name: "2x ARGB Fans", price: 40 },
    { name: "3x Silent Fans", price: 60 },
    { name: "4x Premium Fans", price: 90 },
    { name: "none", price: 0 },
  ],
};

//Populate selects
for (const key in componentOptions) 
{
  const select = document.getElementById(key);
  componentOptions[key].forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${item.name} (€${item.price})`;
    select.appendChild(option);
  });
}

//Total and Compatibility
document.getElementById("calcBtn").addEventListener("click", () => {
  let total = 0;
  let warnings = [];
  let resolution = "";


  const cpu = componentOptions.cpu[document.getElementById("cpu").value];
  const gpu = componentOptions.gpu[document.getElementById("gpu").value];
  const mb = componentOptions.motherboard[document.getElementById("motherboard").value];
  const ram = componentOptions.ram[document.getElementById("ram").value];
  const ssd = componentOptions.ssd[document.getElementById("ssd").value];
  const cooling = componentOptions.cooling[document.getElementById("cooling").value];
  const pcCase = componentOptions.case[document.getElementById("case").value];
  const psu = componentOptions.psu[document.getElementById("psu").value];
  const fans = componentOptions.fans[document.getElementById("fans").value];

  total =
    cpu.price +
    gpu.price +
    mb.price +
    ram.price +
    ssd.price +
    cooling.price +
    pcCase.price +
    psu.price +
    fans.price;

  //check compatibility
  // CPU - Motherboard
  if (cpu.socket !== mb.socket) {
    warnings.push("CPU and Motherboard are not compatible (different socket).");
  }

  // RAM - Motherboard
  if (ram.type !== mb.ramType) {
    warnings.push(" RAM type doesn't match motherboard (DDR4 / DDR5 mismatch).");
  }

  // GPU - Resolution Suggestion
  if (gpu.res === "1080p") resolution = "Recommended Resolution: Full HD (1080p)";
  else if (gpu.res === "1440p") resolution = "Recommended Resolution: QHD (1440p)";
  else if (gpu.res === "4K") resolution = "Recommended Resolution: Ultra HD (4K)";


  //Result
  const result = document.getElementById("buildResult");
  if (warnings.length === 0) 
  {
    result.innerHTML = `
      <h3>Your Custom Build</h3>
      <p><strong>Total Price:</strong> €${total.toFixed(2)}</p>
      <p>✅ All components are compatible!</p>
      <p>${resolution}</p>
    `;
  } 
  else 
  {
    result.innerHTML = `
      <h3>Your Custom Build</h3>
      <p><strong>Total Price:</strong> €${total.toFixed(2)}</p>
      <div style="color:#ff4b4b; font-weight:bold;">${warnings.join("<br>")}</div>
      <p>${resolution}</p>
    `;
  }
});
