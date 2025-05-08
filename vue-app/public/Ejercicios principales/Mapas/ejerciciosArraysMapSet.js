function CL() {
    const codigosLibros = [10, 25, 60, 45, 80, 15, 70];
    const filtrarCodigos = codigosLibros.filter((cod) => cod > 50);
    console.log(filtrarCodigos);
}

const tiendaLinea = () => {
    const preciosProductos = [500, 1200, 300, 1500, 800];
    const verificarPrecio = preciosProductos.some((price) => price > 1000);
    console.log(verificarPrecio);
}

const CA = () => {
    const preciosProductos = [500, 1200, 300, 1500, 800];
    const hayPreciosAltos = preciosProductos.some((price) => price > 1000);
    console.log(hayPreciosAltos);
}

const evento = () => {
    const asistentes = new Map([
        [1, "Ana"],
        [2, "Luis"],
    ]);
    const AgregarAsistentes = (map, id, nombre) => {
        const AgregarAsistente = map.set(id, nombre);
        console.log(asistentes)
    }
    AgregarAsistentes(asistentes, 3, "Sofía");
};

const controlAcceso = () => {
    const asistentes = new Map([
        [101, "Carlos"],
        [102, "María"],
        [103, "José"],
    ]);
    const verificarAsistente = (map, codigo) => {
        const verificar = map.has(codigo);
        console.log(verificar);
    };
    verificarAsistente(asistentes, 102);
    verificarAsistente(asistentes, 104);
};

const registroVentas = () => {
    const productosVendidos = new Set([
        1001, 1002, 1003
    ]);
    const verificarProducto = (codigo) => {
        return productosVendidos.has(codigo);
    };
    
    console.log(verificarProducto(1002));
    console.log(verificarProducto(1004));
}

const calificaciones = () => {
    const puntajes = [85, 92, 78, 95, 88];
    const mapaPuntajes = new Map(puntajes.map((puntaje, index) => [index, puntaje]));
    mapaPuntajes.set(5, 90);
    console.log(mapaPuntajes);
}

const NP = () => {
    const proyectos = [
        new Map([["nombre", "Proyecto A"], ["presupuesto", 5000]]),
        new Map([["nombre", "Proyecto B"], ["presupuesto", 8000]])
    ];
    proyectos.push(new Map([["nombre", "Proyecto C"], ["presupuesto", 6000]]));
    console.log(proyectos);
}

function menu() {
    let choice;
    do {
        choice = prompt("Select a function to execute:\n1. Filter book codes greater than 50\n2. Check if any product price is above 1000\n3. Check for high prices\n4. Add attendees to the list\n5. Verify if an attendee exists\n6. Check if a product was sold\n7. Map scores to their indices\n8. Manage project list\n9. Exit");

        if (choice === '1') {
            CL();
        } else if (choice === '2') {
            tiendaLinea();
        } else if (choice === '3') {
            CA();
        } else if (choice === '4') {
            evento();
        } else if (choice === '5') {
            controlAcceso();
        } else if (choice === '6') {
            registroVentas();
        } else if (choice === '7') {
            calificaciones();
        } else if (choice === '8') {
            NP();
        } else if (choice === '9') {
            console.log("Saliendo del menu...");
        } else {
            console.log("Eleccion invalida. Por favor, escoja otra vez.");
        }

    } while (choice !== '9');
}

menu();
