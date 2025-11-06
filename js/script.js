//scroll animation

const fadeElems = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) 
    {
      entry.target.classList.add("visible");
    }
  });
});
fadeElems.forEach((el) => observer.observe(el));

//typing effect

const speed = 20;

function typeEffect(element, text) 
{
  let i = 0;
  function type() 
  {
    if (i < text.length) 
      {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const compareText = document.getElementById("compare-text");
const createText = document.getElementById("create-text");
const tailorText = document.getElementById("tailor-text");

typeEffect(compareText, "Find out how different PC builds perform and discover which components are worth it and which not.");
typeEffect(createText, "Experiment with CPU(processor), GPU(graphic card), and RAM combinations, and see how they affect your total price and performance.");
typeEffect(tailorText, "From basic setups for essays to high-end machines for engineering, I've got practical advice for every budget.");

//FAQ Logic

//POI METTI ANIMAZIONE ANCHE QUI
const faqButtons = document.querySelectorAll(".faq-btn");
const answerBox = document.getElementById("answer");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const q = btn.dataset.question;
    let response = "";

    switch (q) 
    {
      case "ram":
        response =
          "It depends, 8GB is fine for browsing on internet and documents, but 16GB is the new minimum requirment for gaming or multitasking. If you want to do 3D modeling, 32GB should be ideal.";
        break;
      case "gpu":
        response =
          "Not always. Integrated graphics are fine for programming or general works, but for gaming or 3D modelling you will definitely need a dedicated GPU.";
        break;
      case "ssd":
        response =
          "Absolutely! An SSD is essential, it drastically improves speed, startup, and responsiveness of the whole PC. Avoid HDD-only systems, they are good only for store static data";
        break;
      case "budget":
        response =
          "For a good setup, aim for 700€/800€. For 3d work or gaming, expect to spend at least €1,200 for a smooth experience.";
        break;
    }

    answerBox.textContent = response;
    answerBox.style.opacity = 1;
  });
});

