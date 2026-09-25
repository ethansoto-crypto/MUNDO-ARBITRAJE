const boton = document.querySelector('#boton_login')
const formulario = document.querySelector('#formulario')
const boton_entrar = document.querySelector('#boton_entrar')
const boton_cuenta = document.querySelector('#boton_cuenta')
const boton_registar = document.querySelector('#registrar')
const contraseña_1 = document.querySelector('contraseña_1')
const contraseña_2 = document.querySelector('contraseña_2')

boton.addEventListener("click", () =>{
    if(formulario.style.display == "none"){
        formulario.style.display = "block";
    }
    else {
        formulario.style.display = "none";
    }
})

boton_entrar.addEventListener("click", (e)=>{
  e.preventDefault()
  window.location.href = './principal.html'
})

boton_cuenta.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = './cuenta.html'
})