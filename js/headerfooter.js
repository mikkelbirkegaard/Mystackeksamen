

//Header sektion og menubar
// kilde: Gaurav, (2021), “Let's build a responsive navbar and hamburger menu using HTML, CSS, and Javascript”,https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci, (set online d. 23/05-2022)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// //Fixed header on scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("navbarencom");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// windowen.onscroll = function() {stayMenu()};

// var headermobil = document.getElementById("navbarenmobil");
// var stickymobil = headermobil.offsetTop;

// function stayMenu() {
//   if (windowen.pageYOffset > stickymobil) {
//     headermobil.classList.add("stickymobil");
//   } else {
//     headermobil.classList.remove("stickymobil");
//   }
// }


