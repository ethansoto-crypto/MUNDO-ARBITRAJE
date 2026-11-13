import { obtenerPlanilla, guardarPlanilla } from './Api.js';


if (!localStorage.getItem('sesion_activa')) {
  window.location.href = './Index.html';
}

const componentePlanilla = () => ({
  cargando: true,
  error: '',
  guardando: false,
  local: { nombre: '', entrenador: '', jugadores: [] },
  visita: { nombre: '', entrenador: '', jugadores: [] },

  async init() {
    await this.cargarDatos();
  },

  async cargarDatos(forzarError = false) {
    this.cargando = true;
    this.error = '';

    try {
      const res = await obtenerPlanilla(forzarError);
      if (!res.ok) {
        this.error = res.error;
        return;
      }
      this.local = res.data.local;
      this.visita = res.data.visita;
    } catch (err) {
      this.error = 'Error inesperado al cargar los datos.';
      console.error(err);
    } finally {
      this.cargando = false;
    }
  },

  agregarJugador(bando) {
    this[bando].jugadores.push({
      id: Date.now(),
      equipo: bando,
      numero: '',
      nombre: '',
      titular: false,
      habilitado: true
    });
  },

  eliminarJugador(bando, id) {
    if (confirm('¿Seguro que deseas quitar este jugador de la planilla?')) {
      this[bando].jugadores = this[bando].jugadores.filter((j) => j.id !== id);
    }
  },

  async iniciarPartido() {
    this.guardando = true;
    await guardarPlanilla({ local: this.local, visita: this.visita });
    this.guardando = false;
    window.location.href = './Iniciar_partido.html';
  }
});

if (window.Alpine) {
  window.Alpine.data('planillaEquipos', componentePlanilla);
} else {
  document.addEventListener('alpine:init', () => {
    window.Alpine.data('planillaEquipos', componentePlanilla);
  });
}