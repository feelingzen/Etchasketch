const container = document.querySelector('.container');
let clear = document.querySelector('.clear');
const range = document.querySelector('.range');
const startingColor = 'rgb(0, 0, 0)';
let currentColor = startingColor;
const colorPicker = document.getElementById('color-picker');

function setColor(newColor) {
    currentColor = newColor
}

// Creates boxes and rows

function boxCreation() {
    for (i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        for (a = 0; a < 16; a++) {
            const box = document.createElement('div');
            box.classList.add('box')
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}

boxCreation()

let rows = document.querySelectorAll('.row')
let boxes = document.querySelectorAll('.box')

// Event listener for changing box color on mouse hover

boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
        box.style.cssText = `background-color: ${currentColor}`
    })
    box.addEventListener('mouseover', () => {
        box.style.cssText = `background-color: ${currentColor};`
    })
})

function clearBoxes() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.style.cssText = 'background-color: none;')
}

function canvasClear() {
    let rows = document.querySelectorAll('.row')
    let boxes = document.querySelectorAll('.box')
    rows.forEach(row => row.remove())
    boxes.forEach(box => box.remove())
}

function rangeChange() {
    let rangePrompt = parseInt(prompt('What size would you like the new canvas to be? The canvas can be 1-64 pixels!'))
    if (rangePrompt < 65) {
        canvasClear()
        for (i = 0; i < rangePrompt; i++) {
            const row = document.createElement('div');
            row.classList.add('row')
            for (a = 0; a < rangePrompt; a++) {
                const box = document.createElement('div');
                box.classList.add('box')
                row.appendChild(box)
            }
            container.appendChild(row)
        }
        let boxes = document.querySelectorAll('.box')
        boxes.forEach(box => {
            box.addEventListener('mousedown', () => {
                box.style.cssText = `background-color: ${currentColor}`
            })
            box.addEventListener('mouseover', () => {
                box.style.cssText = `background-color: ${currentColor}`
            })
        })
    } else {
        alert('Your input needs to be a number from 1-64!')
    }

}

// Event listeners for buttons

colorPicker.addEventListener('input', () => {setColor(colorPicker.value)});
clear.addEventListener('click', clearBoxes);
range.addEventListener('click', rangeChange);
