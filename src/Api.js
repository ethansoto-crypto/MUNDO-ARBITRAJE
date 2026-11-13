const LATENCIA = 500;
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function obtenerPlanilla(forzarError = false) {
  await esperar(LATENCIA);

  if (forzarError) {
    return { ok: false, status: 500, error: 'Error 500: Simulado al cargar la planilla de jugadores.' };
  }

  try {
    const guardada = JSON.parse(localStorage.getItem('planilla_partido'));
    if (guardada) {
      return { ok: true, status: 200, data: guardada };
    }

    const res = await fetch('/mocks/Jugadores.json');
    if (!res.ok) {
      return { ok: false, status: res.status, error: 'No se encontró el archivo de jugadores.' };
    }

    const todos = await res.json();
    const data = {
      local: {
        nombre: 'Equipo Local',
        entrenador: '',
        jugadores: todos.filter((j) => j.equipo === 'local')
      },
      visita: {
        nombre: 'Equipo Visita',
        entrenador: '',
        jugadores: todos.filter((j) => j.equipo === 'visita')
      }
    };

    return { ok: true, status: 200, data };
  } catch (e) {
    return { ok: false, status: 500, error: 'Error 500: Conexión al leer los datos.' };
  }
}

export async function guardarPlanilla(datosPlanilla) {
  await esperar(400);
  localStorage.setItem('planilla_partido', JSON.stringify(datosPlanilla));
  return { ok: true, status: 200, data: datosPlanilla };
}

const USUARIOS_DEFECTO = [
  { id: 1, usuario: 'Javier_urrutia23', clave: '12345678', nombre: 'Javier Urrutia', rol: 'mc' },
  { id: 2, usuario: 'Giovanny_Guerra4', clave: 'G1234567', nombre: 'Giovanny Guerra', rol: 'arbitro' },
  { id: 3, usuario: 'Ethan_Soto8', clave: 'Ethan1234', nombre: 'Ethan Soto', rol: 'cronometrista' }
];

export async function registrarUsuario(nuevoUsuario) {
  await esperar(400);
  const guardados = JSON.parse(localStorage.getItem('usuarios_registrados') || '[]');
  guardados.push(nuevoUsuario);
  localStorage.setItem('usuarios_registrados', JSON.stringify(guardados));
  localStorage.setItem('usuario_activo', JSON.stringify(nuevoUsuario));
  localStorage.setItem('sesion_activa', JSON.stringify(nuevoUsuario));
  return { ok: true, status: 201, data: nuevoUsuario };
}

export async function iniciarSesion(usuarioIngresado, claveIngresada) {
  await esperar(LATENCIA);

  let base = USUARIOS_DEFECTO;
  try {
    const res = await fetch('/mocks/Usuarios.json');
    if (res.ok) base = await res.json();
  } catch (e) {}

  const registrados = JSON.parse(localStorage.getItem('usuarios_registrados') || '[]');
  const todos = [...base, ...registrados];

  const encontrado = todos.find(
    (u) => u.usuario === usuarioIngresado && u.clave === claveIngresada
  );

  if (!encontrado) {
    return { ok: false, status: 401, error: 'Usuario o contraseña incorrectos.' };
  }

  const sesion = {
    usuario: encontrado.usuario,
    nombre: encontrado.nombre || encontrado.usuario,
    rol: encontrado.rol || 'oficial'
  };

  localStorage.setItem('usuario_activo', JSON.stringify(sesion));
  localStorage.setItem('sesion_activa', JSON.stringify(sesion));
  return { ok: true, status: 200, data: sesion };
}