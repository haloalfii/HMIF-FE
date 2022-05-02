// Dynamic Footer Year
let year = document.getElementById('year');
let date = new Date().getFullYear();
year.innerText = date;

// Mobile Navigation Toggle
const nav = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
        console.log(nav)
        nav.classList.toggle('active')
})

// Back to top button
let backtotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
                backtotop.classList.add('active')
        } else {
                backtotop.classList.remove('active')
        }
})
