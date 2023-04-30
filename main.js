const container = document.querySelector('.container')

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

const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.cssText = 'background-color: rgb(252, 255, 104);'
    })
})

