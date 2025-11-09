if (localStorage.getItem("theme") === "light") 
{
  document.documentElement.classList.add("light-mode");
}

const toggle = document.createElement("button");
toggle.innerText = "🌓";
Object.assign(toggle.style,
{
  position: "fixed",
  top: "15px",
  left: "15px",
  zIndex: "999",
  background: "var(--card-bg-color)",
  color: "var(--text-color)",
  border: `2px solid var(--accent-color)`,
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.3rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
});
document.body.appendChild(toggle);


toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");
  if (document.documentElement.classList.contains("light-mode")) 
  {
    localStorage.setItem("theme", "light");
  }
  else 
  {
    localStorage.removeItem("theme");
  }
});

//date  

document.getElementById('year').textContent = new Date().getFullYear();
