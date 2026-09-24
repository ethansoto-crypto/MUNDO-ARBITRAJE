const boton = document.querySelector('#boton_login')
const formulario = document.querySelector('#formulario')

boton.addEventListener("click", () =>{
    if(formulario.style.display == "none"){
        formulario.style.display = "block";
    }
    else {
        formulario.style.display = "none";
    }
})

formulario.addEventListener("submit", (e)=>{
  e.preventDefault()
  window.location.href = './principal.html'
})

