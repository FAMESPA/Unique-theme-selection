let pink = document.querySelector('.pink')
let gray = document.querySelector('.gray')
let white = document.querySelector('.white')
let green = document.querySelector('.green')
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let blue = document.querySelector('.blue')
let black = document.querySelector('.black')
let brown = document.querySelector('.brown')
let purple = document.querySelector('.purple')
let body = document.querySelector('BODY') 
gray.checked = true

pink.addEventListener('click', (event)=> {
    setTheme(event)
})
gray.addEventListener('click', (event)=> {
    setTheme(event)
})
white.addEventListener('click', (event)=> {
    setTheme(event)
})
green.addEventListener('click', (event)=> {
    setTheme(event)
})
red.addEventListener('click', (event)=> {
    setTheme(event)
})
yellow.addEventListener('click', (event)=> {
    setTheme(event)
})
blue.addEventListener('click', (event)=> {
    setTheme(event)
})
black.addEventListener('click', (event)=> {
    setTheme(event)
})
brown.addEventListener('click', (event)=> {
    setTheme(event)
})
purple.addEventListener('click', (event)=> {
    setTheme(event)
})


function setTheme (event) {
    if (pink.checked) {
        body.style.background = 'pink'
    }
    if (gray.checked) {
        body.style.background = "gray";
    }
    if (white.checked) {
        body.style.background = "white";
    }
    if (green.checked) {
        body.style.background = "green";
    }
    if (red.checked) {
        body.style.background = "red";
    }
    if (yellow.checked) {
        body.style.background = "yellow";
    }
    if (blue.checked) {
        body.style.background = "blue";
    }
    if (black.checked) {
        body.style.background = "black";
    }
    if (brown.checked) {
        body.style.background = "brown";
    }
    if (purple.checked) {
        body.style.background = "purple";
    }
}