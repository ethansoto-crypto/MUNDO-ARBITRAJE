import { obtenerPlanilla } from './Api.js';

if (!localStorage.getItem('sesion_activa')) {
  window.location.href = './index.html';
}

const componenteTablero = () => ({
  cargando: true,
  nombreLocal: 'LOCAL',
  nombreVisita: 'VISITA',
  titularesLocal: [],
  titularesVisita: [],
  jugadorSeleccionado: null,
  menuOtrasFaltas: false,

  faltasLocal: 0,
  faltasVisita: 0,
  puntosLocal: 0,
  puntosVisita: 0,
  periodo: 1,

  posesionCorta: 14,
  posesionLarga: 24,
  posesion: 24,
  relojPosesion: null,

  minutos: 12,
  minutosIniciales: 12,
  segundos: 0,
  reloj: null,
  editando: false,

  get minutosFormateados() {
    return this.minutos < 10 ? '0' + this.minutos : this.minutos;
  },

  get segundosFormateados() {
    return this.segundos < 10 ? '0' + this.segundos : this.segundos;
  },

  async init() {
    try {
      const res = await obtenerPlanilla(false);
      if (res.ok && res.data) {
        const { local, visita } = res.data;

        this.nombreLocal = local.nombre?.trim() || 'LOCAL';
        this.nombreVisita = visita.nombre?.trim() || 'VISITA';

        const titL = (local.jugadores || []).filter((j) => j.titular && j.habilitado);
        const titV = (visita.jugadores || []).filter((j) => j.titular && j.habilitado);

        this.titularesLocal = (titL.length > 0 ? titL : local.jugadores || [])
          .slice(0, 5)
          .map((j) => ({ ...j, puntos: 0, faltas: 0 }));

        this.titularesVisita = (titV.length > 0 ? titV : visita.jugadores || [])
          .slice(0, 5)
          .map((j) => ({ ...j, puntos: 0, faltas: 0 }));
      }
    } catch (err) {
      console.error('Error al cargar los equipos en el tablero:', err);
    } finally {
      this.completarCasillas();
      this.cargando = false;
    }
  },

  completarCasillas() {
    while (this.titularesLocal.length < 5) {
      this.titularesLocal.push({
        id: 'l-' + this.titularesLocal.length,
        numero: '00',
        nombre: 'Sin asignar',
        puntos: 0,
        faltas: 0
      });
    }
    while (this.titularesVisita.length < 5) {
      this.titularesVisita.push({
        id: 'v-' + this.titularesVisita.length,
        numero: '00',
        nombre: 'Sin asignar',
        puntos: 0,
        faltas: 0
      });
    }
  },

  seleccionarJugador(jugador, bando) {
    this.menuOtrasFaltas = false;
    if (this.jugadorSeleccionado?.id === jugador.id) {
      this.jugadorSeleccionado = null;
    } else {
      this.jugadorSeleccionado = { ...jugador, bando };
    }
  },

  sumarPuntosJugador(cantidad) {
    if (!this.jugadorSeleccionado) return;

    const { id, bando } = this.jugadorSeleccionado;

    if (bando === 'local') {
      this.puntosLocal += cantidad;
      const jug = this.titularesLocal.find((j) => j.id === id);
      if (jug) jug.puntos = (jug.puntos || 0) + cantidad;
    } else {
      this.puntosVisita += cantidad;
      const jug = this.titularesVisita.find((j) => j.id === id);
      if (jug) jug.puntos = (jug.puntos || 0) + cantidad;
    }

    
    this.jugadorSeleccionado = null;
    this.menuOtrasFaltas = false;
  },

  sumarFaltaJugador(tipo = 'Personal') {
    if (!this.jugadorSeleccionado) return;

    const { id, bando } = this.jugadorSeleccionado;

    if (bando === 'local') {
      this.faltasLocal += 1;
      const jug = this.titularesLocal.find((j) => j.id === id);
      if (jug) jug.faltas = (jug.faltas || 0) + 1;
    } else {
      this.faltasVisita += 1;
      const jug = this.titularesVisita.find((j) => j.id === id);
      if (jug) jug.faltas = (jug.faltas || 0) + 1;
    }

    this.jugadorSeleccionado = null;
    this.menuOtrasFaltas = false;
  },

  alternarReloj() {
    if (this.editando) return;

    if (this.reloj) {
      clearInterval(this.reloj);
      this.reloj = null;
      this.pausarPosesion();
    } else {
      this.iniciarPosesion();
      this.reloj = setInterval(() => {
        if (this.segundos > 0) {
          this.segundos--;
        } else if (this.minutos > 0) {
          this.minutos--;
          this.segundos = 59;
        } else {
          clearInterval(this.reloj);
          this.reloj = null;
          this.pausarPosesion();
        }
      }, 1000);
    }
  },
 
  iniciarPosesion() {
    if (this.relojPosesion || this.posesion <= 0) return;

    this.relojPosesion = setInterval(() => {
      if (this.posesion > 0) {
        this.posesion--;
      } else {
        this.pausarPosesion();
      }
    }, 1000);
  },

  pausarPosesion() {
    clearInterval(this.relojPosesion);
    this.relojPosesion = null;
  },

  alternarPosesion() {
    if (this.editando) return;
    if (this.relojPosesion) {
      this.pausarPosesion();
    } else {
      this.iniciarPosesion();
    }
  },

  reiniciarPosesion(segundos) {
    this.posesion = segundos;
    if (this.reloj && !this.relojPosesion) {
      this.iniciarPosesion();
    }
  },
  

  abrirEdicionReloj() {
    clearInterval(this.reloj);
    this.reloj = null;
    this.pausarPosesion();
    this.editando = true;
  },

  guardarTiempoReloj() {
    this.minutos = Math.max(1, this.minutosIniciales || 1);
    this.segundos = 0;

    this.posesionCorta = Math.max(1, this.posesionCorta || 14);
    this.posesionLarga = Math.max(1, this.posesionLarga || 24);
    this.posesion = this.posesionLarga;
    this.editando = false;
  },

  reiniciarReloj() {
    clearInterval(this.reloj);
    this.reloj = null;
    this.pausarPosesion();
    this.minutos = this.minutosIniciales;
    this.segundos = 0;
    this.posesion = this.posesionLarga;
  },

  cambiarPeriodo() {
    this.periodo = this.periodo < 4 ? this.periodo + 1 : 1;
  },

  terminarPartido() {
    if (confirm('¿Seguro que deseas terminar el partido?')) {
      clearInterval(this.reloj);
      this.pausarPosesion();
      window.history.back();
    }
  }
});

if (window.Alpine) {
  window.Alpine.data('tableroPartido', componenteTablero);
} else {
  document.addEventListener('alpine:init', () => {
    window.Alpine.data('tableroPartido', componenteTablero);
  });
}