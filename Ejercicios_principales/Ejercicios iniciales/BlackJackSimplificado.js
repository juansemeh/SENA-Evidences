let manoJugador1 = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
let manoJugador2 = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
let puntuacionJugador1 = manoJugador1[0] + manoJugador1[1];
let puntuacionJugador2 = manoJugador2[0] + manoJugador2[1];

alert("¡Bienvenidos al juego de Blackjack!");

let accionJugador1 = prompt(`Jugador 1, tu mano: ${manoJugador1.join(', ')} (Puntuación: ${puntuacionJugador1}). ¿Pedir carta o Plantarse?`) || 'plantarse';
if (accionJugador1.toLowerCase() === 'pedir carta') {
    manoJugador1.push(Math.floor(Math.random() * 11) + 1);
    puntuacionJugador1 += manoJugador1[manoJugador1.length - 1];
}

let accionJugador2 = prompt(`Jugador 2, tu mano: ${manoJugador2.join(', ')} (Puntuación: ${puntuacionJugador2}). ¿Pedir carta o Plantarse?`) || 'plantarse';
if (accionJugador2.toLowerCase() === 'pedir carta') {
    manoJugador2.push(Math.floor(Math.random() * 11) + 1);
    puntuacionJugador2 += manoJugador2[manoJugador2.length - 1];
}

let accionJugador1Turno2 = prompt(`Jugador 1, tu mano: ${manoJugador1.join(', ')} (Puntuación: ${puntuacionJugador1}). ¿Pedir carta o Plantarse?`) || 'plantarse';
if (accionJugador1Turno2.toLowerCase() === 'pedir carta') {
    manoJugador1.push(Math.floor(Math.random() * 11) + 1);
    puntuacionJugador1 += manoJugador1[manoJugador1.length - 1];
}

let accionJugador2Turno2 = prompt(`Jugador 2, tu mano: ${manoJugador2.join(', ')} (Puntuación: ${puntuacionJugador2}). ¿Pedir carta o Plantarse?`) || 'plantarse';
if (accionJugador2Turno2.toLowerCase() === 'pedir carta') {
    manoJugador2.push(Math.floor(Math.random() * 11) + 1);
    puntuacionJugador2 += manoJugador2[manoJugador2.length - 1];
}

let accionJugador1Turno3 = prompt(`Jugador 1, tu mano: ${manoJugador1.join(', ')} (Puntuación: ${puntuacionJugador1}). ¿Pedir carta o Plantarse?`) || 'plantarse';
if (accionJugador1Turno3.toLowerCase() === 'pedir carta') {
    manoJugador1.push(Math.floor(Math.random() * 11) + 1);
    puntuacionJugador1 += manoJugador1[manoJugador1.length - 1];
}

let accionJugador2Turno3 = prompt(`Jugador 2, tu mano: ${manoJugador2.join(', ')} (Puntuación: ${puntuacionJugador2}). ¿Pedir carta o Plantarse?`) || 'plantarse';
if (accionJugador2Turno3.toLowerCase() === 'pedir carta') {
    manoJugador2.push(Math.floor(Math.random() * 11) + 1);
    puntuacionJugador2 += manoJugador2[manoJugador2.length - 1];
}

