// Your code goes here

// 1

const logoHead = document.querySelector('.logo-heading')

console.log(logoHead)

logoHead.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'pink';
})

// 2

document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
        event.target.style.backgroundColor = 'yellow';
    }
})

// 3

window.addEventListener('load', (event) => {
    console.log('JS is fun! Yay!')
})

// 4

const homeContainer = document.querySelector('.home')

homeContainer.addEventListener('click', () => {
    homeContainer.style.color = 'aqua'
})

// 5

const imgs = document.querySelector('img')

imgs.addEventListener('mouseover', () => {
    imgs.style.border = '1px solid black'
})

// 6

const contentPick = document.querySelector('.content-pick')

contentPick.addEventListener('dblclick', () => {
    contentPick.style.color = 'maroon'
})

// 7

const btn = document.querySelector('.btn')

btn.addEventListener('dblclick', () => {
    btn.style.backgroundColor = 'aqua'
})

// 8

const mainNav = document.querySelector('.main-navigation')

mainNav.addEventListener('dblclick', () => {
    mainNav.style.backgroundColor = 'maroon'
})

// 9

document.addEventListener('dblclick', () => {
    console.log('you dblclicked woah')
})

// 10

document.addEventListener('scroll', () => {
    mainNav.style.color = 'aqua'
})
