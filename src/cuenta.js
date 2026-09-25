const boton_registrar = document.querySelector('#registrar')
const contraseña_1 = document.querySelector('#contraseña_1')
const contraseña_2 = document.querySelector('#contraseña_2')


boton_registrar.addEventListener("click", (e)=>{
  e.preventDefault()
  if(contraseña_1.value == contraseña_2.value){
    window.location.href = './principal.html';
  }else{
    alert("Contraseñas diferentes");
  }
})