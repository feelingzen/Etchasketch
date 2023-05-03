const container = document.querySelector('.container');
let clear = document.querySelector('.clear');
const range = document.querySelector('.range')

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

function spaceColor() {
    color = Math.floor(Math.random() * 6) + 1;
    if (color == 1) {
        return 'rgb(104, 0, 189)'
    } else if (color == 2) {
        return 'rgb(50, 20, 75)'
    } else if (color == 3) {
        return 'rgb(140, 0, 255)'
    } else if (color == 4) {
        return 'rgb(31, 0, 56)'
    } else if (color == 5) {
        return 'rgb(255, 255, 255)'
    } else if (color == 6) {
        return 'rgb(70, 70, 70)'
    }
}

boxCreation()

let rows = document.querySelectorAll('.row')
let boxes = document.querySelectorAll('.box')

// Event listener for changing box color on mouse hover

boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
        box.style.cssText = `background-color: ${spaceColor()};`
    })
    box.addEventListener('mouseover', () => {
        box.style.cssText = `background-color: ${spaceColor()};`
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
                box.style.cssText = `background-color: ${spaceColor()};`
            })
            box.addEventListener('mouseover', () => {
                box.style.cssText = `background-color: ${spaceColor()};`
            })
        })
    } else {
        alert('Your input needs to be a number from 1-64!')
    }

}

// Event listeners for buttons

clear.addEventListener('click', clearBoxes);
range.addEventListener('click', rangeChange);
