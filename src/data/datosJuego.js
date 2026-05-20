// src/data/datosJuego.js

const habilidades = [
  {
    id: 1,
    nombre: 'Espadazo',
    descripcion: 'Un ataque poderoso con la espada.',
    incremento_ataque: 10,
    incremento_defensa: 0,
    incremento_estamina: -5,
  },
  {
    id: 2,
    nombre: 'Escudo de Hierro',
    descripcion: 'Aumenta la defensa del guerrero.',
    incremento_ataque: 0,
    incremento_defensa: 15,
    incremento_estamina: -3,
  },
  {
    id: 3,
    nombre: 'Bola de Fuego',
    descripcion: 'Lanza una esfera de fuego al enemigo.',
    incremento_ataque: 20,
    incremento_defensa: -5,
    incremento_estamina: -10,
  },
  {
    id: 4,
    nombre: 'Regeneración',
    descripcion: 'Recupera estamina lentamente con el tiempo.',
    incremento_ataque: 0,
    incremento_defensa: 0,
    incremento_estamina: 25,
  },
  {
    id: 5,
    nombre: 'Paso Sombra',
    descripcion: 'Teletransportación corta que deja al enemigo desorientado.',
    incremento_ataque: 8,
    incremento_defensa: 5,
    incremento_estamina: -8,
  },
  {
    id: 6,
    nombre: 'Flecha de Luz',
    descripcion: 'Disparo de energía lumínica de alta precisión.',
    incremento_ataque: 15,
    incremento_defensa: 0,
    incremento_estamina: -6,
  },
];

const personajes = [
  {
    id: 1,
    nombre: 'Gagh-Ar',
    tipo: 'guerrero',
    descripcion: 'Un valiente luchador con gran fuerza física.',
    ataque: 80, defensa: 70, estamina: 60,
    habilidades: [1, 2],
  },
  {
    id: 2,
    nombre: 'Elyra',
    tipo: 'maga',
    descripcion: 'Hechicera con gran dominio de la energía mágica.',
    ataque: 65, defensa: 40, estamina: 90,
    habilidades: [2, 3],
  },
  {
    id: 3,
    nombre: 'Zarak',
    tipo: 'asesino',
    descripcion: 'Ágil y sigiloso, experto en ataques furtivos.',
    ataque: 75, defensa: 35, estamina: 70,
    habilidades: [5],
  },
  {
    id: 4,
    nombre: 'Sylvara',
    tipo: 'elfo',
    descripcion: 'Arquera élfica de gran precisión y velocidad.',
    ataque: 70, defensa: 50, estamina: 80,
    habilidades: [6, 4],
  },
  {
    id: 5,
    nombre: 'Tormund',
    tipo: 'guerrero',
    descripcion: 'Guerrero bárbaro con una resistencia sobrehumana.',
    ataque: 90, defensa: 60, estamina: 55,
    habilidades: [1],
  },
  {
    id: 6,
    nombre: 'Mirael',
    tipo: 'maga',
    descripcion: 'Maga sanadora que equilibra ataque y soporte.',
    ataque: 55, defensa: 50, estamina: 95,
    habilidades: [3, 4],
  },
];

module.exports = { personajes, habilidades };
