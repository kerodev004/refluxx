let links = document.querySelectorAll('.link')
links.forEach((link) => {
    link.addEventListener('click', changeClass)
    link.addEventListener('click' , close)
})
function changeClass() {
    links.forEach((link) => {
        link.classList.remove('active')
        this.classList.add('active')
    })
}
//-----------------------------------------
let menu = document.querySelector(".menu-btn")
let header = document.querySelector(".menu")
let closeBox = document.querySelector(".close-box")
menu.addEventListener('click', () => {
    header.classList.add('actmenu')
})
closeBox.onclick = close
function close() {
    header.classList.remove("actmenu")
}
//-----------------------------------------
function startCount(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }  , 50  / goal)
}
let counts = document.querySelectorAll('.count')
counts.forEach((count) => startCount(count)) 



//-----------------------------------------
let workLinks = document.querySelectorAll(".works-link")
let workBoxs = document.querySelectorAll(".work-box")

workLinks.forEach((link) => {
    link.addEventListener('click', classes)
    link.addEventListener('click' , filter)

})
function classes() {
    workLinks.forEach((link) => {
        link.classList.remove('actwork')
        this.classList.add('actwork')
    })
}

function filter() {
    workBoxs.forEach((box) => {
        box.classList.add('hide')
        document.querySelectorAll(this.dataset.text).forEach((box) => {
            box.classList.remove("hide")
        })
    })
}