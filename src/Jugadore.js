import { obtenerPlanilla, guardarPlanilla } from './api.js';

document.addEventListener('alpine:init', () => {
  Alpine.data('planillaEquipos', () => ({
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

      const res = await obtenerPlanilla(forzarError);
      this.cargando = false;

      if (!res.ok) {
        this.error = res.error;
        return;
      }

      this.local = res.data.local;
      this.visita = res.data.visita;
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
  }));
});