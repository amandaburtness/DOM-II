// Your code goes here
console.log('console is working!')

// Prevent Default 
const navLinks = document.querySelector('.nav')
const nav1 = navLinks.firstElementChild
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const nav4 = nav3.nextElementSibling

nav1.addEventListener('click', event => {
    event.preventDefault();
})

nav2.addEventListener('click', event => {
    event.preventDefault();
})

nav3.addEventListener('click', event => {
    event.preventDefault();
})

nav4.addEventListener('click', event => {
    event.preventDefault();
})


// Header / Nav
const header = document.querySelector('.logo-heading')
const navBar = document.querySelector('.main-navigation')

// 1
header.addEventListener('mouseover', () => {
    header.style.color = "teal";
})

header.addEventListener('mouseout', () => {
    header.style.color = "black";
})

// 2
document.addEventListener('keydown', event => {
    if (event.code == 'Escape') {
        navBar.style.backgroundColor = "#FFD1DC"
    }
})

// Background 

const page = document.querySelector('body')

//3
page.addEventListener('wheel', event => {
    page.style.backgroundColor = ("#FFD1DC")
    event.stopPropagation;
})

//4
page.addEventListener('dblclick', event => {
    page.style.backgroundColor = "white"
    event.stopPropagation;
})

// IMGs

const busImg = document.querySelector('img')

// 5
busImg.addEventListener('click', () => {
    busImg.style.borderRadius = "30px";
})

// 6 
busImg.addEventListener('drag', () => {
    busImg.style.opacity = "50%"
})

// Page Load 

// 7 
window.addEventListener('load', event => {
    console.log(`a ${event.type} just did a thing!`)
})

// Divs

const intro = document.querySelector('.intro')

// 8 
intro.addEventListener('mouseover', () => {
    intro.style.color = "#FFD1DC"
})

// 9 
const destination = document.querySelector('.content-destination')

destination.addEventListener('click', () => {
    destination.style.color = "teal"
})

// 10 

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    btn.style.borderRadius = "100px"
})
