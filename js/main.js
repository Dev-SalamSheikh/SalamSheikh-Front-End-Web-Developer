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
