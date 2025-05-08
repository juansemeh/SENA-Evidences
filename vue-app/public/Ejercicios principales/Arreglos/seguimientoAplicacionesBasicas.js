// Aplicación 1: Sistema de Reservas de Hotel
let habitaciones = [0, 0, 0, 0, 0];

const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++) {
        estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    alert(estado);
};

const reservarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 1) {
        alert("Habitación ya ocupada.");
    } else {
        habitaciones[num - 1] = 1;
        alert(`Habitación ${num} reservada con éxito.`);
        mostrarEstado();
    }
};

const liberarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 0) {
        alert("Habitación ya está libre.");
    } else {
        habitaciones[num - 1] = 0;
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

// Aplicación 2: Cajero Automático de Banco
let transacciones = [];

const consultarSaldo = () => {
    let saldo = transacciones.reduce((acc, curr) => acc + curr, 0);
    alert(`Saldo actual: $${saldo}`);
};

const depositar = (monto) => {
    transacciones.push(monto);
    alert(`Depósito de $${monto} realizado con éxito.`);
};

const retirar = (monto) => {
    let saldo = transacciones.reduce((acc, curr) => acc + curr, 0);
    if (monto > saldo) {
        alert("Saldo insuficiente.");
    } else if (monto > 500) {
        alert("No se pueden retirar montos mayores a $500 en una sola transacción.");
    } else {
        transacciones.push(-monto);
        alert(`Retiro de $${monto} realizado con éxito.`);
    }
};

// Menú principal para el cajero automático
const cajeroMenu = () => {
    while (true) {
        let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Salir\nElige una opción:");
        if (opcion === "1") {
            consultarSaldo();
        } else if (opcion === "2") {
            let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
            depositar(monto);
        } else if (opcion === "3") {
            let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
            retirar(monto);
        } else if (opcion === "4") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};

// Aplicación 3: Cola de Atención de Clientes en Supermercado
let colaClientes = [];

const agregarCliente = (nombre) => {
    if (colaClientes.length < 7) {
        colaClientes.push(nombre);
        alert(`${nombre} ha sido agregado a la cola.`);
    } else {
        alert("La cola está llena.");
    }
};

const atenderCliente = () => {
    if (colaClientes.length > 0) {
        let clienteAtendido = colaClientes.shift();
        alert(`Atendiendo a ${clienteAtendido}.`);
    } else {
        alert("No hay clientes en la cola.");
    }
};

// Menú principal para la cola de atención
const colaMenu = () => {
    while (true) {
        let opcion = prompt("1. Agregar cliente\n2. Atender cliente\n3. Salir\nElige una opción:");
        if (opcion === "1") {
            let nombre = prompt("Ingresa el nombre del cliente:");
            agregarCliente(nombre);
        } else if (opcion === "2") {
            atenderCliente();
        } else if (opcion === "3") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};

// Aplicación 4: Máquina Expendedora de Dulces y Gaseosas
let productos = ["Galletas", "Refresco", "Chicles", "Chocolate", "Caramelos"];
let cantidades = [5, 5, 5, 5, 5];

const mostrarInventario = () => {
    let inventario = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        inventario += `${productos[i]}: ${cantidades[i]} disponibles\n`;
    }
    alert(inventario);
};

const procesarPago = (codigo) => {
    if (cantidades[codigo] > 0) {
        cantidades[codigo]--;
        alert(`Has comprado ${productos[codigo]}.`);
    } else {
        alert(`${productos[codigo]} está agotado. Te sugerimos ${productos.find((_, index) => cantidades[index] > 0) || "ningún producto disponible"}.`);
    }
};

// Menú principal para la máquina expendedora
const maquinaExpendedora = () => {
    while (true) {
        let opcion = prompt("1. Mostrar inventario\n2. Comprar producto\n3. Salir\nElige una opción:");
        if (opcion === "1") {
            mostrarInventario();
        } else if (opcion === "2") {
            let codigo = parseInt(prompt("Ingresa el código del producto (0-4):"));
            procesarPago(codigo);
        } else if (opcion === "3") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};

// Máquina Expendedora Mejorada
const maquinaExpendedoraMejorada = () => {
    let productosMejorados = ["Galletas", "Refresco", "Chicles", "Chocolate", "Caramelos"];
    let cantidadesMejoradas = [5, 5, 5, 5, 5];
    let precios = [1.5, 2.0, 0.5, 1.0, 0.75]; // Precios de los productos

    const mostrarInventarioMejorado = () => {
        let inventario = "Inventario Mejorado:\n";
        let totalCosto = 0;
        for (let i = 0; i < productosMejorados.length; i++) {
            inventario += `${productosMejorados[i]} - ${cantidadesMejoradas[i]} disponibles - Precio: $${precios[i]}\n`;
            totalCosto += precios[i] * cantidadesMejoradas[i];
        }
        inventario += `\nCosto total del inventario: $${totalCosto.toFixed(2)}`;
        alert(inventario);
    };

    const procesarPagoMejorado = () => {
        alert("Códigos de productos disponibles:\n" + 
              "0: Galletas\n" + 
              "1: Refresco\n" + 
              "2: Chicles\n" + 
              "3: Chocolate\n" + 
              "4: Caramelos");
        let codigo = parseInt(prompt("Ingresa el código del producto (0-4):"));

        if (cantidadesMejoradas[codigo] > 0) {
            cantidadesMejoradas[codigo]--;
            alert(`Has comprado ${productosMejorados[codigo]} por $${precios[codigo]}.`);
        } else {
            alert(`${productosMejorados[codigo]} está agotado. Te sugerimos ${productosMejorados.find((_, index) => cantidadesMejoradas[index] > 0) || "ningún producto disponible"}.`);
        }

        // Allow the user to continue purchasing
        let continuar = confirm("¿Deseas comprar otro producto?");
        if (continuar) {
            procesarPagoMejorado();
        }
    };

    while (true) {
        let opcion = prompt("1. Mostrar inventario mejorado\n2. Comprar producto mejorado\n3. Salir\nElige una opción:");
        if (opcion === "1") {
            mostrarInventarioMejorado();
        } else if (opcion === "2") {
            procesarPagoMejorado();
        } else if (opcion === "3") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};

// Menú principal
const mainMenu = () => {
    while (true) {
        let opcion = prompt("Selecciona una aplicación:\n1. Sistema de Reservas de Hotel\n2. Cajero Automático\n3. Cola de Atención de Clientes\n4. Máquina Expendedora\n5. Máquina Expendedora Mejorada\n6. Salir");
        if (opcion === "1") {
            hotelMenu();
        } else if (opcion === "2") {
            cajeroMenu();
        } else if (opcion === "3") {
            colaMenu();
        } else if (opcion === "4") {
            maquinaExpendedora();
        } else if (opcion === "5") {
            maquinaExpendedoraMejorada();
        } else if (opcion === "6") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};

// Ejecución del menú principal
mainMenu();
