import { animate } from "./js/sphere.js";
import { animateText } from "./js/textEffect.js";
import { animateOnScroll } from "./js/animateOnScroll.js";

//Animate the text
const h1Elements = document.querySelectorAll("h1");
h1Elements.forEach((h1Element) => {
  animateText(h1Element);
});

//3D animation
animate();

//Show element on scroll
const aboutElement = document.querySelector(".about");
animateOnScroll(aboutElement, "showing");
const projectsElement = document.querySelector(".projects");
animateOnScroll(projectsElement, "showing");
