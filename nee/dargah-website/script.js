// DOM Elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const themeToggle = document.querySelector(".theme-toggle");
const upiBtn = document.getElementById("upi-btn");
const upiPopup = document.getElementById("upi-popup");
const closePopupBtn = document.getElementById("close-popup");

// Navbar Toggle
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
  burger.classList.toggle("toggle");
});

// Slider functionality
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("current");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("current");
}

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

// Auto slide
setInterval(() => showSlide(currentSlide + 1), 5000);

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// UPI Popup
upiBtn.addEventListener("click", () => {
  upiPopup.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
  upiPopup.style.display = "none";
});

// Close popup when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === upiPopup) {
    upiPopup.style.display = "none";
  }
});

// Preloader
const preloader = document.createElement("div");
preloader.id = "preloader";
preloader.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(preloader);

window.addEventListener("load", () => {
  preloader.style.display = "none";
});

// GSAP Animations
function initAnimations() {
  // Animate navbar
  gsap.from("#navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out",
  });

  // Animate hero text
  gsap.from(".slide-text", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
  });

  // Animate about section
  gsap.from("#about", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  // Animate service items
  gsap.from(".service-item", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Animate gallery images
  gsap.from(".gallery-grid img", {
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 80%",
    },
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });
}

// Initialize animations when the DOM is ready
document.addEventListener("DOMContentLoaded", initAnimations);

// Preloader animation with GSAP
window.addEventListener("load", () => {
  gsap.to("#preloader", {
    duration: 1,
    opacity: 0,
    onComplete: () => {
      document.getElementById("preloader").style.display = "none";
    },
  });
});

// Existing code...
