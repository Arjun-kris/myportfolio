const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, true);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); 
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;



const textElement = document.getElementById("text");
const texts = [
  "R Arjun Krishna",
  " "
];
let textIndex = 0;
let charIndex = 0;
let isTyping = true;

function isMalayalamCharacter(char) {
  return char >= "\u0D00" && char <= "\u0D7F";
}

const typingSpeed = 50;

function type() {
  const currentText = texts[textIndex];
  if (isTyping) {
    const currentChar = currentText[charIndex];
    const delay = isMalayalamCharacter(currentChar) ? typingSpeed * 2 : typingSpeed;
    textElement.innerHTML = `<span class="typing-animation">${currentText.slice(0, charIndex)}</span>`;
    charIndex++;
    if (charIndex > currentText.length) {
      isTyping = false;
      setTimeout(type, 2000); // Wait for 2 seconds before erasing
    } else {
      setTimeout(type, delay);
    }
  } else {
    textElement.innerHTML = `<span class="typing-out-animation">${currentText.slice(0, charIndex)}</span>`;
    charIndex--;
    if (charIndex === 0) {
      isTyping = true;
      textIndex = (textIndex + 1) % texts.length; // Move to the next text
      setTimeout(type, 50); // Wait for 100ms before typing in again
    } else {
      setTimeout(type, 25);
    }
  }
}

type();


const buttonWrapper = document.querySelector(".button_wrapper");

buttonWrapper.addEventListener("click", () => {
	if (!buttonWrapper.classList.contains("loading")) {
		buttonWrapper.classList.add("loading");
		setTimeout(() => {
			buttonWrapper.classList.add("done");
			setTimeout(() => buttonWrapper.classList.remove("loading", "done"), 1500);
		}, 2400);
	}
});




