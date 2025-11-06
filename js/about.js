//fade-in animation

const fadeElems = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) 
      entry.target.classList.add("visible");
  });
});
fadeElems.forEach((el) => observer.observe(el));

//Typing animation
const aboutText = document.getElementById("about-text");
const textContent = `I'm an Italian computer science student passionate about helping others understand how PCs work. 
This project was born from the idea of simplifying the process of choosing and building a computer, especially for students who are just starting their university journey. 
Over the years, I've experimented with hardware setups, optimized builds for gaming and study, 
and learned how to create web interfaces. 
My goal is to share knowledge in a practical, accessible way. 
Every part of this site, from the data to the design, was written, styled, and tested by me 
to provide functionality and a modern experience.`;

let i = 0;
function typeWriter() 
{
  if (i < textContent.length) 
    {
    aboutText.textContent += textContent.charAt(i);
    i++;
    setTimeout(typeWriter, 10);
  }
}
typeWriter();
