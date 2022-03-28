const leftBar = document.querySelector('.left-bar')
const leftBarBtns = document.querySelectorAll('.left-bar__toggle')

leftBarBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        leftBar.classList.toggle('left-bar__active')
    })
})