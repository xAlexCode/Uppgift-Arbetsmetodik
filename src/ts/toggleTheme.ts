const themeToggleButton =
  document.querySelector<HTMLButtonElement>(".toggle-btn")!;
themeToggleButton.addEventListener("click", toggleTheme);

export function toggleTheme() {
  document.body.classList.toggle("lightmode");
  if (document.body.classList.contains("lightmode")) {
    themeToggleButton.innerHTML = "Välj mörkt läge";
  } else {
    themeToggleButton.innerHTML = "Välj ljust läge";
  }
}

export default toggleTheme;
