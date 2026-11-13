import { iniciarSesion } from './Api.js';

const botonLogin = document.querySelector('#boton_login');
const formulario = document.querySelector('#formulario');
const botonCuenta = document.querySelector('#boton_cuenta');
const botonRecuperar = document.querySelector('#boton_contraseña');
const inputCorreo = document.querySelector('#correo_recuperacion');
const botonEnviar = document.querySelector('#boton_enviar');

botonLogin.addEventListener('click', () => {
  formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
});

botonCuenta.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = './Cuenta.html';
});

botonRecuperar.addEventListener('click', () => {
  inputCorreo.style.display = 'inline-block';
  botonEnviar.style.display = 'inline-block';
});

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const usuario = document.querySelector('#usuario').value.trim();
  const clave = document.querySelector('#contraseña').value.trim();

  if (!usuario || !clave) {
    alert('Completa usuario y contraseña');
    return;
  }

  const respuesta = await iniciarSesion(usuario, clave);
  if (respuesta.ok) {
    window.location.href = './Principal.html';
  } else {
    alert(respuesta.error);
  }
});

