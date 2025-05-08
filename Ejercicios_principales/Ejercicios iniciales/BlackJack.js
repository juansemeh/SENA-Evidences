let jugarDeNuevo = true;

while (jugarDeNuevo) {
    let manoJugador1 = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
    let manoJugador2 = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
    let puntuacionJugador1 = manoJugador1[0] + manoJugador1[1];
    let puntuacionJugador2 = manoJugador2[0] + manoJugador2[1];

    alert("¡Bienvenidos al juego de Blackjack! Jugador 1 y Jugador 2, tomen turnos para pedir cartas o plantarse.");

    let accionJugador1;
    do {
        accionJugador1 = prompt(`Jugador 1, tu mano: ${manoJugador1.join(', ')} (Puntuación: ${puntuacionJugador1}). ¿Pedir carta o Plantarse?`) || 'plantarse';
        if (accionJugador1.toLowerCase() === 'pedir carta') {
            manoJugador1.push(Math.floor(Math.random() * 11) + 1);
            puntuacionJugador1 += manoJugador1[manoJugador1.length - 1];
        }
    } while (accionJugador1.toLowerCase() === 'pedir carta' && puntuacionJugador1 <= 21);

    let accionJugador2;
    do {
        accionJugador2 = prompt(`Jugador 2, tu mano: ${manoJugador2.join(', ')} (Puntuación: ${puntuacionJugador2}). ¿Pedir carta o Plantarse?`) || 'plantarse';
        if (accionJugador2.toLowerCase() === 'pedir carta') {
            manoJugador2.push(Math.floor(Math.random() * 11) + 1);
            puntuacionJugador2 += manoJugador2[manoJugador2.length - 1];
        }
    } while (accionJugador2.toLowerCase() === 'pedir carta' && puntuacionJugador2 <= 21);

    let ganador = (puntuacionJugador1 > 21) ? 'Jugador 2 gana!' :
                  (puntuacionJugador2 > 21) ? 'Jugador 1 gana!' :
                  (puntuacionJugador1 > puntuacionJugador2) ? 'Jugador 1 gana!' :
                  (puntuacionJugador2 > puntuacionJugador1) ? 'Jugador 2 gana!' : 'Es un empate!';

    alert(`Resultados finales:\nJugador 1: ${manoJugador1.join(', ')} (Puntuación: ${puntuacionJugador1})\nJugador 2: ${manoJugador2.join(', ')} (Puntuación: ${puntuacionJugador2})\n${ganador}`);

    jugarDeNuevo = confirm("¿Quieres jugar otra vez?");
}
