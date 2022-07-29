const colorsName = ["blue", "orange", "pink", "green", "red", "cyan", "yellow"];

const buttonToggleTheme = document.querySelector("button");
const iconButton = document.querySelector("button i");

const buttonChangeColor = document.querySelector(".switch-colors");
const avatarImage = document.querySelector(".avatar");

buttonToggleTheme.addEventListener("click", function () {
  if (buttonToggleTheme.className == "dark-mode") {
    document.body.className = "dark-" + document.body.className;

    avatarImage.classList.add("dark-detail");
    iconButton.className = "ph-sun-dim-fill";
    buttonToggleTheme.className = "light-mode";
  } else {
    const withoutDark = document.body.className.slice(5);

    document.body.className = withoutDark;
    avatarImage.classList.remove("dark-detail");
    iconButton.className = "ph-moon-stars-fill";
    buttonToggleTheme.className = "dark-mode";
  }
});

function giveRandomNumbers() {
  return Math.round(Math.random() * (colorsName.length - 2));
}

buttonChangeColor.addEventListener("click", function () {
  const previousColor = document.body.className.includes("dark-")
    ? document.body.className.split("-")[1]
    : document.body.className; // if body has "dark-" in his class, return color name through split(), else only color name

  const randomNumber = giveRandomNumbers();

  const newColor = colorsName.filter((c) => c !== previousColor)[randomNumber]; // c = color

  if (document.body.className.includes("dark-")) {
    buttonChangeColor.style.backgroundColor,
      (document.body.className = "dark-" + newColor);
  } else {
    buttonChangeColor.style.backgroundColor,
      (document.body.className = newColor);
  }
});
