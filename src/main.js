const boton = document.querySelector('#boton_login')
const formulario = document.querySelector('#formulario')
const boton_entrar = document.querySelector('#boton_entrar')
const boton_cuenta = document.querySelector('#boton_cuenta')
const boton_contraseña = document.querySelector('#boton_contraseña')
const recuperar_contraseña = document.querySelector('#correo_recuperacion')
const boton_enviar = document.querySelector('#boton_enviar')

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

boton_contraseña.addEventListener("click", (e)=>{
  e.preventDefault()
  if(recuperar_contraseña.style.display == "none"){
        recuperar_contraseña.style.display = "block";
        boton_enviar.style.display= "block";
    }
    else {
        recuperar_contraseña.style.display = "none";
        boton_enviar.style.display= "none";
    }
})

