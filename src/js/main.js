import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';
import {templateService, templateGallery, templatePrice, templateReviews} from './makeTemplate.js';
import { SERVICES, GALLERY, PRICES, COMMENTS } from "./data/data.js";


// --- HEADER
//----MENU RESPONSIVE
const menuResponsive = document.querySelector("#menuResponsive");
menuResponsive.addEventListener("click", () => {
  document.querySelector("#navLinks").classList.toggle("show-menu");
});
//---- ACTIVE CLASS
const links = document.querySelectorAll("#navLinks  li  a");
const activeClass = (e) => {
   links.forEach(link => link.classList.contains('active') && link.classList.remove('active'));
   e.target.classList.add('active');
};
links.forEach((link) => link.addEventListener("click", activeClass));


// --- HERO CARROUSEL
var swiperH = new Swiper(".home-slider", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate:20,
    stretch: 0,
   depth: 100,
   modifier: 2,
    slideShadows: true,
  },
   loop:true,
   autoplay:{
     delay: 3000,
     disableOnInteraction:false,
   }
 });

 // --- COMMENTS CARROUSEL
 var swiperR = new Swiper(".review-slider", {
   slidesPerView: 3,
   spaceBetween: 20,
  pagination:{
    el: ".swiper-pagination",
    clickable: true
  }, 
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },    
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

 

 // ---TEMPLATES
templateService(SERVICES, document.querySelector('#servicesContainer'));
templateGallery(GALLERY, document.querySelector('#galleryContainer'));
templatePrice(PRICES, document.querySelector('#pricesContainer'));
templateReviews(COMMENTS, document.querySelector('#reviewsContainer'));