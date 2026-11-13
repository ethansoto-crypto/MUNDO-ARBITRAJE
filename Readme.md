### Nombre de proyecto: <Mundo Arbitraje>
### Integrantes: Giovanny Guerra, Javier Urrutia, Ethan Soto

Esta aplicación busca ayudar a aquellos planilleros y cronometristas a llevar todo lo que se necesita en el partido por ejemplo : tiempo, puntos, falta, etc.

Tecnologias usadas:
- HTML
- CSS
- JavaScript
- Tailwind (Via CDN)
- Alpine.js (Vida CDN)

Requisitos:
- Navegador web moderno


Para poder abrir la pagina web de manera local debe abrir el repositorio en codespaces, apretando el boton verde "code" y crear un nuevo codespace.

Una vez ya abierto colocar el siguiente comando en el terminal para instalar todos los archivos:

- npm install

Asi ya habra copiado todos los archivos localmente, para iniciar la pagina de manera local debe poner en la terminal:

- npm run dev

Con eso abajo a la derecha le aparecera la opcion de abrirlo en el navegador, si no en el apartado de puertos vera un url, al apretarla podra acceder a la pagina web 


Credenciales:
Para poder acceder a todas las paginas del sitio web es nesesario logearse antes, para ello debe elegir alguno de estos 3 usuarios:

Usuario 1:
Nombre de usuario: Javier_urrutia23
Contraseña: 12345678

Usuario 2:
Nombre de usuario: Giovanny_Guerra4
Contraseña: G1234567

Usuario 3:
Nombre de usuario: Ethan_Soto8
Contraseña: Ethan1234


Funcion en js/api.js:                   Metodo:         Ruta:     

- obtenerPlanilla(forzarError)          Get             /api/planilla
- guardarPlanilla(datosPlanilla)        Post/Put        /api/planilla
- registrarUsuario(nuevoUsuario)        Post            /api/usuarios
- iniciarSesion(usuario, clave)         Post            /api/auth/login
