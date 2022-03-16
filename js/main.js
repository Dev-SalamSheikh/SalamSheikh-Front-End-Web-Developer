    // Mixitup Effect Portfolio

    let mixerWork = mixitup('.box_container', {
        selectors: {
            target: '.box_single'
        },
        animation: {
            duration: 500
        }
    });


const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
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
