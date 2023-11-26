const prev =document.querySelector('.prev')
const next =document.querySelector('.next')
const slider =document.querySelector('.sldr')

prev.addEventListener('click',() => {
    slider.scrollLeft -=692
})
next.addEventListener('click',() => {
    slider.scrollLeft +=692
})