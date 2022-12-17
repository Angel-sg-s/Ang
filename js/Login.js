let btn = document.getElementById('login')
const switchers = [...document.querySelectorAll('.switcher')]

document.addEventListener('DOMContentLoaded', function(event){
    btn.addEventListener('click', function(){
        boton();

    })
})

function boton(){
    alert("Todavia no funciona pendejo")



switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item =>
            item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})
