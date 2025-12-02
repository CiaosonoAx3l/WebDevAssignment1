let componentOptions = {};

fetch("data/components.json")
	.then(response => response.json())
	.then(data => {
		componentOptions = data;
		populateSelects();
	})
	.catch(err => console.error("Error loading components.json:", err));


function populateSelects() 
{
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
      <p> All components are compatible!</p>
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
