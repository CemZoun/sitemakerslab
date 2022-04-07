const topLeftButton = document.getElementById('top-left-button')
const topLeft = document.getElementById('top-left')
const topLeftContent = document.getElementById('top-left-content')
const clickMe = document.getElementById('click-me')
var topLeftButtonState = -1

topLeftButton.addEventListener('click',() => {
    if (topLeftButtonState === 0 ){
        topLeft.classList.add('yellow-bg')
        topLeftContent.classList.add('hide')
        topLeftButtonState = 3
        console.log('topLeftButtonState = 3')
    }
    else if (topLeftButtonState === 1 ){
        topLeft.classList.remove('yellow-bg')
        topLeftContent.classList.remove('hide')
        topLeftButtonState = 2
        console.log('topLeftButtonState = 2')
    }
    else {
        console.log('error')
    }
})

topLeft.addEventListener('click',() => {
    if (topLeftButtonState === -1 ){
        topLeft.classList.remove('yellow-bg')
        topLeftContent.classList.remove('hide')
        clickMe.classList.add('hide')
        topLeftButtonState = 0
        console.log('topLeftButtonState = 0')
    }
    else if (topLeftButtonState === 1 ){
        topLeft.classList.remove('yellow-bg')
        topLeftContent.classList.remove('hide')
        topLeftButtonState = 0
        console.log('topLeftButtonState = 0')
    }
    else if (topLeftButtonState === 2 ){
        topLeftButtonState = 0
        console.log('topLeftButtonState = 0')
    }
    else if (topLeftButtonState === 3 ){
        topLeftButtonState = 1
        console.log('topLeftButtonState = 1')
    }
    else {
        console.log('error')
    }
})

const topRightButton = document.getElementById('top-right-button')
const topRight = document.getElementById('top-right')
const topRightContent = document.getElementById('top-right-content')
var topRightButtonState = 1

topRightButton.addEventListener('click',() => {
    if (topRightButtonState === 0 ){
        topRight.classList.add('green-bg')
        topRightContent.classList.add('hide')
        topRightButtonState = 3
        console.log('topRightButtonState = 3')
    }
    else if (topRightButtonState === 1 ){
        topRight.classList.remove('green-bg')
        topRightContent.classList.remove('hide')
        topRightButtonState = 2
        console.log('topRightButtonState = 2')
    }
    else {
        console.log('error')
    }
})

topRight.addEventListener('click',() => {
    if (topRightButtonState === 1 ){
        topRight.classList.remove('green-bg')
        topRightContent.classList.remove('hide')
        topRightButtonState = 0
        console.log('topRightButtonState = 0')
    }
    else if (topRightButtonState === 2 ){
        topRightButtonState = 0
        console.log('topRightButtonState = 0')
    }
    else if (topRightButtonState === 3 ){
        topRightButtonState = 1
        console.log('topRightButtonState = 1')
    }
    else {
        console.log('error')
    }
})

const bottomRightButton = document.getElementById('bottom-right-button')
const bottomRight = document.getElementById('bottom-right')
const bottomRightContent = document.getElementById('bottom-right-content')
var bottomRightButtonState = 1

bottomRightButton.addEventListener('click',() => {
    if (bottomRightButtonState === 0 ){
        bottomRight.classList.add('red-bg')
        bottomRightContent.classList.add('hide')
        bottomRightButtonState = 3
        console.log('bottomRightButtonState = 3')
    }
    else if (bottomRightButtonState === 1 ){
        bottomRight.classList.remove('red-bg')
        bottomRightContent.classList.remove('hide')
        bottomRightButtonState = 2
        console.log('bottomRightButtonState = 2')
    }
    else {
        console.log('error')
    }
})

bottomRight.addEventListener('click',() => {
    if (bottomRightButtonState === 1 ){
        bottomRight.classList.remove('red-bg')
        bottomRightContent.classList.remove('hide')
        bottomRightButtonState = 0
        console.log('bottomRightButtonState = 0')
    }
    else if (bottomRightButtonState === 2 ){
        bottomRightButtonState = 0
        console.log('bottomRightButtonState = 0')
    }
    else if (bottomRightButtonState === 3 ){
        bottomRightButtonState = 1
        console.log('bottomRightButtonState = 1')
    }
    else {
        console.log('error')
    }
})

const bottomLeftButton = document.getElementById('bottom-left-button')
const bottomLeft = document.getElementById('bottom-left')
const bottomLeftContent = document.getElementById('bottom-left-content')
var bottomLeftButtonState = 1

bottomLeftButton.addEventListener('click',() => {
    if (bottomLeftButtonState === 0 ){
        bottomLeft.classList.add('blue-bg')
        bottomLeftContent.classList.add('hide')
        bottomLeftButtonState = 3
        console.log('bottomLeftButtonState = 3')
    }
    else if (bottomLeftButtonState === 1 ){
        bottomLeft.classList.remove('blue-bg')
        bottomLeftContent.classList.remove('hide')
        bottomLeftButtonState = 2
        console.log('bottomLeftButtonState = 2')
    }
    else {
        console.log('error')
    }
})

bottomLeft.addEventListener('click',() => {
    if (bottomLeftButtonState === 1 ){
        bottomLeft.classList.remove('blue-bg')
        bottomLeftContent.classList.remove('hide')
        bottomLeftButtonState = 0
        console.log('bottomLeftButtonState = 0')
    }
    else if (bottomLeftButtonState === 2 ){
        bottomLeftButtonState = 0
        console.log('bottomLeftButtonState = 0')
    }
    else if (bottomLeftButtonState === 3 ){
        bottomLeftButtonState = 1
        console.log('bottomLeftButtonState = 1')
    }
    else {
        console.log('error')
    }
})