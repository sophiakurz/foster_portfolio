// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Theme toggle
  const toggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    document.body.classList.add("light");
  }

  function switchTheme() {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  if (toggle) {
    toggle.addEventListener("click", switchTheme);
  }
});
