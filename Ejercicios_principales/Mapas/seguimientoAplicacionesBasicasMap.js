let habitaciones = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0]
]);

const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    habitaciones.forEach((estadoHabitacion, numHabitacion) => {
        estado += `Habitación ${numHabitacion}: ${estadoHabitacion === 0 ? "Libre" : "Ocupada"}\n`;
    });
    alert(estado);
};

const reservarHabitacion = (num) => {
    if (!habitaciones.has(num)) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones.get(num) === 1) {
        alert("Habitación ya ocupada.");
    } else {
        habitaciones.set(num, 1);
        alert(`Habitación ${num} reservada con éxito.`);
        mostrarEstado();
    }
};

const liberarHabitacion = (num) => {
    if (!habitaciones.has(num)) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones.get(num) === 0) {
        alert("Habitación ya está libre.");
    } else {
        habitaciones.set(num, 0);
        alert(`Habitación ${num} liberada con éxito.`);
        mostrarEstado();
    }
};

// Menú principal para el sistema de reservas
const hotelMenu = () => {
    while (true) {
        let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
        if (opcion === "1") {
            mostrarEstado();
        } else if (opcion === "2") {
            let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
            reservarHabitacion(num);
        } else if (opcion === "3") {
            let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
            liberarHabitacion(num);
        } else if (opcion === "4") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};

// Iniciar el menú
hotelMenu();
