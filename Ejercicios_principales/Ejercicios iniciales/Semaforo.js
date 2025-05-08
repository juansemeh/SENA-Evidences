let estado = "rojo"; 
let encendido = true; // Variable para rastrear si el semáforo está encendido
console.log("El semáforo ha comenzado."); 

encendido = confirm("¿Quieres activar el semaforo?")

if (encendido == true) {


function cambiarSemaforo() { 
    if (encendido) { // Verificar si el semáforo está encendido
        console.log(`El semáforo está en: ${estado}`); 

        estado = (estado === "rojo") ? "amarillo" :
                 (estado === "amarillo") ? "verde" :
                 "rojo";

        console.log(`El semáforo está en: ${estado}`);
    }
}



// Iniciar el intervalo inicialmente
setInterval(cambiarSemaforo, 2000);

}
