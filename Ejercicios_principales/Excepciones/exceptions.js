console.log("Iniciando el manejo de excepciones...");

/**
 * Manejo de Excepciones en JavaScript
 * Este archivo contiene ejemplos de manejo de excepciones utilizando try, catch, finally y throw.
 */

// Función para mostrar el menú
function mostrarMenu() {
    alert("Seleccione una opción:\n1. Ejemplo básico de try/catch\n2. Errores comunes\n3. Lanzar excepciones personalizadas\n4. Uso del bloque finally\n0. Salir");
}

// Función para manejar el ejemplo básico de try/catch
function ejemploBasico() {
    try {
        // Código que podría generar un error
        const resultado = "Operación exitosa"; // Definir una operación riesgosa
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
    }
}

// Función para manejar errores comunes
function erroresComunes() {
    try {
        // Caso 1: TypeError
        const arr = [1, 2, 3];
        arr.toUppercase(); // Esto generará un TypeError
    } catch (error) {
        console.log('Error Caso 1:', error.name); // TypeError
    }

    try {
        // Caso 2: SyntaxError
        eval('if (true) {'); // Esto generará un SyntaxError
    } catch (error) {
        console.log('Error Caso 2:', error.name); // SyntaxError
    }
}

// Función para lanzar excepciones personalizadas
function lanzarExcepcionPersonalizada() {
    function dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }

    try {
        console.log(dividir(10, 0));
    } catch (error) {
        console.log('Error en división:', error.message);
    }
}

// Función para usar el bloque finally
function usoFinally() {
    let conexion = null;
    try {
        conexion = { estado: 'conectado' };
        throw new Error('Error de conexión');
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        console.log('Cerrando conexión...');
        conexion = null;
    }
}

// Función principal para ejecutar el menú
function ejecutar() {
    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Ingrese su opción:");
        switch (opcion) {
            case '1':
                ejemploBasico();
                break;
            case '2':
                erroresComunes();
                break;
            case '3':
                lanzarExcepcionPersonalizada();
                break;
            case '4':
                usoFinally();
                break;
            case '0':
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== '0');
}

// Ejecutar el programa
ejecutar(); // Llama a la función para iniciar el menú y manejar excepciones