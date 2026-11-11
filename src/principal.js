const boton_iniciar_partido = document.querySelector('#boton_iniciar_partido')

boton_iniciar_partido.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = './iniciar_partido.html'
})