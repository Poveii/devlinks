const buttonToggleTheme = document.querySelector("button");
const iconButton = document.querySelector("button i");

buttonToggleTheme.addEventListener("click", function () {
  if (buttonToggleTheme.className == "dark-mode") {
    document.body.className = "dark-blue";
    iconButton.className = "ph-sun-dim-fill";
    buttonToggleTheme.className = "light-mode";
  } else {
    document.body.className = "blue";
    iconButton.className = "ph-moon-stars-fill";
    buttonToggleTheme.className = "dark-mode";
  }
});
