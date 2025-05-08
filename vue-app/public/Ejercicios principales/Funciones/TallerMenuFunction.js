// Ternarias 
function verificarCafeConLeche() {
    let café = "Leche";
    café == "Leche" ? console.log("Es café con leche") : console.log("No es café con leche");
}

function verificarTemperaturaCafe() {
    let TemperaturaCafé = 40;
    TemperaturaCafé >= 30 ? console.log("El café está caliente") : console.log("El café está frio");
}

function verificarCremaCafe() {
    let CremaCafe = true;
    let TipoCrema = "Whiskey";
    let mensajito = CremaCafe = true ? "El café tiene una crema de " + TipoCrema : "No tiene crema";
    console.log(mensajito);
}

function verificarIdentificacion() {
    const id = 1122518916;
    const nombreId = "Juan Sebastián Uribe Lesmes";
    id === 1122518916 && nombreId == "Juan Sebastián Uribe Lesmes" ? 
        console.log("Señor usuario identificado con el id " + id + " , bienvenido al sistema") : 
        console.log("Al parecer el id registrado no concuerda con el nombre dado.");
}

function determinarColorCafe() {
    let ColorCafé = "Negro";
    ColorCafé == "Pintadito" ? 
        console.log("El color del café es " + ColorCafé + " , Seguramente tendrá un sabor dulce.") : 
        ColorCafé == "Tostado" ? 
            console.log("El color del café es " + ColorCafé + " , Seguramente tendrá un sabor suave.") : 
            ColorCafé == "Negro" ? 
                console.log("El color del café es " + ColorCafé + " ,Seguramente tendrá un sabor amargo.") : 
                console.log("Ese color es " + ColorCafé + " , ¿Está seguro de estar tomando café?");
}

// Decisiones 
function verificarEscalaPH(GradosPh) {
    if (GradosPh >= 8) {
        console.log("Esta sustancia es básica, cuenta con " + GradosPh + " grados en la escala de PH");
    }
}

function determinarAtencionPaciente(afeccionesPaciente) {
    if (afeccionesPaciente == "Dolor simple") {
        console.log("El paciente será atendido en una consulta general, no requiere atención especializada por ser un " + afeccionesPaciente);
    }
    else if (afeccionesPaciente == "Perdida del conocimiento con tiempo prolongado") {
        console.log("El paciente será atendido por los paramedicos para luego ser revisado debido a su" + afeccionesPaciente);
    }
    else if (afeccionesPaciente == "Heridas graves") {
        console.log("El paciente será atendido por los paramedicos para luego ser atendido en urgencias debido a sus " + afeccionesPaciente);
    }
    else {
        console.log("El paciente no muestra ninguna afección que deba ser revisada");
    }
}

function verificarRegistroAnimal(idAnimalBd, nombreAnimal, animalIngresado, nombreAnimalngresado) {
    if (idAnimalBd == animalIngresado && nombreAnimal == nombreAnimalngresado) {
        console.log("El animal " + nombreAnimal + " con id " + idAnimalBd + " existe en los registros de la base de datos.");
    }
    else {
        console.log("El animal " + nombreAnimalngresado + " con id " + idAnimalBd + " No existe en los registros de la base de datos");
    }
}

function determinarTipoCafe(caféConLeche, caféNegro, caféConCrema, caféConHielo) {
    if (caféConLeche == true) {
        console.log("El café tiene leche");
    }
    else if (caféNegro == true) {
        console.log("El café es negro");
    }
    else if (caféConCrema == true) {
        console.log("El café tiene crema");
    }
    else if (caféConHielo == true) {
        console.log("El café tiene hielo");
    }
    else {
        console.log("El café no tiene ninguna de las opciones anteriores");
    }
}

function verificarVoltajeDispositivo(encendido, voltaje) {
    if (encendido) {    
        if (voltaje >= 500) {
            console.log("El dispositivo cuenta con demasiado voltaje, cuenta con un voltaje de " + voltaje + " Energía que parece ser excesiva");
        }
        else if (voltaje >= 220) {
            console.log("El dispositivo está encendido y está funcionando con un voltaje de " + voltaje + " Energía que parece ser suficiente");
        }
        else if (voltaje > 0 ) {
            console.log("El dispositivo está encendido pero no está funcionando con un voltaje de " + voltaje + " Energía que parece ser insuficiente");
        }
        else {
            console.log("El dispositivo no cuenta con voltaje ");
        }
    }
    else {
        console.log("El dispositivo no está encendido");
    }
}

function determinarSaborBebida(bebida, sabor) {
    if (bebida == "Café Negro") {
        console.log("El sabor de la bebbida es " + sabor);
    }
}


function mostrarMenuTernarias() {
    let ternariaOpcion;
    while(ternariaOpcion !== "6") {
        ternariaOpcion = prompt("Escriba un número para elegir ejercicio con ternarias:\n1. Café con leche\n2. Temperatura café\n3. Crema de café\n4. Verificación ID\n5. Color del café\n6. Volver");
        
        switch(ternariaOpcion) {
            case "1": verificarCafeConLeche(); break;
            case "2": verificarTemperaturaCafe(); break;
            case "3": verificarCremaCafe(); break;
            case "4": verificarIdentificacion(); break;
            case "5": determinarColorCafe(); break;
            case "6": console.log("Volviendo al menú principal..."); break;
            default: alert("Opción no válida");
        }
    }
}

function mostrarMenuDecisiones() {
    let decisionOpcion;
    while(decisionOpcion !== "7") {
        decisionOpcion = prompt("Escriba un número para elegir ejercicio con decisiones:\n1. Escala PH\n2. Atención paciente\n3. Registro animal\n4. Tipo de café\n5. Voltaje dispositivo\n6. Sabor bebida\n7. Volver");
        
        switch(decisionOpcion) {
            case "1": verificarEscalaPH(12); break;
            case "2": determinarAtencionPaciente("Dolor simple"); break;
            case "3": verificarRegistroAnimal(1234567890, "Max", "1234567890", "Max"); break;
            case "4": determinarTipoCafe(true, false, false, false); break;
            case "5": verificarVoltajeDispositivo(true, 500); break;
            case "6": determinarSaborBebida("Café Negro", "Amargo"); break;
            case "7": console.log("Volviendo al menú principal..."); break;
            default: alert("Opción no válida");
        }
    }
}


let opcion;
while(opcion !== 3) {
    opcion = prompt("Escriba un número para elegir:\n1. Ejercicios con ternarias\n2. Ejercicios con decisiones\n3. Salir");

    switch(opcion) {
        case "1": mostrarMenuTernarias(); break;
        case "2": mostrarMenuDecisiones(); break;
        case "3": 
            opcion = 3;
            alert("Saliendo del menú...");
            break;
        default:
            alert("Opción no válida, por favor seleccione 1, 2 o 3");
    }
}
