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

function waterColor() {
    color = Math.floor(Math.random() * 3) + 1;
    if (color == 1) {
        return 'rgb(252, 255, 104)'
    } else if (color == 2) {
        return 'rgb(192, 196, 0)'
    } else if (color == 3) {
        return 'rgb(205, 207, 66)f'
    }
}

boxCreation()

let rows = document.querySelectorAll('.row')
let boxes = document.querySelectorAll('.box')

// Event listener for changing box color on mouse hover

boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
        box.style.cssText = `background-color: ${waterColor()};`
    })
    box.addEventListener('mouseover', () => {
        box.style.cssText = `background-color: ${waterColor()};`
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
                box.style.cssText = `background-color: ${waterColor()};`
            })
            box.addEventListener('mouseover', () => {
                box.style.cssText = `background-color: ${waterColor()};`
            })
        })
    } else {
        alert('Your input needs to be a number from 1-64!')
    }

}

// Event listeners for buttons

clear.addEventListener('click', clearBoxes);
range.addEventListener('click', rangeChange);
