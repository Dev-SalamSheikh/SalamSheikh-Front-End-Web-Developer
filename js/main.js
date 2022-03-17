// Hamburger Navigation Code

const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const bar = document.querySelectorAll(".bar")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
})

burger.addEventListener("click", ()=> {
    bar.style.color = "white";
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active")
    menu.classList.remove("active")
}))

// Work Portfolio Countdown

let number = document.getElementById("number");
let numberTwo = document.getElementById("numberTwo");
let numberThree = document.getElementById("numberThree");
let numberFour = document.getElementById("numberfour");
let numberFive = document.getElementById("numberfive");
let numberSix = document.getElementById("numbersix");
let counter = 0;
let counterTwo = 0;
let counterThree = 0;
let counterFour = 0;
let counterFive = 0;
let counterSix = 0;

setInterval(() => {
    if(counter == 85){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%"
    }
}, 19);

setInterval(() => {
    if(counterTwo == 80){
        clearInterval();
    }else{
        counterTwo += 1;
        numberTwo.innerHTML = counter + "%"
    }
}, 19);

setInterval(() => {
    if(counterThree == 50){
        clearInterval();
    }else{
        counterThree += 1;
        numberThree.innerHTML = counter + "%"
    }
}, 19);

setInterval(() => {
    if(counterFour == 80){
        clearInterval();
    }else{
        counterFour += 1;
        numberFour.innerHTML = counter + "%"
    }
}, 19);

setInterval(() => {
    if(counterFive == 40){
        clearInterval();
    }else{
        counterFive += 1;
        numberFive.innerHTML = counter + "%"
    }
}, 19);

setInterval(() => {
    if(counterSix == 10){
        clearInterval();
    }else{
        counterSix += 1;
        numberSix.innerHTML = counter + "%"
    }
}, 19);


// Swipper Navigation Code

let swiperTestimonial = new Swiper(".box_container", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });



/*=============== SCROLL REVEL ANIMATION ===============*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 1500,
    delay: 300,
    reset: true,
})

sr.reveal('.home')
sr.reveal('.content', {delay: 400, origin: "left"});
sr.reveal('.image', {delay: 400, origin: 'top'});
sr.reveal('.works', {delay: 400, origin: 'bottom'});
sr.reveal('.services', {delay: 400, origin: 'left'});
sr.reveal('.skills', {delay: 400, origin: 'bottom'});
sr.reveal('.testimonial', {delay: 400, origin: 'top'});
sr.reveal('form', {delay: 400, origin: 'left'});
sr.reveal('.footer-content', {delay: 400, origin: 'top'});