/******************este es el scrip de slider ocaciones */
const prev =document.querySelector('.prev')
const next =document.querySelector('.next')
const slider =document.querySelector('.sldr')

prev.addEventListener('click',() => {
    slider.scrollLeft -=2200
})
next.addEventListener('click',() => {
    slider.scrollLeft +=2200
})