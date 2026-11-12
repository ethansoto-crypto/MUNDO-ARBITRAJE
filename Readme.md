### Nombre de proyecto: <Mundo Arbitraje>
### Integrantes: Giovanny Guerra, Javier Urrutia, Ethan Soto

Esta aplicación busca ayudar a aquellos planilleros y cronometristas a llevar todo lo que se necesita en el partido por ejemplo : tiempo, puntos, falta, etc.


Para poder abrir la pagina web de manera local debe abrir el repositorio en codespaces, apretando el boton verde "code" y crear un nuevo codespace.

Una vez ya abierto colocar el siguiente comando en el terminal para instalar todos los archivos:

- npm install

Asi ya habra copiado todos los archivos localmente, para iniciar la pagina de manera local debe poner en la terminal:

- npm run dev

Con eso abajo a la derecha le aparecera la opcion de abrirlo en el navegador, si no en el apartado de puertos vera un url, al apretarla podra acceder a la pagina web 


# Problema de error de archivo cuenta para hacer el commit
- **Fecha:** 2026-11-12
- **Integrante:** Javier Urrutia (@javiurrutialara)
- **Herramienta y modelo:** Geminis
- **Enlace a la conversación:** 
- **Archivos afectados:** Cuenta.js
## Objetivo
Arreglar el problema para poder correr los archivos en Linux se cambia por letras mayusculas.
## Conversación (me sale este error del cuenta js a que se debe ?)
### Respuesta 1
El error fatal: pathspec 'Cuenta1.js' did not match any files en tu terminal ocurre por dos razones al mismo tiempo:   Falta la ruta de la carpeta src/: Estás ejecutando git add desde la raíz del proyecto (/workspaces/MUNDO-ARBITRAJE), pero Cuenta1.js no está en la raíz, sino dentro de la carpeta src/. Por eso Git no lo encuentra si escribes solo Cuenta1.js en vez de src/Cuenta1.js.   Error de tipeo en el comando anterior: Además, en la segunda línea escribiste Main,js (con coma en vez de punto) y Style.js (cuando tu archivo se llama Style.css).
## Qué se incorporó al proyecto
git add src/Cuenta1.js src/Main.js src/Principal.js src/Style.css Cuenta.html Index.html
## Verificación
- Funciono y me dejo hacer el commit 
- Fue solo por no tener atencion con letras que ponia :(
