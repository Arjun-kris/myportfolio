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
    particlesColor = "#000000";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    particlesColor = "#ffffff";
  } // Set particles color based on theme

  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); 
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

  // Update particle color
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": particlesColor
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": particlesColor,
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


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
